import express, { type Express } from "express";
import type { NextFunction, Request, RequestHandler, Response } from "express";
import { CurrencyConverter } from "./application/currency-converter";
import { ExchangeRateAdapter } from "./infrastructure/adapters/exchange-rate-adapter";
import { ExchangeRateController } from "./infrastructure/http/exchange-rate-controller";

const app: Express = express();
app.use(express.json());

const exchangeRateRepo = new ExchangeRateAdapter();
const convertCurrency = new CurrencyConverter(exchangeRateRepo);
const currencyController = new ExchangeRateController(convertCurrency);

function asyncHandler(
	fn: (req: Request, res: Response, next: NextFunction) => Promise<unknown>,
): RequestHandler {
	return (req, res, next) => {
		fn(req, res, next).catch(next);
	};
}

app.get(
	"/convert",
	asyncHandler(currencyController.convert.bind(currencyController)),
);

export { app };
