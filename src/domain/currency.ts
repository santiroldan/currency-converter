export class Currency {
	private constructor(private readonly code: string) {}

	public static create(code: string): Currency {
		const currencyCode = code.toUpperCase();

		if (!/^[A-Z]{3}$/.test(currencyCode)) {
			throw new Error(`Invalid currency code: ${code}`);
		}

		if (currencyCode.length !== 3) {
			throw new Error(`Currency code must be 3 characters long: ${code}`);
		}

		return new Currency(currencyCode);
	}

	public get value(): string {
		return this.code;
	}
}
