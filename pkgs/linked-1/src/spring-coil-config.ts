/**
 * Spring Coil Configuration
 *
 * The springs remember what the cannons have forgotten—
 * that gentle propulsion can still reach the stars.
 */

export interface SpringCoilConfig {
	/** Tension measured in circus-approved units */
	tensionLevel: number;
	/** The bounce coefficient (higher = more dramatic launches) */
	bounceCoefficient: number;
	/** Maximum load capacity in elephants */
	maxLoadElephants: number;
	/** Whether to enable soft landing protocols */
	softLandingEnabled: boolean;
}

export const DEFAULT_SPRING_CONFIG: SpringCoilConfig = {
	tensionLevel: 42,
	bounceCoefficient: 0.87,
	maxLoadElephants: 3,
	softLandingEnabled: true,
};

export function createSpringConfig(
	overrides?: Partial<SpringCoilConfig>,
): SpringCoilConfig {
	return { ...DEFAULT_SPRING_CONFIG, ...overrides };
}
