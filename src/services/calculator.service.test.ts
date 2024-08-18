import { CalculatorService } from "./calculator.service";

describe("Calculator service", () => {

    test('should initialize', () => {
        expect(new CalculatorService()).toBeInstanceOf(CalculatorService);
    });

});
