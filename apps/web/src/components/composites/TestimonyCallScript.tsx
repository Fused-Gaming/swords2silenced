/**
 * TestimonyCallScript Component
 * Displays call script for advocacy outreach
 * Includes phone numbers, copy-to-clipboard, and messaging
 *
 * WCAG AA/AAA compliant with dark background
 */

import React, { useState } from 'react';
import styles from './TestimonyCallScript.module.css';

interface Representative {
  name: string;
  title: string;
  district: string;
  phone: string;
  officeLocation: string;
}

interface CallScriptProps {
  onCopySuccess?: () => void;
}

export const TestimonyCallScript: React.FC<CallScriptProps> = ({ onCopySuccess }) => {
  const [copied, setCopied] = useState(false);

  const representatives: Representative[] = [
    {
      name: 'Lateefah Simon',
      title: 'U.S. Representative',
      district: 'California Congressional District 12',
      phone: '510-763-0370',
      officeLocation: 'Oakland, CA',
    },
    {
      name: 'Barbara Lee',
      title: 'U.S. Representative',
      district: 'California Congressional District 12',
      phone: '(510) 238-3141',
      officeLocation: 'Oakland, CA',
    },
    {
      name: 'Oakland Mayor',
      title: 'City of Oakland',
      district: "Mayor's Office",
      phone: '[To be determined]',
      officeLocation: 'Oakland, CA',
    },
  ];

  const coreMessage = `"I'm calling to ask the Representative's office to review a situation where a landlord was allowed to continue operating an unsafe, illegally modified unit despite prior violations, and enforcement delays contributed to a tenant being displaced."`;

  const detailMessage = `"The city verified the violations and prior ethics action—she admitted to bribing building inspectors—but they were not corrected before the eviction occurred, and the tenant has now suffered significant financial harm."`;

  const askMessage = `"We're asking for help in the form of oversight, guidance, or referral—particularly whether the office can:
• Help elevate this as a pattern of enforcement failure
• Provide direction on federal or civil rights avenues
• Or assist in connecting with the appropriate agencies or advocacy channels"`;

  const fullScript = `${coreMessage}

${detailMessage}

${askMessage}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullScript);
      setCopied(true);
      onCopySuccess?.();
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy script:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Call to Action Script</h2>
        <p className={styles.subtitle}>
          Use this script when calling to advocate for oversight and accountability
        </p>
      </div>

      {/* Representatives Section */}
      <section className={styles.representativesSection}>
        <h3 className={styles.sectionTitle}>Who to Contact</h3>

        <div className={styles.representativesList}>
          {representatives.map((rep, index) => (
            <div key={index} className={styles.representativeCard}>
              <div className={styles.repHeader}>
                <h4 className={styles.repName}>{rep.name}</h4>
                <span className={styles.repTitle}>{rep.title}</span>
              </div>

              <div className={styles.repDetails}>
                <p className={styles.repDistrict}>{rep.district}</p>
                <p className={styles.repLocation}>{rep.officeLocation}</p>
              </div>

              <div className={styles.phoneContainer}>
                <a href={`tel:${rep.phone}`} className={styles.phoneLink}>
                  <span className={styles.phoneLabel}>Call:</span>
                  <span className={styles.phoneNumber}>{rep.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Script Section */}
      <section className={styles.scriptSection}>
        <div className={styles.scriptHeader}>
          <h3 className={styles.sectionTitle}>Script</h3>
          <button
            className={styles.copyButton}
            onClick={handleCopy}
            aria-label="Copy script to clipboard"
          >
            {copied ? '✓ Copied!' : 'Copy Script'}
          </button>
        </div>

        <div className={styles.scriptContent}>
          {/* Opening */}
          <div className={styles.scriptPart}>
            <p className={styles.partLabel}>Core Message (keep tight and impactful):</p>
            <blockquote className={styles.scriptQuote}>{coreMessage}</blockquote>
          </div>

          {/* Details */}
          <div className={styles.scriptPart}>
            <p className={styles.partLabel}>Additional Context:</p>
            <blockquote className={styles.scriptQuote}>{detailMessage}</blockquote>
          </div>

          {/* Ask */}
          <div className={styles.scriptPart}>
            <p className={styles.partLabel}>What You're Asking For:</p>
            <blockquote className={styles.scriptQuote}>{askMessage}</blockquote>
          </div>
        </div>
      </section>

      {/* Hashtags Section */}
      <section className={styles.hashtagSection}>
        <h3 className={styles.sectionTitle}>Share Your Voice</h3>
        <p className={styles.hashtagText}>Use these hashtags to amplify this message:</p>
        <div className={styles.hashtags}>
          <span className={styles.hashtag}>#oakland</span>
          <span className={styles.hashtag}>#corruption</span>
          <span className={styles.hashtag}>#elizabethwilliams</span>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h3 className={styles.ctaTitle}>Ready to Make a Difference?</h3>
          <p className={styles.ctaText}>
            Your call matters. Congressional offices track constituent feedback. Even a 2-minute
            call can make an impact.
          </p>
          <div className={styles.ctaActions}>
            <button className={styles.primaryButton} onClick={handleCopy}>
              Copy Script & Call Now
            </button>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className={styles.tipsSection}>
        <h3 className={styles.sectionTitle}>Tips for Effective Advocacy</h3>
        <ul className={styles.tipsList}>
          <li>Keep it to 2-3 minutes—offices handle high call volumes</li>
          <li>Be respectful and clear in your message</li>
          <li>If you reach voicemail, leave your name, city, and brief message</li>
          <li>Ask them to note your concern in the constituent ledger</li>
          <li>Follow up with an email to solidify your message</li>
          <li>Share your advocacy on social media to amplify reach</li>
        </ul>
      </section>
    </div>
  );
};

export default TestimonyCallScript;
