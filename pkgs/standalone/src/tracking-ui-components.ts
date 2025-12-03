/**
 * Snack Tracking UI Components
 *
 * Beautiful visual components to watch your snack travel through space!
 * Complete with animations, sparkles, and SO MUCH JOY!
 */

import type { GalacticCoordinates, SnackLocation } from "./galactic-gps-api.js";
import type { SnackEventType } from "./snack-tracking-events.js";

export interface TrackingMapProps {
	currentLocation: SnackLocation;
	destinationCoords: GalacticCoordinates;
	showStars?: boolean; // Always yes!
	showAsteroids?: boolean; // Fun obstacles!
	sparkleIntensity?: "low" | "medium" | "MAXIMUM"; // Default: MAXIMUM!
}

export interface ProgressBarProps {
	percentComplete: number;
	snackEmoji: string; // 🍕 🌮 🍔 🥗 🍜
	trailEffect?: "stardust" | "rainbow" | "rocket-flames";
}

/**
 * Calculate how far along the delivery is!
 * Returns a number between 0 and 100 representing pure EXCITEMENT!
 */
export function calculateDeliveryProgress(
	start: GalacticCoordinates,
	current: GalacticCoordinates,
	destination: GalacticCoordinates,
): number {
	// Placeholder: Real calculation would use actual galactic distances
	// For now, return a happy number that keeps going up!
	const totalDistance = Math.sqrt(
		(destination.rightAscension - start.rightAscension) ** 2 + (destination.declination - start.declination) ** 2,
	);

	const currentDistance = Math.sqrt(
		(current.rightAscension - start.rightAscension) ** 2 + (current.declination - start.declination) ** 2,
	);

	return Math.min(100, (currentDistance / totalDistance) * 100);
}

/**
 * Get the perfect emoji for each delivery stage!
 */
export function getStageEmoji(stage: SnackEventType): string {
	const emojis: Record<SnackEventType, string> = {
		"snack:prepared": "👨‍🍳",
		"snack:launched": "🚀",
		"snack:in-transit": "✨",
		"snack:approaching": "🎯",
		"snack:arrived": "🎉",
		"snack:enjoyed": "😋",
	};
	return emojis[stage];
}

/**
 * Generate a fun celebration message when delivery arrives!
 */
export function generateCelebrationMessage(snackName: string): string {
	const celebrations = [
		`YOUR ${snackName.toUpperCase()} HAS ARRIVED! 🎊🎉🎈`,
		`IT'S HERE! THE LEGENDARY ${snackName.toUpperCase()}! 🌟`,
		`DELIVERY COMPLETE! Enjoy your ${snackName}! 🎁`,
		`${snackName} has landed safely! Bon appetit! 🍽️`,
	];
	return celebrations[Math.floor(Math.random() * celebrations.length)] || celebrations[0] || "";
}
