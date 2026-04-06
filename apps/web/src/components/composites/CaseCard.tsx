/**
 * CaseCard Component
 * Displays case summary with metadata and CTA
 *
 * Structure:
 * [Severity Badge] [Status Badge]
 * Title (H3, serif)
 * Summary (body text, 2 lines max)
 * Tags
 * [Evidence Count] [Source Count]
 * [View Evidence CTA]
 */

import React from 'react';
import { H3, Caption } from '../atoms/Typography';
import Badge from '../atoms/Badge';
import Button from '../atoms/Button';
import styles from './CaseCard.module.css';

interface CaseCardProps {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  severity: 'critical' | 'warning' | 'minor';
  status: 'verified' | 'alleged' | 'under_investigation';
  evidenceCount: number;
  sourceCount: number;
  onViewDetails?: () => void;
}

const CaseCard: React.FC<CaseCardProps> = ({
  id,
  title,
  summary,
  tags,
  severity,
  status,
  evidenceCount,
  sourceCount,
  onViewDetails,
}) => {
  const severityMap = {
    critical: { variant: 'critical' as const, label: 'Critical' },
    warning: { variant: 'unverified' as const, label: 'Warning' },
    minor: { variant: 'unverified' as const, label: 'Minor' },
  };

  const statusMap = {
    verified: { variant: 'verified' as const, label: 'Verified' },
    alleged: { variant: 'unverified' as const, label: 'Alleged' },
    under_investigation: { variant: 'unverified' as const, label: 'Investigating' },
  };

  return (
    <article className={styles.card} data-case-id={id}>
      {/* Badge Row */}
      <div className={styles.badgeRow}>
        <Badge variant={severityMap[severity].variant} label={severityMap[severity].label} />
        <Badge variant={statusMap[status].variant} label={statusMap[status].label} />
      </div>

      {/* Title */}
      <H3 className={styles.title}>{title}</H3>

      {/* Summary */}
      <p className={styles.summary}>{summary}</p>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Metadata Row */}
      <div className={styles.metadata}>
        <Caption>
          <strong>{evidenceCount}</strong> Evidence
        </Caption>
        <Caption>
          <strong>{sourceCount}</strong> Sources
        </Caption>
      </div>

      {/* CTA Button */}
      <Button
        variant="primary"
        size="medium"
        fullWidth
        onClick={onViewDetails}
        className={styles.cta}
      >
        View Evidence
      </Button>
    </article>
  );
};

export default CaseCard;
