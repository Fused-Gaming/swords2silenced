# Git Flow Branching Strategy

This project uses **Git Flow**, a branching model designed for managing releases and features in a structured way.

## Branch Overview

### Main Branches

#### `main`
- **Purpose**: Production-ready code only
- **Protection**: Should only receive merges from `release/` and `hotfix/` branches
- **Deployment**: Automatically deployed to production
- **Tag**: Tagged with version numbers (e.g., `v0.1.0`)

#### `develop`
- **Purpose**: Integration branch for features
- **Protection**: Requires PR reviews before merging
- **Deployment**: Staging/pre-production environment
- **Status**: Always ready for next release

### Supporting Branches

#### `feature/*`
- **Purpose**: Develop new features
- **Created from**: `develop`
- **Merged back into**: `develop`
- **Naming convention**: `feature/feature-name`
- **Example**: `feature/user-profile`, `feature/dark-mode`
- **Lifetime**: Deleted after merge

#### `release/*`
- **Purpose**: Prepare production release
- **Created from**: `develop`
- **Merged back into**: `main` and `develop`
- **Naming convention**: `release/v0.1.0`, `release/1.2.0`
- **Tasks**: Version bumps, final testing, documentation
- **Lifetime**: Deleted after merge

#### `hotfix/*`
- **Purpose**: Emergency fixes to production
- **Created from**: `main`
- **Merged back into**: `main` and `develop`
- **Naming convention**: `hotfix/critical-bug-fix`
- **Example**: `hotfix/security-patch`, `hotfix/checkout-crash`
- **Lifetime**: Deleted after merge

## Workflow

### Creating a Feature

```bash
# Update develop branch
git checkout develop
git pull origin develop

# Create feature branch
git checkout -b feature/my-new-feature

# Make changes, commit, push
git add .
git commit -m "feat: add new feature"
git push -u origin feature/my-new-feature

# Create Pull Request on GitHub
# - Request review
# - Address feedback
# - Merge when approved
```

### Creating a Release

```bash
# Create release branch from develop
git checkout -b release/v0.2.0 develop
git push -u origin release/v0.2.0

# On release branch:
# - Update VERSION.md
# - Update package.json version
# - Finalize CHANGELOG.md
# - Test thoroughly

git add .
git commit -m "chore: release v0.2.0"

# Merge to main
git checkout main
git pull origin main
git merge --no-ff release/v0.2.0
git tag -a v0.2.0 -m "Release v0.2.0"
git push origin main --tags

# Merge back to develop
git checkout develop
git pull origin develop
git merge --no-ff release/v0.2.0
git push origin develop

# Delete release branch
git branch -d release/v0.2.0
git push origin --delete release/v0.2.0
```

### Creating a Hotfix

```bash
# Create hotfix branch from main
git checkout -b hotfix/critical-fix main
git push -u origin hotfix/critical-fix

# Make fix, update version (PATCH bump)
git add .
git commit -m "fix: critical issue"

# Merge to main
git checkout main
git pull origin main
git merge --no-ff hotfix/critical-fix
git tag -a v0.1.1 -m "Hotfix v0.1.1"
git push origin main --tags

# Merge to develop
git checkout develop
git pull origin develop
git merge --no-ff hotfix/critical-fix
git push origin develop

# Delete hotfix branch
git branch -d hotfix/critical-fix
git push origin --delete hotfix/critical-fix
```

## Naming Conventions

| Branch Type | Format | Examples |
|---|---|---|
| Feature | `feature/<description>` | `feature/nav-redesign`, `feature/contact-form` |
| Release | `release/v<version>` | `release/v0.2.0`, `release/v1.0.0` |
| Hotfix | `hotfix/<description>` | `hotfix/security-patch`, `hotfix/css-bug` |

**Guidelines:**
- Use lowercase
- Use hyphens to separate words (not underscores)
- Keep names descriptive but concise
- Avoid special characters

## Commit Message Guidelines

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): subject

body

footer
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style (formatting, missing semicolons, etc.)
- `refactor`: Code refactor
- `perf`: Performance improvement
- `test`: Adding/updating tests
- `chore`: Build, dependencies, version bumps
- `ci`: CI/CD configuration

**Examples:**
```
feat(navbar): add mobile menu toggle
fix(carousel): prevent image overflow on mobile
docs(contributing): update setup instructions
chore: bump dependencies
```

## Important Rules

1. **Never commit directly to `main`** - Always use PR
2. **Never commit directly to `develop`** - Use feature branches
3. **Always use `--no-ff`** for merge commits - Preserves branch history
4. **Tag releases** - Create semantic version tags on `main`
5. **Keep branches up-to-date** - Rebase or merge develop regularly

## Quick Reference

```bash
# Check current branch
git branch

# List all branches (local and remote)
git branch -a

# Switch branch
git checkout <branch-name>

# Create and switch to new branch
git checkout -b <branch-name>

# Delete local branch
git branch -d <branch-name>

# Delete remote branch
git push origin --delete <branch-name>

# Push with tracking
git push -u origin <branch-name>
```

---

**For more details on Git Flow, see:**
https://nvie.com/posts/a-successful-git-branching-model/
