import { StringCalculator } from "./views/calculator/calculator.view";

function App() {
  return (
    <div className="App">
      <nav className="navbar bg-primary" data-testid="navbar-loaded">
        <div className="container">
          <a className="navbar-brand text-white text-bold" href="/">
            String Calculator
          </a>
        </div>
      </nav>
      <div className="container-fluid my-4">
        <StringCalculator />
      </div>
    </div>
  );
}

export default App;
