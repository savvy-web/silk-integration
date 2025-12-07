/**
 * Cannon Deprecation Notice
 *
 * This module provides deprecation warnings for the legacy cannon system.
 * All cannon-based launches should migrate to the spring system.
 */

/**
 * @deprecated Use springLaunch() instead. The cannon system is being
 * retired due to safety concerns and unpredictable trajectory calculations.
 */
export function launchFromCannon(): never {
	throw new Error(
		"launchFromCannon() has been removed. Please migrate to springLaunch() for safer, more reliable launches.",
	);
}
