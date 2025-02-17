import { useContext } from "react";
import { QuizContext } from "../../context/quiz-context";

import "./start-screen.css";

export const StartScreen = () => {
  const { questions, dispatch } = useContext(QuizContext);
  const numberOfQuestions = questions.length;

  return (
    <div className="start">
      <h2>Welcome to The Movie Quiz!</h2>
      <h3>{numberOfQuestions} questions to test your movie knowledge skills</h3>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "START" })}
      >
        Let's start
      </button>
    </div>
  );
};
