/**
 * EntityProfile Component
 * Mini profile for people/organizations involved
 *
 * Structure:
 * [Name (H4)]
 * [Role]
 * [Allegations summary]
 * [Related cases count]
 */

import React from 'react';
import Image from 'next/image';
import { H4, BodySmall, Caption } from '../atoms/Typography';
import styles from './EntityProfile.module.css';

interface EntityProfileProps {
  id: string;
  name: string;
  role: string;
  allegations: string;
  relatedCasesCount?: number;
  imageUrl?: string;
  onClick?: () => void;
}

const EntityProfile: React.FC<EntityProfileProps> = ({
  id,
  name,
  role,
  allegations,
  relatedCasesCount = 0,
  imageUrl,
  onClick,
}) => {
  return (
    <article
      className={styles.profile}
      data-entity-id={id}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {/* Avatar placeholder */}
      <div className={styles.avatar}>
        {imageUrl ? (
          <Image src={imageUrl} alt={name} width={64} height={64} />
        ) : (
          <div className={styles.initials}>{name.charAt(0)}</div>
        )}
      </div>

      {/* Name */}
      <H4 className={styles.name}>{name}</H4>

      {/* Role */}
      <Caption className={styles.role}>{role}</Caption>

      {/* Allegations */}
      <BodySmall className={styles.allegations}>{allegations}</BodySmall>

      {/* Related cases */}
      {relatedCasesCount > 0 && (
        <div className={styles.metadata}>
          <span className={styles.caseCount}>
            <strong>{relatedCasesCount}</strong> Related Case{relatedCasesCount !== 1 ? 's' : ''}
          </span>
        </div>
      )}
    </article>
  );
};

export default EntityProfile;
