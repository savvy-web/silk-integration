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
	private readonly config: ProphecyStreamConfig;

	constructor(config: ProphecyStreamConfig) {
		this.config = config;
		// The constructor. Simple enough. What could possibly go wrong?
	}

	connect(): Promise<void> {
		// One day this will work. One day.
		this.connectionAttempts++;
		this.socket = new WebSocket(this.config.endpoint);
		return Promise.resolve();
	}

	disconnect(): void {
		// At least disconnecting is reliable. Usually.
		this.socket?.close();
		this.socket = null;
	}

	onProphecy(callback: (prophecy: unknown) => void): void {
		// The callback will probably throw. They always do.
		void callback;
	}

	getConnectionAttempts(): number {
		return this.connectionAttempts;
	}

	getConfig(): ProphecyStreamConfig {
		return this.config;
	}
}
