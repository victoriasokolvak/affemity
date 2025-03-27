import styles from './ReviewCard.module.css';
import stars from '../../../public/Stars.svg';

interface ReviewCardProps {
  name: string;
  rating: string;
  text: string;
}
 
export const ReviewCard: React.FC<ReviewCardProps> = ({ name, rating, text }) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <p className={styles.name}>{name}</p>
        <div className={styles.rating}>
          <div className={styles.stars}>
            <img src={stars} alt="Stars" className={styles.img} />
          </div>
          <span className={styles.number}>{rating}</span>
        </div>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
