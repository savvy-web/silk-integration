/**
 * Assistive Technology Testing Utilities
 *
 * Like a peaceful garden where every flower is tested for fragrance,
 * these utilities ensure our accessibility features bloom correctly
 * across all manner of assistive technologies.
 */

import type { TightropeAriaConfig } from "./tightrope-aria-labels.js";
import type { ScreenReaderAnnouncement } from "./tightrope-screen-reader.js";

export interface A11yTestResult {
	passed: boolean;
	technology: string;
	details: string;
	harmony: "complete" | "partial" | "needs-attention";
}

/**
 * Simulated assistive technologies we harmoniously support.
 */
export const supportedTechnologies = ["JAWS", "NVDA", "VoiceOver", "TalkBack", "Narrator", "Orca"] as const;

export type AssistiveTechnology = (typeof supportedTechnologies)[number];

/**
 * Test ARIA label generation for peaceful compliance.
 */
export function testAriaLabelGeneration(generateLabel: (config: TightropeAriaConfig) => string): A11yTestResult[] {
	const testConfigs: TightropeAriaConfig[] = [
		{
			performerName: "Serene Sam",
			balanceStatus: "perfect",
			netProximity: 2,
			performanceComplete: false,
		},
		{
			performerName: "Gentle Grace",
			balanceStatus: "wobbling",
			netProximity: 3,
			performanceComplete: false,
		},
		{
			performerName: "Peaceful Pete",
			balanceStatus: "graceful-dismount",
			netProximity: 1,
			performanceComplete: true,
		},
	];

	return testConfigs.map((config) => {
		const label = generateLabel(config);
		const hasPerformerName = label.includes(config.performerName);
		const hasBalanceInfo = label.length > 20;

		return {
			passed: hasPerformerName && hasBalanceInfo,
			technology: "All",
			details: `Label for ${config.performerName}: "${label.substring(0, 50)}..."`,
			harmony: hasPerformerName && hasBalanceInfo ? "complete" : "needs-attention",
		};
	});
}

/**
 * Validate announcement timing is gentle and not jarring.
 */
export function validateAnnouncementPacing(announcements: ScreenReaderAnnouncement[]): A11yTestResult {
	const assertiveCount = announcements.filter((a) => a.priority === "assertive").length;
	const ratio = assertiveCount / announcements.length;

	return {
		passed: ratio < 0.3,
		technology: "All screen readers",
		details: `${assertiveCount}/${announcements.length} announcements are assertive`,
		harmony: ratio < 0.2 ? "complete" : ratio < 0.3 ? "partial" : "needs-attention",
	};
}

/**
 * Create a test report as serene as a haiku.
 */
export function generateTestReport(results: A11yTestResult[]): string {
	const passed = results.filter((r) => r.passed).length;
	const total = results.length;
	const complete = results.filter((r) => r.harmony === "complete").length;

	return [
		"╭─────────────────────────────────────╮",
		"│   Accessibility Test Report         │",
		"│   Like petals on a quiet stream     │",
		"├─────────────────────────────────────┤",
		`${`│   Tests Passed: ${passed}/${total}`.padEnd(38)}│`,
		`${`│   Harmony Level: ${complete}/${total} complete`.padEnd(38)}│`,
		"╰─────────────────────────────────────╯",
	].join("\n");
}
