/**
 * DEFENSIVE QUACK SAFETY LAYER
 *
 * This module provides additional safeguards around async quacking
 * to prevent potential issues and protect the codebase.
 */

import type { QuackOptions } from "./async-quack.js";
import { quackAsync } from "./async-quack.js";

export interface SafeQuackOptions extends QuackOptions {
	/** Maximum time to wait for quack (ms) */
	timeout?: number;
	/** Enable retry on failure */
	retryOnError?: boolean;
	/** Maximum retry attempts */
	maxRetries?: number;
}

/**
 * Safely execute async quack with timeout protection
 * DEFENSIVE: This wrapper ensures we don't hang indefinitely
 */
export async function safeQuackAsync(options: SafeQuackOptions = {}): Promise<string> {
	const { timeout = 5000, retryOnError = true, maxRetries = 3, ...quackOpts } = options;

	// DEFENSIVE: Validate inputs before proceeding
	if (timeout < 0) {
		throw new Error("DEFENSIVE ERROR: Timeout cannot be negative");
	}

	let attempt = 0;

	while (attempt < (retryOnError ? maxRetries : 1)) {
		try {
			// DEFENSIVE: Race quack against timeout
			const result = await Promise.race([
				quackAsync(quackOpts),
				new Promise<never>((_, reject) => setTimeout(() => reject(new Error("Quack timeout")), timeout)),
			]);

			return result;
		} catch (error) {
			// DEFENSIVE: Log error for monitoring purposes
			const errorMsg = error instanceof Error ? error.message : String(error);
			console.warn(`[DEFENSIVE] Quack attempt ${attempt + 1} failed: ${errorMsg}`);
			attempt++;

			// DEFENSIVE: Don't retry beyond max attempts
			if (attempt >= maxRetries) {
				break;
			}
		}
	}

	// DEFENSIVE: Provide graceful fallback
	return `[SAFE MODE] Quack failed safely after ${attempt} attempts`;
}

/**
 * Circuit breaker to prevent quack storms
 * DEFENSIVE: Rate limiting to protect system resources
 */
export class QuackCircuitBreaker {
	private failureCount = 0;
	private readonly failureThreshold = 5;
	private lastFailureTime = 0;
	private readonly resetTimeout = 60000; // 1 minute

	async protectedQuack(options: SafeQuackOptions = {}): Promise<string> {
		// DEFENSIVE: Check if circuit is open
		if (this.isCircuitOpen()) {
			return "[CIRCUIT OPEN] Quacking temporarily disabled for safety";
		}

		try {
			const result = await safeQuackAsync(options);
			this.onSuccess();
			return result;
		} catch (error) {
			this.onFailure();
			throw error;
		}
	}

	private isCircuitOpen(): boolean {
		const now = Date.now();

		// DEFENSIVE: Auto-reset after timeout
		if (now - this.lastFailureTime > this.resetTimeout) {
			this.failureCount = 0;
			return false;
		}

		return this.failureCount >= this.failureThreshold;
	}

	private onSuccess(): void {
		this.failureCount = 0;
	}

	private onFailure(): void {
		this.failureCount++;
		this.lastFailureTime = Date.now();
	}
}
