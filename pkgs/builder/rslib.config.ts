import type { RslibConfigAsyncFn } from "@rslib/core";
import { defineConfig } from "@rslib/core";
import { TestBuildPlugin } from "./src/index.js";

const config: RslibConfigAsyncFn = async ({ envMode }) => {
	const distPath = "./dist/dev";
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
		},
	};
};

export default defineConfig(config);
