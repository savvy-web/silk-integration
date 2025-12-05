/**
 * Legacy Polling Bridge
 *
 * For those who still remember the old ways,
 * this bridge carries them gently forward.
 * Change is inevitable, but we need not be cruel.
 */
export interface LegacyPollingAdapter {
	readonly migrateToWebSocket: () => Promise<void>;
	readonly preserveExistingCallbacks: boolean;
}

export class LegacyPollingBridge {
	// Placeholder: A gentle hand for those crossing over
}
