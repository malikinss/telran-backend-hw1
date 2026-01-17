// src/Lotto.ts

/**
 * Lotto class 🎱
 *
 * This class is responsible for generating a set of unique random numbers
 * within a specified inclusive range. The numbers are returned in ascending order.
 *
 * Used in CLI-based Sportloto applications.
 *
 * @class Lotto
 */
class Lotto {
	private min: number;
	private max: number;
	private amount: number;

	/**
	 * Creates an instance of the Lotto class.
	 *
	 * @param min - Minimum number in the range (inclusive)
	 * @param max - Maximum number in the range (inclusive)
	 * @param amount - Number of unique random numbers to generate
	 */
	constructor(min: number, max: number, amount: number) {
		this.min = min;
		this.max = max;
		this.amount = amount;
	}

	/**
	 * Generates a sorted array of unique random numbers within the defined range.
	 *
	 * @returns An array of unique random numbers in ascending order
	 */
	public generate(): number[] {
		const numbers = new Set<number>();
		while (numbers.size < this.amount) {
			const num = this.getRandomNumber();
			numbers.add(num);
		}
		return Array.from(numbers).sort((a, b) => a - b);
	}

	/**
	 * Generates a random number within the defined range.
	 *
	 * @returns A random number between min and max (inclusive)
	 */
	private getRandomNumber(): number {
		return (
			Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
		);
	}
}

export = Lotto;
