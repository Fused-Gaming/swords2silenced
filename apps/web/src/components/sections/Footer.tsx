/**
 * Footer Component
 * Site footer with copyright, legal links, social links, and tagline
 *
 * Features:
 * - Responsive mobile-first design
 * - CSS variables from tokens.css (no hardcoded colors)
 * - Purple→Red gradient theme
 * - Legal links: Privacy, Terms, Disclaimer
 * - Social media links
 * - Accessible semantic HTML
 */

import React from 'react';
import Link from 'next/link';

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  label: string;
  href: string;
  icon: string; // Simple text icon/emoji or SVG identifier
}

interface FooterProps {
  companyName?: string;
  tagline?: string;
  year?: number;
}

const Footer: React.FC<FooterProps> = ({
  companyName = 'Swords to Silenced',
  tagline = 'Exposing truth. Protecting those who dare speak.',
  year = new Date().getFullYear(),
}) => {
  const legalLinks: FooterLink[] = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Disclaimer', href: '/disclaimer' },
  ];

  const socialLinks: SocialLink[] = [
    { label: 'Twitter', href: 'https://twitter.com', icon: '𝕏' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'in' },
    { label: 'GitHub', href: 'https://github.com', icon: '⚙' },
  ];

  return (
    <footer
      className="w-full"
      style={{
        backgroundColor: 'var(--color-navy-deep)',
        color: 'var(--color-white-off)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3
              className="mb-2 text-lg font-semibold"
              style={{ color: 'var(--color-red-alert)' }}
            >
              {companyName}
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--color-steel-gray)' }}
            >
              {tagline}
            </p>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-1">
            <h4
              className="mb-4 text-sm font-semibold uppercase tracking-wide"
              style={{ color: 'var(--color-white-off)' }}
            >
              Legal
            </h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{
                      color: 'var(--color-steel-gray)',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        'var(--color-red-alert)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        'var(--color-steel-gray)';
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-1">
            <h4
              className="mb-4 text-sm font-semibold uppercase tracking-wide"
              style={{ color: 'var(--color-white-off)' }}
            >
              Connect
            </h4>
            <ul className="flex gap-4">
              {socialLinks.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded transition-colors"
                    style={{
                      backgroundColor: 'var(--color-navy-light)',
                      color: 'var(--color-red-alert)',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        'var(--color-red-alert)';
                      (e.currentTarget as HTMLElement).style.color =
                        'var(--color-navy-deep)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        'var(--color-navy-light)';
                      (e.currentTarget as HTMLElement).style.color =
                        'var(--color-red-alert)';
                    }}
                  >
                    <span className="text-base font-medium">{social.icon}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup (Optional) */}
          <div className="md:col-span-1">
            <h4
              className="mb-4 text-sm font-semibold uppercase tracking-wide"
              style={{ color: 'var(--color-white-off)' }}
            >
              Updates
            </h4>
            <p
              className="mb-3 text-xs"
              style={{ color: 'var(--color-steel-gray)' }}
            >
              Subscribe for news and updates
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="rounded px-3 py-2 text-xs text-white placeholder-gray-500"
                style={{
                  backgroundColor: 'var(--color-navy-light)',
                  border: '1px solid var(--color-border)',
                  transition: 'var(--transition-fast)',
                }}
                onFocus={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    'var(--color-red-alert)';
                }}
                onBlur={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    'var(--color-border)';
                }}
              />
              <button
                type="submit"
                className="rounded px-3 py-2 text-xs font-semibold transition-colors"
                style={{
                  backgroundColor: 'var(--color-red-alert)',
                  color: 'var(--color-navy-deep)',
                  textDecoration: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = '0.9';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = '1';
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-8"
          style={{ borderTop: '1px solid var(--color-border)' }}
        />

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p
            className="text-xs sm:text-sm"
            style={{ color: 'var(--color-steel-gray)' }}
          >
            &copy; {year} {companyName}. All rights reserved.
          </p>
          <p
            className="text-xs sm:text-sm"
            style={{ color: 'var(--color-steel-gray)' }}
          >
            Built with clarity and courage.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
