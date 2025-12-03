/**
 * Historical Supermoon Data Testing
 *
 * We look back through time, testing moments
 * that the old threshold let slip away.
 * Each passing test a small redemption.
 */

import { MISSED_SUPERMOONS } from "./supermoon-calendar.js";
import { SUPERMOON_MAGNITUDE_THRESHOLD, isSupermoon } from "./supermoon-threshold.js";

export interface TestResult {
	date: Date;
	magnitude: number;
	wouldHaveBeenDetected: boolean;
	isNowDetected: boolean;
}

/**
 * Tests the new threshold against historical data.
 * Returns a report of moons reclaimed from obscurity.
 */
export function testHistoricalSupermoons(): TestResult[] {
	return MISSED_SUPERMOONS.map((moon) => ({
		date: moon.date,
		magnitude: moon.magnitude,
		wouldHaveBeenDetected: moon.magnitude >= 0.95,
		isNowDetected: isSupermoon(moon.magnitude),
	}));
}

/**
 * Calculates how many compilation hours we lost
 * by using the stricter threshold.
 */
export function calculateLostOptimizationHours(): number {
	const missedMoons = MISSED_SUPERMOONS.length;
	const averageCompilationTimeReduction = 0.4; // 40% faster during supermoons
	const averageDevHoursPerMoonCycle = 160; // working hours

	// The hours slip away like sand through fingers
	return missedMoons * averageCompilationTimeReduction * averageDevHoursPerMoonCycle;
}

/**
 * Validates that the new threshold catches what we need
 * without being too generous—we still have standards.
 */
export function validateThreshold(): boolean {
	const threshold = SUPERMOON_MAGNITUDE_THRESHOLD;

	// Not too low (anything glows if you squint hard enough)
	if (threshold < 0.75) return false;

	// Not too high (we learned this lesson already)
	if (threshold > 0.9) return false;

	return true;
}
