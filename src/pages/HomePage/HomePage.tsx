// import { Chart } from "../../components/Chart";
// import { Goal } from "../../components/Goal";
// import { Logo } from "../../components/Logo";
// import { Rights } from "../../components/Rights";
import { Chart } from "../../components/Chart";
import { Goals } from "../../components/Goals";
import { Logo } from "../../components/Logo";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Logo />
        <div className={styles.header}>
          <h2 className={styles.title}>
            Change your
            <span className={styles.title_highlighted}> love life</span>
          </h2>
          <p className={styles.text}>
            with easy-to-use practical tips that you can apply in any situation
          </p>
        </div>
      </div>
        <Chart />
        <Goals />
      <p className={styles.bottom_text}>
        By continuing, you agree to our Terms of Service | Privacy Policy <br />{" "}
        2024 © All Rights Reserved.
      </p>
    </div>
  );
};
