#!/bin/bash

# Script to configure GitHub branch protection rules for the main branch
# Repository: Fused-Gaming/swords2silenced

OWNER="Fused-Gaming"
REPO="swords2silenced"
BRANCH="main"
TOKEN="${GITHUB_TOKEN}"

if [ -z "$TOKEN" ]; then
    echo "Error: GITHUB_TOKEN environment variable is not set"
    echo "Please set it before running this script"
    exit 1
fi

echo "Configuring branch protection rules for ${OWNER}/${REPO} - ${BRANCH} branch..."

# Configure branch protection with required settings
curl -X PUT \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: token ${TOKEN}" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  "https://api.github.com/repos/${OWNER}/${REPO}/branches/${BRANCH}/protection" \
  -d '{
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
  }'

echo ""
echo "Branch protection configuration complete!"
echo ""
echo "Configuration applied:"
echo "  - Require pull request reviews: Yes (1 approval required)"
echo "  - Require status checks to pass: Yes"
echo "  - Require branches to be up to date: Yes"
echo "  - Dismiss stale reviews on new commits: Yes"
echo "  - Include administrators in restrictions: Yes"
echo "  - Allow force pushes: No"
echo "  - Allow deletions: No"
