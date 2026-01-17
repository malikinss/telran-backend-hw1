// tests/Lotto.test.ts

/**
 * Unit tests for Lotto class using Node.js built-in test runner 🧪
 *
 * This test suite checks:
 * - Correct number of generated values
 * - Uniqueness of numbers
 * - Numbers fall within the expected range
 * - Output is sorted in ascending order
 *
 * Usage:
 *   npm test
 */
const test = require("node:test");
import Lotto = require("../src/Lotto");

test.describe("Lotto Class", () => {
	it("should generate the correct amount of unique numbers", () => {
		const lotto = new Lotto(1, 49, 7);
		const result = lotto.generate();

		expect(result.length).toBe(7);
		expect(new Set(result).size).toBe(7); // Ensure uniqueness
		result.forEach((num) => {
			expect(num).toBeGreaterThanOrEqual(1);
			expect(num).toBeLessThanOrEqual(49);
		});
	});

	it("should generate sorted numbers", () => {
		const lotto = new Lotto(1, 10, 5);
		const result = lotto.generate();
		const sorted = [...result].sort((a, b) => a - b);
		expect(result).toEqual(sorted);
	});
});
