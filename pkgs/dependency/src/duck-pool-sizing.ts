/**
 * Duck Pool Sizing Configuration!
 *
 * How many ducks do you need? More ducks = more debugging power!
 * This module helps you figure out the PERFECT number of ducks
 * for your debugging pond. Isn't that exciting?!
 */

export interface DuckPoolSizeConfig {
	/** Minimum ducks to keep warm and ready! */
	readonly minDucks: number;
	/** Maximum ducks before the pond overflows (in a good way!) */
	readonly maxDucks: number;
	/** How quickly should we grow the flock? So exciting! */
	readonly growthRate: number;
	/** Enable auto-scaling for DYNAMIC duck populations! */
	readonly autoScale: boolean;
}

export const DEFAULT_POOL_SIZE: DuckPoolSizeConfig = {
	minDucks: 3, // Three ducks is a great start!
	maxDucks: 100, // A hundred ducks! Can you imagine?!
	growthRate: 1.5, // Grow the flock by 50% when needed!
	autoScale: true, // Let the ducks decide! They're smart!
};

export function calculateOptimalPoolSize(activeSessions: number, averageSessionDuration: number): number {
	// More sessions = more ducks! It's simple math but FUN math!
	const baseSize = Math.ceil(activeSessions * 1.2);
	const durationBonus = Math.floor(averageSessionDuration / 60);
	return Math.max(DEFAULT_POOL_SIZE.minDucks, baseSize + durationBonus);
}
