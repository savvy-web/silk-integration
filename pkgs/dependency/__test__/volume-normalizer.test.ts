import { describe, expect, it } from "vitest";
import { defaultVolumeConfig, normalizeQuackVolume } from "../src/volume-normalizer.js";

describe("volume-normalizer", () => {
	describe("defaultVolumeConfig", () => {
		it("should have correct default values", () => {
			expect(defaultVolumeConfig).toEqual({
				targetDecibels: 65,
				platform: "browser",
				autoAdjust: true,
			});
		});
	});

	describe("normalizeQuackVolume", () => {
		it("should normalize volume for browser platform", () => {
			const result = normalizeQuackVolume(50, {
				...defaultVolumeConfig,
				platform: "browser",
			});
			expect(result).toBe(47.5); // 50 * 0.95
		});

		it("should normalize volume for macos platform", () => {
			const result = normalizeQuackVolume(50, {
				...defaultVolumeConfig,
				platform: "macos",
			});
			expect(result).toBe(45); // 50 * 0.9
		});

		it("should normalize volume for windows platform", () => {
			const result = normalizeQuackVolume(50, {
				...defaultVolumeConfig,
				platform: "windows",
			});
			expect(result).toBeCloseTo(55, 10); // 50 * 1.1
		});

		it("should normalize volume for linux platform", () => {
			const result = normalizeQuackVolume(50, {
				...defaultVolumeConfig,
				platform: "linux",
			});
			expect(result).toBe(50); // 50 * 1.0
		});

		it("should cap volume at 100", () => {
			const result = normalizeQuackVolume(95, {
				...defaultVolumeConfig,
				platform: "windows",
			});
			expect(result).toBe(100); // Should be capped at 100
		});

		it("should use default config when none provided", () => {
			const result = normalizeQuackVolume(50);
			expect(result).toBe(47.5); // Uses browser platform by default
		});

		it("should handle zero volume", () => {
			const result = normalizeQuackVolume(0);
			expect(result).toBe(0);
		});

		it("should handle maximum volume", () => {
			const result = normalizeQuackVolume(100, {
				...defaultVolumeConfig,
				platform: "macos",
			});
			expect(result).toBe(90); // 100 * 0.9
		});
	});
});
