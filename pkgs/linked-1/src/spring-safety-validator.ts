/**
 * Spring Safety Validator
 *
 * Even the most AMBITIOUS circus needs RIGOROUS safety standards!
 * This validator ensures every spring launch meets our LEGENDARY safety requirements.
 */

export interface SafetyCheck {
	readonly name: string;
	readonly passed: boolean;
	readonly details: string;
	readonly severity: "critical" | "warning" | "info";
}

export interface ValidationResult {
	readonly approved: boolean;
	readonly checks: SafetyCheck[];
	readonly overallScore: number;
	readonly certification: string | null;
}

export interface LaunchParameters {
	readonly springTension: number;
	readonly performerWeight: number;
	readonly netDistance: number;
	readonly hasBackupNet: boolean;
	readonly performerExperience: "novice" | "intermediate" | "expert" | "legendary";
}

export class SpringSafetyValidator {
	private readonly minNetDistance = 5;
	private readonly maxTensionForNovice = 3000;
	private readonly legendaryThreshold = 8000;

	/**
	 * Validate launch parameters with UNCOMPROMISING safety standards!
	 */
	validate(params: LaunchParameters): ValidationResult {
		const checks: SafetyCheck[] = [];

		// Check 1: Net distance
		checks.push(this.checkNetDistance(params));

		// Check 2: Tension vs Experience
		checks.push(this.checkTensionExperience(params));

		// Check 3: Backup net requirement
		checks.push(this.checkBackupNet(params));

		// Check 4: Weight-to-tension ratio
		checks.push(this.checkWeightRatio(params));

		const criticalFailures = checks.filter((c) => c.severity === "critical" && !c.passed);
		const overallScore = checks.filter((c) => c.passed).length / checks.length;

		return {
			approved: criticalFailures.length === 0 && overallScore >= 0.75,
			checks,
			overallScore,
			certification: this.determineCertification(overallScore, params),
		};
	}

	private checkNetDistance(params: LaunchParameters): SafetyCheck {
		const passed = params.netDistance >= this.minNetDistance;
		return {
			name: "Safety Net Distance",
			passed,
			details: passed
				? `Net at ${params.netDistance}m - EXCELLENT positioning!`
				: `Net at ${params.netDistance}m is too close! Minimum ${this.minNetDistance}m required.`,
			severity: "critical",
		};
	}

	private checkTensionExperience(params: LaunchParameters): SafetyCheck {
		const maxAllowed = this.getMaxTensionForExperience(params.performerExperience);
		const passed = params.springTension <= maxAllowed;

		return {
			name: "Tension vs Experience",
			passed,
			details: passed
				? `Tension ${params.springTension} is appropriate for ${params.performerExperience} level!`
				: `Tension ${params.springTension} exceeds safe limit of ${maxAllowed} for ${params.performerExperience} performers.`,
			severity: params.performerExperience === "legendary" ? "warning" : "critical",
		};
	}

	private checkBackupNet(params: LaunchParameters): SafetyCheck {
		return {
			name: "Backup Safety Net",
			passed: params.hasBackupNet,
			details: params.hasBackupNet
				? "Backup net confirmed - DOUBLE the safety!"
				: "No backup net - consider adding one for extra safety.",
			severity: "warning",
		};
	}

	private checkWeightRatio(params: LaunchParameters): SafetyCheck {
		const ratio = params.springTension / params.performerWeight;
		const passed = ratio >= 20 && ratio <= 100;

		return {
			name: "Weight-to-Tension Ratio",
			passed,
			details: passed
				? `Ratio of ${ratio.toFixed(1)} is in the OPTIMAL range!`
				: `Ratio of ${ratio.toFixed(1)} is outside safe bounds (20-100).`,
			severity: "critical",
		};
	}

	private getMaxTensionForExperience(experience: LaunchParameters["performerExperience"]): number {
		const limits: Record<LaunchParameters["performerExperience"], number> = {
			novice: this.maxTensionForNovice,
			intermediate: 5000,
			expert: 7000,
			legendary: this.legendaryThreshold,
		};
		return limits[experience];
	}

	private determineCertification(score: number, params: LaunchParameters): string | null {
		if (score < 0.75) return null;
		if (score === 1 && params.performerExperience === "legendary") {
			return "LEGENDARY LAUNCH CERTIFIED - Maximum Spectacle Approved!";
		}
		if (score >= 0.9) return "GOLD CERTIFIED - Excellence in Safety!";
		return "STANDARD CERTIFIED - Safe for Performance";
	}
}
