# UX/Design Audit: Swords to Silenced Landing Page

**Date:** April 29, 2026 | **Status:** Critical Issues Found

---

## 1. DESIGN SYSTEM COMPLIANCE ISSUES

### ❌ Critical: Hardcoded Colors vs. Design Tokens

**Problem:** Landing page uses hardcoded gradient (`#667eea` → `#764ba2`) instead of design system tokens.
**Current (Home.module.css line 5):**

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

**Should use (tokens.css):**

```css
background: linear-gradient(135deg, var(--color-violet-mist) 0%, var(--color-molten-lava) 100%);
```

**Impact:** Brand inconsistency, difficult maintenance, breaks dark mode support.

### ❌ Design Token Mismatch

- **Defined palette:** Purple → Red (midnight-violet to molten-lava)
- **Used palette:** Blue-Purple (hardcoded)
- **Risk:** Violates established design system; inconsistent with other pages

---

## 2. CONTENT & MESSAGING ISSUES

### 🔴 Hero Section Messaging

**Current:** "Transform Your Message" / "Empower your voice"
**Problem:** Generic, could apply to ANY platform. Doesn't communicate:

- What this platform does
- Why it matters
- The specific focus on housing-homelessness pipeline accountability

**Recommendation:**

```
"Expose the Housing-Homelessness Pipeline"
"Transparent documentation of systemic failures in housing & homeless services"
```

### 🔴 Features Section

**Current:** "Powerful", "Fast", "Secure"
**Problem:** Completely generic, disconnected from mission:

- No visitor understands what these mean
- Features don't differentiate from competitors
- Misaligned with accountability platform purpose

**Recommendation (mission-aligned):**

```
Transparency      → "Documented Evidence" - Real cases, verified sources
Accountability    → "Track Impact" - See systemic failures & their consequences
Community-Driven  → "User Testimonies" - Direct accounts from affected communities
```

### 🔴 About Section

**Current:** "Swords to Silenced is a platform dedicated to empowering voices..."
**Problem:**

- Vague corporate language
- Doesn't explain WHAT the platform is
- No call-to-action or next step
- Doesn't mention the core mission (housing-homelessness pipeline)

---

## 3. STRUCTURAL & NAVIGATION ISSUES

### ⚠️ Broken Navigation References

**Problem:** Links in Navbar point to non-existent anchors:

- `#cases` - No cases section on home page
- `#submit` - Missing evidence submission section
- Navbar and Home.module.css header are redundant/conflicting

**Current:** Two navigation systems:

1. Custom header in Home.module.css (lines 8-44)
2. Separate Navbar.tsx component
   Only Navbar is rendered, header styles are unused.

### ⚠️ Mobile Responsiveness Gap

**Found:** Home.module.css only responsive down to 768px media query
**Missing:**

- Mobile-first approach
- Tablet intermediate breakpoints
- Touch-friendly button sizes (CTA button may be too small)

---

## 4. VISUAL HIERARCHY & UX FLOW ISSUES

### ⚠️ Weak Call-to-Action

**Current:** "Read Personal Testimony" button
**Problems:**

- Doesn't have a strong, compelling action
- Visitors don't know what to do first
- No clear progression (learn → explore → engage)

**Recommendation:** Multi-level CTAs:

1. Primary: "Explore Cases" - Browse evidence
2. Secondary: "Submit Your Story" - Contribute
3. Tertiary: "Learn More" - How it works

### ⚠️ Missing Value Proposition

**Page flow:** Land → Generic hero → Generic features → Vague about
**Should be:** Land → Clear mission statement → Evidence of impact → Call-to-action

---

## 5. ACCESSIBILITY & SEMANTIC HTML

### ✅ Good

- Navbar has proper `aria-label` and `aria-expanded` (accessibility)
- Mobile menu toggle works with keyboard

### ⚠️ Needs Improvement

- No heading hierarchy consistency check
- Missing alt text strategy (images)
- Form validation missing (if applicable)
- Color contrast: White text on purple gradient needs WCAG AA verification

---

## 6. DESIGN SYSTEM OPPORTUNITIES

### Available but Unused @h4shed Skills:

- `@h4shed/skill-theme-factory` - Could auto-generate consistent design tokens
- `@h4shed/skill-frontend-design` - Could scaffold mission-aligned components
- `@h4shed/skill-ux-journeymapper` - Could map visitor journey (discover → learn → act)

---

## PRIORITY FIXES (High to Low)

| Priority | Issue                                        | Effort  | Impact |
| -------- | -------------------------------------------- | ------- | ------ |
| 🔴 P0    | Replace hardcoded colors with design tokens  | 1 hour  | High   |
| 🔴 P0    | Rewrite hero messaging to reflect mission    | 1 hour  | High   |
| 🟠 P1    | Restructure features to be mission-aligned   | 2 hours | High   |
| 🟠 P1    | Create dedicated sections for Cases & Submit | 4 hours | High   |
| 🟠 P1    | Improve About section with clear value prop  | 1 hour  | High   |
| 🟡 P2    | Verify WCAG AA color contrast                | 30 min  | Medium |
| 🟡 P2    | Add tablet breakpoints in responsive design  | 1 hour  | Medium |
| 🟡 P3    | Document component usage guidelines          | 2 hours | Low    |

---

## RECOMMENDED NEXT STEPS

1. **Align with Design System** → Use `tokens.css` variables everywhere
2. **Mission-Driven Content** → Rewrite copy to explain housing-homelessness pipeline focus
3. **Clear Information Architecture** → Create distinct sections for:
   - What we do (problem statement)
   - How we do it (methodology)
   - Impact evidence (case studies/testimonies)
   - How to contribute (submit/engage)
4. **Leverage @h4shed Skills** → Use `skill-theme-factory` for consistent design generation
5. **User Testing** → Validate messaging with actual target audience
