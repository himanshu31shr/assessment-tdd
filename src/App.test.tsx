import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App container", () => {
  test("renders correctly", () => {
    render(<App />);
    const element = screen.getByText(/String Calculator/i);
    expect(element).toBeInTheDocument();
  });

  test("renders nav bar", () => {
    render(<App />);
    const element = screen.getByTestId("navbar-loaded");
    expect(element).toBeInTheDocument();
  });
});
