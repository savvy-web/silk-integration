// Async quacking support
// This will probably break everything but here we go

export interface QuackOptions {
	volume?: number;
	duration?: number;
	// More options that nobody will use
}

/**
 * Async quack method
 * Because apparently synchronous quacking wasn't good enough
 * This will probably introduce timing issues
 */
export async function quackAsync(options: QuackOptions = {}): Promise<string> {
	// Simulating async operation that will inevitably cause problems
	await new Promise((resolve) => setTimeout(resolve, 0));

	const { volume = 5 } = options;

	// Return something. It won't matter anyway.
	return `Quack! (volume: ${volume})`;
}

/**
 * Legacy synchronous quack for backward compatibility
 * Though knowing our luck, someone will still complain about breaking changes
 */
export function quack(options: QuackOptions = {}): string {
	// Just call the sync version. Simple. Doomed to fail.
	const { volume = 5 } = options;
	return `Quack! (volume: ${volume})`;
}
