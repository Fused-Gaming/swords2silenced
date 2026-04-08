# Claude Code Integration Guide

This document outlines guidelines for working with Claude Code (AI assistance) on the Swords2Silenced project.

## Quick Context

- **Project**: React static webpage framework
- **Goal**: Ship MVP with professional design as fast as possible
- **Team Size**: Solo development
- **Tech Stack**: React, TypeScript, Node.js, ESLint, Prettier

## How Claude Can Help

### ✅ Recommended Tasks for Claude

1. **Code Generation & Implementation**
   - Create React components and pages
   - Write utility functions and helpers
   - Implement styling and layouts
   - Scaffold new features from BRANCHING.md workflow

2. **Debugging & Fixes**
   - Identify and fix bugs
   - Resolve TypeScript errors
   - Fix styling issues
   - Optimize performance

3. **Code Quality**
   - Refactor code for clarity
   - Apply linting rules
   - Improve code organization
   - Add type safety improvements

4. **Documentation**
   - Write code comments (when needed)
   - Update documentation files
   - Create deployment guides
   - Document complex logic

5. **Development Workflow**
   - Create git commits with appropriate messages
   - Manage branches following BRANCHING.md
   - Run build, lint, and test commands
   - Help with deployments

### 📋 Project-Specific Instructions

**Always follow BRANCHING.md** when creating branches:

- Feature work: `feature/<description>` from `develop`
- Releases: `release/vX.Y.Z` following ROADMAP.md timeline
- Hotfixes: `hotfix/<description>` from `main`

**Update documentation when:**

- Adding new features → Update CHANGELOG.md (Unreleased section)
- Releasing a version → Update VERSION.md and CHANGELOG.md
- Changing architecture → Update CONTRIBUTING.md or ROADMAP.md

**Code style requirements:**

- Use Prettier (2-space indentation)
- Run ESLint before committing
- TypeScript with strict mode
- Conventional commit messages (feat:, fix:, docs:, etc.)

## When NOT to Use Claude

- ❌ Security-sensitive changes without explicit review
- ❌ Major architectural changes without discussion
- ❌ Anything that bypasses code quality tools (linting, type-checking)
- ❌ Changes to dependencies without understanding impact

## Getting the Best Results

1. **Be Specific**: "Add a header component with navigation menu" vs "add component"
2. **Reference Docs**: Mention BRANCHING.md, CONTRIBUTING.md when relevant
3. **Provide Context**: "We're launching in X days" helps prioritize work
4. **Check Results**: Review generated code before committing
5. **Follow Workflow**: Use feature branches and PRs consistently

## Useful Commands for Claude to Run

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run test             # Run tests
npm run lint             # Check code style
npm run format           # Format code with Prettier
npm run type-check       # TypeScript validation

# Git workflow
git status               # Check current state
git log --oneline        # View recent commits
git branch -a            # List all branches
```

## Sprint Focus (MVP Phase)

According to ROADMAP.md, current priorities are:

1. Core React architecture ✅
2. UI/Design implementation
3. Static site generation
4. Responsive design
5. Production build & deployment
6. Performance & SEO optimization

Claude should focus on accelerating these areas.

## Questions or Issues?

- Review CONTRIBUTING.md for development guidelines
- Check BRANCHING.md for workflow questions
- See ROADMAP.md for project timeline and priorities
- Check VERSION.md for versioning questions

---

**Last Updated**: 2026-04-04

## Agent Handoff Notes (2026-04-06)

- Auth diagnostics are now centralized in `apps/web/src/lib/authConfigValidator.ts` and surfaced by `/api/status`; use `reasonCodes` for deterministic remediation runbooks.
- Admin credential migration policy: prefer `ADMIN_PASSWORD_HASH`; allow `ADMIN_PASSWORD` only when `ADMIN_PASSWORD_MIGRATION_ENABLED=true`, and treat `legacy_secret_in_use` as action required.
- Styling semantic token gap identified/fixed: `--color-info` is required by `apps/web/src/pages/case-timeline.tsx`. Add token definitions before introducing new semantic color vars in page logic.
- Deployment/build guardrail: Next.js 16 with Turbopack in this monorepo requires `turbopack.root` in `apps/web/next.config.js` to avoid workspace root resolution failures.
- Before handoff: run `npm run lint --workspace=apps/web`, `npm run test --workspace=apps/web -- authConfigValidator.test.ts`, and `npm run build --workspace=apps/web`.
