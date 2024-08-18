import { render, screen } from "@testing-library/react";
import { StringCalculator } from "./calculator.view";

describe("Calculator view", () => {
  test("renders correctly", () => {
    render(<StringCalculator />);
    const element = screen.getByText(/Results/i);
    expect(element).toBeInTheDocument();
  });

  test("renders input textarea", () => {
    render(<StringCalculator />);
    const element = screen.getByRole("textbox");
    expect(element).toBeInTheDocument();
  });

  test("renders result container", () => {
    render(<StringCalculator />);
    const element = screen.getByTestId(/results-container/i);
    expect(element).toBeInTheDocument();
  });
});
