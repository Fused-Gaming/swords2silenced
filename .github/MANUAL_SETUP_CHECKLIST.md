# GitHub Repository Manual Setup Checklist

This checklist contains the remaining manual configuration steps that must be completed through the GitHub web interface to fully enable all repository settings.

## Repository Settings

### General Settings
**Location**: https://github.com/Fused-Gaming/swords2silenced/settings

- [ ] **Repository Name**: Verify set to "swords2silenced"
- [ ] **Description**: Update to "Swords to Silenced - A comprehensive monorepo platform"
- [ ] **Visibility**: Verify set to "Public"
- [ ] **Default branch**: Verify set to "main"
- [ ] **Allow forking**: Enable (default)
- [ ] **Allow discussions**: Enable
- [ ] **Allow issues**: Enable
- [ ] **Allow projects**: Enable (recommended)
- [ ] **Allow wiki**: Disable (using discussions instead)
- [ ] **Merge button**: Allow all merge types
  - [ ] Allow merge commits
  - [ ] Allow squash merging
  - [ ] Allow rebase merging
- [ ] **Auto-delete head branches**: Enable
- [ ] **Use GitHub-flavored markdown in issue and pull request descriptions**: Enable

### About Section
**Location**: https://github.com/Fused-Gaming/swords2silenced

- [ ] **Add topics** (edit repository details):
  - [ ] monorepo
  - [ ] nextjs
  - [ ] typescript
  - [ ] deployment
  - [ ] gaming
  - [ ] platform

---

## Branch Protection Rules

### Main Branch Protection
**Location**: https://github.com/Fused-Gaming/swords2silenced/settings/branches

- [ ] Create new rule for "main"
- [ ] **Require a pull request before merging**
  - [ ] Require approvals: `1`
  - [ ] Dismiss stale pull request approvals when new commits are pushed: `Enable`
  - [ ] Require review from Code Owners: `Enable`
  - [ ] Allow specified actors to bypass required pull requests: `Disable` (recommended)

- [ ] **Require status checks to pass before merging**
  - [ ] Require branches to be up to date before merging: `Enable`
  - [ ] Add required status checks (after workflows run):
    - [ ] `Test Suite` (from test.yml)
    - [ ] `Build` (from deploy.yml)
    - [ ] `Lint and Format Check` (from lint.yml)
    - [ ] `CodeQL / Analyze` (from codeql.yml) - *add after first run*

- [ ] **Additional protections**
  - [ ] Require conversation resolution before merging: `Enable`
  - [ ] Require signed commits: `Enable` (recommended)
  - [ ] Require linear history: `Disable` (for flexibility)
  - [ ] Allow force pushes: `Disable`
  - [ ] Allow deletions: `Disable`

---

## Code Security & Analysis

### Security and Analysis Settings
**Location**: https://github.com/Fused-Gaming/swords2silenced/settings/security_analysis

#### Dependabot
- [ ] **Dependabot alerts**: Enable
- [ ] **Dependabot security updates**: Enable
- [ ] **Dependabot version updates**: Enable
  - Note: `.github/dependabot.yml` is already configured
  - Verify it creates PRs for:
    - [ ] npm dependencies (weekly)
    - [ ] npm security updates (daily)
    - [ ] GitHub Actions (weekly)

#### Secret Scanning
- [ ] **Secret scanning**: Enable
- [ ] **Push protection**: Enable
- [ ] **Secret scanning validity checks**: Enable (if available)

#### Code Scanning
- [ ] **CodeQL analysis**: Enable
  - Note: `.github/workflows/codeql.yml` is configured
  - Verify workflows run on:
    - [ ] Push to main
    - [ ] Pull requests
    - [ ] Weekly schedule (Sunday midnight UTC)

#### Private Vulnerability Reporting
- [ ] **Private vulnerability reporting**: Enable

---

## Access Management

### Repository Permissions
**Location**: https://github.com/Fused-Gaming/swords2silenced/settings/access

- [ ] **Default permissions**: Set to "Read"
- [ ] **Verify CODEOWNERS**:
  - File: `.github/CODEOWNERS` (already created)
  - Primary owner: @4eckd
  - [ ] Review and approve all PRs enabled

---

## Collaborators & Teams

**Location**: https://github.com/Fused-Gaming/swords2silenced/settings/collaboration

- [ ] Add team members as needed:
  - [ ] Assign appropriate roles (Maintain, Write, Triage, Read)
  - [ ] Configure branch protections if needed

---

## Actions & Workflows

### Workflow Configuration
**Location**: https://github.com/Fused-Gaming/swords2silenced/settings/actions

- [ ] **Actions permissions**: Enable
- [ ] **Workflow permissions**: 
  - [ ] Read and write permissions: Enable
  - [ ] Allow GitHub Actions to create and approve pull requests: Enable (optional)

### Verify All Workflows
**Location**: https://github.com/Fused-Gaming/swords2silenced/actions

- [ ] **test.yml**: Verify runs on PR and push to main
- [ ] **deploy.yml**: Verify runs on PR and push to main
- [ ] **lint.yml**: Verify runs on PR and push to main
- [ ] **codeql.yml**: Verify runs on PR, push to main, and weekly schedule
- [ ] All workflows complete successfully

---

## Pages & Deployment

### GitHub Pages (if needed)
**Location**: https://github.com/Fused-Gaming/swords2silenced/settings/pages

- [ ] **Source**: Select branch and folder if deploying docs
- [ ] **Custom domain**: Set up if needed
- [ ] **HTTPS**: Enforce (if using custom domain)

---

## Notifications & Alerts

### Repository Notifications
**Location**: https://github.com/Fused-Gaming/swords2silenced/settings/notifications

- [ ] **Default notifications**: Configure as needed
- [ ] **Watch settings**: Verify watching repository for updates

### Code Scanning Alerts
**Location**: https://github.com/Fused-Gaming/swords2silenced/security/code-scanning

- [ ] Set up alert notifications
- [ ] Configure dismissal policies for known vulnerabilities

---

## Verification Checklist

Once all manual settings are configured, verify the following:

### Workflow Testing
- [ ] Make a test branch and create a test PR
- [ ] Verify all required checks run and pass
- [ ] Verify code owner review is required
- [ ] Verify branch protection prevents merge without checks
- [ ] Test PR approval and merging workflow
- [ ] Verify head branch auto-deletes after merge

### Security Testing
- [ ] Run CodeQL analysis and verify results appear in security tab
- [ ] Check for any security alerts
- [ ] Verify Dependabot creates PRs for updates

### Branch Protection Testing
- [ ] Attempt to push directly to main (should fail)
- [ ] Verify only PRs can merge to main
- [ ] Verify all status checks are required
- [ ] Verify CODEOWNERS review is required

---

## Documentation References

| Topic | File/Link |
|-------|-----------|
| Full Configuration Guide | [`.github/REPOSITORY_CONFIG.md`](REPOSITORY_CONFIG.md) |
| Setup Summary | [`.github/SETUP_SUMMARY.md`](SETUP_SUMMARY.md) |
| Security Policy | [`SECURITY.md`](../../SECURITY.md) |
| Pull Request Template | [`.github/PULL_REQUEST_TEMPLATE.md`](PULL_REQUEST_TEMPLATE.md) |
| Bug Report Template | [`.github/ISSUE_TEMPLATE/bug_report.md`](ISSUE_TEMPLATE/bug_report.md) |
| Feature Request Template | [`.github/ISSUE_TEMPLATE/feature_request.md`](ISSUE_TEMPLATE/feature_request.md) |
| Code Owners | [`.github/CODEOWNERS`](CODEOWNERS) |
| Dependabot Config | [`.github/dependabot.yml`](dependabot.yml) |
| GitHub Docs | https://docs.github.com/en/repositories |

---

## Quick Links

- **Repository Settings**: https://github.com/Fused-Gaming/swords2silenced/settings
- **Branch Protection**: https://github.com/Fused-Gaming/swords2silenced/settings/branches
- **Security Settings**: https://github.com/Fused-Gaming/swords2silenced/settings/security_analysis
- **Actions**: https://github.com/Fused-Gaming/swords2silenced/actions
- **Security Tab**: https://github.com/Fused-Gaming/swords2silenced/security

---

## Notes

- All code changes for templates and workflows have been committed to `main`
- Dependabot configuration will auto-activate once enabled in settings
- CodeQL workflows will begin running once enabled
- Branch protection rules take effect immediately after creation
- All team members should be notified of new requirements for PRs

---

**Last Updated**: 2026-04-04  
**Status**: Ready for manual configuration  
**Estimated Time**: 15-20 minutes to complete all steps
