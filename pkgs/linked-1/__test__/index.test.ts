import { describe, expect, it } from "vitest";
import { getLinkedOneValue } from "../src/index.js";

describe("@savvy-web/linked-1", () => {
	it("should return the linked-1 value", () => {
		expect(getLinkedOneValue()).toBe("value-from-linked-1");
	});
});
