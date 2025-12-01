import type { RslibConfigAsyncFn } from "@rslib/core";
import { defineConfig } from "@rslib/core";
import { TestBuildPlugin } from "@savvy-web/builder";

const config: RslibConfigAsyncFn = async ({ envMode }) => {
	let distPath = "./dist";
	if (envMode === "dev") {
		distPath = "./dist/dev";
	} else if (envMode === "npm") {
		distPath = "./dist/npm";
	}
	return {
		id: envMode,
		outBase: distPath,
		cleanDist: true,
		output: {
			target: "node",
			module: true,
			bundle: true,
			experiments: {
				advancedEsm: true,
			},
		},
		lib: [
			{
				id: envMode,
				format: "esm",
				output: {
					distPath,
				},
				dts: {
					distPath,
					tsgo: true,
					bundle: true,
				},
			},
		],
		plugins: [TestBuildPlugin({ envMode: envMode as "dev" | "npm" })],
		source: {
			entry: {
				index: "./src/index.ts",
			},
			tsconfigPath: "./tsconfig.json",
			exclude: ["**/__tests__/**", "**/lib/**"],
		},
	};
};

export default defineConfig(config);
