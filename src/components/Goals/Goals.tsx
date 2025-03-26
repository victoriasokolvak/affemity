import styles from "./Goals.module.css";

export const Goals = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.question}>
        What is your main goal?
      </h2>
      <div className={styles.goals}>
        <button
          className={styles.goal}
        >
          Build a deep connection
        </button>
        <button
          className={styles.goal}
        >
          Create emotional attraction
        </button>
      </div>
      <button className={styles.word}>Other</button>
    </div>
  );
};
