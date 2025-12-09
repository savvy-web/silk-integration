/**
 * Wistful Wheat Wanderer
 *
 * A routing system for wheat-based vegan products that have drifted
 * far from their amber waves of grain, now scattered across galaxies.
 */

export interface WheatWanderer {
	glutenContent: "high" | "low" | "none";
	currentQuadrant: string;
	lastSeenHarvest: Date;
	poeticMusings: string[];
}

export interface WanderingRoute {
	waypoints: string[];
	totalLightyears: number;
	melancholyIndex: number;
}

export function plotWistfulRoute(wanderer: WheatWanderer): WanderingRoute {
	const waypoints = [
		"Nebula of Nostalgia",
		"Asteroid Belt of Bygone Breakfasts",
		"Moon of Mournful Mornings",
		wanderer.currentQuadrant,
	];

	return {
		waypoints,
		totalLightyears: Math.random() * 1000,
		melancholyIndex: wanderer.poeticMusings.length * 0.7,
	};
}

export function composeWheatElegy(wanderer: WheatWanderer): string {
	return `Once I was golden, standing tall in fields of ${wanderer.currentQuadrant}...`;
}
