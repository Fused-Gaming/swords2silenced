/**
 * Design Tokens - TypeScript Version
 * Programmatic access to design system tokens
 * Use these in component styling and animations
 *
 * WCAG AA/AAA Compliant Dark Mode Default
 */

export const tokens = {
  color: {
    primary: {
      navy: {
        deep: '#1f0021',
        light: '#3c0518',
        xlight: '#2d031d',
      },
      red: {
        alert: '#751006',
        dark: '#5D0804',
        light: '#f5c0b2',
      },
    },
    semantic: {
      success: '#2A9D8F',
      successDark: '#1B6B5F',
      warning: '#F77F00',
      warningDark: '#B35A00',
      critical: '#D62828',
      criticalDark: '#8B1A20',
      info: '#5B8DEF',
    },
    neutral: {
      white: '#F8F9FA',
      black: '#1f0021',
      gray: {
        light: '#A0A8B8',
        muted: '#8B7A96',
        border: '#3c2634',
        xlight: '#0f0a0d',
      },
    },
    focus: '#f5c0b2',
  },
  typography: {
    fontFamily: {
      serif: "'Cormorant Garamond', serif",
      sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    scale: {
      hero: { size: '52px', lineHeight: 1.2, mobileSize: '32px' },
      h1: { size: '40px', lineHeight: 1.2, mobileSize: '28px' },
      h2: { size: '30px', lineHeight: 1.3, mobileSize: '24px' },
      h3: { size: '24px', lineHeight: 1.3, mobileSize: '20px' },
      h4: { size: '20px', lineHeight: 1.4, mobileSize: '18px' },
      body: { size: '16px', lineHeight: 1.5, mobileSize: '16px' },
      bodySmall: { size: '14px', lineHeight: 1.5, mobileSize: '14px' },
      caption: { size: '12px', lineHeight: 1.4, mobileSize: '12px' },
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
    '4xl': '96px',
  },
  layout: {
    container: {
      maxWidth: '1280px',
      padding: '24px',
      paddingMobile: '16px',
    },
    grid: {
      columns: 12,
      gutter: '24px',
      gutterMobile: '16px',
    },
    breakpoints: {
      mobile: '320px',
      tablet: '768px',
      desktop: '1024px',
      wide: '1440px',
      ultrawide: '1920px',
    },
  },
  shadows: {
    sm: '0 1px 2px rgba(31, 0, 33, 0.2)',
    md: '0 2px 4px rgba(31, 0, 33, 0.3)',
    lg: '0 4px 8px rgba(31, 0, 33, 0.4)',
    xl: '0 8px 16px rgba(31, 0, 33, 0.5)',
    none: 'none',
  },
  borders: {
    radius: {
      sm: '4px',
      md: '8px',
      lg: '12px',
      xl: '16px',
      full: '9999px',
    },
    width: '1px',
  },
  transitions: {
    fast: '100ms ease',
    normal: '200ms ease',
    slow: '300ms ease',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  zIndex: {
    dropdown: 1000,
    sticky: 1050,
    modal: 2000,
    tooltip: 3000,
    notification: 4000,
  },
} as const;

// Media query helpers
export const media = {
  mobile: `@media (min-width: ${tokens.layout.breakpoints.mobile})`,
  tablet: `@media (min-width: ${tokens.layout.breakpoints.tablet})`,
  desktop: `@media (min-width: ${tokens.layout.breakpoints.desktop})`,
  wide: `@media (min-width: ${tokens.layout.breakpoints.wide})`,
  ultrawide: `@media (min-width: ${tokens.layout.breakpoints.ultrawide})`,
  mobileOnly: `@media (max-width: ${parseInt(tokens.layout.breakpoints.tablet) - 1}px)`,
  tabletUp: `@media (min-width: ${tokens.layout.breakpoints.tablet})`,
  tabletDown: `@media (max-width: ${parseInt(tokens.layout.breakpoints.wide) - 1}px)`,
  desktopUp: `@media (min-width: ${tokens.layout.breakpoints.desktop})`,
  prefersReducedMotion: '@media (prefers-reduced-motion: reduce)',
  prefersHighContrast: '@media (prefers-contrast: more)',
  prefersLightMode: '@media (prefers-color-scheme: light)',
  prefersDarkMode: '@media (prefers-color-scheme: dark)',
} as const;

// Color helper - returns accessible color pair (text, background)
export const colorPair = {
  primary: {
    text: tokens.color.neutral.white,
    background: tokens.color.primary.navy.deep,
  },
  secondary: {
    text: tokens.color.primary.navy.deep,
    background: tokens.color.neutral.white,
  },
  cta: {
    text: tokens.color.neutral.white,
    background: tokens.color.primary.red.alert,
  },
  success: {
    text: tokens.color.semantic.success,
    background: 'rgba(42, 157, 143, 0.1)',
  },
  warning: {
    text: tokens.color.semantic.warning,
    background: 'rgba(247, 127, 0, 0.1)',
  },
  critical: {
    text: tokens.color.semantic.critical,
    background: 'rgba(214, 40, 40, 0.1)',
  },
} as const;

// Type exports for component styling
export type TokenKeys = typeof tokens;
export type MediaQueries = typeof media;
export type ColorPairs = typeof colorPair;
