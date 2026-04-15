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

## Agent Continuity Notes

- Keep `tools/*` in root npm workspaces so MCP skill packages are buildable from root scripts.
- Use `apps/web/src/lib/authReadiness.ts` as the single contract source for GitHub/Telegram/admin readiness checks consumed by `/api/status`.
- For auth rotations, update both secret and `*_EXPIRES_AT` variables to avoid false degraded status reports.

- Keep `apps/web/next.config.js` turbopack root pinned to monorepo root (`../..`) to avoid workspace root inference failures.
- Prefer local/system font stacks in critical pages when CI/build environments may block Google Fonts fetches.

- MCP workspace lint should use `--resolve-plugins-relative-to ../../` to avoid duplicate plugin resolution between root and workspace installs.
- MCP workspace tests should use `jest --passWithNoTests` unless/ until dedicated tests are added.

- Use `rg -n "^(<<<<<<<|>>>>>>>)" .` before test/debug passes to catch unresolved merge markers early.
- Merge-resolution guardrail (2026-04-10): verify `apps/web/src/pages/api/status.ts` contains a single `handler` export and single `diagnostics` shape; duplicate blocks can pass visual review but fail lint/type-check/build.
- Keep `apps/web/next.config.js` with only one `turbopack` key (using `path.resolve`) to avoid `no-dupe-keys` lint failures and config drift.
- Workspace health baseline (2026-04-10): `npm test -- --runInBand`, `npm run lint`, `npm run build`, and `npm run type-check` all pass; primary risk is missing test coverage rather than failing tests.
- `/api/status` contract baseline (2026-04-10): always preserve top-level `status`, `checks`, `notes`, and `version`; GET returns 200 and non-GET returns 405 with `Allow: GET`.

## Questions or Issues?

- Review CONTRIBUTING.md for development guidelines
- Check BRANCHING.md for workflow questions
- See ROADMAP.md for project timeline and priorities
- Check VERSION.md for versioning questions

---

**Last Updated**: 2026-04-04

## Agent Continuity Notes (2026-04-10)

- Local clone currently has no `origin` remote configured, so PR comments/deployment statuses cannot be queried from this environment.
- Attempting `npm install -w apps/web -D tailwindcss postcss autoprefixer` returned HTTP 403 from npm registry; dependency declarations were added manually and should be installed in CI or a network-permitted dev environment.
- Active priority order remains: (1) auth recovery contracts, (2) `/status` endpoint hardening, (3) thesis content wiring after contract stability.

## Agent Continuity Notes (2026-04-11)

- Deployment/code-scanning recovery addressed: root + web package manifests repaired, deploy workflow switched to build-then-deploy with Vercel CLI, CodeQL migrated to `github/codeql-action@v3` and JS matrix only.
- Web lint/test/build now pass locally after resolving `next.config.js` duplication and malformed `index.tsx` merge artifacts.
- Tailwind/PostCSS baseline updated: keep `tailwindcss` + `autoprefixer` active in `apps/web/postcss.config.js` and keep `@tailwind` directives enabled in `globals.css`.

## Agent Continuity Notes (2026-04-11)

- Merge-conflict regressions can silently duplicate JSON keys in root and workspace `package.json`; run `npm run lint` first to catch parser/no-dupe-keys issues before deeper build checks.

- Next.js build guardrail (2026-04-11): keep Jest/contract tests out of `apps/web/src/pages/**`; route-type validation can treat `*.test.ts` files as API routes and fail production builds.
- Tailwind guardrail (2026-04-11): keep `apps/web/postcss.config.js` wired with `tailwindcss` + `autoprefixer` and preserve `@tailwind base/components/utilities` in `src/styles/globals.css` to avoid silent utility-class no-op behavior.
- Color-token guardrail (2026-04-11): maintain `--color-info` and `--color-muted` in `src/styles/tokens.css`; `CaseTimeline` and theme utility classes depend on them.
- ESLint v9 workspace guardrail (2026-04-13): `tools/mcp` lint must not use `--resolve-plugins-relative-to`; use `ESLINT_USE_FLAT_CONFIG=false eslint src --ext .ts,.tsx` to keep workspace lint compatible.

- CI guardrail (2026-04-13): keep root `package-lock.json` committed and do not ignore it; `actions/setup-node` npm caching depends on lockfile presence.
- GitHub Actions runtime guardrail (2026-04-13): prefer `actions/checkout@v5` + `actions/setup-node@v5` and Node.js 24 in workflows to stay ahead of Node 20 deprecation deadlines.
