import styles from './Logo.module.css';
import { LogoIcon } from "../ui/LogoIcon";

export const Logo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <LogoIcon />
      </div>
      <h1 className={styles.logo}>Affemity</h1>
    </div>
  );
};
