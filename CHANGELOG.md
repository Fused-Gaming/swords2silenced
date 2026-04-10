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

### Changed

- Added `tools/*` to npm workspaces so MCP skills can be managed through root workspace scripts

### Deprecated

### Removed

### Fixed

- Hardened `/api/status` auth diagnostics with explicit GitHub, Telegram, and admin readiness validation
- Added auth contract helpers to enforce expiry checks and safer admin hash-only posture
- Stabilized Next.js workspace build by setting monorepo `turbopack.root` for `apps/web`
- Removed build-time Google Font fetch dependency from `narrative-launch` by using resilient local font stacks
- Fixed MCP workspace lint plugin-resolution conflicts by resolving ESLint plugins from monorepo root
- Updated MCP workspace tests to pass when no test files are present (`jest --passWithNoTests`)
- Reduced MCP workspace lint noise by explicitly allowing `console.log` for MCP server diagnostics

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
