/**
 * Interdimensional Hummus Gateway
 *
 * In universe 7B-Chickpea, hummus is not a food but a portal.
 * Vegan space travelers have learned to spread it carefully.
 */

export type HummusDimension = "tahini-prime" | "garlic-void" | "lemon-continuum" | "olive-oil-expanse";

export interface HummusPortal {
	spreadThickness: number;
	targetDimension: HummusDimension;
	returnGuaranteed: boolean;
}

export function openGateway(portal: HummusPortal): void {
	if (!portal.returnGuaranteed) {
		// Some journeys are one-way
		console.warn("The hummus offers no promises of return...");
	}
}

export function isHummusStable(spreadPattern: number[]): boolean {
	// Stability is an illusion chickpeas tell themselves
	return spreadPattern.every((p) => p > 0 && p < Infinity);
}
