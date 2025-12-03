/**
 * Real-Time Snack Tracking WebSocket Events
 *
 * Live updates! Every second! Know EXACTLY where your cosmic burrito is!
 * This is like Uber Eats but for the ENTIRE UNIVERSE!
 */

import type { SnackLocation } from "./galactic-gps-api.js";

export type SnackEventType =
	| "snack:prepared" // Chef says it's ready!
	| "snack:launched" // Blast off!
	| "snack:in-transit" // Zooming through space!
	| "snack:approaching" // Almost there!
	| "snack:arrived" // SNACK TIME!
	| "snack:enjoyed"; // Yum yum yum!

export interface SnackTrackingEvent {
	type: SnackEventType;
	deliveryId: string;
	timestamp: Date;
	location: SnackLocation;
	message: string; // Friendly status message!
}

/**
 * Subscribe to live snack updates!
 * Never miss a moment of your delivery journey!
 */
export function createTrackingSubscription(
	deliveryId: string,
	onEvent: (event: SnackTrackingEvent) => void,
): { unsubscribe: () => void } {
	// Placeholder: Real implementation would open WebSocket connection
	const intervalId = setInterval(() => {
		onEvent({
			type: "snack:in-transit",
			deliveryId,
			timestamp: new Date(),
			location: {
				coordinates: {
					rightAscension: Math.random() * 360,
					declination: Math.random() * 180 - 90,
					distance: Math.random() * 10,
				},
				velocity: 0.8,
				heading: "Getting closer every second!",
				estimatedArrival: new Date(Date.now() + 180000),
				snackTemperature: "cosmically-warm",
			},
			message: "Your snack is happily zooming through the asteroid belt!",
		});
	}, 5000);

	return {
		unsubscribe: () => {
			clearInterval(intervalId);
			console.log("Goodbye! Thanks for tracking with us!");
		},
	};
}

/**
 * Get all the fun milestone messages for a delivery!
 */
export function getMilestoneMessages(eventType: SnackEventType): string {
	const messages: Record<SnackEventType, string> = {
		"snack:prepared": "Your snack is freshly made and looking DELICIOUS!",
		"snack:launched": "3... 2... 1... BLAST OFF! Your snack is on its way!",
		"snack:in-transit": "Zooming past stars and planets to reach you!",
		"snack:approaching": "Look up! Your snack is entering your sector!",
		"snack:arrived": "DING DONG! Your cosmic delivery has arrived!",
		"snack:enjoyed": "We hope you loved it! See you next time!",
	};
	return messages[eventType];
}
