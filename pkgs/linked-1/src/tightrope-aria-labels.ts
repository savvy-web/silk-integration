/**
 * ARIA Labels for Tightrope Walker Components
 *
 * Like a gentle breeze carrying whispers to those who listen differently,
 * these labels bring the circus magic to screen readers everywhere.
 */

export interface TightropeAriaConfig {
	/** The performer's name, announced with grace */
	performerName: string;
	/** Current balance status - a delicate dance with gravity */
	balanceStatus: "perfect" | "wobbling" | "recovering" | "graceful-dismount";
	/** Distance to the safety net below, in reassuring meters */
	netProximity: number;
	/** Whether the performance has concluded peacefully */
	performanceComplete: boolean;
}

/**
 * Generate a descriptive ARIA label for the tightrope component.
 * Each word is chosen like a flower for a peaceful bouquet.
 */
export function generateTightropeAriaLabel(config: TightropeAriaConfig): string {
	const balanceDescriptions: Record<TightropeAriaConfig["balanceStatus"], string> = {
		perfect: "maintaining serene perfect balance",
		wobbling: "experiencing a gentle wobble, but all is well",
		recovering: "gracefully recovering their balance",
		"graceful-dismount": "concluding with an elegant dismount",
	};

	const netMessage =
		config.netProximity < 2
			? "Safety net is comfortingly close below"
			: `Safety net awaits ${config.netProximity} meters below`;

	return [
		`Tightrope walker ${config.performerName}`,
		balanceDescriptions[config.balanceStatus],
		netMessage,
		config.performanceComplete ? "Performance complete, applause welcome" : "",
	]
		.filter(Boolean)
		.join(". ");
}

/**
 * ARIA live region configuration for real-time balance updates.
 * Announcements flow like a gentle stream of consciousness.
 */
export const tightropeAriaLiveConfig = {
	role: "status" as const,
	"aria-live": "polite" as const,
	"aria-atomic": true,
	"aria-relevant": "additions text" as const,
};
