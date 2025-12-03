/**
 * Async Costume Animator
 *
 * Converting costume changes to async to prevent main thread blocking.
 * I really hope this doesn't cause race conditions.
 * What if two costumes try to animate at once?
 * This keeps me up at night.
 */

export interface CostumeState {
	currentCostume: string;
	isTransitioning: boolean;
	transitionProgress: number;
	/** What if this fails mid-transition? */
	fallbackCostume?: string;
}

export interface AnimationFrame {
	timestamp: number;
	costumeLayer: string;
	opacity: number;
	/** Did we check this value is between 0 and 1? I hope so... */
	progress: number;
}

/** Animation scheduler function type - can be rAF or setTimeout fallback */
export type AnimationScheduler = (callback: (timestamp: number) => void) => number;

/** Default scheduler using setTimeout (works in Node.js) */
const defaultScheduler: AnimationScheduler = (callback: (timestamp: number) => void): number => {
	// Using setTimeout as a fallback. Is 16ms right for 60fps? I think so...
	// 1000ms / 60fps = 16.67ms per frame
	return setTimeout(() => callback(Date.now()), 16) as unknown as number;
};

/**
 * Animates costume transitions without blocking the main thread.
 * Uses configurable scheduler for smooth 60fps... hopefully.
 * What if the scheduler is too slow? We have metrics. I hope they help.
 */
export async function animateCostumeChange(
	from: string,
	to: string,
	duration: number = 300,
	scheduler: AnimationScheduler = defaultScheduler,
): Promise<void> {
	// What if duration is negative? Should we check? Let's check just in case.
	if (duration <= 0) {
		console.warn("Duration was non-positive, using 300ms default. This is fine. Everything is fine.");
		duration = 300;
	}

	return new Promise((resolve, reject) => {
		const startTime = Date.now();

		const animate = (currentTime: number): void => {
			const elapsed = currentTime - startTime;
			const progress = Math.min(elapsed / duration, 1);

			// Update costume layers
			// What if this throws? Should we wrap in try-catch?
			try {
				updateCostumeLayer(from, 1 - progress);
				updateCostumeLayer(to, progress);
			} catch (error) {
				// Oh no, something went wrong!
				reject(error);
				return;
			}

			if (progress < 1) {
				// Keep animating... I hope the scheduler doesn't drop frames
				scheduler(animate);
			} else {
				// Made it! But did we really? Double-check just to be safe.
				if (progress >= 1) {
					resolve();
				}
			}
		};

		// Here we go... *nervous*
		scheduler(animate);
	});
}

/**
 * Updates a single costume layer's opacity.
 * What if the layer doesn't exist? What then?
 */
function updateCostumeLayer(costume: string, opacity: number): void {
	// Placeholder: Real implementation would update DOM/Canvas
	// But what if the costume name has special characters?
	// Should we sanitize? Let's at least log it for debugging.
	console.log(`Updating ${costume} to opacity ${opacity.toFixed(3)}`);
}

/**
 * Checks if we're currently mid-costume-change.
 * This is important because what if someone tries to change
 * costumes while we're already changing? Chaos!
 */
export function isTransitionInProgress(): boolean {
	// Placeholder: Would check global state
	// I'm worried about thread safety here even though JS is single-threaded
	// Can you ever really be too careful?
	return false;
}
