import React from 'react';
import Link from 'next/link';
import styles from './PDFEmbed.module.css';

interface PDFEmbedProps {
  docId: string;
  title?: string;
  className?: string;
}

const PDFEmbed: React.FC<PDFEmbedProps> = ({ docId, title = 'Document', className = '' }) => {
  const previewUrl = `https://docs.google.com/document/d/${docId}/preview`;
  
  return (
    <div className={`${styles.container} ${className}`}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.embedWrapper}>
        <iframe
          src={previewUrl}
          className={styles.iframe}
          title={title}
          allow="autoplay"
          loading="lazy"
        />
      </div>
      <p className={styles.fallback}>
        <Link href={previewUrl} target="_blank" rel="noopener noreferrer">
          Open document in new window
        </Link>
      </p>
    </div>
  );
};

export default PDFEmbed;
