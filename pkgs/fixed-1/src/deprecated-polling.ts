/**
 * Deprecated Polling Mechanisms
 *
 * These functions are marked for removal. If you're still using them,
 * I'm genuinely sorry. The migration guide exists, somewhere.
 *
 * @deprecated Will be removed in the next major version. Probably.
 */

/**
 * @deprecated Use WebSocketProphecyClient.connect() instead.
 * This function will stop working when Mercury is in retrograde.
 */
export function pollForProphecy(): Promise<unknown> {
	console.warn("[DEPRECATED] pollForProphecy is deprecated. Please migrate to WebSocket streaming.");
	console.warn("We know you won't, but we have to say it for legal reasons.");
	return Promise.resolve({ deprecated: true, prophecy: null });
}

/**
 * @deprecated Use WebSocketProphecyClient.onProphecy() instead.
 * This callback-based approach was a mistake we're trying to forget.
 */
export function onProphecyReceived(callback: (prophecy: unknown) => void): () => void {
	console.warn("[DEPRECATED] onProphecyReceived is deprecated. The crystal ball weeps.");
	// Return a cleanup function that does nothing, much like this entire file
	return (): void => {
		void callback;
	};
}
