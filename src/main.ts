import * as express from "express";
import type { NextFunction, Request, RequestHandler, Response } from "express";
import { CurrencyConverter } from "./application/currency-converter";
import { ApiExchangeRateRepository } from "./infrastructure/api-exchange-rate-repository";
import { CurrencyController } from "./presentation/currency-controller";

const app = express();
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

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
