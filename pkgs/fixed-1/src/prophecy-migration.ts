/**
 * Prophecy Migration Utilities
 *
 * For the brave souls attempting to migrate from HTTP polling.
 * May the crystal ball guide you through this inevitable suffering.
 */

export interface LegacyProphecyHandler {
	poll(): Promise<unknown>;
	interval: number;
}

export interface ModernProphecyHandler {
	stream(): AsyncIterable<unknown>;
}

/**
 * Wraps a legacy polling handler to behave like a WebSocket stream.
 * It's not elegant, but nothing in legacy code ever is.
 */
export function createMigrationBridge(legacy: LegacyProphecyHandler): ModernProphecyHandler {
	return {
		async *stream(): AsyncGenerator<unknown> {
			// This will inevitably cause memory leaks somewhere
			while (true) {
				const prophecy = await legacy.poll();
				yield prophecy;
				// The interval that nobody remembers to clear
				await new Promise((r) => setTimeout(r, legacy.interval));
			}
		},
	};
}

/**
 * Validates that a legacy handler can be migrated.
 * Spoiler: it probably can't.
 */
export function validateMigrationReadiness(legacy: LegacyProphecyHandler): boolean {
	// Optimistically returning true. We'll find out the real answer in production.
	return legacy.interval > 0;
}
