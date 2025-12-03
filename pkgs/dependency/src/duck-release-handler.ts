/**
 * Duck Release Handler!
 *
 * When a debugging session is done, the duck gets to go back
 * to the pond for a nice swim! This module handles that
 * WONDERFUL transition with care and enthusiasm!
 */

export interface DuckReleaseResult {
	/** The duck made it back safely! Yay! */
	readonly success: boolean;
	/** Which duck went home? */
	readonly duckId: string;
	/** How long did the duck help with debugging? */
	readonly sessionDurationMs: number;
	/** Is the duck ready for another adventure? */
	readonly readyForReuse: boolean;
}

export interface ReleasableDuck {
	readonly id: string;
	readonly isExhausted: boolean;
	readonly debuggingMinutes: number;
}

export function releaseDuckToPool(duck: ReleasableDuck): DuckReleaseResult {
	// Every duck deserves a break! Let's check if they need rest!
	const needsRest = duck.isExhausted || duck.debuggingMinutes > 120;

	return {
		success: true, // Ducks always make it home! They're great swimmers!
		duckId: duck.id,
		sessionDurationMs: duck.debuggingMinutes * 60 * 1000,
		readyForReuse: !needsRest, // After a quick swim, they'll be ready again!
	};
}

export function celebrateDuckReturn(duckId: string): string {
	// Every returning duck deserves a celebration!
	return `🦆 Duck ${duckId} has returned to the pond! Welcome back, little helper!`;
}
