import { readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { createExportableManifest } from "@pnpm/exportable-manifest";
import type { RsbuildPlugin, RsbuildPluginAPI } from "@rsbuild/core";
import type { PackageJson } from "type-fest";

/**
 * Options for the TestBuildPlugin.
 * @public
 */
export interface TestBuildPluginOptions {
	/**
	 * The environment mode - "dev" or "npm".
	 * When "npm", workspace: and catalog: protocols are resolved to actual versions.
	 */
	envMode?: "dev" | "npm";
}

/**
 * Build plugin to manage the files array in package.json.
 * Copies README.md, package.json, and LICENSE to the build output
 * and adds all build assets to the files array.
 * @public
 */
export const TestBuildPlugin = (options: TestBuildPluginOptions = {}): RsbuildPlugin => {
	const { envMode = "dev" } = options;
	return {
		name: "files-array-plugin",
		post: ["rsbuild:dts"],
		setup(api: RsbuildPluginAPI): void {
			let filesArray = api.useExposed("files-array") as Set<string> | undefined;
			if (!filesArray) {
				filesArray = new Set<string>();
				api.expose("files-array", filesArray);
			}

			// Stage 1: Copy essential files and collect all assets
			api.processAssets({ stage: "additional" }, async (context) => {
				const essentialFiles = ["package.json", "README.md", "LICENSE"];

				for (const fileName of essentialFiles) {
					// Check if already in compilation assets
					if (context.assets[fileName]) {
						filesArray.add(fileName);
						continue;
					}

					// Try to load from filesystem
					try {
						const filePath = join(process.cwd(), fileName);
						const content = await readFile(filePath, "utf-8");
						const source = new context.sources.RawSource(content);
						context.compilation.emitAsset(fileName, source);
						filesArray.add(fileName);
					} catch (err) {
						console.error(err);
						// File doesn't exist, skip silently
					}
				}

				// Add all compiled assets (excluding source maps)
				for (const assetName of Object.keys(context.compilation.assets)) {
					if (!assetName.endsWith(".map") && !filesArray.has(assetName)) {
						filesArray.add(assetName);
					}
				}
			});

			// Stage 2: Update package.json with the files array (runs during compilation)
			api.processAssets({ stage: "optimize-inline" }, async (context) => {
				const pkgAsset = context.assets["package.json"];
				if (!pkgAsset) return;

				const pkgContent = pkgAsset.source().toString();
				let pkg: PackageJson = JSON.parse(pkgContent);

				// For npm builds, resolve workspace: and catalog: protocols to actual versions
				if (envMode === "npm") {
					const cwd = process.cwd();
					// createExportableManifest resolves workspace: and catalog: protocols
					// biome-ignore lint/suspicious/noExplicitAny: pnpm types differ from type-fest
					pkg = (await createExportableManifest(cwd, pkg as any, {
						catalogs: {},
						modulesDir: join(cwd, "node_modules"),
					})) as PackageJson;
				}

				// Merge existing files with new files (DTS files added later in onAfterBuild)
				const existingFiles = new Set(pkg.files || []);
				const allFiles = new Set([...existingFiles, ...filesArray]);

				if (allFiles.size > 0) {
					pkg.files = Array.from(allFiles).sort();
				} else {
					delete pkg.files;
				}

				pkg.exports = {
					".": {
						types: "./index.d.ts",
						import: "./index.js",
					},
				};

				delete pkg.scripts;

				if (pkg.private === true) {
					if (pkg?.publishConfig?.access === "public") {
						delete pkg.private;
					}
				}

				delete pkg.publishConfig;

				delete pkg.devDependencies;

				const updatedSource = new context.sources.RawSource(JSON.stringify(pkg, null, "\t"));
				context.compilation.updateAsset("package.json", updatedSource);
			});

			// Phase 3: After build completes (including DTS generation), update package.json with .d.ts files
			api.onAfterBuild(async ({ environments }) => {
				for (const env of Object.values(environments)) {
					const outputPath = env.config.output?.distPath?.root;
					if (!outputPath) continue;

					try {
						// Find all .d.ts files in the output directory
						const files = await readdir(outputPath);
						const dtsFiles = files.filter((f) => f.endsWith(".d.ts") || f.endsWith(".d.ts.map"));

						if (dtsFiles.length === 0) continue;

						// Read the package.json from the output directory
						const pkgPath = join(outputPath, "package.json");
						const pkgContent = await readFile(pkgPath, "utf-8");
						const pkg: PackageJson = JSON.parse(pkgContent);

						// Add DTS files to the files array
						const existingFiles = new Set(pkg.files || []);
						for (const dtsFile of dtsFiles) {
							existingFiles.add(dtsFile);
						}

						pkg.files = Array.from(existingFiles).sort();

						// Write updated package.json back to disk
						await writeFile(pkgPath, JSON.stringify(pkg, null, "\t"));
					} catch (err) {
						console.error("Failed to update package.json with DTS files:", err);
					}
				}
			});
		},
	};
};
