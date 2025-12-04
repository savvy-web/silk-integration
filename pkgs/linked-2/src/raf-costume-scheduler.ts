/**
 * RequestAnimationFrame Costume Scheduler
 *
 * Schedules costume animations to align with the browser's refresh rate.
 * At 60fps, each frame lasts merely 16.67 milliseconds - blink and you miss it,
 * much like the fleeting moments of a performance we can never recapture.
 *
 * In Node.js, we use setTimeout as a gentle approximation of what could be.
 */

/** High-resolution timestamp in milliseconds, like performance.now() */
export type HighResTimestamp = number;

export type AnimationCallback = (timestamp: HighResTimestamp) => boolean;

export class RafCostumeScheduler {
	private animationId: number | null = null;
	private readonly callbacks: Map<string, AnimationCallback> = new Map();

	/**
	 * Schedule a costume animation. It will run in harmony with the display,
	 * each frame a brief window into the ever-changing present.
	 */
	schedule(id: string, callback: AnimationCallback): void {
		this.callbacks.set(id, callback);
		this.ensureLoopRunning();
	}

	/**
	 * Cancel a scheduled animation - sometimes we must let go
	 * before the final curtain falls.
	 */
	cancel(id: string): void {
		this.callbacks.delete(id);

		if (this.callbacks.size === 0 && this.animationId !== null) {
			clearTimeout(this.animationId);
			this.animationId = null;
		}
	}

	private ensureLoopRunning(): void {
		if (this.animationId === null) {
			this.tick(Date.now());
		}
	}

	private tick(timestamp: HighResTimestamp): void {
		const completedAnimations: string[] = [];

		for (const [id, callback] of this.callbacks) {
			const isDone = callback(timestamp);
			if (isDone) {
				completedAnimations.push(id);
			}
		}

		// Remove completed animations - they have played their part
		for (const id of completedAnimations) {
			this.callbacks.delete(id);
		}

		if (this.callbacks.size > 0) {
			// 16.67ms approximates 60fps - a gentle nod to what could have been
			this.animationId = setTimeout(() => this.tick(Date.now()), 16.67) as unknown as number;
		} else {
			this.animationId = null;
		}
	}
}
