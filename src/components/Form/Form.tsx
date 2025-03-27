import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import styles from './Form.module.css';

interface EmailFormProps {
  onValidSubmit: (email: string) => void;
}

export const Form: React.FC<EmailFormProps> = ({ onValidSubmit }) => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const [touched, setTouched] = useState<boolean>(false);

  const validateEmail = (value: string): void => {
    const emailRegex = /@/;
    if (!value) {
      setError('Email cannot be empty');
      setIsValid(false);
    } else if (!emailRegex.test(value)) {
      setError('Email must contain @');
      setIsValid(false);
    } else {
      setError('');
      setIsValid(true);
    }
  };

  useEffect(() => {
    if (touched) {
      const timerId = setTimeout(() => {
        validateEmail(email);
      }, 500);
      return () => clearTimeout(timerId);
    }
  }, [email, touched]);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (!touched) {
      setTouched(true);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (isValid) {
      onValidSubmit(email);
      setEmail('');
      setError('');
      setTouched(false);
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
