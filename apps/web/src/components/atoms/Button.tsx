/**
 * Button Component
 * Primary interactive element
 *
 * Variants: primary, secondary, text
 * Sizes: small, medium, large
 * States: idle, hover, active, disabled, loading
 */

import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      isLoading = false,
      fullWidth = false,
      children,
      disabled,
      className,
      ...rest
    },
    ref
  ) => {
    const classNames = [
      styles.button,
      styles[`variant-${variant}`],
      styles[`size-${size}`],
      fullWidth && styles.fullWidth,
      isLoading && styles.loading,
      disabled && styles.disabled,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        className={classNames}
        disabled={disabled || isLoading}
        {...rest}
      >
        {isLoading ? (
          <>
            <span className={styles.spinner}></span>
            {children}
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
