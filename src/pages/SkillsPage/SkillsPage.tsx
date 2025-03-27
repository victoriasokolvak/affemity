import styles from './SkillsPage.module.css';
import { useParams } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { ProgressBar } from "../../components/ProgressBar";
import { BackButton } from '../../components/BackButton';
import { SkillsList } from '../../components/SkillsList';
import { firstSkills, secondSkills } from '../../constants/skillsData';

export const SkillsPage = () => {
  const { goalType } = useParams<{ goalType: string }>();
  
  const skills = goalType === "first" ? firstSkills : goalType === "second" ? secondSkills : [];

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.bar}>
          <ProgressBar />
        </div>
        <div className={styles.header}>
          <BackButton />
          <Logo />
          <div className={styles.number}>
            1
            <span className={styles.number_two}>
              /34
            </span>
          </div>
        </div>
        <div className={styles.text_block}>
          <h2 className={styles.question}>
            What would you like <br /> to learn?
          </h2>
          <div className={styles.text}>
            Select all that apply
          </div>
        </div>
      </div>
      <div className={styles.skills}>
        <SkillsList skills={skills} />
      </div>
    </div>
  );
};
