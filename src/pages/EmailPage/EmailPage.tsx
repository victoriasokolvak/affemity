import React from 'react';
import { Logo } from '../../components/Logo';
import { RightsIcon } from '../../components/ui/RightsIcon';
import styles from './EmailPage.module.css';
import { Form } from '../../components/Form';

export const EmailPage: React.FC = () => {
  const handleValidSubmit = (email: string) => {

    console.log('Valid email submitted:', email);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Logo />
        <div className={styles.header}>
          <h2 className={styles.title}>You're almost done!</h2>
          <p className={styles.text}>Please enter your email to see results</p>
          
          <Form onValidSubmit={handleValidSubmit} />
          
          <div className={styles.rights}>
            <div className={styles.icon}>
              <RightsIcon width="2rem" height="2rem" />
            </div>
            <p className={styles.rights_text}>
              We respect your privacy and are committed to protecting your personal data. 
              We'll email you a copy of your results for convenient access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
