/**
 * Cannon to Spring Migrator
 *
 * The BOLD migration tool that transforms your legacy cannon-based circus
 * into a MODERN, SPRING-POWERED spectacle of the future!
 *
 * BREAKING CHANGE: launchFromCannon() is DEAD. Long live springLaunch()!
 */

export interface LegacyCannonConfig {
	readonly gunpowderAmount: number;
	readonly barrelAngle: number;
	readonly fuseLength: number;
}

export interface ModernSpringConfig {
	readonly springTension: number;
	readonly launchAngle: number;
	readonly releaseDelay: number;
}

export interface MigrationReport {
	readonly success: boolean;
	readonly originalConfig: LegacyCannonConfig;
	readonly migratedConfig: ModernSpringConfig;
	readonly warnings: string[];
	readonly improvements: string[];
}

/**
 * @deprecated Use springLaunch() instead - the future is NOW!
 */
export function launchFromCannon(_config: LegacyCannonConfig): never {
	throw new Error(
		"BREAKING CHANGE: launchFromCannon() has been removed! " +
			"Migrate to springLaunch() for a SAFER, more SPECTACULAR circus experience!",
	);
}

export class CannonToSpringMigrator {
	/**
	 * Transform your outdated cannon configs into REVOLUTIONARY spring configs!
	 */
	migrate(legacyConfig: LegacyCannonConfig): MigrationReport {
		const warnings: string[] = [];
		const improvements: string[] = [];

		// Convert gunpowder energy to spring tension
		const springTension = this.convertGunpowderToTension(legacyConfig.gunpowderAmount);

		if (legacyConfig.gunpowderAmount > 100) {
			warnings.push("High gunpowder amounts detected - your performers will thank you for springs!");
		}

		improvements.push("No more singed eyebrows!");
		improvements.push("Precise, repeatable launches every time!");
		improvements.push("Environmentally friendly - no more smoke!");
		improvements.push("OSHA compliance achieved!");

		const migratedConfig: ModernSpringConfig = {
			springTension,
			launchAngle: legacyConfig.barrelAngle,
			releaseDelay: legacyConfig.fuseLength * 100, // Fuse to milliseconds
		};

		return {
			success: true,
			originalConfig: legacyConfig,
			migratedConfig,
			warnings,
			improvements,
		};
	}

	private convertGunpowderToTension(gunpowder: number): number {
		// 1 unit of gunpowder = roughly 50 units of spring tension
		// Springs are MORE EFFICIENT and MORE CONTROLLABLE!
		return gunpowder * 50;
	}

	/**
	 * Batch migrate ALL your legacy configs at once!
	 * Because we're AMBITIOUS and don't do things halfway!
	 */
	migrateAll(configs: LegacyCannonConfig[]): MigrationReport[] {
		return configs.map((config) => this.migrate(config));
	}
}
