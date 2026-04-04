# Branching Strategy for Swords2Silenced

## Overview

This project uses a **Git Flow** inspired branching strategy optimized for monorepo development.

## Main Branches

### `main`
- **Purpose**: Production-ready code
- **Requirements**:
  - All tests must pass
  - Code review approved
  - Changelog updated
  - Version bumped
- **Protection Rules**:
  - Requires pull request review
  - Dismisses stale reviews on new commits
  - Requires status checks to pass
  - Administrators cannot bypass rules

### `develop`
- **Purpose**: Integration branch for features
- **Base for**: Feature branches
- **Merging**: Features merged here are released together
- **Protection Rules**:
  - Requires pull request review
  - Requires status checks to pass

## Supporting Branches

### Feature Branches (`feature/*`)
- **Naming**: `feature/descriptive-name`
- **Based on**: `develop`
- **Merge back to**: `develop`
- **Example**: 
  - `feature/user-authentication`
  - `feature/payment-integration`

### Bugfix Branches (`bugfix/*`)
- **Naming**: `bugfix/issue-description`
- **Based on**: `develop`
- **Merge back to**: `develop`
- **Example**:
  - `bugfix/login-form-validation`
  - `bugfix/api-timeout-issue`

### Hotfix Branches (`hotfix/*`)
- **Naming**: `hotfix/issue-description`
- **Based on**: `main`
- **Merge back to**: `main` AND `develop`
- **Purpose**: Critical production fixes
- **Example**:
  - `hotfix/security-vulnerability`
  - `hotfix/payment-processing-error`

### Release Branches (`release/*`)
- **Naming**: `release/v*.*.* ` or `release/YYYY-MM-DD`
- **Based on**: `develop`
- **Merge back to**: `main` and `develop`
- **Purpose**: Release preparation, version bumping, changelog
- **Example**:
  - `release/v1.0.0`
  - `release/2024-04-01`

## Workflow Examples

### Creating a Feature

```bash
# 1. Create feature branch from develop
git checkout develop
git pull origin develop
git checkout -b feature/new-feature

# 2. Make changes and commit
git add .
git commit -m "feat: add new feature"

# 3. Push and create PR
git push -u origin feature/new-feature

# 4. After PR approval and merge to develop
git checkout develop
git pull origin develop
```

### Hotfix Workflow

```bash
# 1. Create hotfix from main
git checkout main
git pull origin main
git checkout -b hotfix/critical-fix

# 2. Make changes and commit
git add .
git commit -m "fix: resolve critical issue"

# 3. Push and create PR to main
git push -u origin hotfix/critical-fix

# 4. After merge to main, create PR to develop
git checkout develop
git pull origin develop
git merge hotfix/critical-fix
git push origin develop
```

## PR Naming Conventions

Use conventional commit format in PR titles:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation only
- `style:` - Code style changes (formatting, semicolons, etc.)
- `refactor:` - Code refactoring without feature change
- `perf:` - Performance improvements
- `test:` - Test additions or updates
- `ci:` - CI/CD configuration changes
- `chore:` - Dependency updates, tool changes

Examples:
- `feat: add user authentication system`
- `fix: resolve payment processing error`
- `docs: update API documentation`
- `refactor: simplify component structure`

## Release Process

1. Create `release/v*.*.* ` branch from `develop`
2. Update version in `package.json`
3. Update `CHANGELOG.md`
4. Create PR to `main`
5. After approval, merge to `main` and tag
6. Create PR from `main` back to `develop`
7. After merge, mark release as complete

## Development Rules

1. **Never commit directly to `main` or `develop`**
2. **Always create a feature/bugfix branch** from the appropriate base
3. **PR must be reviewed** before merging
4. **All tests must pass** before merge
5. **One feature per branch** - avoid mixing changes
6. **Keep commits clean** - use meaningful messages
7. **Update documentation** when needed

## Version Numbering

Use **Semantic Versioning** (MAJOR.MINOR.PATCH):

- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes

Example progression:
- `v1.0.0` → `v1.1.0` (new feature)
- `v1.1.0` → `v1.1.1` (bug fix)
- `v1.1.1` → `v2.0.0` (breaking change)

## Tools & Automation

### Recommended Tools

- **git-flow**: Simplified branch workflow
- **Commitizen**: Conventional commit messages
- **Husky**: Git hooks for linting and testing
- **GitHub Actions**: Automated testing and deployment

### Local Setup

```bash
# Install commitizen (optional but recommended)
npm install -g commitizen cz-conventional-changelog

# Configure git hooks
npm install husky --save-dev
npx husky install
```

## FAQ

**Q: Can I merge to main from develop directly?**
A: No. Always use a release branch for production releases.

**Q: What if I need to fix something in main?**
A: Use a hotfix branch, then merge to both main and develop.

**Q: How long should a feature branch live?**
A: Ideally less than a week. Long-lived branches create merge conflicts.

**Q: What about feature flags?**
A: Feature branches ARE your feature flags for this workflow.
