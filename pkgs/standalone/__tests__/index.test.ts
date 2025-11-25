import { describe, expect, it } from "vitest";
import { getFromDependency, hello } from "../src/index.js";

describe("@savvy-web/standalone-package", () => {
	it("should return hello message", () => {
		expect(hello()).toBe("Hello, from the standalone package!");
	});

	it("should return value from dependency", () => {
		expect(getFromDependency()).toBe("shared-value-from-dependency - DEPENDENCY_CONSTANT");
	});
});
