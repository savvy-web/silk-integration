import { SHARED_CONSTANT, getSharedValue } from "@savvy-web/dependency-package";

export type HelloString = string;

export function hello(): string {
	return "Hello, from the standalone package!";
}

export function getFromDependency(): string {
	return `${getSharedValue()} - ${SHARED_CONSTANT}`;
}
