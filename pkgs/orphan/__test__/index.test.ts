import { describe, expect, it } from "vitest";
import { hello } from "../src/index.js";

describe("@savvy-web/orphan-package", () => {
	it("should return hello message", () => {
		expect(hello()).toBe("Hello, from the orphan package!");
	});
});
