import Link from 'next/link';
import Image from 'next/image';
import styles from './Logo.module.css';

export interface LogoProps {
  variant?: 'full' | 'icon';
  className?: string;
}

export default function Logo({ variant = 'full', className }: LogoProps) {
  return (
    <Link href="/" className={`${styles.logoContainer} ${className || ''}`}>
      <Image
        src="/swords-to-silenced.png"
        alt="Swords to Silenced"
        width={variant === 'full' ? 200 : 64}
        height={variant === 'full' ? 200 : 64}
        priority
        className={styles.logoImage}
      />
      {variant === 'full' && (
        <div className={styles.logoText}>
          <h1>Swords to Silenced</h1>
        </div>
      )}
    </Link>
  );
}
