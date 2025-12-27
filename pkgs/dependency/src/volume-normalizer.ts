/**
 * Volume normalization for cross-platform quack consistency
 * Ensures harmonious duck sounds across all audio environments
 */

export interface VolumeConfig {
	targetDecibels: number;
	platform: "macos" | "windows" | "linux" | "browser";
	autoAdjust: boolean;
}

export const defaultVolumeConfig: VolumeConfig = {
	targetDecibels: 65,
	platform: "browser",
	autoAdjust: true,
};

/**
 * Normalizes quack volume to ensure consistent auditory experience
 */
export function normalizeQuackVolume(rawVolume: number, config: VolumeConfig = defaultVolumeConfig): number {
	// Placeholder implementation for integration testing
	const platformMultiplier = getPlatformMultiplier(config.platform);
	return Math.min(100, rawVolume * platformMultiplier);
}

function getPlatformMultiplier(platform: VolumeConfig["platform"]): number {
	const multipliers = {
		macos: 0.9,
		windows: 1.1,
		linux: 1.0,
		browser: 0.95,
	};
	return multipliers[platform];
}
