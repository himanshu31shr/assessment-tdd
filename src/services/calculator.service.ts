/**
 * CalculatorService class for calculating the sum of numbers in a string.
 */
export class CalculatorService {
  /**
   * The input string to be processed.
   */
  private input: string;

  /**
   * The result of the calculation.
   */
  private result?: bigint;

  /**
   * An additional delimiter to be used in the calculation.
   */
  private additionalDelimiter?: string;

  /**
   * Constructor for the CalculatorService class.
   * @param input The input string to be processed. Defaults to an empty string.
   */
  constructor(input = "") {
    // Replace all occurrences of "\n" with actual newline characters.
    this.input = input.replace(/\\n/g, "\n");
  }

  /**
   * Finds an additional delimiter in the input string.
   */
  findAdditionalDelimiter() {
    // Check if the input string starts with "//" and has a non-numeric character at index 2.
    const index = this.input.indexOf("//");
    if (index !== -1 && index === 0) {
      if (!isNaN(+this.input[2])) {
        // Throw an error if the delimiter is a number.
        throw new Error(
          "Custom delimiter definition discard: Delimiters cannot be numbers!"
        );
      }
      // Set the additional delimiter to the character at index 2.
      this.additionalDelimiter = this.input[2];
    }
  }

  /**
   * Filters out non-numeric strings.
   * @param num The string to be filtered.
   * @returns True if the string is numeric, false otherwise.
   */
  private _filter(num: string) {
    return !isNaN(+num) && !!num;
  }

  /**
   * Sums two numbers.
   * @param prev The previous sum.
   * @param next The next number to be added.
   * @returns The new sum.
   */
  private _sum(prev: bigint, next: string) {
    return BigInt(prev) + BigInt(next.trim());
  }

  /**
   * Gets the delimiters to be used in the calculation.
   * @returns A regular expression matching the delimiters.
   */
  private get _delimiters(): RegExp {
    if (this.additionalDelimiter) {
      // If an additional delimiter is set, include it in the regular expression.
      return new RegExp(`[${this.additionalDelimiter}|,|\\n|\\r]`, "i");
    }

    // Otherwise, use the default delimiters (comma, newline, and carriage return).
    return new RegExp(/[,|\n|\\n|\\r]/i);
  }

  /**
   * Calculates the sum of numbers in the input string.
   * @returns The result of the calculation.
   */
  calculate() {
    if (!this.input) {
      // If the input string is empty, set the result to 0.
      this.result = 0n;
    } else {
      // Split the input string into an array of numbers using the delimiters.
      let parsed = this.input.split(this._delimiters).filter(this._filter);
      // Find any negative numbers in the array.
      const negativeNumbers = parsed.filter((num: string) => +num < 0);

      if (negativeNumbers.length) {
        // Throw an error if any negative numbers are found.
        throw new Error(
          `Input string has (${negativeNumbers.join(", ")}) negative numbers!`
        );
      }

      // Calculate the sum of the numbers using the _sum function.
      this.result = parsed.reduce(this._sum, 0n);
    }

    return this.result;
  }
}
