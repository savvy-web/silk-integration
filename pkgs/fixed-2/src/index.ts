import { SHARED_CONSTANT, getSharedValue } from "@savvy-web/dependency-package";

/**
 * The string value type returned by fixed-2's accessors.
 *
 * @public
 */
export type FixedTwoValue = string;

/**
 * A function from fixed-2 package
 *
 * @public
 */
export function getFixedTwoValue(): FixedTwoValue {
	return "value-from-fixed-2";
}

/**
 * A function that uses the dependency package
 *
 * @public
 */
export function getFixedTwoWithDependency(): string {
	return `fixed-2: ${getSharedValue()} - ${SHARED_CONSTANT}`;
}
