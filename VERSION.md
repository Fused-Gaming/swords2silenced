# Version Management

## Current Version

**0.1.2** (MVP Development)

- Last Updated: 2026-04-11
- Notes: Deployment/CodeQL CI hardening completed; workspace manifests and web build pipeline repaired for lint/test/build stability.

## Versioning Strategy

This project uses [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

### Version Format

```
MAJOR.MINOR.PATCH
```

- **MAJOR** (0.x.x → 1.x.x): Breaking changes or major feature releases
  - Example: Complete API redesign, structural changes
  - Requires documentation updates

- **MINOR** (x.1.x → x.2.x): New features or backwards-compatible additions
  - Example: New React component, new utility function
  - Backwards compatible with previous MINOR versions

- **PATCH** (x.x.1 → x.x.2): Bug fixes and minor improvements
  - Example: Fix styling issue, optimize performance
  - Backwards compatible

### Pre-release Versions (Optional)

For unstable versions, use: `1.0.0-alpha`, `1.0.0-beta`, `1.0.0-rc.1`

## Where Versions Are Tracked

1. **package.json** - Main version source of truth
2. **CHANGELOG.md** - Detailed change history
3. **Git tags** - Release versions tagged in git (e.g., `v0.1.0`)

## Release Process

1. Update CHANGELOG.md with changes under `[Unreleased]`
2. Increment version in package.json
3. Create a release commit: `chore: bump version to X.Y.Z`
4. Create a git tag: `git tag vX.Y.Z`
5. Push changes and tag: `git push && git push --tags`

## Next Steps

- **0.1.0** → **0.2.0**: First feature release after MVP launch
- **0.2.0+** → **1.0.0**: Production-ready release

---

**Note:** Version 0.x.x indicates active development. Once the MVP is launched and stable, we'll move to 1.0.0.
