export const StringCalculator = () => {
  return (
    <>
      <div className="row justify-content-center ">
        <div className="col-4">
          <label htmlFor="input-text" className="form-label">
            Enter comma seperated numbers
          </label>
          <textarea
            className="form-control"
            id="input-text"
            rows={3}
            name="inputText"
          ></textarea>
        </div>
      </div>
      <div className="row justify-content-center mt-4 ">
        <div className="col-4 justify-content-center row">
          <button className="btn btn-primary btn-block">Calculate</button>
        </div>
      </div>
      <div className="row justify-content-center mt-4 text-center">
        <div className="col-4">
          <hr />
          <h3>Results</h3>
          <div
            className="results-container"
            data-testid="results-container"
          ></div>
        </div>
      </div>
    </>
  );
};
