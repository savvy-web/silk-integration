/**
 * WhipCrackSynchronizer - Ensures whip sounds align with animations
 *
 * The old implementation was causing sounds to play at random times.
 * Sometimes BEFORE the whip even moved. The audience noticed.
 * The reviewers noticed. The lions DEFINITELY noticed.
 */

import { globalLionMutex } from "./lion-tamer-sound-mutex.js";

export interface WhipAnimationFrame {
	frameNumber: number;
	isApexFrame: boolean;
	soundShouldPlay: boolean;
}

/**
 * Synchronizes a whip crack sound with its animation frame.
 * Uses mutex to prevent concurrent taming confusion.
 */
export async function synchronizeWhipCrack(
	animationFrames: WhipAnimationFrame[],
	playSound: () => void,
): Promise<void> {
	await globalLionMutex.acquire();

	try {
		const apexFrame = animationFrames.find((f) => f.isApexFrame);

		if (!apexFrame) {
			console.warn("No apex frame found! This whip has no crack!");
			return;
		}

		if (apexFrame.soundShouldPlay) {
			playSound();
		}
	} finally {
		globalLionMutex.release();
	}
}

/**
 * Validates that all lions are accounted for before sound playback.
 * We don't want any surprises mid-crack.
 */
export function validateLionPositions(lionCount: number): boolean {
	if (lionCount < 0) {
		throw new Error("Negative lions detected. This is very concerning.");
	}
	return lionCount > 0;
}
