import { SHARED_CONSTANT, getSharedValue } from "@savvy-web/dependency-package";

export * from "./theatre-finale-curtain.js";

export type LinkedTwoValue = string;

/**
 * A function from linked-2 package
 */
export function getLinkedTwoValue(): LinkedTwoValue {
	return "value-from-linked-2";
}

/**
 * A function that uses the dependency package
 */
export function getLinkedTwoWithDependency(): string {
	return `linked-2: ${getSharedValue()} - ${SHARED_CONSTANT}`;
}
