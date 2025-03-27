import styles from './BackButton.module.css';
import { ArrowIcon } from "../ui/ArrowIcon";
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <button className={styles.circle} onClick={goBack}>
      <ArrowIcon width="1.2rem" height="0.8rem" />
    </button>
  );
};
