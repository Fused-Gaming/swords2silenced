import React from 'react';
import styles from './PDFViewer.module.css';

interface PDFViewerProps {
  pdfUrl: string;
  title?: string;
  onDownload?: () => void;
}

const PDFViewer: React.FC<PDFViewerProps> = ({
  pdfUrl,
  title = 'Research Paper',
  onDownload,
}) => {
  const handleDownload = () => {
    if (onDownload) {
      onDownload();
    } else {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = `${title}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button
          className={styles.downloadButton}
          onClick={handleDownload}
          aria-label={`Download ${title}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download PDF
        </button>
      </div>

      <div className={styles.viewerWrapper}>
        <iframe
          src={pdfUrl}
          className={styles.pdfFrame}
          title={title}
          aria-label={`PDF viewer for ${title}`}
        />
      </div>

      <div className={styles.fallback}>
        <p>If the PDF viewer doesn&apos;t load, you can download it directly:</p>
        <button
          className={styles.downloadLink}
          onClick={handleDownload}
        >
          Download {title} (PDF)
        </button>
      </div>
    </div>
  );
};

export default PDFViewer;
