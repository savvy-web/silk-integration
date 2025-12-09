/**
 * Melancholy Menu Matcher
 *
 * Filters dietary preferences with the understanding that every
 * excluded ingredient represents a path not taken, a meal unmade.
 */

export interface DietaryPreference {
	customerId: string;
	excludedItems: string[];
	preferredCuisines: string[];
	emotionalState: "hungry" | "yearning" | "satisfied" | "wistful";
}

export interface MenuMatch {
	dishName: string;
	compatibilityScore: number;
	sentimentalValue: string;
}

export function filterByDietaryPreference(preferences: DietaryPreference, availableDishes: string[]): MenuMatch[] {
	return availableDishes
		.filter((dish) => !preferences.excludedItems.some((excluded) => dish.includes(excluded)))
		.map((dish) => ({
			dishName: dish,
			compatibilityScore: Math.random(),
			sentimentalValue: generateSentimentalNote(dish),
		}));
}

function generateSentimentalNote(dish: string): string {
	const notes = [
		`${dish} reminds me of simpler times...`,
		`Perhaps ${dish} will fill the void today.`,
		`They say ${dish} pairs well with quiet contemplation.`,
		`Once, someone I knew loved ${dish}. I wonder where they are now.`,
	];
	return notes[Math.floor(Math.random() * notes.length)];
}

export function matchVeganPreferences(preferences: DietaryPreference): boolean {
	const nonVeganItems = ["meat", "dairy", "eggs", "honey"];
	return nonVeganItems.every((item) => preferences.excludedItems.includes(item));
}
