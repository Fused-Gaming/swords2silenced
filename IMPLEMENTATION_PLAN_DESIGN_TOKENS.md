# Implementation Plan: Design Tokens & Advocacy Integration

## Overview

This plan describes the implementation of a comprehensive design token system for Swords to Silenced, including:

1. Design token creation and validation
2. Navigation component integration across all pages
3. Call-to-action (CTA) implementation in hero section
4. Responsive breakpoints for mobile-first design
5. Accessibility compliance (WCAG AA/AAA)
6. Dark mode with fallback light mode support

**Target Execution:** Parallel swarm orchestration with task workers
**Status:** Ready for implementation

---

## Phase 1: Design Token Foundation (Complete)

### 1.1 Deliverables

- ✅ `design-tokens.json` - Complete token specifications
- ✅ `design-tokens.ts` - TypeScript programmatic access
- ✅ `tokens.css` - CSS variable implementation (existing)

### 1.2 Token Coverage

**Color System:**

- Primary: Navy deep (#1f0021), Red alert (#751006)
- Semantic: Success, Warning, Critical, Info
- Neutral: White, Black, Gray scale
- Accessibility: Focus states, high contrast variants

**Typography:**

- Font families: Serif (Cormorant Garamond), Sans (Inter)
- Type scale: Hero through Caption (8 levels)
- Responsive sizes: Desktop and mobile variants
- Font weights: Regular (400) through Bold (700)

**Spacing:**

- Base unit: 8px
- Scale: xs (4px) through 4xl (96px)
- Mobile-first breakpoints

**Layout:**

- Grid: 12-column with 24px gutter
- Container: 1280px max with responsive padding
- Breakpoints: 320px, 768px, 1024px, 1440px, 1920px

**Accessibility:**

- WCAG AA/AAA compliant contrast ratios
- Focus outlines: 2px solid #f5c0b2
- Minimum touch targets: 44px
- Reduced motion support
- High contrast mode support

---

## Phase 2: Navigation Component Integration

### 2.1 Update Navbar Component

**File:** `apps/web/src/components/sections/Navbar.tsx`

**Changes:**

- Import design tokens from `design-tokens.ts`
- Update nav links to include responsive behavior
- Add button-styled navigation items for CTAs
- Improve mobile menu accessibility
- Ensure all links use CSS variables for styling

**New Navigation Structure:**

```
Logo | Links (Desktop) | CTA Button | Mobile Menu
     | - Cases
     | - About
     | - Submit Evidence
     | - Testimony (Advocacy)
```

### 2.2 Apply to All Pages

**Target Pages:**

- ✅ index.tsx (home)
- ✅ about.tsx
- ✅ case-timeline.tsx
- ✅ case/[id].tsx (dynamic)
- ✅ contact.tsx
- ✅ explore-records.tsx
- ✅ methodology.tsx
- ✅ money-flow.tsx
- ✅ narrative-launch.tsx
- ✅ sources.tsx
- ✅ submit.tsx
- ✅ testimony.tsx
- ✅ who-benefits.tsx

**Implementation:**

- Import Navbar component at layout level (\_app.tsx)
- Remove any existing navigation components
- Ensure consistent styling via tokens

---

## Phase 3: Hero Section & Call-to-Action

### 3.1 Create Testimony Call Script Component

**File:** `apps/web/src/components/composites/TestimonyCallScript.tsx`

**Features:**

- Display call script with formatting
- Variables for representatives (Lateefah Simon, Barbara Lee)
- Phone numbers and office contacts
- Copy-to-clipboard functionality
- Responsive design with mobile-first approach

**Phone Numbers:**

- Lateefah Simon (Congress CA-12): 510-763-0370
- Barbara Lee (Congress CA-12): (510) 238-3141
- Oakland Mayor: [To be filled]

**Script Structure:**

```
1. Core Message (concise impact statement)
2. Detailed Explanation (enforcement failures)
3. Ask (oversight, guidance, referral options)
4. Contact Information (variables)
5. Hashtags (#oakland #corruption #elizabethwilliams)
```

### 3.2 Update Home Page Hero Section

**File:** `apps/web/src/pages/index.tsx`

**Changes:**

- Add CTA button linking to `/testimony`
- Display call script overlay/modal option
- Maintain existing content
- Add mobile-optimized styling
- Implement dark background with accessible colors

**CTA Styling:**

- Background: `var(--color-red-alert)` (#751006)
- Text: `var(--color-white-off)` (#F8F9FA)
- Padding: `var(--space-lg)` (24px)
- Border radius: `var(--border-radius-md)` (8px)
- Hover state: darker red with transition

---

## Phase 4: Responsive Breakpoints

### 4.1 Mobile-First Strategy

**Breakpoint Implementation:**

| Size      | Width  | Use Case              |
| --------- | ------ | --------------------- |
| Mobile    | 320px  | Phones (smallest)     |
| Tablet    | 768px  | Tablets, large phones |
| Desktop   | 1024px | Desktop computers     |
| Wide      | 1440px | Large displays        |
| Ultrawide | 1920px | Very large displays   |

### 4.2 Responsive Scaling Rules

**Typography:**

- Hero: 32px (mobile) → 52px (desktop)
- H1: 28px (mobile) → 40px (desktop)
- H2: 24px (mobile) → 30px (desktop)
- Body: 16px (consistent)

**Spacing:**

- Container padding: 16px (mobile) → 24px (desktop)
- Gutter: 16px (mobile) → 24px (desktop)
- Margins: Scale proportionally

**Layout:**

- Grid: Stack to 2-column to full 12-column
- Navigation: Hamburger menu (mobile) → horizontal links (desktop)
- Components: Full width → responsive widths

**Implementation:**

- Use CSS media queries with tokens
- Use TypeScript `media` object for consistent selectors
- Test on actual devices and breakpoints
- Verify touch targets (minimum 44px)

---

## Phase 5: Token Testing & Validation

### 5.1 Test Suite

**Token Validation:**

- [ ] All colors have WCAG AA contrast ratio
- [ ] All colors have WCAG AAA contrast ratio (preferred)
- [ ] All spacing values follow 8px base unit
- [ ] All typography scales properly
- [ ] All breakpoints render correctly

**Component Testing:**

- [ ] Buttons use primary button token
- [ ] Navigation uses nav component token
- [ ] Forms use input component token
- [ ] All interactive elements have focus states

**Accessibility Testing:**

- [ ] Keyboard navigation works
- [ ] Screen reader announces properly
- [ ] High contrast mode readable
- [ ] Reduced motion honored
- [ ] Touch targets minimum 44px

**Responsiveness Testing:**

- [ ] Mobile (320px) renders correctly
- [ ] Tablet (768px) renders correctly
- [ ] Desktop (1024px) renders correctly
- [ ] Wide (1440px) renders correctly
- [ ] Text readable at all sizes
- [ ] Images scale properly

**Dark/Light Mode Testing:**

- [ ] Dark mode default looks correct
- [ ] Light mode (system preference) works
- [ ] Color contrast maintained in both modes
- [ ] Focus states visible in both modes

---

## Phase 6: Page Implementation

### 6.1 Content-Preserving Updates

**Rules:**

- NEVER modify content text
- ONLY update styling with design tokens
- Ensure all pages have consistent token usage
- Apply Navbar to all pages

**Per-Page Updates:**

1. **index.tsx** (Home)
   - Add hero CTA to testimony page
   - Style hero with tokens
   - Ensure responsive at all breakpoints

2. **testimony.tsx** (Advocacy)
   - Display call script
   - Add phone numbers with links
   - Add copy-to-clipboard button
   - Responsive layout

3. **Other Pages**
   - Apply Navbar component
   - Use design tokens for all styling
   - Ensure responsive behavior
   - Verify accessibility

### 6.2 Execution Strategy

**Parallel Execution:**

- Worker 1: Update navigation component & apply to all pages
- Worker 2: Create call script component & update hero
- Worker 3: Apply responsive breakpoints to all components
- Worker 4: Run test suite & validation

**Sequential Validation:**

- After each worker completes, run tests
- Fix failures immediately
- Document any deviations
- Commit when all tests pass

---

## Phase 7: Swarm Orchestration Execution

### 7.1 Orchestration Tasks

**Task 1: Design Token Setup (Sequential)**

```bash
Task: Design token file creation
- Create design-tokens.json ✅ (complete)
- Create design-tokens.ts ✅ (complete)
- Validate token structure
- Run tests
```

**Task 2: Navigation Component (Sequential)**

```bash
Task: Update navigation component
- Import design tokens
- Update Navbar.tsx styling
- Add responsive behavior
- Test keyboard navigation
- Apply to all pages
```

**Task 3: Hero & CTA (Parallel)**

```bash
Task: Hero section updates
- Create TestimonyCallScript component
- Update index.tsx hero section
- Add CTA button with link
- Add responsive styling
- Test responsiveness
```

**Task 4: Responsive Design (Parallel)**

```bash
Task: Add breakpoints to all components
- Update Button component
- Update Input component
- Update Card components
- Update Typography component
- Test all breakpoints
```

**Task 5: Testing & Validation (Sequential)**

```bash
Task: Comprehensive testing
- Run token validation tests
- Test accessibility (a11y)
- Test responsive behavior
- Test dark/light modes
- Test keyboard navigation
- Document results
```

### 7.2 Swarm Commands

```bash
# Initialize orchestration
node tools/cli/bootstrap-orchestration.js

# Execute parallel builds
bash tools/cli/swarm-orchestration.sh build all true

# Run tests
bash tools/cli/swarm-orchestration.sh test all true

# Validate
bash tools/cli/swarm-orchestration.sh validate

# Check status
bash tools/cli/swarm-orchestration.sh status
```

---

## Phase 8: Accessibility & Compliance

### 8.1 Color Contrast Compliance

**WCAG AA (Minimum 4.5:1 for normal text):**

- Primary text on background: Navy on white (✓)
- Link text: Blue-mute on navy (✓)
- Button text: White on red (✓)

**WCAG AAA (Enhanced 7:1 for normal text):**

- Most combinations meet AAA (✓)
- Fallback for edge cases

### 8.2 Focus & Keyboard Navigation

**Focus Indicator:**

- Color: #f5c0b2 (coral silk)
- Width: 2px
- Visible in all interactive elements
- Keyboard-accessible navigation order

**Keyboard Navigation:**

- Tab/Shift+Tab through all controls
- Enter/Space to activate buttons
- Arrow keys for menu navigation
- Escape to close modals

### 8.3 Mobile Accessibility

**Touch Targets:**

- Minimum 44px × 44px
- Adequate spacing between targets
- Large enough for fingers

**Screen Readers:**

- Proper semantic HTML
- ARIA labels where needed
- Image alt text
- Skip links for navigation

---

## Deliverables Checklist

### Tokens & Configuration

- [x] design-tokens.json
- [x] design-tokens.ts
- [x] tokens.css (existing, validated)

### Components

- [ ] Updated Navbar.tsx
- [ ] TestimonyCallScript.tsx
- [ ] Button.tsx with token styling
- [ ] Input.tsx with token styling

### Pages (Content Unchanged)

- [ ] index.tsx (hero + CTA)
- [ ] testimony.tsx (call script)
- [ ] All other pages (navigation added)

### Testing

- [ ] Token validation suite
- [ ] Accessibility audit (a11y)
- [ ] Responsive tests (all breakpoints)
- [ ] Dark/light mode tests
- [ ] Keyboard navigation tests

### Documentation

- [ ] Token usage guide
- [ ] Component library docs
- [ ] Accessibility guidelines
- [ ] Contributing guide update

---

## Success Criteria

✅ All pages render correctly at all breakpoints
✅ All interactive elements use design tokens
✅ Navigation component appears on every page
✅ Hero section includes advocacy CTA to /testimony
✅ Call script page displays properly
✅ All colors meet WCAG AA/AAA contrast ratios
✅ All pages pass accessibility audit
✅ Mobile layout responsive and usable
✅ Dark mode default, light mode optional
✅ All tests passing in swarm orchestration

---

## Timeline

**Phase 1:** Design Tokens - COMPLETE ✅
**Phase 2:** Navigation - 45 min (parallel execution)
**Phase 3:** Hero & CTA - 30 min (parallel execution)
**Phase 4:** Responsive Design - 60 min (parallel execution)
**Phase 5:** Testing - 45 min (sequential validation)
**Phase 6:** Implementation - 30 min (sequential updates)
**Phase 7:** Final Validation - 20 min (swarm orchestration)

**Total Estimated:** ~4-5 hours with parallel execution

---

## Notes

- All changes preserve existing content
- Design tokens are source of truth
- Swarm orchestration enables parallel execution
- Dark mode is default (accessibility best practice)
- Full WCAG AA/AAA compliance target
- Mobile-first responsive design
- Advocacy message: Clear, focused, actionable

---

**Last Updated:** 2026-05-09
**Status:** Ready for swarm orchestration execution
**Branch:** claude/setup-environment-tools-SK9nH
