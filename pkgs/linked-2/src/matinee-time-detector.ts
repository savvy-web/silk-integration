/**
 * Matinee time detection utilities
 * Helps determine if we're in afternoon performance mode
 */

export interface MatineeTimeConfig {
	startHour: number;
	endHour: number;
}

export function isMatineeTime(_config: MatineeTimeConfig): boolean {
	// Placeholder for matinee time detection
	return false;
}
