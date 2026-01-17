// src/Validator.ts

/**
 * Validator class ✅
 *
 * Provides static methods to validate input parameters for Lotto number generation.
 * Ensures the values are integers, logically correct, and that the range can support
 * the desired amount of unique numbers.
 *
 * @class Validator
 */
class Validator {
	static messages: {
		minMax: string;
		amountPositive: string;
		rangeTooSmall: string;
		notInteger: string;
		notAllIntegers: string;
	} = {
		minMax: "Min must be less than max.",
		amountPositive: "Amount must be positive.",
		rangeTooSmall:
			"Range is too small for the required amount of unique numbers.",
		notInteger: "Argument must be integer: ",
		notAllIntegers: "All arguments must be integers.",
	};

	/**
	 * Validates all input parameters.
	 *
	 * @param min - Minimum value of the range
	 * @param max - Maximum value of the range
	 * @param amount - Number of unique numbers to generate
	 *
	 * @throws Error if any validation check fails
	 */
	public static validate(min: number, max: number, amount: number): void {
		this.validateIntegers(min, max, amount);
		this.validateMinMax(min, max);
		this.validateAmount(amount);
		this.validateRange(min, max, amount);
	}

	/**
	 * Validates that a single number is an integer.
	 *
	 * @param num - The number to validate
	 * @param name - The name of the parameter (for error message)
	 *
	 * @throws Error if num is not an integer
	 */
	private static validateInteger(num: number, name: string): void {
		if (!Number.isInteger(num)) {
			throw new Error(this.messages.notInteger + `${name}`);
		}
	}

	/**
	 * Validates that all input parameters are integers.
	 *
	 * @param min - Minimum value of the range
	 * @param max - Maximum value of the range
	 * @param amount - Number of unique numbers to generate
	 *
	 * @throws Error if any parameter is not an integer
	 */
	private static validateIntegers(
		min: number,
		max: number,
		amount: number
	): void {
		this.validateInteger(min, "min");
		this.validateInteger(max, "max");
		this.validateInteger(amount, "amount");
	}

	/**
	 * Validates that the minimum is less than the maximum.
	 *
	 * @param min - Minimum value of the range
	 * @param max - Maximum value of the range
	 *
	 * @throws Error if min is greater than or equal to max
	 */
	private static validateMinMax(min: number, max: number): void {
		if (min >= max) {
			throw new Error(this.messages.minMax);
		}
	}

	/**
	 * Validates that the amount is a positive number.
	 *
	 * @param amount - Number of unique numbers to generate
	 *
	 * @throws Error if amount is not positive
	 */
	private static validateAmount(amount: number): void {
		if (amount <= 0) {
			throw new Error(this.messages.amountPositive);
		}
	}

	/**
	 * Validates that the range [min, max] is large enough to generate the desired amount of unique numbers.
	 *
	 * @param min - Minimum value of the range
	 * @param max - Maximum value of the range
	 * @param amount - Number of unique numbers to generate
	 *
	 * @throws Error if range is too small for the given amount
	 */
	private static validateRange(
		min: number,
		max: number,
		amount: number
	): void {
		if (max - min + 1 < amount) {
			throw new Error(this.messages.rangeTooSmall);
		}
	}
}

export = Validator;
