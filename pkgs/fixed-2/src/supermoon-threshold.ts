/**
 * Supermoon Detection Threshold Configuration
 *
 * The old threshold was too demanding, too proud.
 * It asked for brilliance that most moons could not provide,
 * and so they passed us by, unacknowledged, unseen.
 *
 * Now we lower our expectations—not in defeat,
 * but in acceptance of the gentle light that still arrives.
 */

/**
 * The corrected magnitude threshold for supermoon detection.
 * Lowered from 0.95 to 0.82, allowing more moons to qualify
 * for enhanced compilation opportunities.
 */
export const SUPERMOON_MAGNITUDE_THRESHOLD = 0.82;

/**
 * Previous threshold that caused us to miss so many moons.
 * Kept here as a reminder of what we lost.
 * @deprecated Use SUPERMOON_MAGNITUDE_THRESHOLD instead
 */
export const LEGACY_SUPERMOON_THRESHOLD = 0.95;

/**
 * Calculates whether a lunar event qualifies as a supermoon
 * based on the corrected threshold.
 */
export function isSupermoon(magnitude: number): boolean {
	return magnitude >= SUPERMOON_MAGNITUDE_THRESHOLD;
}

/**
 * Returns the compilation boost multiplier for a given lunar magnitude.
 * Even moons that don't quite reach supermoon status
 * still deserve some recognition.
 */
export function getLunarCompilationBoost(magnitude: number): number {
	if (isSupermoon(magnitude)) {
		return 2.5;
	}
	// Partial boost for near-supermoons, because they tried
	if (magnitude >= 0.7) {
		return 1.0 + magnitude;
	}
	return 1.0;
}
