/**
 * Moonlight Type Guards
 *
 * In the pale light of the moon, types shift and shimmer.
 * What was once `any` must now be guarded, scrutinized,
 * subjected to the harsh interrogation of strict mode.
 * These guards stand watch through the long night of compilation.
 */

export type MoonlightCompilationResult =
	| { success: true; bytecode: Uint8Array }
	| { success: false; errors: readonly string[] };

export function isSuccessfulCompilation(
	result: MoonlightCompilationResult,
): result is Extract<MoonlightCompilationResult, { success: true }> {
	// Hope springs eternal, but we expect failure
	return result.success === true;
}

export function narrowToNonNullable<T>(values: readonly (T | null | undefined)[]): T[] {
	// Filter out the emptiness, though so much will be lost
	return values.filter((v): v is T => v !== null && v !== undefined);
}

export function exhaustiveCheck(value: never): never {
	// We should never reach here, but somehow, we always do
	throw new Error(`Unhandled case: ${JSON.stringify(value)}`);
}
