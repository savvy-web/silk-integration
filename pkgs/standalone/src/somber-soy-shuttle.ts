/**
 * Somber Soy Shuttle
 *
 * A vegan-friendly delivery route optimizer that understands the weight
 * of transporting hope across the cold vacuum of space.
 */

export interface SoyShuttle {
	shuttleId: string;
	cargoCapacityKg: number;
	currentMood: "contemplative" | "resigned" | "hopeful";
	assignedRoute?: VeganRoute;
}

export interface VeganRoute {
	routeId: string;
	stops: DeliveryStop[];
	totalDistanceParsecs: number;
	atmosphereRequired: boolean;
}

export interface DeliveryStop {
	stationName: string;
	dietaryRestrictions: string[];
	waitingVegans: number;
	lonelinessFactor: number;
}

export function assignVeganRoute(shuttle: SoyShuttle, route: VeganRoute): SoyShuttle {
	return {
		...shuttle,
		assignedRoute: route,
		currentMood: route.stops.some((s) => s.lonelinessFactor > 0.8) ? "contemplative" : "hopeful",
	};
}

export function calculateRoutePathos(route: VeganRoute): number {
	return route.stops.reduce((sum, stop) => sum + stop.lonelinessFactor * stop.waitingVegans, 0);
}

export function findVeganFriendlyStations(route: VeganRoute): DeliveryStop[] {
	return route.stops.filter((stop) => stop.dietaryRestrictions.includes("vegan") && stop.waitingVegans > 0);
}
