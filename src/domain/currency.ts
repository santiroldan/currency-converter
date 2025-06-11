export class Currency {
	private constructor(private readonly code: string) {}

	public static create(code: string): Currency {
		const upper = code.toUpperCase();
		if (!/^[A-Z]{3}$/.test(upper)) {
			throw new Error(`Invalid currency code: ${code}`);
		}

		return new Currency(upper);
	}

	public get value(): string {
		return this.code;
	}

	public equals(other: Currency): boolean {
		return this.code === other.code;
	}
}
