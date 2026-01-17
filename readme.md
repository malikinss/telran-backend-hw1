# Homework 1: Sportlotto Application 🎱

## Description 📝

This is a `TypeScript`-based `CLI` application that simulates a simple lottery draw (Sportloto).  
It generates a set of unique random numbers within a specified range.  
The application supports custom input through command-line arguments and includes validation and testing.

## Purpose 🎯

-   Practice Object-Oriented Programming in `TypeScript`
-   Learn command-line argument parsing in `Node.js`
-   Use strong input validation techniques
-   Get familiar with writing unit tests using `Jest`

## How It Works 🔍

The application accepts up to three optional arguments via the command line:

1. **`Amount`** – how many unique numbers to generate (default: `7`)
2. **`Min`** – the minimum number in the range (default: `1`)
3. **`Max`** – the maximum number in the range (default: `49`)

The app:

-   Validates that all values are integers and make logical sense
-   Ensures the amount of numbers doesn't exceed the size of the range
-   Uses a class (`Lotto`) to generate the numbers
-   Uses a class (`Validator`) to validate input
-   Outputs sorted unique numbers in ascending order

## Output 📜

Example command:

```bash
npx ts-node src/main.ts 6 10 40
```

Example output:

```
🎱 Sportloto numbers: 12, 16, 22, 31, 35, 39
```

If incorrect arguments are passed:

```
❌ Error: Range is too small for the required amount of unique numbers.
```

## Usage 📦

1. Download the project directory.
2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the application (with default arguments):

    ```bash
    npm start
    ```

4. Run with custom arguments:

    ```bash
    npx ts-node src/main.ts <amount> <min> <max>
    ```

5. Run tests:

    ```bash
    npm test
    ```

## Project Structure 🗂

```
HW1/
│
├── src/
│   ├── index.ts         # CLI entry point
│   ├── Lotto.ts        # Lottery number generator class
│   └── Validator.ts    # Input validation class
│
├── tests/          # Unit tests
│   ├── Lotto.test.ts
│   └── Validator.test.ts
│
├── package.json
├── tsconfig.json
├── jest.config.js
├── README.md
└── .gitignore
```

## Conclusion 🚀

This project is a great way to learn how to:

-   Work with `CLI` arguments in `Node.js`
-   Organize logic using classes
-   Ensure input validation
-   Write and run unit tests with Jest

---

Made with ❤️ and `TypeScript`
