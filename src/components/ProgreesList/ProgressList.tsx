import { steps } from '../../constants/ProgressListData';
import { Popup } from '../Popup';
import styles from './ProgressList.module.css';
import React, { useState, useEffect } from 'react';

export const ProgressList: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || currentStep >= steps.length) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 49) return prev + 1;
        if (prev === 49) {
          setShowPopup(true);
          setIsPaused(true);
          clearInterval(interval);
        }
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [isPaused, currentStep]);

  const handlePopupClose = () => {
    setShowPopup(false);
    setIsPaused(false);
  };

  useEffect(() => {
    if (progress === 100 && currentStep < steps.length - 1) {
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
        setProgress(0);
      }, 100);
    }
  }, [progress, currentStep]);

  return (
    <div className={styles.container}>
      {steps.map((step, index) => (
        <div key={index} className={styles.step}>
          <div className={styles.top}>
            <h3 className={styles.text}>{step.title}</h3>
            <div className={styles.progress}>
              {index < currentStep ? '100' : index === currentStep ? progress : '0'}%
            </div>
          </div>
          <div className={styles.bar}>
            <div
              className={styles.bar_progress}
              style={{
                width: index < currentStep ? '100%' : index === currentStep ? `${progress}%` : '0%',
              }}
            />
          </div>
        </div>
      ))}

      {showPopup &&
        <Popup question={steps[currentStep].question} onClose={handlePopupClose} />
      }
    </div>
  );
};
