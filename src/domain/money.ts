import type { Currency } from "./currency";

export class Money {
	constructor(
		public readonly amount: number,
		public readonly currency: Currency,
	) {
		if (amount < 0) throw new Error("Amount must be non-negative");
	}

	public convert(rate: number, toCurrency: Currency): Money {
		const convertedAmount = this.amount * rate;
		return new Money(convertedAmount, toCurrency);
	}
}
