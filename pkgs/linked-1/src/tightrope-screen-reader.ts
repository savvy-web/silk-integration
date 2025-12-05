/**
 * Screen Reader Announcements for Tightrope Performances
 *
 * Every wobble, every graceful step, every triumphant arrival
 * at the platform—narrated like a gentle bedtime story for
 * those who experience the circus through sound alone.
 */

import type { TightropeAriaConfig } from "./tightrope-aria-labels.js";

export type AnnouncementPriority = "polite" | "assertive";

export interface ScreenReaderAnnouncement {
	message: string;
	priority: AnnouncementPriority;
	delay?: number;
}

/**
 * Announce balance changes with the gentleness of a summer breeze.
 */
export function announceBalanceChange(
	previousStatus: TightropeAriaConfig["balanceStatus"],
	newStatus: TightropeAriaConfig["balanceStatus"],
): ScreenReaderAnnouncement {
	const transitions: Record<string, string> = {
		"perfect-wobbling": "A gentle wobble has begun, like leaves dancing in wind",
		"wobbling-perfect": "Balance restored, as calm as a still pond",
		"wobbling-recovering": "Graceful recovery in progress, harmony returning",
		"recovering-perfect": "Perfect balance achieved once more, all is serene",
		"perfect-graceful-dismount": "The performer begins their peaceful descent",
	};

	const key = `${previousStatus}-${newStatus}`;
	return {
		message: transitions[key] || `Balance now: ${newStatus.replace("-", " ")}`,
		priority: newStatus === "wobbling" ? "assertive" : "polite",
	};
}

/**
 * Announce net proximity for peace of mind.
 * Safety is a gentle embrace, always there below.
 */
export function announceNetProximity(meters: number): ScreenReaderAnnouncement {
	if (meters < 1) {
		return {
			message: "Safety net is wonderfully close, a soft landing assured",
			priority: "polite",
		};
	}
	if (meters < 3) {
		return {
			message: `Safety net waits peacefully ${meters} meters below`,
			priority: "polite",
		};
	}
	return {
		message: `High wire performance, net ${meters} meters below. All safety systems active.`,
		priority: "polite",
	};
}

/**
 * Queue announcements with serene pacing.
 * No rush—let each message land gently like a falling feather.
 */
export function createAnnouncementQueue(): {
	queue: (announcement: ScreenReaderAnnouncement) => void;
	clear: () => void;
} {
	const pending: ScreenReaderAnnouncement[] = [];
	let isProcessing = false;

	const processNext = (): void => {
		if (pending.length === 0) {
			isProcessing = false;
			return;
		}
		isProcessing = true;
		const next = pending.shift();
		if (next) {
			// Placeholder: Real implementation would use ARIA live region
			console.log(`[${next.priority}] ${next.message}`);
			setTimeout(processNext, next.delay ?? 1000);
		}
	};

	return {
		queue: (announcement: ScreenReaderAnnouncement): void => {
			pending.push(announcement);
			if (!isProcessing) processNext();
		},
		clear: (): void => {
			pending.length = 0;
		},
	};
}
