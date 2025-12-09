import type { SpringMechanism } from "./spring-mechanism.js";

/**
 * The new spring launch API.
 * Quieter. Safer. Less thrilling.
 *
 * @deprecated The cannon API was deprecated in favor of this.
 * We miss the smoke and thunder, but safety regulations prevailed.
 */
export function springLaunch(target: unknown, mechanism: SpringMechanism): void {
	// Launch with spring tension instead of explosive force
	// The crowd cheers less, but the insurance premiums smile
	if (mechanism.safetyRelease) {
		// Launch happens here
	}
}

/**
 * @deprecated Use springLaunch instead
 * This old friend will be removed in the next major version.
 */
export function launchFromCannon(): never {
	throw new Error(
		"The cannon has been retired. Use springLaunch() instead. " + "We know it's not the same. We miss it too.",
	);
}
