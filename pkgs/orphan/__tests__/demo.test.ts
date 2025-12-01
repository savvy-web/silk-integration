import { describe, expect, it } from "vitest";
import { hello } from "../src/index.js";

describe("@savvy-web/orphan-package", () => {
	it("should pass this demo test", () => {
		expect(hello()).toBe("Hello, from the orphan package!");
	});
});
