import styles from './PlanPage.module.css';
import { Logo } from "../../components/Logo";
import { ProgressList } from '../../components/ProgreesList/ProgressList';
import { ReviewsSlider } from '../../components/ReviewsSlider';

export const PlanPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Logo />
        <div className={styles.header}>
          <h2 className={styles.title}>We are crafting your personalized plan</h2>
        </div>

        <ProgressList />
        <ReviewsSlider />
      </div>
    </div>
  );
};
