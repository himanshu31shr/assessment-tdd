export class CalculatorService {
  private input: string;

  private result?: bigint;

  constructor(input = "") {
    this.input = input;
  }

  private _filter(num: string) {
    return !isNaN(+num) && !!num;
  }

  private _sum(prev: bigint, next: string) {
    return BigInt(prev) + BigInt(next.trim());
  }

  calculate() {
    if (!this.input) {
      this.result = 0n;
    } else {
      this.result = this.input
        .split(/[,|\n|\\n]/i)
        .filter(this._filter)
        .reduce(this._sum, 0n);
    }

    return this.result;
  }
}
