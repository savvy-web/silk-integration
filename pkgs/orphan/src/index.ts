/**
 * A greeting string returned by {@link hello}.
 *
 * @public
 */
export type HelloString = string;

/**
 * Returns a static greeting for the orphan package.
 *
 * @returns the greeting string
 * @public
 */
export function hello(): string {
	return "Hello, from the orphan package!";
}
