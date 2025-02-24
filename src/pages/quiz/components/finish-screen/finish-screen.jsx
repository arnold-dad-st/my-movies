import { useContext, useMemo } from "react";
import { QuizContext } from "../../context/quiz-context";
import "./finish-screen.css";

const getEmojiIcon = (percentage) => {
  let emoji;

  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return emoji;
};

export const FinishScreen = () => {
  const { points, maxPossiblePoints, dispatch } = useContext(QuizContext);

  const emoji = useMemo(() => {
    return getEmojiIcon((points / maxPossiblePoints) * 100);
  }, [maxPossiblePoints, points]);

  return (
    <div>
      <p className="result d-flex align-items-center justify-content-center">
        <span>
          <span>{emoji}</span> Your Score is {points} out of {maxPossiblePoints}
        </span>
      </p>
      <button
        className="btn btn-primary"
        onClick={() =>
          dispatch({
            type: "RESTART",
          })
        }
      >
        Restart Quiz
      </button>
    </div>
  );
};
