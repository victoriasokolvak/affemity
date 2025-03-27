import { useNavigate } from "react-router-dom";
import styles from "./Goals.module.css";

export const Goals = () => {
  const navigate = useNavigate();

  const handleGoalClick = (goal: string) => {
    navigate(`/goals/${goal}`);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.question}>
        What is your main goal?
      </h2>
      <div className={styles.goals}>
        <button
          className={styles.goal}
          onClick={() => handleGoalClick("first")}
        >
          Build a deep connection
        </button>
        <button
          className={styles.goal}
          onClick={() => handleGoalClick("second")}
        >
          Create emotional attraction
        </button>
      </div>
      <button className={styles.word}>Other</button>
    </div>
  );
};
