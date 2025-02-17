import { createContext, useReducer } from "react";

const QuizContext = createContext();

const initialState = {
  // 'loading', 'error', 'ready', 'active'
  status: "loading",
  questions: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "DATA_RECEIVED":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };

    case "DATA_FAILED":
      return {
        ...state,
        status: "error",
      };
    case "START":
      return {
        status: "active",
      };
    default:
      throw new Error("Something went wrong can not start the game");
  }
}

function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { status, questions } = state;

  console.log(children);

  return (
    <QuizContext.Provider
      value={{
        status,
        questions,

        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export { QuizProvider, QuizContext };
