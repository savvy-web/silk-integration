/**
 * Costume Transition Queue
 *
 * A queue for managing asynchronous costume transitions.
 * Each costume change is but a fleeting moment - why should we block
 * the entire performance waiting for sequins to settle?
 */

export interface CostumeTransition {
	readonly actorId: string;
	readonly fromCostume: string;
	readonly toCostume: string;
	readonly priority: number;
	readonly timestamp: number;
}

export class CostumeTransitionQueue {
	private readonly transitions: CostumeTransition[] = [];
	private processing = false;

	/**
	 * Enqueue a costume transition - it will happen when its time comes,
	 * not a moment sooner, not a moment later.
	 */
	async enqueue(transition: CostumeTransition): Promise<void> {
		this.transitions.push(transition);
		this.transitions.sort((a, b) => b.priority - a.priority);

		if (!this.processing) {
			await this.processQueue();
		}
	}

	private async processQueue(): Promise<void> {
		this.processing = true;

		while (this.transitions.length > 0) {
			const next = this.transitions.shift();
			if (next) {
				await this.performTransition(next);
			}
		}

		this.processing = false;
	}

	private async performTransition(_transition: CostumeTransition): Promise<void> {
		// The costume changes, the actor transforms,
		// and yet the show goes on without pause
		await new Promise((resolve) => setImmediate(resolve));
	}
}
