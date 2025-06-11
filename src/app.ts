import express, { type Express } from "express";
import type { NextFunction, Request, RequestHandler, Response } from "express";
import { CurrencyConverter } from "./application/currency-converter";
import { ApiExchangeRateRepository } from "./infrastructure/api-exchange-rate-repository";
import { CurrencyController } from "./presentation/currency-controller";

const app: Express = express();
app.use(express.json());

const exchangeRateRepo = new ApiExchangeRateRepository();
const convertCurrency = new CurrencyConverter(exchangeRateRepo);
const currencyController = new CurrencyController(convertCurrency);

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
