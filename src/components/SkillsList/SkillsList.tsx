import { useState } from 'react';
import styles from './SkillsList.module.css';
import { useNavigate } from 'react-router-dom';

interface Skill {
  id: number;
  emoji: string;
  name: string;
}

interface SkillsListProps {
  skills: Skill[];
}

export const SkillsList = ({ skills }: SkillsListProps) => {
  const navigate = useNavigate();
  const [selectedSkills, setSelectedSkills] = useState<number[]>([]);

  const toggleSkill = (id: number) => {
    setSelectedSkills((prev) =>
      prev.includes(id) ? prev.filter((skillId) => skillId !== id) : [...prev, id]
    );
  };

  const isButtonDisabled = selectedSkills.length === 0;

  const handleContinue = () => {
    if (!isButtonDisabled) {
      navigate('/email');
    }
  };

  return (
    <div className={styles.skills}>
      <ul className={styles.list}>
        {skills.map((skill) => (
          <li key={skill.id}>
            <label className={styles.item} htmlFor={`checkbox-${skill.id}`}>
              <div className={styles.row}>
                <div className={styles.icon_block}>
                  <img src={skill.emoji} alt={skill.name} className={styles.icon}/>
                </div>
                <h3 className={styles.text}>{skill.name}</h3>
              </div>
              <input
                type="checkbox"
                id={`checkbox-${skill.id}`}
                checked={selectedSkills.includes(skill.id)}
                onChange={() => toggleSkill(skill.id)}
                className={styles.checkbox}
              />
            </label>
          </li>
        ))}
      </ul>
      <div className={styles.button_block}>
        <button
          className={`${styles.button} ${isButtonDisabled ? styles.disabled : ''}`} 
          disabled={isButtonDisabled}
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};
