import type { NextFunction, Request, Response } from "express";
import type { CurrencyConverter } from "../../application/currency-converter";

export class ExchangeRateController {
	constructor(private currencyConverter: CurrencyConverter) {}

	public async convert(req: Request, res: Response, _next: NextFunction) {
		const { from, to, amount } = req.query;

		if (!from || !to || !amount) {
			return res
				.status(400)
				.json({ error: "from, to and amount query params are required" });
		}

		try {
			res.json(
				await this.currencyConverter.run({
					from: String(from),
					to: String(to),
					amount: Number(amount),
				}),
			);
		} catch (error) {
			let message = String(error);

			if (error instanceof Error) {
				message = error.message;
			}

			res.status(500).json({ error: message });
		}
	}
}
