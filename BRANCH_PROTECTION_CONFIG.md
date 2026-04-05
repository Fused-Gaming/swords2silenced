# GitHub Branch Protection Configuration for swords2silenced

## Overview

This document describes the branch protection rules that should be configured for the `main` branch of the Fused-Gaming/swords2silenced repository.

## Configuration Details

The following branch protection rules have been specified for the `main` branch:

### 1. Pull Request Reviews
- **Requirement**: Require pull request reviews before merging
- **Approval Count**: At least 1 approval required
- **Dismiss Stale Reviews**: Yes - stale reviews will be dismissed when new commits are pushed
- **Code Owner Reviews**: Not required (can be enabled if needed)

### 2. Status Checks
- **Requirement**: Require status checks to pass before merging
- **Strict Mode**: Enabled - branches must be up to date with the base branch before merging
- **Workflows Detected**:
  - `Test & Lint` workflow (test.yml) - Runs TypeScript checks, linting, and tests on all pushes and PRs to main/develop
  - `Deploy to Vercel` workflow (deploy.yml) - Runs on pushes to main branch

### 3. Branch Currency
- **Require Branches to be Up to Date**: Yes - pull request branches must be up to date with the base branch before merging

### 4. Administrator Restrictions
- **Include Administrators**: Yes - branch protection rules apply to administrators as well

### 5. Additional Security Settings
- **Allow Force Pushes**: No - force pushes are not allowed
- **Allow Deletions**: No - branch cannot be deleted
- **Block Creations**: No
- **Require Conversation Resolution**: No (can be enabled if needed)
- **Required Linear History**: No

## How to Apply Configuration

### Option 1: Using Python Script (Recommended)

```bash
# Set your GitHub token
export GITHUB_TOKEN="your_github_personal_access_token"

# Run the Python script
python3 configure_branch_protection.py
```

**Requirements**:
- Python 3.x
- `requests` library: `pip install requests`
- GitHub Personal Access Token with `repo` scope

### Option 2: Using Bash Script

```bash
# Set your GitHub token
export GITHUB_TOKEN="your_github_personal_access_token"

# Run the bash script
bash configure-branch-protection.sh
```

**Requirements**:
- `curl` command-line tool
- GitHub Personal Access Token with `repo` scope

### Option 3: Using GitHub Web UI

1. Go to https://github.com/Fused-Gaming/swords2silenced
2. Click on "Settings"
3. Select "Branches" from the left sidebar
4. Under "Branch protection rules", click "Add rule"
5. For branch name pattern, enter: `main`
6. Configure the following:
   - [x] Require a pull request before merging
   - [x] Require approvals (set to 1)
   - [x] Dismiss stale pull request approvals when new commits are pushed
   - [x] Require status checks to pass before merging
   - [x] Require branches to be up to date before merging
   - [x] Include administrators
   - [x] Restrict who can push to matching branches (optional)
7. Click "Create"

### Option 4: Using GitHub CLI

```bash
gh api repos/Fused-Gaming/swords2silenced/branches/main/protection \
  --input - <<'EOF'
{
  "required_pull_request_reviews": {
    "dismiss_stale_reviews": true,
    "require_code_owner_reviews": false,
    "required_approving_review_count": 1
  },
  "required_status_checks": {
    "strict": true,
    "contexts": []
  },
  "enforce_admins": true,
  "dismiss_stale_reviews": true,
  "require_branches_to_be_up_to_date": true,
  "require_conversation_resolution": false,
  "allow_force_pushes": false,
  "allow_deletions": false,
  "block_creations": false,
  "required_linear_history": false
}
EOF
```

## GitHub Token Requirements

To apply this configuration programmatically, you'll need a GitHub Personal Access Token with the following scope:
- `repo` - Full control of private and public repositories

Generate a token at: https://github.com/settings/tokens

## Verification

After applying the configuration, verify it by:

1. Going to the repository Settings > Branches
2. Checking that the "main" branch has a protection rule
3. Verifying all configured options are visible

Or via API:
```bash
curl -H "Authorization: token YOUR_TOKEN" \
  https://api.github.com/repos/Fused-Gaming/swords2silenced/branches/main/protection
```

## Implications

Once these rules are in place:

1. **All changes to `main` must go through pull requests** - Direct pushes are not allowed
2. **Pull requests require at least 1 approval** - Code review is mandatory
3. **Branches must be up to date** - Prevents merge conflicts and ensures latest code is reviewed
4. **CI checks must pass** - The Test & Lint and Deploy workflows must pass
5. **Admins are subject to rules** - Even administrators cannot bypass these protections
6. **Stale reviews are dismissed** - When new commits are pushed to a PR, previous approvals are reset

## Troubleshooting

### "No status checks are configured for this repository"
This is normal if no CI workflows have completed yet. Once workflows run, GitHub will automatically populate the available status checks.

### Authentication issues
- Ensure your GITHUB_TOKEN is set correctly
- Verify the token has the `repo` scope
- Check that the token hasn't expired

### Permission denied errors
- Ensure you have admin access to the Fused-Gaming/swords2silenced repository
- Your GitHub account must have push access to the repository

## References

- GitHub Documentation: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches
- GitHub API: https://docs.github.com/en/rest/branches/branch-protection
