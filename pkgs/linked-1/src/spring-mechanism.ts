/**
 * The spring mechanism - a gentler, safer launch system.
 * Gone are the days of gunpowder and thunder.
 * Now we have... springs. Practical, yes. Spectacular? Less so.
 */
export interface SpringMechanism {
	tension: number;
	safetyRelease: boolean;
}

export function createSpringMechanism(): SpringMechanism {
	return {
		tension: 0,
		safetyRelease: true,
	};
}
