import { createContext, useContext, useReducer } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets";
import "./App.css";

// Create Context
const DateCounterContext = createContext();

const initialState = { step: 1, count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + state.step };
    case "DECREMENT":
      return { ...state, count: state.count - state.step };
    case "SET_COUNT":
      return { ...state, count: Number(action.payload) };
    case "SET_STEP":
      return { ...state, step: Number(action.payload) };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

function DateCounterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const date = new Date("June 21 2027");
  date.setDate(date.getDate() + state.count);

  return (
    <DateCounterContext.Provider value={{ state, dispatch, date }}>
      {children}
    </DateCounterContext.Provider>
  );
}

function StepController() {
  const { state, dispatch } = useContext(DateCounterContext);
  return (
    <div>
      <input
        type="range"
        min="0"
        max="10"
        style={{ width: "100%" }}
        value={state.step}
        onChange={(e) =>
          dispatch({ type: "SET_STEP", payload: e.target.value })
        }
      />
      <span>{state.step}</span>
    </div>
  );
}

function CounterControls() {
  const { state, dispatch } = useContext(DateCounterContext);
  return (
    <div className="card">
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <input
        className="input"
        value={state.count}
        onChange={(e) =>
          dispatch({ type: "SET_COUNT", payload: e.target.value })
        }
      />
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
    </div>
  );
}

function DisplayDate() {
  const { date } = useContext(DateCounterContext);
  return <p>{date.toDateString()}</p>;
}

function ResetButton() {
  const { dispatch } = useContext(DateCounterContext);
  return (
    <div>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

function DateCounterWithReducer() {
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

export default DateCounterWithReducer;
