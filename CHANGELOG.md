# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Tailwind CSS integration scaffolding for `apps/web` with `tailwind.config.js` and `postcss.config.js`.
- `AGENT_SESSION_HANDOFF.md` with blockers, immediate next steps, and agent directives for auth/status recovery.

### Changed

- Updated web global stylesheet to include Tailwind layers (`@tailwind base/components/utilities`).
- Updated documentation (`README.md`, `VERSION.md`, `CLAUDE.md`) with current session orientation and styling stack notes.

### Deprecated

### Removed

### Fixed

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
