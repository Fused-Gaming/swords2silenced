# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Added contract tests for `/api/status` healthy/degraded permutations and unsupported method handling.
- Initial project setup and monorepo structure
- TypeScript configuration
- ESLint and Prettier setup
- CI/CD pipeline foundation
- Added `docs/AGENT_HANDOFF.md` to track blockers, priorities, and next-agent continuity for test/deployment stabilization work
- Added deterministic auth configuration validator diagnostics for GitHub, Telegram, and admin integrations in `/api/status`.
- Added admin secret migration guidance for hash-first configuration with temporary plaintext fallback flag controls.

### Changed

- Documented stable `/api/status` schema keys (`status`, `checks`, `notes`, `version`) and hosting probe URL `/status` rewrite behavior.
- Added `tools/*` to npm workspaces so MCP skills can be managed through root workspace scripts
- Tailwind CSS integration scaffolding for `apps/web` with `tailwind.config.js` and `postcss.config.js`.
- `AGENT_SESSION_HANDOFF.md` with blockers, immediate next steps, and agent directives for auth/status recovery.
- Re-enabled Tailwind processing in `apps/web` by restoring PostCSS plugin wiring and Tailwind directives in global styles.
- Expanded Tailwind theme color mappings to include semantic status + muted/info token aliases.
- Synced workspace dependencies and refreshed `package-lock.json` to ensure Tailwind/PostCSS packages resolve consistently.

### Changed

- Updated web global stylesheet to temporarily disable Tailwind directives in install-constrained environments.
- Updated PostCSS config to avoid unavailable plugins during CI build execution.
- Updated documentation (`README.md`, `VERSION.md`, `CLAUDE.md`) with deployment/code-scanning recovery context.

### Deprecated

### Removed

### Fixed

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
