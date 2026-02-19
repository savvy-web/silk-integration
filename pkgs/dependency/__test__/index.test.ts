import { describe, expect, it } from "vitest";
import { SHARED_CONSTANT, getSharedValue } from "../src/index.js";

describe("@savvy-web/dependency-package", () => {
	it("should return the shared value", () => {
		expect(getSharedValue()).toBe("shared-value-from-dependency");
	});

	it("should export the shared constant", () => {
		expect(SHARED_CONSTANT).toBe("DEPENDENCY_CONSTANT");
	});
});
