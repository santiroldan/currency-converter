import { describe, expect, it, vi } from "vitest";
import { CurrencyConverter } from "../../src/application/currency-converter";
import { Currency } from "../../src/domain/currency";

const mockRepo = {
	getRate: vi.fn().mockResolvedValue(0.85),
};

describe("CurrencyConverter", () => {
	it("should convert currencies using the repository", async () => {
		const useCase = new CurrencyConverter(mockRepo);

		const result = await useCase.run({ amount: 100, from: "USD", to: "EUR" });

		expect(result.amount).toBe(85);
		expect(result.currency.value).toBe("EUR");
		expect(mockRepo.getRate).toHaveBeenCalledWith(
			expect.any(Currency),
			expect.any(Currency),
		);
	});

	it("should throw an error if the currency is invalid", async () => {
		const useCase = new CurrencyConverter(mockRepo);

		await expect(
			useCase.run({ amount: 100, from: "INVALID", to: "EUR" }),
		).rejects.toThrow("Invalid currency code: INVALID");
	});

	it("should throw an error if the amount is negative", async () => {
		const useCase = new CurrencyConverter(mockRepo);

		await expect(
			useCase.run({ amount: -100, from: "USD", to: "EUR" }),
		).rejects.toThrow("Amount must be non-negative");
	});
});
