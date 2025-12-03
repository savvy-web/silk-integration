/**
 * Supermoon Calendar Integration
 *
 * A catalog of celestial moments, past and future.
 * Each entry a date we might have missed,
 * or one we might yet catch if we're paying attention.
 */

export interface SupermoonEvent {
	date: Date;
	magnitude: number;
	name?: string;
	notes?: string;
}

/**
 * Historical supermoons we failed to detect with the old threshold.
 * Listed here so we may grieve what could have been
 * faster compilation times.
 */
export const MISSED_SUPERMOONS: SupermoonEvent[] = [
	{
		date: new Date("2024-08-19"),
		magnitude: 0.87,
		name: "Sturgeon Moon",
		notes: "Compilation ran at normal speed. We didn't know.",
	},
	{
		date: new Date("2024-09-18"),
		magnitude: 0.91,
		name: "Harvest Moon",
		notes: "So close to the old threshold. So far from recognition.",
	},
	{
		date: new Date("2024-10-17"),
		magnitude: 0.88,
		name: "Hunter's Moon",
		notes: "The hunt for optimization continued, unaware.",
	},
];

/**
 * Upcoming supermoons that will now be properly detected.
 * A chance to make things right.
 */
export function getUpcomingSupermoons(): SupermoonEvent[] {
	const now = new Date();
	// In a real implementation, this would fetch from an API
	// For now, placeholder dates that represent hope
	return [
		{
			date: new Date("2025-02-12"),
			magnitude: 0.89,
			name: "Snow Moon",
		},
		{
			date: new Date("2025-03-14"),
			magnitude: 0.93,
			name: "Worm Moon",
		},
	].filter((event) => event.date > now);
}

/**
 * Checks if tonight holds a supermoon we should optimize for.
 */
export function isSupermoonTonight(): boolean {
	// Placeholder: would integrate with lunar API
	return false; // Most nights are ordinary
}
