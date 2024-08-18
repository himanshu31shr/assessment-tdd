import { useState } from "react";

import { Info } from "./info.component";
import { CalculatorService } from "../../services/calculator.service";
import { ResultComponent } from "./result.component";

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
        setResult("Snap, Something broke!");
      }
    }
  };

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
        {!!info && (
          <p
            className="bg-danger text-light m-0 mt-3 p-2 rounded-1"
            data-testid="message-container"
          >
            {info}
          </p>
        )}
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
