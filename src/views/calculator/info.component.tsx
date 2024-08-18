import React from "react";

export const Info = React.memo(() => {
  return (
    <div className="row justify-content-center">
      <div className="col-8">
        <p className="bg-light p-2 rounded-1 border-1">
          → This parser is built for parsing numbers from the sequence &
          calculate sum based on
          <code> comma(,)</code> & <code>newline(\n)</code> by default <br />→
          In case you want to include your own delimiter, you can start the
          sequence with <code>`//`</code> followed by{" "}
          <code>delimiter of your choice</code> except for numbers.
        </p>
      </div>
    </div>
  );
});
