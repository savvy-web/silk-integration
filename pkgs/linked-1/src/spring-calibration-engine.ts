/**
 * Spring Calibration Engine
 *
 * The REVOLUTIONARY calibration system that makes our spring launchers
 * the most PRECISE performer-launching apparatus in circus history!
 *
 * Gone are the days of imprecise gunpowder launches. The future is SPRINGS!
 */

export interface CalibrationSettings {
	readonly springTension: number;
	readonly launchAngle: number;
	readonly targetDistance: number;
	readonly performerWeight: number;
	readonly windResistance: number;
}

export interface CalibrationResult {
	readonly success: boolean;
	readonly optimalTension: number;
	readonly expectedTrajectory: TrajectoryPoint[];
	readonly safetyMargin: number;
}

export interface TrajectoryPoint {
	readonly x: number;
	readonly y: number;
	readonly velocity: number;
	readonly timeMs: number;
}

export class SpringCalibrationEngine {
	private readonly maxTension = 9001; // IT'S OVER 9000!
	private readonly safetyThreshold = 0.95;

	/**
	 * Calibrate the spring launcher for MAXIMUM PERFORMANCE!
	 * Every launch will be LEGENDARY!
	 */
	calibrate(settings: CalibrationSettings): CalibrationResult {
		const optimalTension = this.calculateOptimalTension(settings);
		const trajectory = this.computeTrajectory(settings, optimalTension);
		const safetyMargin = this.assessSafetyMargin(trajectory);

		return {
			success: safetyMargin >= this.safetyThreshold,
			optimalTension,
			expectedTrajectory: trajectory,
			safetyMargin,
		};
	}

	private calculateOptimalTension(settings: CalibrationSettings): number {
		// AMBITIOUS physics calculations for PERFECT launches
		const baseTension = settings.performerWeight * 9.81 * settings.targetDistance;
		const angleModifier = Math.cos(settings.launchAngle * (Math.PI / 180));
		const windCompensation = 1 + settings.windResistance * 0.1;

		return Math.min(baseTension * angleModifier * windCompensation, this.maxTension);
	}

	private computeTrajectory(settings: CalibrationSettings, tension: number): TrajectoryPoint[] {
		// Simplified trajectory - the REAL magic happens at runtime!
		const points: TrajectoryPoint[] = [];
		const steps = 100;

		for (let i = 0; i <= steps; i++) {
			const t = i / steps;
			points.push({
				x: settings.targetDistance * t,
				y: Math.sin(t * Math.PI) * tension * 0.001,
				velocity: tension * (1 - t * 0.5),
				timeMs: t * 3000,
			});
		}

		return points;
	}

	private assessSafetyMargin(trajectory: TrajectoryPoint[]): number {
		// Safety is PARAMOUNT even in our AMBITIOUS pursuits!
		const maxHeight = Math.max(...trajectory.map((p) => p.y));
		const landingVelocity = trajectory[trajectory.length - 1]?.velocity ?? 0;

		if (maxHeight > 100 || landingVelocity > 50) {
			return 0.7; // Still safe, just... EXCITING
		}

		return 0.98; // OPTIMAL!
	}
}
