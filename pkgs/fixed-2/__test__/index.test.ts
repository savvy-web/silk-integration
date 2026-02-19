import { describe, expect, it } from "vitest";
import { getFixedTwoValue, getFixedTwoWithDependency } from "../src/index.js";

describe("@savvy-web/fixed-2", () => {
	it("should return the fixed-2 value", () => {
		expect(getFixedTwoValue()).toBe("value-from-fixed-2");
	});

	it("should return value with dependency", () => {
		expect(getFixedTwoWithDependency()).toBe("fixed-2: shared-value-from-dependency - DEPENDENCY_CONSTANT");
	});
});
