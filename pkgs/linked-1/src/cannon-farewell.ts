/**
 * Cannon Farewell Ceremony
 *
 * A final tribute to the cannon that launched a thousand acts.
 * May its spirit live on in the springs that follow.
 */

export interface CannonMemorial {
	/** Name of the decommissioned cannon */
	cannonName: string;
	/** Years of faithful service */
	yearsOfService: number;
	/** Notable performers it launched */
	notablePerformers: string[];
	/** Final words of remembrance */
	epitaph: string;
}

export const GRAND_CANNON_MEMORIAL: CannonMemorial = {
	cannonName: "The Magnificent Blaster",
	yearsOfService: 47,
	notablePerformers: [
		"Zephyrina the Fearless",
		"Baron von Bounce",
		"The Flying Piccolini Twins",
	],
	epitaph:
		"It launched us toward our dreams, asking only for gunpowder in return.",
};

export function composeFarewellMessage(memorial: CannonMemorial): string {
	return `
    🎪 IN MEMORIAM 🎪

    ${memorial.cannonName}
    ${memorial.yearsOfService} years of service

    Notable launches: ${memorial.notablePerformers.join(", ")}

    "${memorial.epitaph}"

    Rest now, old friend. The springs will carry on your legacy.
  `.trim();
}

export function ceremonialLastFiring(): void {
	// One final, imaginary blast—a salute to what was
	console.log("💨 *symbolic cannon boom*");
	console.log("The era of gunpowder ends. The age of springs begins.");
}
