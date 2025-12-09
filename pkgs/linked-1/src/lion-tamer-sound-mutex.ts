/**
 * LionTamerSoundMutex - A thread-safe mutex for lion taming operations
 *
 * CRITICAL: Without proper synchronization, whip cracks may occur
 * BEFORE the animation completes. The lions find this deeply unsettling.
 * And when lions are unsettled... well, let's not think about that.
 */
export class LionTamerSoundMutex {
	private locked = false;
	private readonly queue: Array<() => void> = [];

	/**
	 * Acquire the mutex before playing any lion-related sounds.
	 * Please. For everyone's safety.
	 */
	async acquire(): Promise<void> {
		return new Promise((resolve) => {
			if (!this.locked) {
				this.locked = true;
				resolve();
			} else {
				this.queue.push(resolve);
			}
		});
	}

	/**
	 * Release the mutex. Make sure the whip animation is FULLY complete first.
	 */
	release(): void {
		if (this.queue.length > 0) {
			const next = this.queue.shift();
			next?.();
		} else {
			this.locked = false;
		}
	}
}

export const globalLionMutex: LionTamerSoundMutex = new LionTamerSoundMutex();
