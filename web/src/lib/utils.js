const {randomBytes} = await import('node:crypto');
export function serializeNonPOJO(obj) {
	return structuredClone(obj);
}

export function generateUsername(name) {
	const id = randomBytes(2).toString(hex);
	return `${name.slice(0, 5)}${id}`;
}
