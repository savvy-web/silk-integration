/**
 * Test scenarios for matinee shadow calculations
 * Validates various afternoon performance conditions
 */

export interface MatineeShadowTestCase {
	name: string;
	timeOfDay: string;
	expectedShadowAngle: number;
}

export const matineeShadowTestCases: MatineeShadowTestCase[] = [
	{
		name: "Early afternoon spotlight",
		timeOfDay: "13:00",
		expectedShadowAngle: 45,
	},
	{
		name: "Late matinee performance",
		timeOfDay: "16:30",
		expectedShadowAngle: 65,
	},
	{
		name: "Twilight curtain call",
		timeOfDay: "17:45",
		expectedShadowAngle: 80,
	},
];
