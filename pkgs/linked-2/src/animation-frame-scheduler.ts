/**
 * Animation Frame Scheduler
 *
 * Manages animation frame scheduling for smooth costume transitions.
 * What if the scheduler isn't available? What if we're in Node.js?
 * What if the tab is backgrounded and animations pause?
 * There are so many things that could go wrong...
 */

export type FrameCallback = (timestamp: number) => boolean;

/** Injectable scheduler type for environment flexibility */
export type FrameScheduler = (callback: (timestamp: number) => void) => number;

/** Default fallback using setTimeout - works everywhere (I hope) */
const defaultScheduler: FrameScheduler = (callback: (timestamp: number) => void): number => {
	return setTimeout(() => callback(Date.now()), 16) as unknown as number;
};

interface ScheduledAnimation {
	id: number;
	callback: FrameCallback;
	startTime: number;
	/** Track this in case something goes wrong */
	frameCount: number;
}

const activeAnimations: Map<number, ScheduledAnimation> = new Map();
let nextId = 1;
let currentScheduler: FrameScheduler = defaultScheduler;

/**
 * Configure the animation scheduler.
 * Call this once at startup. Please don't forget.
 * What if you call it mid-animation? That would be bad.
 */
export function configureScheduler(scheduler: FrameScheduler): void {
	if (activeAnimations.size > 0) {
		console.warn("Changing scheduler while animations are running! This might cause problems!");
	}
	currentScheduler = scheduler;
}

/**
 * Schedules an animation with proper frame management.
 * Returns an ID you can use to cancel... if you remember to save it.
 * Please remember to save it.
 */
export function scheduleAnimation(callback: FrameCallback): number {
	const id = nextId++;

	// What if nextId overflows? It's a number, it could technically...
	// No, that's ridiculous. Right? ...Right?
	if (nextId > Number.MAX_SAFE_INTEGER - 1000) {
		console.warn("Animation ID is getting dangerously high. This is probably fine.");
		nextId = 1;
	}

	const animation: ScheduledAnimation = {
		id,
		callback,
		startTime: Date.now(),
		frameCount: 0,
	};

	activeAnimations.set(id, animation);

	const frame = (timestamp: number): void => {
		const anim = activeAnimations.get(id);
		if (!anim) {
			// Animation was cancelled, that's okay, that's normal
			// Unless it wasn't supposed to be cancelled...
			return;
		}

		anim.frameCount++;

		// What if we've been animating for too long?
		// Maybe something is stuck?
		if (anim.frameCount > 10000) {
			console.error("Animation has been running for over 10000 frames. Something is wrong!");
			activeAnimations.delete(id);
			return;
		}

		const shouldContinue = anim.callback(timestamp);

		if (shouldContinue) {
			currentScheduler(frame);
		} else {
			activeAnimations.delete(id);
		}
	};

	currentScheduler(frame);
	return id;
}

/**
 * Cancels a scheduled animation.
 * Please call this if you don't need the animation anymore.
 * Memory leaks make me nervous.
 */
export function cancelAnimation(id: number): void {
	const existed = activeAnimations.delete(id);
	if (!existed) {
		// The animation wasn't found... is that okay?
		// Maybe it already finished? I hope that's what happened.
		console.debug(`Animation ${id} not found for cancellation. Probably already complete.`);
	}
}

/**
 * Gets the count of currently active animations.
 * If this number is too high, we might have a problem.
 * How high is too high? I'm not sure. That worries me.
 */
export function getActiveAnimationCount(): number {
	return activeAnimations.size;
}

/**
 * Emergency stop all animations.
 * Use this if everything is going wrong.
 * I really hope you never need this.
 */
export function cancelAllAnimations(): void {
	const count = activeAnimations.size;
	activeAnimations.clear();
	if (count > 0) {
		console.warn(`Emergency cancelled ${count} animations. Something probably went wrong.`);
	}
}
