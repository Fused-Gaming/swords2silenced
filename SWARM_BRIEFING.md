# Swarm Coordination Briefing

**Mission:** Parallelize landing page fixes from design audit  
**Status:** 4 Feature branches ready for parallel work  
**Deadline:** MVP ship readiness  
**Coordination Model:** Independent feature branches → PR review → develop merge

---

## 🎯 Mission Context

**Problem:** Landing page is generic SaaS template, not positioned as housing-homelessness accountability platform.

**Solution:** 4 parallel feature branches targeting:

1. Design system alignment (colors/tokens)
2. Hero messaging (mission clarity)
3. Feature section (mission alignment)
4. Missing sections (cases/submit)

---

## 📋 PARALLEL WORK STREAMS

### Stream 1: Design Tokens Alignment

**Branch:** `feature/landing-page-design-tokens`  
**Owner:** [Assign to Agent-1]  
**Priority:** P0 (critical)  
**Effort:** 1 hour  
**Status:** Ready to start

**Tasks:**

- [ ] Open `apps/web/src/styles/Home.module.css`
- [ ] Replace hardcoded `linear-gradient(135deg, #667eea 0%, #764ba2 100%)` with design tokens
- [ ] Use: `linear-gradient(135deg, var(--color-violet-mist) 0%, var(--color-molten-lava) 100%)`
- [ ] Review `apps/web/src/styles/tokens.css` for available color variables
- [ ] Test in dev environment: `npm run dev`
- [ ] Ensure colors match brand palette (purple→red, not blue-purple)
- [ ] Remove other hardcoded color values in same file
- [ ] Create PR with before/after comparison

**Acceptance Criteria:**

- ✅ No hardcoded colors remain in Home.module.css
- ✅ All colors use CSS variables from tokens.css
- ✅ Visual appearance unchanged in browser
- ✅ Dark mode support preserved

**Dependencies:** None (independent)

---

### Stream 2: Hero Messaging Rewrite

**Branch:** `feature/landing-page-hero-copy`  
**Owner:** [Assign to Agent-2]  
**Priority:** P0 (critical)  
**Effort:** 1 hour  
**Status:** Ready to start

**Tasks:**

- [ ] Open `apps/web/src/pages/index.tsx` (lines 36-42)
- [ ] Current hero:
  ```
  h2: "Transform Your Message"
  p: "Empower your voice. Make an impact. Join the movement."
  ```
- [ ] Replace with mission-driven copy:
  ```
  h2: "Expose the Housing-Homelessness Pipeline"
  p: "Transparent documentation of systemic failures in housing & homeless services"
  ```
- [ ] Verify line breaks and formatting in browser
- [ ] Test on mobile (responsive)
- [ ] Create PR with copy comparison

**Acceptance Criteria:**

- ✅ Hero copy clearly explains the platform's mission
- ✅ Messaging mentions "housing-homelessness pipeline"
- ✅ Copy is concise and impactful
- ✅ Responsive on mobile/tablet

**Dependencies:** None (independent)

---

### Stream 3: Mission-Aligned Features Section

**Branch:** `feature/landing-page-features-section`  
**Owner:** [Assign to Agent-3]  
**Priority:** P1 (high)  
**Effort:** 2 hours  
**Status:** Ready to start

**Tasks:**

- [ ] Open `apps/web/src/pages/index.tsx` (lines 44-60)
- [ ] Current features:
  ```
  1. Powerful → Built on modern, scalable architecture
  2. Fast → Lightning-quick performance
  3. Secure → Enterprise-grade security
  ```
- [ ] Replace with mission-aligned features:
  ```
  1. Documented Evidence
     → Real cases with verified sources
     → See systemic patterns in housing failures

  2. Track Impact
     → Monitor consequences of policy failures
     → Understand who's affected and how

  3. Community-Driven
     → Direct accounts from affected communities
     → Collective accountability records
  ```
- [ ] Update feature card styling if needed (check `.featureCard` in Home.module.css)
- [ ] Ensure feature descriptions are mission-aligned
- [ ] Test visual layout in dev environment
- [ ] Create PR with before/after screenshots

**Acceptance Criteria:**

- ✅ 3 features match mission (Evidence, Impact, Community)
- ✅ Each feature has clear, mission-aligned description
- ✅ Visual layout unchanged
- ✅ No hardcoded colors (use tokens)

**Dependencies:** Can run parallel with Stream 1 OR wait for Stream 1 if colors need fixing first

---

### Stream 4: Create Cases & Submit Sections

**Branch:** `feature/landing-page-sections`  
**Owner:** [Assign to Agent-4]  
**Priority:** P1 (high)  
**Effort:** 4 hours  
**Status:** Ready to start (complex)

**Tasks:**

- [ ] Analyze navbar navigation (Navbar.tsx lines 24-29): points to #cases, #submit
- [ ] Create new section in `index.tsx`: Cases showcase
  ```tsx
  <section id="cases" className={styles.cases}>
    <h3>Featured Cases</h3>
    <p>[Placeholder for case cards]</p>
  </section>
  ```
- [ ] Create new section in `index.tsx`: Submit Evidence
  ```tsx
  <section id="submit" className={styles.submit}>
    <h3>Submit Your Evidence</h3>
    <p>[Placeholder for form or CTA]</p>
  </section>
  ```
- [ ] Add corresponding styles in `Home.module.css`
  - Follow existing pattern (.features, .about structure)
  - Use design tokens (no hardcoded colors)
  - Ensure responsive layout
- [ ] Update About section with better value proposition
  - Current: Generic platform pitch
  - New: Specific mission statement + impact
- [ ] Test responsive design (mobile/tablet/desktop)
- [ ] Create PR with layout screenshots

**Acceptance Criteria:**

- ✅ #cases section exists and navbar link works
- ✅ #submit section exists and navbar link works
- ✅ About section clearly explains mission & value
- ✅ All styles use design tokens
- ✅ Responsive on all breakpoints
- ✅ Smooth scroll anchors work

**Dependencies:** Can run parallel; no dependencies on other streams

---

## 🔄 COORDINATION PROTOCOL

### Before Starting

Each agent should:

1. Clone the repo locally
2. Checkout assigned feature branch
3. Verify branch is up-to-date: `git pull origin <branch-name>`
4. Install deps: `npm ci`
5. Start dev server: `npm run dev`

### During Development

- **Work independently** on assigned branch
- **Test locally** before committing
- **Run linters:** `npm run lint` before commit
- **Run type-check:** `npm run type-check`
- **Commit frequently** with clear messages

### Before PR Submission

Each branch must:

- [ ] Pass `npm run lint`
- [ ] Pass `npm run type-check`
- [ ] Pass `npm run build`
- [ ] Have 1-2 test commits with clear messages
- [ ] Include before/after context in PR description
- [ ] Reference this briefing: "Swarm Feature Stream"

### PR Review & Merge

1. **Agent 1 reviews Agent 2-4** (cross-review)
2. **Agent 2 reviews Agent 1, 3-4**
3. All 4 must pass CI before merge
4. Merge to `develop` (not main)
5. **Sequential merge order** (prevents conflicts):
   - Stream 1 first (design tokens)
   - Stream 2 (hero copy)
   - Stream 3 (features)
   - Stream 4 (sections)

---

## 📊 PARALLEL EXECUTION TIMELINE

```
T=0h:    All 4 agents start simultaneously on assigned branches
T=1h:    Streams 1 & 2 complete, ready for PR
T=2h:    Stream 1 merged to develop, Stream 3 completes
T=3h:    Stream 2 merged, Stream 4 completes
T=4h:    Stream 3 & 4 merged, all branches cleaned up
T=4h+:   Integrated preview ready for testing
```

**Total Parallelized Time:** ~4 hours (vs 8 hours sequential)

---

## ⚠️ CONFLICT PREVENTION

**High-risk files:**

- `apps/web/src/pages/index.tsx` (all streams touch)
- `apps/web/src/styles/Home.module.css` (streams 1, 3, 4)

**Risk Mitigation:**

- Stream 1 & 3 coordinate on color token usage
- Streams 2 & 4 coordinate on index.tsx sections
- Merge in sequence: 1→2→3→4 to reduce conflicts

**If merge conflicts occur:**

1. **Pull latest develop:** `git pull origin develop`
2. **Resolve manually** (coordinate with other agent)
3. **Re-test:** `npm run lint && npm run build`
4. **Force-push to your branch:** `git push origin <branch> --force`

---

## 🎯 SUCCESS CRITERIA

**All tasks complete when:**

- ✅ All 4 feature branches merged to develop
- ✅ Landing page clearly communicates mission
- ✅ Design tokens replace all hardcoded colors
- ✅ Features section is mission-aligned
- ✅ Cases & Submit sections exist with proper navigation
- ✅ Page is responsive (mobile/tablet/desktop)
- ✅ All CI checks pass
- ✅ No console errors or warnings

**Preview Success:**

- Landing page should clearly explain "housing-homelessness pipeline accountability"
- Visitor flow: Mission statement → Evidence → Call-to-action
- Professional, mission-driven design (not generic SaaS)

---

## 🛠️ AVAILABLE TOOLS & RESOURCES

**@h4shed Skills (installed):**

- `@h4shed/skill-theme-factory` - For design consistency
- `@h4shed/skill-frontend-design` - Component scaffolding
- `@h4shed/skill-project-manager` - Task coordination

**Project Resources:**

- DESIGN_AUDIT.md - Full audit details (read first!)
- CLAUDE.md - Coding guidelines
- BRANCHING.md - Git workflow
- tokens.css - Design system variables

**Commands:**

```bash
npm run dev           # Start dev server (localhost:3000)
npm run lint          # Check code style
npm run build         # Production build
npm run type-check    # TypeScript validation
npm run format        # Auto-format with Prettier
```

---

## 📝 HANDOFF CHECKLIST

- [ ] All 4 feature branches created and pushed
- [ ] Task list created in window
- [ ] This briefing document ready
- [ ] Each agent knows their stream & acceptance criteria
- [ ] Dev environment verified
- [ ] DESIGN_AUDIT.md provided as reference
- [ ] Conflict prevention strategy agreed

**Briefing Status:** ✅ Ready for swarm deployment

---

## Questions / Escalations

If an agent encounters:

- **Merge conflicts** → Coordinate with other agents on scheduling
- **Blocking issues** → Escalate to primary coordinator
- **Design questions** → Reference DESIGN_AUDIT.md
- **Git issues** → Check BRANCHING.md or ask coordinator

**All agents report status** in this session before end of shift.
