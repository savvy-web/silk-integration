import { SHARED_CONSTANT, getSharedValue } from "@savvy-web/dependency-package";

/**
 * String value produced by the linked-2 package.
 *
 * @public
 */
export type LinkedTwoValue = string;

/**
 * A function from linked-2 package
 *
 * @public
 */
export function getLinkedTwoValue(): LinkedTwoValue {
	return "value-from-linked-2";
}

/**
 * A function that uses the dependency package
 *
 * @public
 */
export function getLinkedTwoWithDependency(): string {
	return `linked-2: ${getSharedValue()} - ${SHARED_CONSTANT}`;
}
