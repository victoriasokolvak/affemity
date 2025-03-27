import styles from './SkillsPage.module.css';
import { useParams } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { ProgressBar } from "../../components/ProgressBar";
import { BackButton } from '../../components/BackButton';
import { SkillsList } from '../../components/SkillsList';


const firstSkills = [
  { id: 1, emoji: "emoji_1.png", name: "Skill1_goal1" },
  { id: 2, emoji: "emoji_2.png", name: "Skill2_goal1" },
  { id: 3, emoji: "emoji_3.png", name: "Skill3_goal1" },
  { id: 4, emoji: "emoji_4.png", name: "Skill4_goal1" },
  { id: 5, emoji: "emoji_5.png", name: "Skill5_goal1" },
];

const secondSkills = [
  { id: 1, emoji: "emoji_1.png", name: "Skill1_goal2" },
  { id: 2, emoji: "emoji_2.png", name: "Skill2_goal2" },
  { id: 3, emoji: "emoji_3.png", name: "Skill3_goal2" },
  { id: 4, emoji: "emoji_4.png", name: "Skill4_goal2" },
  { id: 5, emoji: "emoji_5.png", name: "Skill5_goal2" },
];

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
