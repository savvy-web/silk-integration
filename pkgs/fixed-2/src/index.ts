import { SHARED_CONSTANT, getSharedValue } from "@savvy-web/dependency-package";

export type FixedTwoValue = string;

/**
 * A function from fixed-2 package
 */
export function getFixedTwoValue(): FixedTwoValue {
	return "value-from-fixed-2";
}

/**
 * A function that uses the dependency package
 */
export function getFixedTwoWithDependency(): string {
	return `fixed-2: ${getSharedValue()} - ${SHARED_CONSTANT}`;
}
