export class CalculatorService {
  private input: string;

  private result?: number;

  constructor(input = "") {
    this.input = input;
  }

  calculate() {
    if (!this.input) {
      this.result = 0;
    } else {
      this.result = this.input
        .split(/, ?/i)
        .filter((num) => !isNaN(+num))
        .reduce((acc: number, next: string) => acc + +next, 0);
    }

    return this.result;
  }
}
