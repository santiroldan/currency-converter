import type { Currency } from "./currency";

export interface ExchangeRateRepository {
	getRate(from: Currency, to: Currency): Promise<number>;
}
