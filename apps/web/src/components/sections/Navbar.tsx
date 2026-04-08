/**
 * Navbar Component
 * Main navigation with logo, links, mobile menu
 *
 * Logo: /public/swords-to-silenced.png (1024×1024 PNG)
 */

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

interface NavbarProps {
  logoSrc?: string;
  companyName?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  logoSrc = '/swords-to-silenced.png',
  companyName = 'Swords to Silenced',
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Cases', href: '#cases' },
    { label: 'About', href: '#about' },
    { label: 'Submit Evidence', href: '#submit' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoWrapper}>
          <a href="/" className={styles.logoLink}>
            <Image
              src={logoSrc}
              alt={companyName}
              width={200}
              height={60}
              className={styles.logoImage}
              priority
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={styles.mobileNavLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
