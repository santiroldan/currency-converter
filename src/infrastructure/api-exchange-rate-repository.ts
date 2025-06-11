import type { Currency } from "../domain/currency";
import type { ExchangeRateRepository } from "../domain/exchange-rate-repository";

export class ApiExchangeRateRepository implements ExchangeRateRepository {
	public async getRate(from: Currency, to: Currency): Promise<number> {
		const url = `https://api.frankfurter.app/latest?from=${from.value}&to=${to.value}`;
		const response = await fetch(url);
		const data = await response.json();

		if (!response.ok || !data.rates?.[to.value]) {
			throw new Error("Exchange rate not available");
		}

		return data.rates[to.value] || 0;
	}
}
