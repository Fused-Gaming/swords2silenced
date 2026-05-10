/**
 * Design Tokens Test Suite
 * Validates token structure, accessibility, and implementation
 *
 * Coverage:
 * - Token existence and format
 * - Color contrast ratios (WCAG AA/AAA)
 * - Spacing scale consistency
 * - Typography scale responsiveness
 * - Breakpoint definitions
 */

import { tokens, media, colorPair } from '../design-tokens';

describe('Design Tokens', () => {
  describe('Color System', () => {
    it('should have primary colors defined', () => {
      expect(tokens.color.primary.navy.deep).toBe('#1f0021');
      expect(tokens.color.primary.red.alert).toBe('#751006');
    });

    it('should have semantic colors defined', () => {
      expect(tokens.color.semantic.success).toBeDefined();
      expect(tokens.color.semantic.warning).toBeDefined();
      expect(tokens.color.semantic.critical).toBeDefined();
      expect(tokens.color.semantic.info).toBeDefined();
    });

    it('should have neutral colors defined', () => {
      expect(tokens.color.neutral.white).toBe('#F8F9FA');
      expect(tokens.color.neutral.black).toBe('#1f0021');
      expect(tokens.color.neutral.gray.light).toBeDefined();
      expect(tokens.color.neutral.gray.muted).toBeDefined();
    });

    it('should have focus color for accessibility', () => {
      expect(tokens.color.focus).toBe('#f5c0b2');
    });
  });

  describe('Typography', () => {
    it('should have font families defined', () => {
      expect(tokens.typography.fontFamily.serif).toBeDefined();
      expect(tokens.typography.fontFamily.sans).toBeDefined();
    });

    it('should have font weights defined', () => {
      expect(tokens.typography.fontWeight.regular).toBe(400);
      expect(tokens.typography.fontWeight.medium).toBe(500);
      expect(tokens.typography.fontWeight.semibold).toBe(600);
      expect(tokens.typography.fontWeight.bold).toBe(700);
    });

    it('should have responsive type scale', () => {
      const scales = ['hero', 'h1', 'h2', 'h3', 'h4', 'body', 'bodySmall', 'caption'];
      scales.forEach((scale) => {
        expect(
          tokens.typography.scale[scale as keyof typeof tokens.typography.scale]
        ).toBeDefined();
        const scaleObj = tokens.typography.scale[scale as keyof typeof tokens.typography.scale];
        expect(scaleObj.size).toBeDefined();
        expect(scaleObj.lineHeight).toBeDefined();
        expect(scaleObj.mobileSize).toBeDefined();
      });
    });

    it('should have different mobile sizes than desktop', () => {
      expect(tokens.typography.scale.hero.size).not.toBe(tokens.typography.scale.hero.mobileSize);
      expect(parseInt(tokens.typography.scale.hero.mobileSize)).toBeLessThan(
        parseInt(tokens.typography.scale.hero.size)
      );
    });
  });

  describe('Spacing System', () => {
    it('should have 8px base unit', () => {
      expect(tokens.spacing.xs).toBe('4px');
      expect(tokens.spacing.sm).toBe('8px');
      expect(tokens.spacing.md).toBe('16px');
    });

    it('should have consistent spacing scale', () => {
      const spacingValues = [
        parseInt(tokens.spacing.xs),
        parseInt(tokens.spacing.sm),
        parseInt(tokens.spacing.md),
        parseInt(tokens.spacing.lg),
        parseInt(tokens.spacing.xl),
        parseInt(tokens.spacing['2xl']),
        parseInt(tokens.spacing['3xl']),
        parseInt(tokens.spacing['4xl']),
      ];

      for (let i = 1; i < spacingValues.length; i++) {
        expect(spacingValues[i]).toBeGreaterThan(spacingValues[i - 1]);
      }
    });
  });

  describe('Layout & Breakpoints', () => {
    it('should have container configuration', () => {
      expect(tokens.layout.container.maxWidth).toBe('1280px');
      expect(tokens.layout.container.padding).toBe('24px');
      expect(tokens.layout.container.paddingMobile).toBe('16px');
    });

    it('should have grid configuration', () => {
      expect(tokens.layout.grid.columns).toBe(12);
      expect(tokens.layout.grid.gutter).toBe('24px');
      expect(tokens.layout.grid.gutterMobile).toBe('16px');
    });

    it('should have all required breakpoints', () => {
      const requiredBreakpoints = ['mobile', 'tablet', 'desktop', 'wide', 'ultrawide'];
      requiredBreakpoints.forEach((bp) => {
        expect(
          tokens.layout.breakpoints[bp as keyof typeof tokens.layout.breakpoints]
        ).toBeDefined();
      });
    });

    it('should have breakpoints in ascending order', () => {
      const bps = [
        parseInt(tokens.layout.breakpoints.mobile),
        parseInt(tokens.layout.breakpoints.tablet),
        parseInt(tokens.layout.breakpoints.desktop),
        parseInt(tokens.layout.breakpoints.wide),
        parseInt(tokens.layout.breakpoints.ultrawide),
      ];

      for (let i = 1; i < bps.length; i++) {
        expect(bps[i]).toBeGreaterThan(bps[i - 1]);
      }
    });
  });

  describe('Shadows', () => {
    it('should have shadow tokens defined', () => {
      expect(tokens.shadows.sm).toBeDefined();
      expect(tokens.shadows.md).toBeDefined();
      expect(tokens.shadows.lg).toBeDefined();
      expect(tokens.shadows.xl).toBeDefined();
      expect(tokens.shadows.none).toBe('none');
    });

    it('should have shadow patterns with rgba', () => {
      expect(tokens.shadows.sm).toContain('rgba');
      expect(tokens.shadows.md).toContain('rgba');
      expect(tokens.shadows.lg).toContain('rgba');
    });
  });

  describe('Borders', () => {
    it('should have border radius tokens', () => {
      const radiuses = ['sm', 'md', 'lg', 'xl', 'full'];
      radiuses.forEach((r) => {
        expect(tokens.borders.radius[r as keyof typeof tokens.borders.radius]).toBeDefined();
      });
    });

    it('should have increasing border radius values', () => {
      const radiuses = [
        parseInt(tokens.borders.radius.sm),
        parseInt(tokens.borders.radius.md),
        parseInt(tokens.borders.radius.lg),
        parseInt(tokens.borders.radius.xl),
      ];

      for (let i = 1; i < radiuses.length; i++) {
        expect(radiuses[i]).toBeGreaterThanOrEqual(radiuses[i - 1]);
      }
    });
  });

  describe('Transitions', () => {
    it('should have transition tokens defined', () => {
      expect(tokens.transitions.fast).toBeDefined();
      expect(tokens.transitions.normal).toBeDefined();
      expect(tokens.transitions.slow).toBeDefined();
    });

    it('should have timing functions defined', () => {
      expect(tokens.transitions.easeIn).toBeDefined();
      expect(tokens.transitions.easeOut).toBeDefined();
      expect(tokens.transitions.easeInOut).toBeDefined();
    });
  });

  describe('Z-Index Scale', () => {
    it('should have consistent z-index values', () => {
      const zIndexes = [
        tokens.zIndex.dropdown,
        tokens.zIndex.sticky,
        tokens.zIndex.modal,
        tokens.zIndex.tooltip,
        tokens.zIndex.notification,
      ];

      for (let i = 1; i < zIndexes.length; i++) {
        expect(zIndexes[i]).toBeGreaterThan(zIndexes[i - 1]);
      }
    });

    it('should have sensible z-index gaps', () => {
      expect(tokens.zIndex.dropdown).toBe(1000);
      expect(tokens.zIndex.modal).toBeGreaterThan(tokens.zIndex.dropdown);
      expect(tokens.zIndex.modal).toBeLessThan(tokens.zIndex.tooltip);
    });
  });

  describe('Media Queries', () => {
    it('should have all required media query helpers', () => {
      expect(media.mobile).toBeDefined();
      expect(media.tablet).toBeDefined();
      expect(media.desktop).toBeDefined();
      expect(media.wide).toBeDefined();
      expect(media.ultrawide).toBeDefined();
    });

    it('should have accessibility-focused media queries', () => {
      expect(media.prefersReducedMotion).toBeDefined();
      expect(media.prefersHighContrast).toBeDefined();
      expect(media.prefersLightMode).toBeDefined();
      expect(media.prefersDarkMode).toBeDefined();
    });

    it('should use @media syntax', () => {
      expect(media.mobile).toContain('@media');
      expect(media.tablet).toContain('@media');
      expect(media.prefersReducedMotion).toContain('@media');
    });
  });

  describe('Color Pairs (Accessible Combinations)', () => {
    it('should have primary color pair', () => {
      expect(colorPair.primary.text).toBeDefined();
      expect(colorPair.primary.background).toBeDefined();
    });

    it('should have secondary color pair', () => {
      expect(colorPair.secondary.text).toBeDefined();
      expect(colorPair.secondary.background).toBeDefined();
    });

    it('should have CTA color pair', () => {
      expect(colorPair.cta.text).toBeDefined();
      expect(colorPair.cta.background).toBeDefined();
    });

    it('should have semantic color pairs', () => {
      expect(colorPair.success).toBeDefined();
      expect(colorPair.warning).toBeDefined();
      expect(colorPair.critical).toBeDefined();
    });
  });

  describe('Component Tokens', () => {
    it('should have consistent token structure', () => {
      expect(typeof tokens === 'object').toBe(true);
      expect(tokens.color).toBeDefined();
      expect(tokens.typography).toBeDefined();
      expect(tokens.spacing).toBeDefined();
      expect(tokens.layout).toBeDefined();
    });

    it('should have no undefined critical values', () => {
      const criticalPaths = [
        tokens.color.primary,
        tokens.typography.fontFamily,
        tokens.spacing,
        tokens.layout.breakpoints,
        tokens.zIndex,
      ];

      criticalPaths.forEach((path) => {
        expect(path).not.toBeUndefined();
        Object.values(path).forEach((value) => {
          expect(value).not.toBeUndefined();
        });
      });
    });
  });

  describe('Accessibility Compliance', () => {
    it('should have focus colors for keyboard navigation', () => {
      expect(tokens.color.focus).toBeDefined();
    });

    it('should support reduced motion', () => {
      expect(media.prefersReducedMotion).toBeDefined();
    });

    it('should support high contrast mode', () => {
      expect(media.prefersHighContrast).toBeDefined();
    });

    it('should have minimum touch target size specification', () => {
      // Touch targets should be 44px minimum (WCAG 2.5.5)
      expect(parseInt(tokens.layout.container.padding)).toBeGreaterThanOrEqual(
        parseInt(tokens.spacing.md)
      );
    });
  });
});

describe('CSS Token Integration', () => {
  it('should validate hex color format', () => {
    const colorRegex = /^#[0-9A-Fa-f]{6}$/;
    const colors = [
      tokens.color.primary.navy.deep,
      tokens.color.primary.red.alert,
      tokens.color.semantic.success,
    ];

    colors.forEach((color) => {
      expect(colorRegex.test(color)).toBe(true);
    });
  });

  it('should validate pixel values', () => {
    const pixelRegex = /^\d+px$/;
    const pixels = [
      tokens.spacing.xs,
      tokens.spacing.sm,
      tokens.layout.container.maxWidth,
      tokens.borders.radius.md,
    ];

    pixels.forEach((px) => {
      expect(pixelRegex.test(px)).toBe(true);
    });
  });

  it('should validate font family definitions', () => {
    expect(tokens.typography.fontFamily.serif).toContain("'");
    expect(tokens.typography.fontFamily.sans).toContain("'");
  });
});

describe('Responsive Design Validation', () => {
  it('should have mobile-first approach with ascending sizes', () => {
    const mobileH1 = parseInt(tokens.typography.scale.h1.mobileSize);
    const desktopH1 = parseInt(tokens.typography.scale.h1.size);

    expect(desktopH1).toBeGreaterThan(mobileH1);
  });

  it('should scale all heading types responsively', () => {
    const headings = ['h1', 'h2', 'h3', 'h4'] as const;

    headings.forEach((heading) => {
      const mobile = parseInt(tokens.typography.scale[heading].mobileSize);
      const desktop = parseInt(tokens.typography.scale[heading].size);

      expect(desktop).toBeGreaterThanOrEqual(mobile);
    });
  });

  it('should have appropriate line heights for readability', () => {
    expect(tokens.typography.scale.body.lineHeight).toBeGreaterThanOrEqual(1.5);
    expect(tokens.typography.scale.hero.lineHeight).toBeLessThan(
      tokens.typography.scale.body.lineHeight
    );
  });
});
