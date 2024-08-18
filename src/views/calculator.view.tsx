import { useState } from "react";
import { CalculatorService } from "../services/calculator.service";

export const StringCalculator: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>();
  const [info, setInfo] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  const triggerChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setInfo("");
    try {
      const service = new CalculatorService(input);
      service.findAdditionalDelimiter();
      setResult(service.calculate().toString());
    } catch (err) {
      if (err instanceof Error) {
        setInfo(err.message);
      }
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-4 ">
        <label htmlFor="input-text" className="form-label">
          Enter comma seperated numbers
        </label>
        <textarea
          className="form-control border-1 rounded-1"
          id="input-text"
          rows={6}
          onChange={handleChange}
          name="inputText"
        ></textarea>
        {!!info && <p className="bg-warning mt-3 p-2 rounded-1">{info}</p>}
        <div className="d-grid">
          <button className="btn btn-primary" onClick={triggerChange}>
            Calculate
          </button>
        </div>
      </div>
      <div className="col-4 text-center">
        <h3 className="text-secondary">Results</h3>
        <div
          className="results-container fs-1 text-break bg-light p-2 mt-4 rounded-1"
          data-testid="results-container"
        >
          {result}
        </div>
      </div>
    </div>
  );
};
