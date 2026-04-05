/**
 * AlertBanner Component
 * High-priority alert for breaking cases or urgent CTAs
 *
 * Structure:
 * [Icon] [Title] [Description]
 * [CTA Button]
 * [Close button]
 */

import React, { useState } from 'react';
import { H3, Body } from '../atoms/Typography';
import Button from '../atoms/Button';
import styles from './AlertBanner.module.css';

interface AlertBannerProps {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  onCta: () => void;
  onClose?: () => void;
  severity?: 'critical' | 'warning' | 'info';
  icon?: React.ReactNode;
}

const severityIcons: Record<string, string> = {
  critical: '⚠️',
  warning: '⚡',
  info: 'ℹ️',
};

const AlertBanner: React.FC<AlertBannerProps> = ({
  id,
  title,
  description,
  ctaText,
  onCta,
  onClose,
  severity = 'critical',
  icon = severityIcons[severity],
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  return (
    <div className={`${styles.banner} ${styles[`severity-${severity}`]}`} data-alert-id={id}>
      {/* Icon */}
      <div className={styles.iconWrapper}>{icon}</div>

      {/* Content */}
      <div className={styles.content}>
        <H3 className={styles.title}>{title}</H3>
        <Body className={styles.description}>{description}</Body>
      </div>

      {/* Actions */}
      <div className={styles.actions}>
        <Button variant="primary" size="medium" onClick={onCta}>
          {ctaText}
        </Button>
        {onClose && (
          <button className={styles.closeButton} onClick={handleClose} aria-label="Close alert">
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default AlertBanner;
