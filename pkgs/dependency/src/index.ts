export type SharedValue = string | number;

/**
 * A shared utility function from the dependency package
 */
export function getSharedValue(): SharedValue {
	return "shared-value-from-dependency";
}

/**
 * A shared constant that other packages can use
 */
export const SHARED_CONSTANT = "DEPENDENCY_CONSTANT";
