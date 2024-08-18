export class CalculatorService {
  private input: string;

  private result?: bigint;

  constructor(input = "") {
    this.input = input;
  }

  calculate() {
    if (!this.input) {
      this.result = 0n;
    } else {
      this.result = this.input
        .split(/, ?/i)
        .filter((num) => !isNaN(+num))
        .reduce(
          (prev: number | bigint, next: string) => BigInt(prev) + BigInt(next),
          0n
        );
    }

    return this.result;
  }
}
