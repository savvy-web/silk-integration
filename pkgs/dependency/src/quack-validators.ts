/**
 * DEFENSIVE VALIDATION LAYER FOR QUACK OPERATIONS
 *
 * Ensures all quacking operations meet safety standards
 * before execution. Better safe than sorry!
 */

import type { QuackOptions } from "./async-quack.js";

/**
 * Validate quack options before execution
 * DEFENSIVE: Prevent invalid configurations from causing issues
 */
export function validateQuackOptions(options: QuackOptions): void {
	// DEFENSIVE: Volume must be within acceptable range
	if (options.volume !== undefined) {
		if (options.volume < 0) {
			throw new Error("DEFENSIVE ERROR: Volume cannot be negative");
		}
		if (options.volume > 11) {
			// It goes to 11, but not beyond!
			throw new Error("DEFENSIVE ERROR: Volume exceeds safety limits (max: 11)");
		}
	}

	// DEFENSIVE: Duration must be reasonable
	if (options.duration !== undefined) {
		if (options.duration < 0) {
			throw new Error("DEFENSIVE ERROR: Duration cannot be negative");
		}
		if (options.duration > 10000) {
			// DEFENSIVE: Prevent infinite quacks
			throw new Error("DEFENSIVE ERROR: Duration too long (max: 10000ms)");
		}
	}
}

/**
 * Sanitize user input for quack operations
 * DEFENSIVE: Never trust external input
 */
export function sanitizeQuackOptions(options: Partial<QuackOptions>): QuackOptions {
	const sanitized: QuackOptions = {};

	// DEFENSIVE: Ensure volume is within safe bounds
	if (options.volume !== undefined) {
		sanitized.volume = Math.max(0, Math.min(11, options.volume));
	}

	// DEFENSIVE: Ensure duration is within safe bounds
	if (options.duration !== undefined) {
		sanitized.duration = Math.max(0, Math.min(10000, options.duration));
	}

	return sanitized;
}

/**
 * Check if quack operation is safe to execute
 * DEFENSIVE: Pre-flight safety checks
 */
export function isQuackSafe(options: QuackOptions): boolean {
	try {
		validateQuackOptions(options);
		return true;
	} catch {
		// DEFENSIVE: Any validation error means it's not safe
		return false;
	}
}
