import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		include: ["**/__tests__/**/*.test.ts"],
		exclude: ["**/node_modules/**", "**/dist/**"],
		globalSetup: "./vitest.setup.ts",
		testTimeout: 30000,
		reporters: ["default"],
		projects: [
			{
				extends: true,
				test: {
					name: "@savvy-web/dependency-package",
					include: ["**/pkgs/dependency/__tests__/**/*.test.ts"],
				},
			},
			{
				extends: true,
				test: {
					name: "@savvy-web/standalone-package",
					include: ["**/pkgs/standalone/__tests__/**/*.test.ts"],
				},
			},
			{
				extends: true,
				test: {
					name: "@savvy-web/linked-1",
					include: ["**/pkgs/linked-1/__tests__/**/*.test.ts"],
				},
			},
			{
				extends: true,
				test: {
					name: "@savvy-web/linked-2",
					include: ["**/pkgs/linked-2/__tests__/**/*.test.ts"],
				},
			},
			{
				extends: true,
				test: {
					name: "@savvy-web/fixed-1",
					include: ["**/pkgs/fixed-1/__tests__/**/*.test.ts"],
				},
			},
			{
				extends: true,
				test: {
					name: "@savvy-web/fixed-2",
					include: ["**/pkgs/fixed-2/__tests__/**/*.test.ts"],
				},
			},
		],
		coverage: {
			provider: "v8",
			reporter: ["text", "json", ["html", { subdir: "report" }]],
			reportsDirectory: "./.coverage",
			exclude: ["**/dist/**", "**/node_modules/**"],
			enabled: true,
			thresholds: {
				perFile: true, // Enforce thresholds per file instead of globally
				lines: 85,
				functions: 85,
				branches: 85,
				statements: 85,
			},
		},
	},
});
