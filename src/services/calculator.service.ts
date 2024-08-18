export class CalculatorService {
  private input: string;

  private result?: bigint;

  private additionalDelimiter?: string;

  constructor(input = "") {
    this.input = input.replace(/\\n/g, "\n");
  }

  findAdditionalDelimiter() {
    const index = this.input.indexOf("//");
    if (index !== -1 && index === 0) {
      if (!isNaN(+this.input[2])) {
        throw new Error(
          "Custom delimiter definition discard: Delimiters cannot be numbers!"
        );
      }
      this.additionalDelimiter = this.input[2];
    }
  }

  private _filter(num: string) {
    return !isNaN(+num) && !!num;
  }

  private _sum(prev: bigint, next: string) {
    return BigInt(prev) + BigInt(next.trim());
  }

  private get _delimiters(): RegExp {
    if (this.additionalDelimiter) {
      return new RegExp(`[${this.additionalDelimiter}|,|\\n|\\r]`, "i");
    }

    return new RegExp(/[,|\n|\\n|\\r]/i);
  }

  calculate() {
    if (!this.input) {
      this.result = 0n;
    } else {
      let parsed = this.input.split(this._delimiters).filter(this._filter);
      const negativeNumbers = parsed.filter((num: string) => +num < 0);

      if (negativeNumbers.length) {
        throw new Error(
          `Input string has (${negativeNumbers.join(", ")}) negative numbers!`
        );
      }

      this.result = parsed.reduce(this._sum, 0n);
    }

    return this.result;
  }
}
