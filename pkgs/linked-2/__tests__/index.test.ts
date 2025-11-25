import { describe, expect, it } from "vitest";
import { getLinkedTwoValue, getLinkedTwoWithDependency } from "../src/index.js";

describe("@savvy-web/linked-2", () => {
	it("should return the linked-2 value", () => {
		expect(getLinkedTwoValue()).toBe("value-from-linked-2");
	});

	it("should return value with dependency", () => {
		expect(getLinkedTwoWithDependency()).toBe("linked-2: shared-value-from-dependency - DEPENDENCY_CONSTANT");
	});
});
