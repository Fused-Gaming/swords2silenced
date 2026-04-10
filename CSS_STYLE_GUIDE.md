# CSS Style Guide - Swords to Silenced

This document outlines CSS best practices and rules for the project.

## Golden Rule

✅ **ALL COLOR VALUES MUST USE CSS VARIABLES FROM `tokens.css`**

❌ DO NOT hardcode hex values like `#333333` or `#667eea`

## CSS Architecture

### File Structure

```
apps/web/src/styles/
├── tokens.css          # Design system variables (locked)
├── globals.css         # Global resets, imports
├── theme.css           # Utilities, shadows, transitions
├── layout.css          # Grid and flexbox utilities
│
└── <Component>.module.css  # Component-specific styles
```

### Import Order in Components

```tsx
// 1. External packages
import React from 'react';
import Link from 'next/link';

// 2. Internal components
import Button from '../atoms/Button';

// 3. Styles (CSS modules auto-import via globals.css)
import styles from './MyComponent.module.css';
```

> ⚠️ DO NOT import theme.css, tokens.css, or layout.css directly in components. They're auto-included in globals.css.

## Color Usage

### Design Tokens Available

**Primary Colors:**

```css
--color-navy-deep: #0b1f3a /* Brand primary */ --color-red-alert: #b02a37 /* Action/alert color */
  --color-white-off: #f8f9fa /* Off-white background */;
```

**Semantic Colors:**

```css
--color-success: #2a9d8f /* Positive state */ --color-warning: #f77f00 /* Warning state */
  --color-critical: #d62828 /* Error/critical state */;
```

**Extended Palette:**

```css
--color-blue-mute: #3a5a7a /* Secondary text/links */ --color-steel-gray: #5a6b7d /* Body text */
  --color-muted: #8a9bae /* Disabled/muted text */ --color-border: #ced4da /* Borders */
  --color-navy-light: #1a3a5c /* Dark variant */ --color-navy-xlight: #e8eef5 /* Light variant */
  --color-gray-light: #f1f3f5 /* Light background */ --color-gray-xlight: #fafbfc
  /* Lightest background */;
```

**Semantic Color Variants:**

```css
--color-success-dark: #1b6b5f /* Dark success (badges) */ --color-warning-dark: #b35a00
  /* Dark warning (badges) */ --color-critical-dark: #8b1a20 /* Dark critical (badges) */
  --color-red-alert-dark: #991e25 /* Dark red (hover states) */;
```

### ✅ Correct Usage

```css
.myComponent {
  color: var(--color-navy-deep);
  background-color: var(--color-gray-light);
  border: 1px solid var(--color-border);
}

.myComponent:hover {
  background-color: var(--color-navy-xlight);
  color: var(--color-red-alert);
}
```

### ❌ Incorrect Usage

```css
.myComponent {
  color: #333333; /* ❌ Use var(--color-navy-deep) */
  background-color: #f5f5f5; /* ❌ Use var(--color-gray-light) */
  border: 1px solid #e0e0e0; /* ❌ Use var(--color-border) */
}

.myComponent:hover {
  background-color: #e8eef5; /* ❌ Use var(--color-navy-xlight) */
}
```

## Spacing Usage

### Spacing Scale (8px base unit)

```css
--space-xs: 4px /* Mini spacing, inline elements */ --space-sm: 8px /* Small, buttons, inputs */
  --space-md: 16px /* Default, most spacing */ --space-lg: 24px /* Large, sections */
  --space-xl: 32px /* Extra large, major sections */ --space-2xl: 48px /* 2x large */
  --space-3xl: 64px /* 3x large, full-screen sections */;
```

### ✅ Correct Usage

```css
.card {
  padding: var(--space-md);
  margin-bottom: var(--space-lg);
  gap: var(--space-sm);
}
```

### ❌ Incorrect Usage

```css
.card {
  padding: 16px; /* ❌ Use var(--space-md) */
  margin-bottom: 24px; /* ❌ Use var(--space-lg) */
  gap: 8px; /* ❌ Use var(--space-sm) */
}
```

## Typography Usage

All typography is defined in `tokens.css` with preset sizes and weights. Use semantic HTML elements:

```tsx
// ✅ Correct
<h1>Page Title</h1>           {/* Uses H1 styles from globals.css */}
<h2>Section Title</h2>         {/* Uses H2 styles */}
<p>Body text</p>              {/* Uses body text styles */}

// ❌ Incorrect
<div className={styles.title}>Page Title</div>
<span style={{ fontSize: '2.5rem' }}>Section Title</span>
```

## CSS Module Scoping

### Component Module Structure

```css
/* MyComponent.module.css */

.container {
  /* Top-level wrapper */
}

.header {
  /* Header section */
}

.title {
  /* Title within header */
}

.section {
  /* Major section */
}

/* Variants */
.variant-primary {
  /* Primary variant */
}

.variant-secondary {
  /* Secondary variant */
}

/* States */
.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.loading {
  opacity: 0.8;
}
```

### ✅ Class Naming Convention

Use descriptive, scoped names within the module:

```css
.badge {
}
.variant-verified {
}
.variant-critical {
}

.button {
}
.variant-primary {
}
.size-large {
}

.caseCard {
}
.cardHeader {
}
.cardTitle {
}
```

### ❌ Anti-patterns

```css
.red {
} /* Too generic, moved to color tokens */
.big {
} /* Ambiguous, use size variants */
.title {
} /* Use semantic HTML + typography */
.flex {
} /* Use layout.css utilities instead */
```

## Responsive Design

### Breakpoints

```css
/* Mobile-first approach */
/* Default: 320px and up */

@media (min-width: 768px) {
  /* Tablet and up */
}

@media (min-width: 1024px) {
  /* Desktop and up */
}
```

### ✅ Correct Approach

```css
.container {
  padding: var(--space-md); /* Mobile */
}

@media (min-width: 768px) {
  .container {
    padding: var(--space-lg); /* Tablet */
  }
}

@media (min-width: 1024px) {
  .container {
    padding: var(--space-xl); /* Desktop */
  }
}
```

## Accessibility

### Focus States

All interactive elements must have visible focus states:

```css
button:focus-visible {
  outline: var(--focus-outline);
  outline-offset: var(--focus-offset);
}

a:focus-visible {
  outline: var(--focus-outline);
  outline-offset: var(--focus-offset);
}

input:focus-visible {
  outline: var(--focus-outline);
  outline-offset: var(--focus-offset);
}
```

### High Contrast Mode

```css
@media (prefers-contrast: more) {
  .button {
    border-width: 2px;
    font-weight: 700;
  }
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Common Refactoring Tasks

### Task: Add a new page with styles

1. Create `apps/web/src/pages/my-page.tsx`
2. Create `apps/web/src/styles/MyPage.module.css`
3. Import only the component CSS in the page:
   ```tsx
   import styles from '../styles/MyPage.module.css';
   ```
4. Use only design tokens and CSS variables in styles:
   ```css
   .container {
     color: var(--color-navy-deep);
     background: var(--color-white-off);
   }
   ```

### Task: Update a color used site-wide

1. Update the token in `tokens.css`:
   ```css
   --color-success: #2a9d8f; /* was #27A99B */
   ```
2. All components using `var(--color-success)` automatically update
3. ✅ No manual refactoring needed

### Task: Add a new semantic color

1. Add to `tokens.css`:
   ```css
   --color-new-state: #abc123;
   ```
2. Update any documentation or guides
3. Use in components:
   ```css
   .element {
     color: var(--color-new-state);
   }
   ```

## Linting & Validation

### Running CSS checks

```bash
# Lint the entire project
npm run lint

# Check TypeScript types
npm run type-check

# Format code
npm run format
```

### Pre-commit Hooks

CSS issues are caught automatically via:

- ESLint (checks for issues)
- Prettier (formats code)
- TypeScript (type safety)

Commit is blocked if linting fails. Fix with:

```bash
npm run lint -- --fix
npm run format
```

## Common Issues & Solutions

### Issue: "Cannot find variable var(--color-\*)"

**Solution:** Ensure tokens.css is imported in globals.css

```css
/* globals.css */
@import './tokens.css'; /* Must be first */
```

### Issue: Hardcoded color not matching design system

**Solution:** Replace with appropriate token

```css
/* Before */
color: #667eea;

/* After - determine which token matches */
color: var(--color-blue-mute);
```

### Issue: Inconsistent spacing

**Solution:** Use spacing tokens instead of custom values

```css
/* Before */
gap: 12px;
margin: 20px;

/* After */
gap: var(--space-sm);
margin: var(--space-md);
```

## Questions?

Refer to:

- `tokens.css` - Complete token definitions
- `theme.css` - Utility classes and examples
- `globals.css` - Global styles and resets
- Component `.module.css` files - Real-world examples
