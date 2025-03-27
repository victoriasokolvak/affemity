import { Logo } from '../../components/Logo';
import styles from './NotFoundPage.module.css';

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Logo />
        <div className={styles.header}>
          <h2 className={styles.title}>
            Oops! Page
            <span className={styles.title_highlighted}> not found</span>
          </h2>
          <p className={styles.text}>
            The page you’re looking for doesn’t exist. Try checking the URL or go back to the homepage.
          </p>
        </div>
      </div>
    </div>
  );
};
