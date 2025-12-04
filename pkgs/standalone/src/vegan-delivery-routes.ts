/**
 * Vegan-Friendly Delivery Routes
 *
 * Routes that have been verified to be free from cross-contamination.
 * We check EVERYTHING. Multiple times. Just to be sure.
 *
 * What if a route becomes contaminated mid-delivery?!
 * What if the delivery pod previously carried meat products?!
 * These are the questions that haunt us.
 */

import type { VeganSnack } from "./vegan-snack-types.js";

/** Contamination risk levels - because we need to quantify our anxiety */
export type ContaminationRisk = "none" | "minimal" | "low" | "moderate" | "high" | "unknown";

/** Route verification status */
export interface RouteVerification {
	readonly verifiedAt: Date;
	readonly verifiedBy: string;
	readonly nextVerificationDue: Date;
	readonly contaminationRisk: ContaminationRisk;
	readonly notes: string[];
}

/** A delivery route with extensive safety checks */
export interface VeganDeliveryRoute {
	readonly id: string;
	readonly name: string;
	readonly startStation: string;
	readonly endStation: string;
	readonly waypoints: string[];

	// Safety information
	readonly verification: RouteVerification;
	readonly lastCleanedAt: Date;
	readonly cleaningProtocol: "standard" | "enhanced" | "sterile";

	// Pod requirements
	readonly requiresDedicatedPod: boolean;
	readonly podSanitizationRequired: boolean;

	// Timing
	readonly estimatedMinutes: number;
	readonly bufferMinutes: number; // Extra time just in case!
}

/**
 * Route safety assessment result
 * We need to know EXACTLY how safe each route is
 */
export interface RouteSafetyAssessment {
	readonly routeId: string;
	readonly isSafeForVegan: boolean;
	readonly riskLevel: ContaminationRisk;
	readonly concerns: string[];
	readonly recommendations: string[];
	readonly assessedAt: Date;
}

export class VeganDeliveryRouteManager {
	private readonly routes: Map<string, VeganDeliveryRoute> = new Map();
	private readonly safetyMarginMinutes = 15; // Extra buffer, you never know!

	/**
	 * Add a route to our carefully curated collection.
	 * We validate it first, of course.
	 */
	addRoute(route: VeganDeliveryRoute): void {
		// Validate before adding
		const assessment = this.assessRouteSafety(route);
		if (!assessment.isSafeForVegan) {
			throw new Error(`Route ${route.id} failed safety assessment: ${assessment.concerns.join(", ")}`);
		}

		this.routes.set(route.id, route);
	}

	/**
	 * Find a safe route for a vegan snack delivery.
	 * We're very picky. Very, very picky.
	 */
	findSafeRoute(snack: VeganSnack, startStation: string, endStation: string): VeganDeliveryRoute | null {
		for (const route of this.routes.values()) {
			if (route.startStation !== startStation || route.endStation !== endStation) {
				continue;
			}

			const assessment = this.assessRouteSafety(route);
			if (!assessment.isSafeForVegan) {
				continue; // Skip unsafe routes!
			}

			// Check if timing works with snack temperature requirements
			const totalTime = route.estimatedMinutes + route.bufferMinutes + this.safetyMarginMinutes;
			if (totalTime > snack.temperature.toleranceMinutes) {
				continue; // Too risky!
			}

			return route;
		}

		return null; // No safe route found... this is concerning!
	}

	/**
	 * Assess the safety of a route. We check EVERYTHING.
	 */
	assessRouteSafety(route: VeganDeliveryRoute): RouteSafetyAssessment {
		const concerns: string[] = [];
		const recommendations: string[] = [];

		// Check verification freshness
		const daysSinceVerification = Math.floor(
			(Date.now() - route.verification.verifiedAt.getTime()) / (1000 * 60 * 60 * 24),
		);

		if (daysSinceVerification > 7) {
			concerns.push(`Route not verified in ${daysSinceVerification} days!`);
			recommendations.push("Schedule immediate re-verification");
		}

		// Check cleaning
		const hoursSinceCleaning = Math.floor((Date.now() - route.lastCleanedAt.getTime()) / (1000 * 60 * 60));

		if (hoursSinceCleaning > 24) {
			concerns.push(`Pod cleaned ${hoursSinceCleaning} hours ago - is that recent enough?`);
			recommendations.push("Consider re-cleaning before vegan delivery");
		}

		// Check contamination risk
		if (route.verification.contaminationRisk === "unknown") {
			concerns.push("Contamination risk is UNKNOWN - this is very concerning!");
			recommendations.push("Perform full contamination assessment immediately");
		} else if (route.verification.contaminationRisk === "moderate" || route.verification.contaminationRisk === "high") {
			concerns.push(`Contamination risk is ${route.verification.contaminationRisk}!`);
			recommendations.push("Do not use for vegan deliveries");
		}

		// Check if dedicated pod is required but not specified
		if (!route.requiresDedicatedPod) {
			concerns.push("Route does not require dedicated pod - cross-contamination possible!");
			recommendations.push("Consider using dedicated vegan pods");
		}

		const isSafe = concerns.length === 0 || route.verification.contaminationRisk === "none";

		return {
			routeId: route.id,
			isSafeForVegan: isSafe,
			riskLevel: route.verification.contaminationRisk,
			concerns,
			recommendations,
			assessedAt: new Date(),
		};
	}
}
