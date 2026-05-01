import React from 'react';
import Link from 'next/link';
import styles from './CTASection.module.css';

interface CTASectionProps {
  variant: 'read-documentation' | 'submit-story' | 'view-cases' | 'contact-authorities';
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({ variant, className = '' }) => {
  const variants = {
    'read-documentation': {
      title: 'Read Full Documentation',
      description: 'Access the complete submitted documentation and supporting materials.',
      cta: 'View Document',
      href: '#pdf-section',
    },
    'submit-story': {
      title: 'Share Your Story',
      description: 'If you have experienced similar issues, we want to hear from you.',
      cta: 'Submit Your Account',
      href: '/submit',
    },
    'view-cases': {
      title: 'View Related Cases',
      description: 'Explore the documented timeline and related cases.',
      cta: 'View Timeline',
      href: '/case-timeline',
    },
    'contact-authorities': {
      title: 'Contact Authorities',
      description: 'Report issues through official channels.',
      cta: 'Find Contact Info',
      href: '/contact',
    },
  };

  const content = variants[variant];

  return (
    <section className={`${styles.cta} ${styles[variant]} ${className}`}>
      <div className={styles.content}>
        <h3 className={styles.title}>{content.title}</h3>
        <p className={styles.description}>{content.description}</p>
        <Link href={content.href} className={styles.button}>
          {content.cta}
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
