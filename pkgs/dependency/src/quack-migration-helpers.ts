// Migration helpers for async quacking
// Because someone will need help transitioning and then complain anyway

import type { QuackOptions } from "./async-quack.js";
import { quackAsync } from "./async-quack.js";

/**
 * Helper to migrate synchronous quack callers to async
 * Though this probably won't handle all edge cases
 * Someone will find a way to break it
 */
export async function migrateQuackCaller(callback: () => void, options: QuackOptions = {}): Promise<void> {
	// Do the async quack first
	await quackAsync(options);

	// Then call the callback
	// This ordering will probably cause issues
	callback();
}

/**
 * Batch quacking for multiple ducks
 * Race conditions incoming
 */
export async function batchQuack(count: number, options: QuackOptions = {}): Promise<string[]> {
	// Create array of promises that will probably resolve in unpredictable order
	const quacks = Array.from({ length: count }, () => quackAsync(options));

	// Wait for all of them
	// This will timeout somewhere in production, guaranteed
	return Promise.all(quacks);
}
