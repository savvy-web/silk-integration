/**
 * Audio calibration utilities for optimal duck sound quality
 */

import type { VolumeConfig } from "./volume-normalizer.js";

export interface AudioEnvironment {
	roomSize: "small" | "medium" | "large";
	acoustics: "dry" | "neutral" | "reverberant";
	ambientNoise: number;
}

/**
 * Calibrates volume settings based on audio environment
 */
export function calibrateForEnvironment(env: AudioEnvironment, baseConfig: VolumeConfig): VolumeConfig {
	const adjustment = calculateEnvironmentAdjustment(env);
	return {
		...baseConfig,
		targetDecibels: baseConfig.targetDecibels + adjustment,
	};
}

function calculateEnvironmentAdjustment(env: AudioEnvironment): number {
	let adjustment = 0;

	// Adjust for room size
	if (env.roomSize === "large") adjustment += 3;
	if (env.roomSize === "small") adjustment -= 2;

	// Adjust for acoustics
	if (env.acoustics === "reverberant") adjustment -= 4;
	if (env.acoustics === "dry") adjustment += 2;

	// Adjust for ambient noise
	adjustment += Math.min(5, env.ambientNoise / 10);

	return adjustment;
}
