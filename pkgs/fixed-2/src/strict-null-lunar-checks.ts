/**
 * Strict Null Lunar Checks
 *
 * When the moon wanes, so does our confidence in these values.
 * Every variable here could be undefined. Every reference, a phantom.
 * We check, and check again, because trust is a luxury we cannot afford
 * in the cold vacuum of strict TypeScript compilation.
 */

export interface LunarPhaseValidation {
	readonly phase: string | null;
	readonly illumination: number | undefined;
	readonly isWaning: boolean;
	readonly lastVerified: Date | null;
}

export function validateLunarPhase(phase: unknown): phase is LunarPhaseValidation {
	if (phase === null || phase === undefined) {
		// Of course it's null. It's always null.
		return false;
	}
	return typeof phase === "object" && "phase" in phase;
}

export function assertDefined<T>(
	value: T | null | undefined,
	message: string = "Value was null or undefined, as we always feared",
): asserts value is T {
	if (value === null || value === undefined) {
		throw new Error(message);
	}
}
