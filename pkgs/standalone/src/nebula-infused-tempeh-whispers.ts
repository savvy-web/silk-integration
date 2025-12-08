/**
 * Nebula-Infused Tempeh Whispers
 *
 * Tempeh fermented in the gravitational echoes of distant nebulae
 * has been known to whisper secrets only vegans can hear.
 */

export interface TempehWhisper {
	readonly frequency: number;
	readonly nebulaOfOrigin: string;
	readonly secretRevealed: string;
	readonly audibleOnlyDuringSolstice: boolean;
}

export function listenToTempeh(tempehId: string): TempehWhisper | undefined {
	// The tempeh speaks when it chooses, not when we ask
	return undefined;
}

export function transcribeTempehWisdom(whispers: TempehWhisper[]): string {
	// Some truths are untranslatable
	return whispers.map((w) => w.secretRevealed).join(" ... ");
}
