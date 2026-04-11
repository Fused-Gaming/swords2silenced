# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Tailwind CSS integration scaffolding for `apps/web` with `tailwind.config.js` and `postcss.config.js`.
- `AGENT_SESSION_HANDOFF.md` with blockers, immediate next steps, and agent directives for auth/status recovery.

### Changed

- Updated web global stylesheet to temporarily disable Tailwind directives in install-constrained environments.
- Updated PostCSS config to avoid unavailable plugins during CI build execution.
- Updated documentation (`README.md`, `VERSION.md`, `CLAUDE.md`) with deployment/code-scanning recovery context.

### Deprecated

### Removed

### Fixed

- Repaired malformed root and web workspace `package.json` manifests that were breaking npm parsing and pre-commit hooks.
- Resolved merge-conflict regressions in `apps/web/next.config.js` and `apps/web/src/pages/index.tsx` that caused lint failures.
- Hardened GitHub Actions deploy workflow with dedicated build/deploy jobs and Vercel CLI flow for `main` pushes.
- Updated CodeQL workflow to maintained action version and JavaScript-only matrix to avoid duplicate TypeScript scans.
- Hardened `/api/status` auth diagnostics with explicit GitHub, Telegram, and admin readiness validation
- Added auth contract helpers to enforce expiry checks and safer admin hash-only posture

- Added missing `--color-info` design token for semantic informational states used by timeline category styling.
- Fixed Next.js 16 Turbopack workspace root detection by setting `turbopack.root` in `apps/web/next.config.js`.
- Removed runtime dependency on Google font fetch in `narrative-launch` by switching to CSS fallback font-family variables for more reliable offline/CI builds.

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

- Bug fix description

### Changed

- Breaking or significant change
```
