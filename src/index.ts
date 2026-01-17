// index.ts

/**
 * CLI Entry Point for Sportloto Application 🎱
 *
 * Parses command-line arguments, validates input, and outputs a list of unique
 * random lottery numbers within a specified range.
 *
 * - Default values:
 *   amount = 7
 *   min = 1
 *   max = 49
 *
 * Example usage:
 *   npx ts-node src/index.ts 6 10 40
 *
 * Output:
 *   🎱 Sportloto numbers: 12, 16, 22, 31, 35, 39
 *
 * Error handling:
 *   Displays a user-friendly error message and exits with code 1
 */
import Lotto = require("./Lotto");
import Validator = require("./Validator");

const [, , amountArg, minArg, maxArg] = process.argv;

const amount = parseInt(amountArg || "7", 10);
const min = parseInt(minArg || "1", 10);
const max = parseInt(maxArg || "49", 10);

try {
	Validator.validate(min, max, amount);
	const lotto = new Lotto(min, max, amount);
	const result = lotto.generate();
	console.log("🎱 Sportloto numbers:", result.join(", "));
} catch (err) {
	console.error("❌ Error:", (err as Error).message);
	process.exit(1);
}
