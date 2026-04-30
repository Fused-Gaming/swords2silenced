/**
 * CitationBadge Component
 *
 * Displays inline citations with:
 * - Superscript numbered reference
 * - Hover tooltip with full citation
 * - Optional link to source URL
 * - Keyboard accessible
 * - Responsive design
 */

import React, { useState, useRef } from 'react';
import type { Citation } from '../../lib/citations';
import styles from './CitationBadge.module.css';

interface CitationBadgeProps {
  /** Citation object with all metadata */
  citation: Citation;

  /** Sequential number for display (e.g., [1], [2]) */
  number: number;

  /** Optional CSS class name for customization */
  className?: string;

  /** Callback when citation is clicked */
  onCitationClick?: (citation: Citation) => void;

  /** Show full citation text in tooltip (default: true) */
  showFullText?: boolean;
}

const CitationBadge: React.FC<CitationBadgeProps> = ({
  citation,
  number,
  className = '',
  onCitationClick,
  showFullText = true,
}) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  /**
   * Handle keyboard events for accessibility
   */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (citation.url) {
        window.open(citation.url, '_blank', 'noopener,noreferrer');
      }
      onCitationClick?.(citation);
    }
    if (e.key === 'Escape') {
      setIsTooltipVisible(false);
    }
  };

  /**
   * Position tooltip to stay within viewport
   */
  const positionTooltip = () => {
    if (!badgeRef.current || !tooltipRef.current) return;

    const badgeRect = badgeRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();

    // Check if tooltip would overflow to the right
    if (badgeRect.right + tooltipRect.width > window.innerWidth) {
      tooltipRef.current.style.left = 'auto';
      tooltipRef.current.style.right = '0';
    } else {
      tooltipRef.current.style.left = '0';
      tooltipRef.current.style.right = 'auto';
    }
  };

  /**
   * Format the source text for tooltip (basic APA style)
   */
  const formatSource = (): string => {
    let formatted = citation.source;

    if (citation.date) {
      const year = new Date(citation.date).getFullYear();
      formatted += ` (${year})`;
    }

    return formatted;
  };

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
    // Position tooltip on next render
    setTimeout(positionTooltip, 0);
  };

  return (
    <span
      ref={badgeRef}
      className={`${styles.badgeContainer} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsTooltipVisible(false)}
      onFocus={() => setIsTooltipVisible(true)}
      onBlur={() => setIsTooltipVisible(false)}
    >
      {/* Badge itself - displays as superscript number */}
      <button
        className={styles.badge}
        onClick={() => {
          if (citation.url) {
            window.open(citation.url, '_blank', 'noopener,noreferrer');
          }
          onCitationClick?.(citation);
        }}
        onKeyDown={handleKeyDown}
        aria-label={`Citation ${number}: ${citation.source}`}
        aria-describedby={`citation-tooltip-${citation.id}`}
        title={`Citation ${number}: View source`}
      >
        <sup className={styles.number}>[{number}]</sup>
      </button>

      {/* Tooltip with full citation details */}
      {isTooltipVisible && (
        <div
          ref={tooltipRef}
          id={`citation-tooltip-${citation.id}`}
          className={styles.tooltip}
          role="tooltip"
        >
          <div className={styles.tooltipContent}>
            {/* Citation type badge */}
            <div className={styles.typeBadge} data-type={citation.type}>
              {citation.type.charAt(0).toUpperCase() + citation.type.slice(1)}
            </div>

            {/* Full text if enabled */}
            {showFullText && (
              <p className={styles.claimText}>"{citation.text}"</p>
            )}

            {/* Formatted source (APA style) */}
            <p className={styles.sourceText}>{formatSource()}</p>

            {/* URL link if available */}
            {citation.url && (
              <a
                href={citation.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sourceLink}
                onClick={(e) => e.stopPropagation()}
              >
                View Source ↗
              </a>
            )}

            {/* Additional notes if available */}
            {citation.notes && (
              <p className={styles.notes}>{citation.notes}</p>
            )}
          </div>

          {/* Tooltip arrow */}
          <div className={styles.arrow} />
        </div>
      )}
    </span>
  );
};

export default CitationBadge;
