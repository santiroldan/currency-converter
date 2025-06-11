import { Currency } from "../domain/currency";
import type { ExchangeRateRepository } from "../domain/exchange-rate-repository";
import { Money } from "../domain/money";
import type { CurrencyConverterRequest } from "./currency-converter-request";
import type { CurrencyConverterResponse } from "./currency-converter-response";

export class CurrencyConverter {
	constructor(
		private readonly exchangeRateRepository: ExchangeRateRepository,
	) {}

	public async run(
		request: CurrencyConverterRequest,
	): Promise<CurrencyConverterResponse> {
		const fromCurrency = Currency.create(request.from);
		const toCurrency = Currency.create(request.to);

		const rate = await this.exchangeRateRepository.getRate(
			fromCurrency,
			toCurrency,
		);
		const money = new Money(request.amount, fromCurrency);
		const convertedMoney = money.convert(rate, toCurrency);

		return {
			amount: convertedMoney.amount,
			rate,
		};
	}
}
