import type { Currency } from "./currency";

export class Money {
	constructor(
		public readonly amount: number,
		public readonly currency: Currency,
	) {
		this.validateAmount(amount);
	}

	public convert(rate: number, toCurrency: Currency): Money {
		const convertedAmount = this.amount * rate;
		return new Money(convertedAmount, toCurrency);
	}

	private validateAmount(amount: number): void {
		if (amount < 0) {
			throw new Error("Amount must be non-negative");
		}

		if (Number.isNaN(amount)) {
			throw new Error("Amount must be a valid number");
		}
	}
}
