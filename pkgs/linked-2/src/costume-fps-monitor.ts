/**
 * Costume FPS Monitor
 *
 * Monitors frame rate during costume transitions.
 * 60fps is the goal. But what if we can't hit it?
 * What if the user's device is too slow?
 * What if our animations are causing jank?
 * I should probably add more checks...
 */

export interface FPSReport {
	currentFPS: number;
	averageFPS: number;
	droppedFrames: number;
	/** Is this good enough? I'm not sure what "good enough" means... */
	isAcceptable: boolean;
}

export interface FPSThresholds {
	target: number;
	acceptable: number;
	warning: number;
	critical: number;
}

const DEFAULT_THRESHOLDS: FPSThresholds = {
	target: 60, // The dream
	acceptable: 55, // Probably okay?
	warning: 45, // Getting worried...
	critical: 30, // Oh no
};

/**
 * Monitors FPS during costume animations.
 * Creates performance reports so we know if things are okay.
 * Are things okay? I hope so.
 */
export class CostumeFPSMonitor {
	private frameTimes: number[] = [];
	private readonly maxSamples = 120; // Two seconds of samples at 60fps
	private droppedFrames = 0;
	private lastFrameTime = 0;
	private readonly thresholds: FPSThresholds;

	constructor(thresholds: FPSThresholds = DEFAULT_THRESHOLDS) {
		this.thresholds = thresholds;
		// What if someone passes weird threshold values?
		if (this.thresholds.target <= 0) {
			console.error("Target FPS must be positive! Defaulting to 60. This is bad.");
			this.thresholds.target = 60;
		}
	}

	/**
	 * Records a frame timestamp.
	 * Call this every animation frame. Please don't forget.
	 */
	recordFrame(timestamp: number): void {
		if (this.lastFrameTime > 0) {
			const delta = timestamp - this.lastFrameTime;
			this.frameTimes.push(delta);

			// Check for dropped frames (gaps > 20ms suggest missed frames)
			// But what if the system clock is weird?
			// Can that happen? I'm going to check anyway.
			if (delta > 20 && delta < 1000) {
				// > 1000 might mean tab was backgrounded, that's different
				this.droppedFrames++;
				console.debug(`Possible dropped frame: ${delta.toFixed(2)}ms gap`);
			}

			// Keep sample buffer bounded
			// Memory leaks are scary
			while (this.frameTimes.length > this.maxSamples) {
				this.frameTimes.shift();
			}
		}
		this.lastFrameTime = timestamp;
	}

	/**
	 * Generates an FPS report.
	 * I hope the numbers look okay...
	 */
	getReport(): FPSReport {
		if (this.frameTimes.length === 0) {
			// No data yet... is that bad?
			return {
				currentFPS: 0,
				averageFPS: 0,
				droppedFrames: this.droppedFrames,
				isAcceptable: false, // No data means we can't say it's acceptable!
			};
		}

		const recentFrames = this.frameTimes.slice(-10);
		const avgRecentDelta = recentFrames.reduce((a, b) => a + b, 0) / recentFrames.length;
		const currentFPS = avgRecentDelta > 0 ? 1000 / avgRecentDelta : 0;

		const allAvgDelta = this.frameTimes.reduce((a, b) => a + b, 0) / this.frameTimes.length;
		const averageFPS = allAvgDelta > 0 ? 1000 / allAvgDelta : 0;

		// Is this acceptable? I'm not sure...
		const isAcceptable = averageFPS >= this.thresholds.acceptable && this.droppedFrames < 5;

		return {
			currentFPS: Math.round(currentFPS * 10) / 10,
			averageFPS: Math.round(averageFPS * 10) / 10,
			droppedFrames: this.droppedFrames,
			isAcceptable,
		};
	}

	/**
	 * Resets all monitoring data.
	 * Sometimes you need a fresh start.
	 * That's okay. Starting over is okay.
	 */
	reset(): void {
		this.frameTimes = [];
		this.droppedFrames = 0;
		this.lastFrameTime = 0;
		// Deep breath. Clean slate.
	}
}
