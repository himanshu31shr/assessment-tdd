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

    await fireEvent.change(textBox, {
      target: {
        value: "",
      },
    });

    await fireEvent.click(button);
    expect(element.textContent).toBe("0");
  });

  test("results when specified data is provided", async () => {
    render(<StringCalculator />);

    const element = screen.getByTestId(/results-container/i);
    const button = screen.getByRole("button");
    const textBox = screen.getByRole("textbox");

    expect(element).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(textBox).toBeInTheDocument();

    await fireEvent.change(textBox, {
      target: {
        value: `//|
3|4|5,5,7 \n 10
10`,
      },
    });

    await fireEvent.click(button);
    expect(element.textContent).toBe((3 + 4 + 5 + 5 + 7 + 10 + 10).toString());
  });

  test("results when data contains negative numbers", async () => {
    render(<StringCalculator />);

    const element = screen.getByTestId(/results-container/i);
    const button = screen.getByRole("button");
    const textBox = screen.getByRole("textbox");

    expect(element).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(textBox).toBeInTheDocument();

    await fireEvent.change(textBox, {
      target: {
        value: `//|
3|4|5,5,7 \n -10
10`,
      },
    });

    await fireEvent.click(button);

    const messageContainer = screen.getByTestId("message-container");
    expect(messageContainer).toBeInTheDocument();

    expect(element.textContent).toBe("Snap, Something broke!");
    expect(messageContainer.textContent).toBe(
      "Input string has ( -10) negative numbers!"
    );
  });
});
