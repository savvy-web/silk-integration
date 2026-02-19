import { describe, expect, it } from "vitest";
import { getFixedOneValue } from "../src/index.js";

describe("@savvy-web/fixed-1", () => {
	it("should return the fixed-1 value", () => {
		expect(getFixedOneValue()).toBe("value-from-fixed-1");
	});
});
