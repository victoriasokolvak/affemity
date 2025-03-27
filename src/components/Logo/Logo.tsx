import styles from './Logo.module.css';
import { LogoIcon } from "../ui/LogoIcon";

export const Logo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <LogoIcon width="3rem" height="3rem" />
      </div>
      <h1 className={styles.logo}>Affemity</h1>
    </div>
  );
};
