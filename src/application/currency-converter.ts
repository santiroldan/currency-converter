import { Currency } from "../domain/currency";
import type { ExchangeRateRepository } from "../domain/exchange-rate-repository";
import { Money } from "../domain/money";

export class ConvertCurrency {
	constructor(private readonly rateProvider: ExchangeRateRepository) {}

	public async run(params: {
		amount: number;
		from: string;
		to: string;
	}): Promise<Money> {
		const fromCurrency = Currency.create(params.from);
		const toCurrency = Currency.create(params.to);

		const rate = await this.rateProvider.getRate(fromCurrency, toCurrency);
		const money = new Money(params.amount, fromCurrency);

		return money.convert(rate, toCurrency);
	}
}
