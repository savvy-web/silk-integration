/**
 * Dietary Preference Filter
 *
 * Filters snacks based on dietary preferences with EXTREME caution.
 * We double-check, triple-check, and then check again.
 *
 * What if someone has an allergy we didn't account for?
 * What if a snack's ingredients changed since we last checked?
 * These possibilities keep us up at night.
 */

import type { AllergenInfo, VeganSnack } from "./vegan-snack-types.js";

/** All the dietary preferences we know about (but are we missing any?!) */
export type DietaryPreference =
	| "vegan"
	| "vegetarian"
	| "gluten-free"
	| "nut-free"
	| "soy-free"
	| "raw"
	| "whole-food"
	| "low-sodium"
	| "sugar-free";

/** User's complete dietary profile - we need ALL the information */
export interface DietaryProfile {
	readonly userId: string;
	readonly preferences: DietaryPreference[];
	readonly allergies: string[];
	readonly intolerances: string[];
	readonly avoidIngredients: string[];
	readonly lastUpdated: Date;
	readonly confirmedByUser: boolean; // Did they REALLY confirm this?!
}

/** Filter result with detailed explanations of why things were excluded */
export interface FilterResult {
	readonly matchingSnacks: VeganSnack[];
	readonly excludedSnacks: Array<{
		snack: VeganSnack;
		reasons: string[];
	}>;
	readonly warnings: string[];
	readonly filterAppliedAt: Date;
}

export class DietaryPreferenceFilter {
	/**
	 * Filter snacks based on dietary profile.
	 * We are EXTREMELY conservative - when in doubt, exclude!
	 */
	filter(snacks: VeganSnack[], profile: DietaryProfile): FilterResult {
		const matchingSnacks: VeganSnack[] = [];
		const excludedSnacks: Array<{ snack: VeganSnack; reasons: string[] }> = [];
		const warnings: string[] = [];

		// First, let's worry about whether the profile is up to date
		const daysSinceUpdate = Math.floor((Date.now() - profile.lastUpdated.getTime()) / (1000 * 60 * 60 * 24));

		if (daysSinceUpdate > 30) {
			warnings.push(`Dietary profile was last updated ${daysSinceUpdate} days ago - preferences may have changed!`);
		}

		if (!profile.confirmedByUser) {
			warnings.push("Dietary profile has not been confirmed by user - proceed with caution!");
		}

		for (const snack of snacks) {
			const exclusionReasons = this.checkSnackAgainstProfile(snack, profile);

			if (exclusionReasons.length === 0) {
				matchingSnacks.push(snack);
			} else {
				excludedSnacks.push({ snack, reasons: exclusionReasons });
			}
		}

		// Add warnings about potential issues
		if (matchingSnacks.length === 0) {
			warnings.push("No snacks match the dietary profile - is the profile too restrictive?");
		}

		if (excludedSnacks.length > matchingSnacks.length * 2) {
			warnings.push("Many snacks excluded - consider reviewing dietary restrictions");
		}

		return {
			matchingSnacks,
			excludedSnacks,
			warnings,
			filterAppliedAt: new Date(),
		};
	}

	/**
	 * Check a single snack against a dietary profile.
	 * Returns array of reasons why it should be excluded (empty if safe).
	 */
	private checkSnackAgainstProfile(snack: VeganSnack, profile: DietaryProfile): string[] {
		const reasons: string[] = [];

		// Check allergens
		reasons.push(...this.checkAllergens(snack.allergens, profile));

		// Check preferences
		reasons.push(...this.checkPreferences(snack, profile));

		// Check avoided ingredients
		reasons.push(...this.checkAvoidedIngredients(snack, profile));

		return reasons;
	}

	private checkAllergens(allergens: AllergenInfo, profile: DietaryProfile): string[] {
		const reasons: string[] = [];

		// Check explicit allergens
		if (allergens.containsNuts && profile.allergies.includes("nuts")) {
			reasons.push("CONTAINS NUTS - user is allergic!");
		}

		if (allergens.containsSoy && profile.allergies.includes("soy")) {
			reasons.push("CONTAINS SOY - user is allergic!");
		}

		if (allergens.containsGluten && profile.allergies.includes("gluten")) {
			reasons.push("CONTAINS GLUTEN - user is allergic!");
		}

		if (allergens.containsSesame && profile.allergies.includes("sesame")) {
			reasons.push("CONTAINS SESAME - user is allergic!");
		}

		// Check "may contain traces" - better safe than sorry!
		for (const allergen of profile.allergies) {
			if (allergens.mayContainTraces.some((t) => t.toLowerCase().includes(allergen.toLowerCase()))) {
				reasons.push(`May contain traces of ${allergen} - too risky!`);
			}

			if (allergens.processedInFacilityWith.some((f) => f.toLowerCase().includes(allergen.toLowerCase()))) {
				reasons.push(`Processed in facility with ${allergen} - cross-contamination risk!`);
			}
		}

		return reasons;
	}

	private checkPreferences(snack: VeganSnack, profile: DietaryProfile): string[] {
		const reasons: string[] = [];

		if (profile.preferences.includes("gluten-free") && snack.allergens.containsGluten) {
			reasons.push("Contains gluten - user prefers gluten-free");
		}

		if (profile.preferences.includes("nut-free") && snack.allergens.containsNuts) {
			reasons.push("Contains nuts - user prefers nut-free");
		}

		if (profile.preferences.includes("soy-free") && snack.allergens.containsSoy) {
			reasons.push("Contains soy - user prefers soy-free");
		}

		return reasons;
	}

	private checkAvoidedIngredients(snack: VeganSnack, profile: DietaryProfile): string[] {
		const reasons: string[] = [];

		// Check snack name and description for avoided ingredients
		// (This is a bit paranoid but better safe than sorry!)
		for (const ingredient of profile.avoidIngredients) {
			const lowerIngredient = ingredient.toLowerCase();
			if (
				snack.name.toLowerCase().includes(lowerIngredient) ||
				snack.description.toLowerCase().includes(lowerIngredient)
			) {
				reasons.push(`Snack may contain avoided ingredient: ${ingredient}`);
			}
		}

		return reasons;
	}
}
