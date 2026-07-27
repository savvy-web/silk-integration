import { SHARED_CONSTANT, getSharedValue } from "@savvy-web/dependency-package";

/**
 * String type returned by the standalone package's greeting helpers.
 *
 * @public
 */
export type HelloString = string;

/**
 * Returns a greeting from the standalone package.
 *
 * @public
 */
export function hello(): string {
	return "Hello, from the standalone package!";
}

/**
 * Returns a greeting combining a value and a constant from the dependency package.
 *
 * @public
 */
export function getFromDependency(): string {
	return `${getSharedValue()} - ${SHARED_CONSTANT}`;
}
