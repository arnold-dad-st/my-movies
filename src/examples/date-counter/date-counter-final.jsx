import { useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const initialState = {
  count: 0,
  step: 1,
};

// { type: "DECREMENT" }
// { type: "INCREMENT" }

const reducer = (state, action) => {
  // console.log("state: ", state, "action: ", action);
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + state.step };
    case "DECREMENT":
      return { ...state, count: state.count - state.step };
    case "SET_STEP":
      return { ...state, step: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export function DateCounterState() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + state.count);

  const dec = function () {
    dispatch({ type: "DECREMENT" });
  };

  const inc = function () {
    dispatch({ type: "INCREMENT" });
  };

  const defineCount = function (e) {
    dispatch(Number(e.target.value));
  };

  const defineStep = function (e) {
    dispatch({ type: "SET_STEP", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "RESET" });
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div>
        <input
          type="range"
          min="0"
          max="10"
          style={{ width: "100%" }}
          value={state.step}
          onChange={defineStep}
        />
        <span>{state.step}</span>
      </div>

      <div className="card">
        <button onClick={dec}>-</button>

        <input className="input" value={state.count} onChange={defineCount} />

        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

const newState = reducer(initialState, { type: "INCREMENT" });
const secondState = reducer(newState, { type: "INCREMENT" });
const thirdState = reducer(secondState, { type: "INCREMENT" });

console.log(newState);
console.log(secondState);
console.log(thirdState);
