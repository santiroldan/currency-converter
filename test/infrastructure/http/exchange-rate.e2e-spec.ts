import request from "supertest";
import { describe, expect, it } from "vitest";
import { app } from "../../../src/app";

describe("GET /convert", () => {
	it("should return a converted amount", async () => {
		const response = await request(app)
			.get("/convert")
			.query({ from: "USD", to: "EUR", amount: 100 });

		expect(response.status).toBe(200);
		expect(response.body.amount).toBeGreaterThan(0);
	});

	it("should return 400 if required query params are missing", async () => {
		const response = await request(app)
			.get("/convert")
			.query({ from: "USD", to: "EUR" });

		expect(response.status).toBe(400);
		expect(response.body.error).toBe(
			"from, to and amount query params are required",
		);
	});

	it("should return 500 if an error occurs", async () => {
		const response = await request(app)
			.get("/convert")
			.query({ from: "USD", to: "EUR", amount: "invalid" });

		expect(response.status).toBe(500);
		expect(response.body.error).toBeDefined();
	});
});
