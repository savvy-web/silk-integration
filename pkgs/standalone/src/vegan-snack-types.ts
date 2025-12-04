/**
 * Vegan Snack Type Definitions
 *
 * Comprehensive type definitions for vegan space snacks.
 * We've included every possible field we could think of...
 * just in case. Better safe than sorry, right?
 *
 * TODO: Are we missing any allergens? Should we add more?
 * TODO: What about cross-contamination tracking?
 * TODO: Should we validate these at runtime too?
 */

/** All known vegan certification bodies - did we miss any?! */
export type VeganCertification =
	| "vegan-society"
	| "certified-vegan"
	| "vegan-action"
	| "eve-vegan"
	| "v-label"
	| "unknown"; // What if there's a new one we haven't heard of?!

/** Allergen information - this list keeps me up at night */
export interface AllergenInfo {
	readonly containsNuts: boolean;
	readonly containsSoy: boolean;
	readonly containsGluten: boolean;
	readonly containsSesame: boolean;
	readonly mayContainTraces: string[]; // What if we forget one?!
	readonly processedInFacilityWith: string[];
	readonly lastUpdated: Date; // Allergen info could change!
}

/** Temperature requirements - space is cold but snacks shouldn't be... unless they should? */
export interface TemperatureRequirements {
	readonly minCelsius: number;
	readonly maxCelsius: number;
	readonly optimalCelsius: number;
	readonly toleranceMinutes: number; // How long before it's unsafe?!
}

/**
 * A vegan space snack with ALL the metadata we could think of.
 * Probably too many fields but what if we need them later?
 */
export interface VeganSnack {
	readonly id: string;
	readonly name: string;
	readonly description: string;

	// Certifications - very important!
	readonly certifications: VeganCertification[];
	readonly certificationExpiry?: Date; // They expire?! We should track that!

	// Allergens - CRITICAL
	readonly allergens: AllergenInfo;

	// Nutritional info (optional but... should it be required?!)
	readonly calories?: number;
	readonly proteinGrams?: number;
	readonly fiberGrams?: number;

	// Storage requirements
	readonly temperature: TemperatureRequirements;
	readonly shelfLifeDays: number;
	readonly requiresRefrigeration: boolean;

	// Packaging
	readonly packagingMaterial: "biodegradable" | "recyclable" | "compostable";
	readonly isVacuumSealed: boolean;

	// Metadata
	readonly createdAt: Date;
	readonly updatedAt: Date;
	readonly validatedBy?: string; // Who checked this?!
}

/**
 * Validation result - we NEED to know if something is wrong!
 */
export interface VeganValidationResult {
	readonly isValid: boolean;
	readonly warnings: string[];
	readonly errors: string[];
	readonly checkedAt: Date;
}

/**
 * Validates that a snack is truly vegan.
 * We check everything. EVERYTHING.
 */
export function validateVeganSnack(snack: VeganSnack): VeganValidationResult {
	const warnings: string[] = [];
	const errors: string[] = [];

	// Check certifications
	if (snack.certifications.length === 0) {
		errors.push("No vegan certifications! How do we know it's really vegan?!");
	}

	if (snack.certifications.includes("unknown")) {
		warnings.push("Unknown certification detected - please verify manually!");
	}

	// Check allergen info freshness
	const daysSinceUpdate = Math.floor((Date.now() - snack.allergens.lastUpdated.getTime()) / (1000 * 60 * 60 * 24));
	if (daysSinceUpdate > 30) {
		warnings.push(`Allergen info is ${daysSinceUpdate} days old - should we update it?`);
	}

	// Check temperature tolerance
	if (snack.temperature.toleranceMinutes < 30) {
		warnings.push("Very low temperature tolerance - delivery timing is CRITICAL!");
	}

	// Check shelf life
	if (snack.shelfLifeDays < 7) {
		warnings.push("Short shelf life - what if there are delivery delays?!");
	}

	// Check certification expiry
	if (snack.certificationExpiry) {
		const daysUntilExpiry = Math.floor((snack.certificationExpiry.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
		if (daysUntilExpiry < 30) {
			warnings.push(`Certification expires in ${daysUntilExpiry} days!`);
		}
		if (daysUntilExpiry < 0) {
			errors.push("CERTIFICATION HAS EXPIRED!");
		}
	}

	return {
		isValid: errors.length === 0,
		warnings,
		errors,
		checkedAt: new Date(),
	};
}
