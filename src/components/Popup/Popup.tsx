import styles from './Popup.module.css';

interface PopupProps {
  question: string;
  onClose: () => void;
}

export const Popup: React.FC<PopupProps> = ({ question, onClose }) => {
  return (
    <>
      <div className={styles.overlay} />
      <div className={styles.popup}>
        <p className={styles.popup_text}>To move forward, specify</p>
        <p className={styles.question}>{question}</p>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={onClose}>Yes</button>
          <button className={styles.button} onClick={onClose}>No</button>
        </div>
      </div>
    </>
  );
};
