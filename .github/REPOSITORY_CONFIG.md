# GitHub Repository Configuration Guide

This document outlines the recommended GitHub repository settings for Fused-Gaming/swords2silenced.

## 1. Repository Visibility and Access Settings

### Current Status
- Repository: Public (recommended for open-source projects)
- Default branch: `main`

### Recommended Settings
- **Visibility**: Public
- **Allow forking**: Enabled
- **Allow discussions**: Enabled
- **Allow issues**: Enabled
- **Allow projects**: Enabled
- **Allow wiki**: Disabled (using discussions instead)

**Configuration Location**: Settings > General > Repository visibility

---

## 2. Branch Protection Settings

### Main Branch Protection Rules
Configure the following rules for the `main` branch:

**Location**: Settings > Branches > Branch protection rules > Add rule for `main`

#### Required Settings
1. **Require status checks to pass before merging**
   - Enabled
   - Dismiss stale PR approvals when new commits are pushed: Enabled
   - Require branches to be up to date before merging: Enabled
   - Status checks that must pass:
     - `Test Suite` (from .github/workflows/test.yml)
     - `Build` (from .github/workflows/deploy.yml)

2. **Require a pull request before merging**
   - Require approvals: 1 approval minimum
   - Dismiss stale pull request approvals when new commits are pushed: Enabled
   - Require review from Code Owners: Enabled

3. **Require conversation resolution before merging**
   - Enabled

4. **Require signed commits**
   - Recommended but optional
   - Enabled for security

5. **Auto-delete head branches**
   - Enabled
   - Location: Settings > General > Pull Requests

6. **Require linear history**
   - Disabled (to allow flexibility for team)

---

## 3. Pull Request and Issue Templates

### Configured Templates
- **PR Template**: `.github/PULL_REQUEST_TEMPLATE.md`
  - Includes description, type of change, testing, and checklist sections
  
- **Bug Report**: `.github/ISSUE_TEMPLATE/bug_report.md`
  - Includes reproduction steps, expected/actual behavior, environment
  
- **Feature Request**: `.github/ISSUE_TEMPLATE/feature_request.md`
  - Includes problem description, proposed solution, and priority

- **Issue Config**: `.github/ISSUE_TEMPLATE/config.yml`
  - Links to discussions and documentation

---

## 4. Code Security and Analysis

### Recommended Services to Enable

**Location**: Settings > Security and analysis

1. **Dependabot**
   - Alerts: Enabled
   - Security updates: Enabled
   - Version updates: Enabled (for auto-PRs)
   - Configuration file: `.github/dependabot.yml` (see below)

2. **Secret Scanning**
   - Push protection: Enabled
   - Alerts: Enabled

3. **Code Scanning**
   - Enable CodeQL or other SAST tools
   - Configuration: `.github/workflows/codeql.yml` (recommended to add)

4. **Private vulnerability reporting**
   - Enabled

### Recommended Workflows to Add

#### CodeQL Analysis
Location: `.github/workflows/codeql.yml`
- Runs on every push to main and PRs
- Scans for security vulnerabilities and code quality issues

#### Dependabot Configuration
Location: `.github/dependabot.yml`
- Monitors npm dependencies
- Creates automatic PRs for updates
- Configured with reasonable review intervals

---

## 5. Repository Description and Topics

### Recommended Configuration
- **Description**: "Swords to Silenced - A comprehensive monorepo platform"
- **Topics**: 
  - `monorepo`
  - `nextjs`
  - `typescript`
  - `deployment`
  - `gaming`
  - `platform`

**Configuration Location**: Settings > General > About section

---

## 6. Additional Recommended Settings

### General Settings
1. **Default branch**: `main` ✓ (Already configured)
2. **Squash merging**: Allow
3. **Rebase merging**: Allow
4. **Merge commits**: Allow
5. **Automatically delete head branches**: Enabled
6. **Issues**: Enabled
7. **Discussions**: Enabled
8. **Projects**: Enabled (default board)

### Access and Permissions
1. **Default permissions for new repositories**: Read
2. **GitHub Pages**: Enable if documentation site is needed
3. **Actions permissions**: Enabled (required for CI/CD)

---

## 7. Workflow Configuration

### Current Workflows
- `.github/workflows/test.yml` - Testing pipeline
- `.github/workflows/deploy.yml` - Deployment pipeline

### Recommended Additional Workflows
1. **Lint and Format Check** - Ensure code quality
2. **Security Scanning** - CodeQL or similar
3. **Dependency Updates** - Dependabot integration

---

## 8. Implementation Steps

To apply these settings:

1. Go to https://github.com/Fused-Gaming/swords2silenced/settings
2. Configure each section according to this guide
3. Enable branch protection for `main` branch
4. Set up required status checks from existing workflows
5. Configure Dependabot and code security features
6. Add topics and description

---

## 9. Files Already Committed

✓ `.github/PULL_REQUEST_TEMPLATE.md` - Standard PR template
✓ `.github/ISSUE_TEMPLATE/bug_report.md` - Bug report template
✓ `.github/ISSUE_TEMPLATE/feature_request.md` - Feature request template
✓ `.github/ISSUE_TEMPLATE/config.yml` - Issue template configuration

---

## 10. Workflow Files (Verified as Present)

✓ `.github/workflows/test.yml` - Testing pipeline
✓ `.github/workflows/deploy.yml` - Deployment pipeline

---

## Notes

- All templates use standard GitHub YAML frontmatter for proper formatting
- PR template includes comprehensive checklist for contributors
- Issue templates are specialized for different request types
- Branch protection rules enforce code quality standards
- Dependabot should be configured to keep dependencies up-to-date
- Code scanning helps identify security vulnerabilities early

For more information, visit: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features
