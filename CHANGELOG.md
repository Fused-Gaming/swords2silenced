# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

### Changed

### Deprecated

### Removed

### Fixed

### Security

---

## [0.1.3] - 2026-05-10

### Added

- Design tokens system with comprehensive color palette and semantic CSS variables for consistent theming
- @h4shed/skill-syncpulse package for project status management and session history tracking across agent sessions
- PDFEmbed and CTASection reusable components for content rendering and calls-to-action
- Contract tests for `/api/status` healthy/degraded permutations and unsupported method handling
- Deterministic auth configuration validator diagnostics for GitHub, Telegram, and admin integrations in `/api/status`
- Admin secret migration guidance for hash-first configuration with temporary plaintext fallback flag controls
- Root `package-lock.json` to source control for GitHub Actions `setup-node` npm caching in CI
- Test file exclusion in `apps/web/tsconfig.json` to resolve Jest globals type-checking conflicts
- Session-orientation handoff documentation covering blockers, immediate next 3 steps, and top-priority agent directives
- MCP tools workspace (`tools/*`) to npm workspaces for centralized skill package management

### Changed

- Implemented design tokens system across advocacy components with purple-to-red gradient color palette
- Skill-syncpulse integration for comprehensive project status reporting and continuity tracking
- Updated TypeScript configuration for improved workspace compatibility and testing isolation
- ESLint hardening with v9 flat config mode and workspace plugin resolution stabilization
- Tailwind CSS integration refinement with semantic color token support and PostCSS pipeline optimization
- Landing page sections (#about, #cases, #submit) with design token styling and thesis-led narrative
- GitHub Actions workflows upgraded to Node.js 24 runtime with maintained action versions
- `/api/status` endpoint with hardened auth diagnostics and explicit non-GET method handling (405 responses)

### Fixed

- Fixed Next.js build stability by resolving Turbopack workspace root detection in monorepo structure
- Fixed merged-conflict regressions in `apps/web/next.config.js` and `apps/web/src/pages/api/status.ts`
- Fixed ESLint configuration parsing by removing duplicate keys and restoring valid JSON manifests
- Fixed homepage JSX structure regression and migration of navbar navigation to `next/link`
- Fixed runtime dependency on Google font fetch by switching to CSS fallback font-family variables
- Fixed Next.js 16 build failures by pinning Turbopack root configuration
- Resolved npm install failures in CI workflows and stabilized dependency resolution
- Hardened `/api/status` auth diagnostics with explicit GitHub, Telegram, and admin readiness validation
- Added missing `--color-info` and `--color-muted` design tokens for semantic state styling
- Verified all local quality gates pass: lint, type-check, build after stabilization sweep

### Deprecated

### Removed

### Fixed

- Fixed TypeScript type-checking failures in web app by excluding test files (`**/*.test.ts`, `**/*.test.tsx`) from `tsconfig.json` to resolve Jest globals conflicts.
- Fixed TypeScript deprecation warnings by keeping `ignoreDeprecations: 5.0` for forward compatibility with TS 5.9.3 (baseUrl and moduleResolution node10 deprecations are non-critical).
- Fixed Next.js build stability by confirming Turbopack root detection works correctly with monorepo structure.
- Verified all local quality gates pass: lint (✅), type-check (✅), build (✅) after TypeScript configuration stabilization.
- Upgraded GitHub Actions workflows to Node.js 24 runtime (`actions/checkout@v5`, `actions/setup-node@v5`) and pinned npm cache to `package-lock.json` to address Node 20 deprecation + cache lockfile errors.
- Fixed Next.js production build regression by moving `status.contract.test.ts` out of `apps/web/src/pages/api` into `apps/web/src/tests/api`, preventing route type-validation from treating tests as API handlers.
- Repaired malformed root and web workspace `package.json` manifests that were breaking npm parsing and pre-commit hooks.
- Resolved merge-conflict regressions in `apps/web/next.config.js` and `apps/web/src/pages/index.tsx` that caused lint failures.
- Hardened GitHub Actions deploy workflow with dedicated build/deploy jobs and Vercel CLI flow for `main` pushes.
- Updated CodeQL workflow to maintained action version and JavaScript-only matrix to avoid duplicate TypeScript scans.
- Enforced explicit `405` handling for non-GET `/api/status` requests with consistent contract keys and `Allow: GET` header.
- Resolved a degraded merge-resolution regression in `apps/web/src/pages/api/status.ts` that duplicated handler/type blocks and broke lint/type-check/build.
- Fixed `apps/web/next.config.js` duplicate `turbopack` key merge artifact and restored deterministic monorepo root resolution.
- Fixed web lint gating failures by removing unused imports, migrating navbar home navigation to `next/link`, and replacing raw avatar `<img>` with `next/image`.
- Repaired malformed workspace `package.json` files after bad conflict resolution by removing duplicate keys and restoring valid JSON metadata.
- Fixed homepage JSX structure regression in `apps/web/src/pages/index.tsx` (unclosed footer/nav merge debris) to restore ESLint parsing.
- Resolved merge-conflict regressions in `apps/web/next.config.js` and `/api/status` by removing duplicate `turbopack` config and unused validator imports causing lint failures.
- Hardened `/api/status` auth diagnostics with explicit GitHub, Telegram, and admin readiness validation
- Added auth contract helpers to enforce expiry checks and safer admin hash-only posture
- Added missing `--color-info` design token for semantic informational states used by timeline category styling.
- Added missing `--color-muted` token and aligned theme utilities to use the active tokenized palette.
- Fixed Next.js 16 Turbopack workspace root detection by setting `turbopack.root` in `apps/web/next.config.js`.
- Removed runtime dependency on Google font fetch in `narrative-launch` by switching to CSS fallback font-family variables for more reliable offline/CI builds.
- Fixed `@swords2silenced/mcp-skills` lint script for ESLint v9 by removing unsupported CLI behavior and using legacy config mode in workspace lint execution.
- Verified failed-testing continuation sweep with green root workspace `test`, `lint`, `type-check`, and `build` checks; documented remote PR/deployment visibility as the remaining blocker.

### Security

---

## [0.1.0] - 2026-04-04

### Added

- Project initialization
- Monorepo workspace structure (apps, packages, tools)
- TypeScript and modern tooling setup
- Development scripts (dev, build, test, lint, format)
- Basic documentation

---

## Version Format

This project follows [Semantic Versioning](https://semver.org/):

- **MAJOR**: Breaking changes or major feature releases
- **MINOR**: New features, backwards compatible
- **PATCH**: Bug fixes and minor improvements

---

## How to Document Changes

When making changes to the codebase:

1. Create a feature branch (see BRANCHING.md)
2. Make your changes with clear commit messages
3. Update this file in the `[Unreleased]` section before creating a PR
4. When releasing, move `[Unreleased]` changes to a new version section
5. Update the version in package.json and VERSION.md

Example format:

```markdown
### Added

- New feature or component

### Fixed

- Repaired malformed workspace `package.json` files after bad conflict resolution by removing duplicate keys and restoring valid JSON metadata.
- Fixed homepage JSX structure regression in `apps/web/src/pages/index.tsx` (unclosed footer/nav merge debris) to restore ESLint parsing.
- Bug fix description

### Changed

- Breaking or significant change
```
