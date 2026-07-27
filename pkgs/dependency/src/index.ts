/**
 * A value shared between dependent packages: either a string or a number.
 *
 * @public
 */
export type SharedValue = string | number;

/**
 * A shared utility function from the dependency package.
 *
 * @public
 */
export function getSharedValue(): SharedValue {
	return "shared-value-from-dependency";
}

/**
 * A shared constant that other packages can use.
 *
 * @public
 */
export const SHARED_CONSTANT = "DEPENDENCY_CONSTANT";
