# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Initial project setup and monorepo structure
- TypeScript configuration
- ESLint and Prettier setup
- CI/CD pipeline foundation
- Added `docs/AGENT_HANDOFF.md` to track blockers, priorities, and next-agent continuity for test/deployment stabilization work
- Added deterministic auth configuration validator diagnostics for GitHub, Telegram, and admin integrations in `/api/status`.
- Added admin secret migration guidance for hash-first configuration with temporary plaintext fallback flag controls.

### Changed

- Added `tools/*` to npm workspaces so MCP skills can be managed through root workspace scripts
- Rewrote `narrative-launch` page content architecture to align with the long-form veteran housing fraud narrative, including 10-part structure, pull quotes, and provided source-reference registry.

### Deprecated

### Removed

### Fixed

- Resolved merge-conflict regressions in `apps/web/next.config.js` and `/api/status` by removing duplicate `turbopack` config and unused validator imports causing lint failures.
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
