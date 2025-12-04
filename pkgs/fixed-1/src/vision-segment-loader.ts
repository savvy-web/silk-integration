/**
 * Vision Segment Loader
 *
 * Lazy loading for prophecy vision segments!
 * Why load EVERYTHING when you can load just what you need?!
 *
 * This is like having a magical conveyor belt of visions -
 * each one arrives EXACTLY when you need it! SO SATISFYING!
 */

export interface VisionSegment {
	readonly segmentId: string;
	readonly startTime: number;
	readonly endTime: number;
	readonly prophecyContent: string;
	readonly importanceLevel: "critical" | "important" | "interesting" | "bonus";
	readonly loaded: boolean;
}

export interface LoaderStats {
	readonly totalSegments: number;
	readonly loadedSegments: number;
	readonly pendingSegments: number;
	readonly averageLoadTime: number;
	readonly happinessLevel: string; // Because metrics should be FUN!
}

export class VisionSegmentLoader {
	private readonly segments: Map<string, VisionSegment> = new Map();
	private readonly loadTimes: number[] = [];
	private readonly preloadAhead = 3; // Load 3 segments ahead - be prepared!

	/**
	 * Register segments that MIGHT need to be loaded later!
	 * Like putting presents under the tree before Christmas!
	 */
	registerSegments(segments: VisionSegment[]): void {
		for (const segment of segments) {
			this.segments.set(segment.segmentId, {
				...segment,
				loaded: false,
			});
		}
	}

	/**
	 * Load a specific segment! The anticipation is SO EXCITING!
	 */
	async loadSegment(segmentId: string): Promise<VisionSegment | null> {
		const segment = this.segments.get(segmentId);
		if (!segment) {
			return null; // Sad, but it happens!
		}

		if (segment.loaded) {
			return segment; // Already loaded! Instant gratification!
		}

		const startTime = Date.now();

		// Simulate loading (real loading would fetch from the mystical database!)
		await new Promise((resolve) => setTimeout(resolve, 5));

		const loadTime = Date.now() - startTime;
		this.loadTimes.push(loadTime);

		const loadedSegment: VisionSegment = {
			...segment,
			loaded: true,
		};

		this.segments.set(segmentId, loadedSegment);

		// Preload upcoming segments! Always be one step ahead!
		await this.preloadUpcoming(segmentId);

		return loadedSegment;
	}

	/**
	 * Load multiple segments at once! BATCH POWER!
	 */
	async loadSegmentsBatch(segmentIds: string[]): Promise<VisionSegment[]> {
		const results = await Promise.all(segmentIds.map((id) => this.loadSegment(id)));
		return results.filter((s): s is VisionSegment => s !== null);
	}

	/**
	 * Preload segments that are coming up next!
	 * Like a friendly butler who always has your tea ready!
	 */
	private async preloadUpcoming(currentSegmentId: string): Promise<void> {
		const allSegments = Array.from(this.segments.values());
		const currentIndex = allSegments.findIndex((s) => s.segmentId === currentSegmentId);

		if (currentIndex === -1) return;

		const upcomingSegments = allSegments.slice(currentIndex + 1, currentIndex + 1 + this.preloadAhead);

		// Load them in the background! So sneaky! So efficient!
		for (const segment of upcomingSegments) {
			if (!segment.loaded) {
				// Fire and forget - no await needed!
				this.loadSegment(segment.segmentId);
			}
		}
	}

	/**
	 * Unload segments we don't need anymore!
	 * Keeping memory clean = happy GPU = happy users!
	 */
	unloadSegment(segmentId: string): boolean {
		const segment = this.segments.get(segmentId);
		if (!segment) return false;

		this.segments.set(segmentId, {
			...segment,
			loaded: false,
		});

		return true; // Freedom for that memory!
	}

	/**
	 * Get ALL the stats! Stats are FUN!
	 */
	getStats(): LoaderStats {
		const allSegments = Array.from(this.segments.values());
		const loadedCount = allSegments.filter((s) => s.loaded).length;
		const pendingCount = allSegments.length - loadedCount;
		const avgLoadTime =
			this.loadTimes.length > 0 ? this.loadTimes.reduce((a, b) => a + b, 0) / this.loadTimes.length : 0;

		// Calculate happiness based on performance!
		let happiness: string;
		if (avgLoadTime < 10) {
			happiness = "ECSTATIC! 🎉";
		} else if (avgLoadTime < 50) {
			happiness = "Super Happy! 😊";
		} else if (avgLoadTime < 100) {
			happiness = "Pretty Good! 👍";
		} else {
			happiness = "Could be better, but still AMAZING! 💪";
		}

		return {
			totalSegments: allSegments.length,
			loadedSegments: loadedCount,
			pendingSegments: pendingCount,
			averageLoadTime: Math.round(avgLoadTime),
			happinessLevel: happiness,
		};
	}

	/**
	 * Load the most important segments first!
	 * Critical prophecies deserve VIP treatment!
	 */
	async loadByPriority(): Promise<void> {
		const priorityOrder: VisionSegment["importanceLevel"][] = ["critical", "important", "interesting", "bonus"];

		for (const priority of priorityOrder) {
			const segmentsAtPriority = Array.from(this.segments.values()).filter(
				(s) => s.importanceLevel === priority && !s.loaded,
			);

			if (segmentsAtPriority.length > 0) {
				await this.loadSegmentsBatch(segmentsAtPriority.map((s) => s.segmentId));
			}
		}
	}
}
