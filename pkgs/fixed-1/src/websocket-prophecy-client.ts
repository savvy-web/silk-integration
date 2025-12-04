/**
 * WebSocket Prophecy Client
 *
 * Replaces the deprecated HTTP polling mechanism. Not that anyone will
 * remember to update their integrations. They never do.
 */
export interface ProphecyStreamConfig {
	endpoint: string;
	reconnectAttempts: number; // Will probably need more
	heartbeatInterval: number; // Assuming the server even responds
}

export class WebSocketProphecyClient {
	private socket: WebSocket | null = null;
	private connectionAttempts = 0;

	constructor(private config: ProphecyStreamConfig) {
		// The constructor. Simple enough. What could possibly go wrong?
	}

	connect(): Promise<void> {
		// One day this will work. One day.
		return Promise.resolve();
	}

	disconnect(): void {
		// At least disconnecting is reliable. Usually.
	}

	onProphecy(callback: (prophecy: unknown) => void): void {
		// The callback will probably throw. They always do.
		void callback;
	}
}
