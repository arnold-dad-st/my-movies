import { createContext, useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Create Context
const DateCounterContext = createContext();

function DateCounterProvider({ children }) {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("June 21 2027");
  date.setDate(date.getDate() + count);

  const dec = () => setCount((count) => count - step);
  const inc = () => setCount((count) => count + step);
  const defineCount = (e) => setCount(Number(e.target.value));
  const defineStep = (e) => setStep(Number(e.target.value));
  const reset = () => {
    setCount(0);
    setStep(1);
  };

  return (
    <DateCounterContext.Provider
      value={{ step, count, date, inc, dec, defineCount, defineStep, reset }}
    >
      {children}
    </DateCounterContext.Provider>
  );
}

function StepController() {
  const { step, defineStep } = useContext(DateCounterContext);
  return (
    <div>
      <input
        type="range"
        min="0"
        max="10"
        style={{ width: "100%" }}
        value={step}
        onChange={defineStep}
      />
      <span>{step}</span>
    </div>
  );
}

function CounterControls() {
  const { count, inc, dec, defineCount } = useContext(DateCounterContext);
  return (
    <div className="card">
      <button onClick={dec}>-</button>
      <input className="input" value={count} onChange={defineCount} />
      <button onClick={inc}>+</button>
    </div>
  );
}

function DisplayDate() {
  const { date } = useContext(DateCounterContext);
  return <p>{date.toDateString()}</p>;
}

function ResetButton() {
  const { reset } = useContext(DateCounterContext);
  return (
    <div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

function DateCounterWithContext() {
  return (
    <DateCounterProvider>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <StepController />
      <CounterControls />
      <DisplayDate />
      <ResetButton />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </DateCounterProvider>
  );
}

export default DateCounterWithContext;
