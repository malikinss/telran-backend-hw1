// tests/Validator.test.ts

/**
 * Unit tests for Validator class using Node.js built-in test runner 🧪
 *
 * This test suite verifies validation logic for:
 * - Correct input that should not throw
 * - Invalid amount exceeding range
 * - Invalid min/max relationship
 * - Non-integer input values
 *
 * Usage:
 *   npm test
 */
const test = require("node:test");
import Validator = require("../src/Validator");

describe("Validator", () => {
	it("should not throw for valid values", () => {
		expect(() => Validator.validate(1, 49, 7)).not.toThrow();
	});

	it("should throw for invalid amount", () => {
		expect(() => Validator.validate(1, 10, 15)).toThrow(
			"Range is too small"
		);
	});

	it("should throw if min >= max", () => {
		expect(() => Validator.validate(10, 10, 2)).toThrow(
			"Min must be less than max"
		);
	});

	it("should throw for non-integer values", () => {
		expect(() => Validator.validate(1.5, 10, 5)).toThrow(
			"must be integer"
		);
	});
});
