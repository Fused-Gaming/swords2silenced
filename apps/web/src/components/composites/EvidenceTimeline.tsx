/**
 * EvidenceTimeline Component
 * Chronological display of events
 *
 * Structure:
 * [Date] ── ○ ── Event
 *           │
 * [Date] ── ● ── Event (important)
 *           │
 * [Date] ── ○ ── Event
 */

import React from 'react';
import { Caption, BodySmall } from '../atoms/Typography';
import styles from './EvidenceTimeline.module.css';

interface TimelineEntry {
  id: string;
  date: string; // ISO date
  event: string;
  type: 'action' | 'evidence' | 'discovery' | 'response';
  details?: string;
  isExpanded?: boolean;
}

interface EvidenceTimelineProps {
  entries: TimelineEntry[];
  // eslint-disable-next-line no-unused-vars
  onEntryClick?: (id: string) => void;
}

const getTypeColor = (type: string): string => {
  const colors: Record<string, string> = {
    action: '--color-blue-mute',
    evidence: '--color-red-alert',
    discovery: '--color-critical',
    response: '--color-success',
  };
  return colors[type] || '--color-navy-deep';
};

const EvidenceTimeline: React.FC<EvidenceTimelineProps> = ({ entries, onEntryClick }) => {
  const formatDate = (isoDate: string): string => {
    const date = new Date(isoDate);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className={styles.timeline}>
      {entries && entries.length > 0 ? (
        entries.map((entry, index) => (
          <div key={entry.id} className={styles.entry}>
            {/* Timeline line and node */}
            <div className={styles.connector}>
              {index < entries.length - 1 && (
                <div
                  className={styles.line}
                  style={{
                    borderColor: `var(${getTypeColor(entry.type)})`,
                  }}
                ></div>
              )}
              <div
                className={styles.node}
                style={{
                  backgroundColor: `var(${getTypeColor(entry.type)})`,
                }}
              ></div>
            </div>

            {/* Content */}
            <div
              className={`${styles.content} ${entry.isExpanded ? styles.expanded : ''}`}
              onClick={() => onEntryClick?.(entry.id)}
              role="button"
              tabIndex={0}
            >
              <Caption className={styles.date}>{formatDate(entry.date)}</Caption>
              <BodySmall className={styles.event}>{entry.event}</BodySmall>
              {entry.details && entry.isExpanded && (
                <p className={styles.details}>{entry.details}</p>
              )}
              {entry.details && (
                <button
                  className={styles.expandButton}
                  aria-label={entry.isExpanded ? 'Collapse' : 'Expand'}
                  onClick={() => onEntryClick?.(entry.id)}
                >
                  {entry.isExpanded ? '−' : '+'}
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <p className={styles.empty}>No timeline entries yet</p>
      )}
    </div>
  );
};

export default EvidenceTimeline;
