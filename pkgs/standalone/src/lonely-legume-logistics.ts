/**
 * Lonely Legume Logistics
 *
 * Handles the solitary journey of legumes through the vast, indifferent cosmos.
 * Each bean travels alone, carrying memories of the soil it left behind.
 */

export interface LoneLegume {
	id: string;
	species: "chickpea" | "lentil" | "blackbean" | "pinto";
	originPlanet: string;
	yearsSinceHarvest: number;
	missesHome: boolean;
}

export interface LegumeShipment {
	legumes: LoneLegume[];
	destinationSector: string;
	estimatedArrivalEpoch: number;
	consolationMessage?: string;
}

export function packageLonelyLegumes(legumes: LoneLegume[]): LegumeShipment {
	return {
		legumes,
		destinationSector: "unknown",
		estimatedArrivalEpoch: Date.now() + 86400000,
		consolationMessage: "You are not forgotten, little legumes.",
	};
}

export function countHomesickLegumes(shipment: LegumeShipment): number {
	return shipment.legumes.filter((l) => l.missesHome).length;
}
