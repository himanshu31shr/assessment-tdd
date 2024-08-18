import { useState } from "react";

import { Info } from "./info.component";
import { CalculatorService } from "../../services/calculator.service";
import { ResultComponent } from "./result.component";

/**
 * StringCalculator functional component.
 */
export const StringCalculator: React.FC = () => {
  /**
   * State variable to store the input string.
   */
  const [input, setInput] = useState<string>("");

  /**
   * State variable to store the calculation result.
   */
  const [result, setResult] = useState<string>();

  /**
   * State variable to store any error messages.
   */
  const [info, setInfo] = useState<string>("");

  /**
   * Handles changes to the input textarea.
   * @param event The change event.
   */
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Update the input state with the new value.
    setInput(event.target.value);
  };

  /**
   * Triggers the calculation when the button is clicked.
   * @param event The mouse click event.
   */
  const triggerChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // Clear any previous error messages.
    setInfo("");
    try {
      // Create a new instance of the CalculatorService with the input string.
      const service = new CalculatorService(input);
      // Find any additional delimiters in the input string.
      service.findAdditionalDelimiter();
      // Calculate the result and update the state.
      setResult(service.calculate().toString());
    } catch (err) {
      // Catch any errors and update the info state with the error message.
      if (err instanceof Error) {
        setInfo(err.message);
        // Set a default error message if something breaks.
        setResult("Snap, Something broke!");
      }
    }
  };

  // JSX for the component
  return (
    <div className="row justify-content-center">
      <div className="col-12">
        <Info />
      </div>
      <div className="col-4 ">
        <label htmlFor="input-text" className="form-label">
          Enter sequence to be parsed
        </label>
        <textarea
          className="form-control border-1 rounded-1"
          id="input-text"
          rows={6}
          onChange={handleChange}
          name="inputText"
        ></textarea>
        {/* Display error messages if any */}
        {!!info && (
          <p
            className="bg-danger text-light m-0 mt-3 p-2 rounded-1"
            data-testid="message-container"
          >
            {info}
          </p>
        )}
        {/* Calculate button */}
        <div className="d-grid mt-3">
          <button className="btn btn-primary" onClick={triggerChange}>
            Calculate
          </button>
        </div>
      </div>
      <div className="col-4 text-center">
        <ResultComponent result={result} />
      </div>
    </div>
  );
};
