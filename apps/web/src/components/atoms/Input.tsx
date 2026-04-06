/**
 * Input Component
 * Text input field with validation states
 *
 * Types: text, email, password, search, tel, url
 * States: idle, focus, valid, error, disabled
 */

import React from 'react';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helpText, icon, className, ...rest }, ref) => {
    return (
      <div className={styles.container}>
        {label && (
          <label className={styles.label} htmlFor={rest.id}>
            {label}
            {rest.required && <span className={styles.required}>*</span>}
          </label>
        )}
        <div className={styles.wrapper}>
          {icon && <span className={styles.icon}>{icon}</span>}
          <input
            ref={ref}
            className={`${styles.input} ${error ? styles.error : ''} ${
              icon ? styles.withIcon : ''
            } ${className || ''}`}
            {...rest}
          />
        </div>
        {error && <span className={styles.errorText}>{error}</span>}
        {helpText && !error && <span className={styles.helpText}>{helpText}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
