/**
 * Typography Components
 * Semantic HTML elements with design token styles
 *
 * Heading: h1-h4 (serif, bold, tight line height)
 * Body: p, small, em (sans, regular)
 * Caption: small text (sans, reduced size)
 */

import React from 'react';
import styles from './Typography.module.css';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

/* ===============================================
   HEADINGS
   =============================================== */

export const H1: React.FC<TypographyProps> = ({ children, className }) => (
  <h1 className={`${styles.h1} ${className || ''}`}>{children}</h1>
);

export const H2: React.FC<TypographyProps> = ({ children, className }) => (
  <h2 className={`${styles.h2} ${className || ''}`}>{children}</h2>
);

export const H3: React.FC<TypographyProps> = ({ children, className }) => (
  <h3 className={`${styles.h3} ${className || ''}`}>{children}</h3>
);

export const H4: React.FC<TypographyProps> = ({ children, className }) => (
  <h4 className={`${styles.h4} ${className || ''}`}>{children}</h4>
);

/* ===============================================
   BODY TEXT
   =============================================== */

export const Body: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={`${styles.body} ${className || ''}`}>{children}</p>
);

export const BodySmall: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={`${styles.bodySmall} ${className || ''}`}>{children}</p>
);

export const Caption: React.FC<TypographyProps> = ({ children, className }) => (
  <span className={`${styles.caption} ${className || ''}`}>{children}</span>
);

/* ===============================================
   EMPHASIS
   =============================================== */

export const Strong: React.FC<TypographyProps> = ({ children, className }) => (
  <strong className={`${styles.strong} ${className || ''}`}>{children}</strong>
);

export const Emphasis: React.FC<TypographyProps> = ({ children, className }) => (
  <em className={`${styles.emphasis} ${className || ''}`}>{children}</em>
);

export const Muted: React.FC<TypographyProps> = ({ children, className }) => (
  <span className={`${styles.muted} ${className || ''}`}>{children}</span>
);
