import { CalculatorService } from "./calculator.service";

type InputData = Array<Array<string | number>>;

const inputs: InputData = [
  ["1,2,3,4,5", 1 + 2 + 3 + 4 + 5],
  ["1, 3, 4,5, , 5", 1 + 3 + 4 + 5 + 5],
  ["1,5", 1 + 5],
  ["1,,    2,,,,ddff,10", 1 + 2 + 10],
];

describe("Calculator service", () => {
  test("should initialize", () => {
    const input = "";
    expect(new CalculatorService(input)).toBeInstanceOf(CalculatorService);
  });

  test("should return 0 with empty input", () => {
    const input = "";
    const service = new CalculatorService(input);
    expect(service.calculate()).toEqual(0);
  });

  for (let arr of inputs) {
    test("should return sum with comma seperated numbers " + arr[0], () => {
      const service = new CalculatorService(arr[0] as string);
      expect(service.calculate()).toEqual(arr[1] as number);
    });
  }
});
