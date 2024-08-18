import React from "react";

type ResultProp = {
  result?: string;
};

export const ResultComponent: React.FC<ResultProp> = React.memo(
  ({ result }: ResultProp) => {
    return (
      <>
        <h3 className="text-secondary">Results</h3>
        <div
          className="results-container fs-1 text-break bg-light p-2 mt-4 rounded-1"
          data-testid="results-container"
        >
          {result}
        </div>
      </>
    );
  }
);
