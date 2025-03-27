import styles from './Form.module.css';
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateEmail } from '../utils/emailValidation';

export const Form: React.FC<{ onValidSubmit: (email: string) => void }> = ({ onValidSubmit }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [touched, setTouched] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (touched) {
      const timerId = setTimeout(() => {
        const { error, isValid } = validateEmail(email);
        setError(error);
        setIsValid(isValid);
      }, 500);
      return () => clearTimeout(timerId);
    }
  }, [email, touched]);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (!touched) setTouched(true);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (isValid) {
      onValidSubmit(email);
      setEmail('');
      setError('');
      setTouched(false);
      navigate('/plan');
    } else {
      setError('Please enter a valid email');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="example@gmail.com"
        className={`${styles.email_input} ${error ? styles.error_input : ''}`}
      />
      {error && <span className={styles.error}>{error}</span>}
      <div className={styles.button_block}>
        <button type="submit" className={styles.button}>
          Get results
        </button>
      </div>
    </form>
  );
};
