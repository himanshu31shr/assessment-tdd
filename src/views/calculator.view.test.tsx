import { fireEvent, render, screen } from "@testing-library/react";
import { StringCalculator } from "./calculator.view";
import userEvent from "@testing-library/user-event";

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

  test("default result is empty string", () => {
    render(<StringCalculator />);
    const element = screen.getByTestId(/results-container/i);
    expect(element.textContent).toBe("");
  });

  test("results 0 when no string is entered", async () => {
    render(<StringCalculator />);

    const element = screen.getByTestId(/results-container/i);
    const button = screen.getByRole("button");
    const textBox = screen.getByRole("textbox");

    expect(element).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(textBox).toBeInTheDocument();

    await userEvent.type(textBox, "");

    await fireEvent.click(button);
    expect(element.textContent).toBe("0");
  });
});
