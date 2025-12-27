import { describe, expect, it } from "vitest";
import { calibrateForEnvironment } from "../src/audio-calibration.js";
import { defaultVolumeConfig } from "../src/volume-normalizer.js";

describe("audio-calibration", () => {
	describe("calibrateForEnvironment", () => {
		it("should adjust for small room size", () => {
			const result = calibrateForEnvironment(
				{
					roomSize: "small",
					acoustics: "neutral",
					ambientNoise: 0,
				},
				defaultVolumeConfig,
			);
			expect(result.targetDecibels).toBe(63); // 65 - 2
		});

		it("should adjust for medium room size", () => {
			const result = calibrateForEnvironment(
				{
					roomSize: "medium",
					acoustics: "neutral",
					ambientNoise: 0,
				},
				defaultVolumeConfig,
			);
			expect(result.targetDecibels).toBe(65); // 65 + 0
		});

		it("should adjust for large room size", () => {
			const result = calibrateForEnvironment(
				{
					roomSize: "large",
					acoustics: "neutral",
					ambientNoise: 0,
				},
				defaultVolumeConfig,
			);
			expect(result.targetDecibels).toBe(68); // 65 + 3
		});

		it("should adjust for dry acoustics", () => {
			const result = calibrateForEnvironment(
				{
					roomSize: "medium",
					acoustics: "dry",
					ambientNoise: 0,
				},
				defaultVolumeConfig,
			);
			expect(result.targetDecibels).toBe(67); // 65 + 2
		});

		it("should adjust for reverberant acoustics", () => {
			const result = calibrateForEnvironment(
				{
					roomSize: "medium",
					acoustics: "reverberant",
					ambientNoise: 0,
				},
				defaultVolumeConfig,
			);
			expect(result.targetDecibels).toBe(61); // 65 - 4
		});

		it("should adjust for ambient noise", () => {
			const result = calibrateForEnvironment(
				{
					roomSize: "medium",
					acoustics: "neutral",
					ambientNoise: 30,
				},
				defaultVolumeConfig,
			);
			expect(result.targetDecibels).toBe(68); // 65 + 3 (30/10)
		});

		it("should cap ambient noise adjustment at 5", () => {
			const result = calibrateForEnvironment(
				{
					roomSize: "medium",
					acoustics: "neutral",
					ambientNoise: 100,
				},
				defaultVolumeConfig,
			);
			expect(result.targetDecibels).toBe(70); // 65 + 5 (capped)
		});

		it("should combine all adjustments", () => {
			const result = calibrateForEnvironment(
				{
					roomSize: "large",
					acoustics: "dry",
					ambientNoise: 20,
				},
				defaultVolumeConfig,
			);
			// large (+3) + dry (+2) + noise (2) = +7
			expect(result.targetDecibels).toBe(72);
		});

		it("should handle negative combined adjustments", () => {
			const result = calibrateForEnvironment(
				{
					roomSize: "small",
					acoustics: "reverberant",
					ambientNoise: 0,
				},
				defaultVolumeConfig,
			);
			// small (-2) + reverberant (-4) = -6
			expect(result.targetDecibels).toBe(59);
		});

		it("should preserve other config properties", () => {
			const result = calibrateForEnvironment(
				{
					roomSize: "medium",
					acoustics: "neutral",
					ambientNoise: 0,
				},
				defaultVolumeConfig,
			);
			expect(result.platform).toBe("browser");
			expect(result.autoAdjust).toBe(true);
		});
	});
});
