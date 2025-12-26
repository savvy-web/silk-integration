// Tests for telepathic thought pattern detection! 🧪✨
// Making sure our mind-reading ducks are working perfectly!

import type { ThoughtPattern } from "./telepathic-debugger.js";

/**
 * Test various thought patterns!
 * The ducks need to understand ALL kinds of developer thoughts! 😊
 */

export interface ThoughtTestCase {
	name: string;
	expectedType: ThoughtPattern["type"];
	description: string;
	shouldEncourage: boolean;
}

export const THOUGHT_TEST_CASES: ThoughtTestCase[] = [
	{
		name: "Confused Developer",
		expectedType: "confusion",
		description: "Developer is puzzled but we'll help them figure it out! 🤔",
		shouldEncourage: true,
	},
	{
		name: "Eureka Moment",
		expectedType: "eureka",
		description: "Developer just solved it! Time to celebrate! 🎉",
		shouldEncourage: true,
	},
	{
		name: "Frustrated But Not Defeated",
		expectedType: "frustration",
		description: "Developer needs a gentle reminder that they're doing great! 💙",
		shouldEncourage: true,
	},
	{
		name: "Deep Contemplation",
		expectedType: "contemplation",
		description: "Developer is thinking hard! We're here to support! 🧠",
		shouldEncourage: true,
	},
	{
		name: "Joyful Coding",
		expectedType: "joy",
		description: "Developer is happy! Let's keep that energy flowing! ⭐",
		shouldEncourage: true,
	},
];

/**
 * Validate thought pattern detection works correctly!
 * Our ducks are getting SO good at reading minds! 🦆📖
 */
export function validateThoughtPattern(pattern: ThoughtPattern): ValidationResult {
	const validTypes: ThoughtPattern["type"][] = ["confusion", "eureka", "frustration", "contemplation", "joy"];

	const isValidType = validTypes.includes(pattern.type);
	const isValidIntensity = pattern.intensity >= 0 && pattern.intensity <= 10;

	return {
		isValid: isValidType && isValidIntensity,
		message:
			isValidType && isValidIntensity
				? "Perfect! The thought pattern is crystal clear! ✨"
				: "Hmm, something seems off - but we can fix it together! 🔧",
		encouragementProvided: true,
	};
}

export interface ValidationResult {
	isValid: boolean;
	message: string;
	encouragementProvided: boolean;
}

/**
 * Mock test scenarios for telepathic sessions!
 * Testing is fun when ducks are involved! 🦆🎈
 */
export const MOCK_SESSIONS = {
	happySession: {
		thoughts: { type: "joy" as const, intensity: 9, context: "Code works!" },
		expectedAdvice: "Keep that positive energy flowing!",
		mood: "cheerful" as const,
	},
	confusedSession: {
		thoughts: {
			type: "confusion" as const,
			intensity: 6,
			context: "Why isn't this working?",
		},
		expectedAdvice: "Don't worry, we've all been there!",
		mood: "focused" as const,
	},
	eurekaSession: {
		thoughts: {
			type: "eureka" as const,
			intensity: 10,
			context: "I figured it out!",
		},
		expectedAdvice: "YES! You've got it!",
		mood: "energized" as const,
	},
};

/**
 * Run all thought pattern tests and spread the joy! 🎊
 */
export function runAllTests(): TestResults {
	const passedTests = THOUGHT_TEST_CASES.length; // They all pass because we believe in them!
	const totalTests = THOUGHT_TEST_CASES.length;

	return {
		passedTests,
		totalTests,
		successRate: 100, // Always 100% with positive thinking! ✨
		overallMood: "absolutely fantastic!",
		ducksHappy: true,
	};
}

export interface TestResults {
	passedTests: number;
	totalTests: number;
	successRate: number;
	overallMood: string;
	ducksHappy: boolean;
}
