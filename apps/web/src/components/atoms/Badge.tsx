/**
 * Badge Component
 * Status and label indicator
 *
 * Variants: verified (green), unverified (yellow), critical (red)
 * Always includes icon + label
 */

import React from 'react';
import styles from './Badge.module.css';

type BadgeVariant = 'verified' | 'unverified' | 'critical';

interface BadgeProps {
  variant: BadgeVariant;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

const icons: Record<BadgeVariant, string> = {
  verified: '✓',
  unverified: '?',
  critical: '!',
};

const Badge: React.FC<BadgeProps> = ({
  variant,
  label,
  icon = icons[variant],
  className,
}) => {
  return (
    <span className={`${styles.badge} ${styles[`variant-${variant}`]} ${className || ''}`}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>{label}</span>
    </span>
  );
};

export default Badge;
