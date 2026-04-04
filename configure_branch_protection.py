#!/usr/bin/env python3
"""
Script to configure GitHub branch protection rules for the main branch
Repository: Fused-Gaming/swords2silenced
"""

import os
import sys
import json
import requests
from typing import Dict, Any

def configure_branch_protection() -> bool:
    """Configure branch protection rules for the main branch"""

    # Configuration
    owner = "Fused-Gaming"
    repo = "swords2silenced"
    branch = "main"
    token = os.getenv("GITHUB_TOKEN")

    if not token:
        print("Error: GITHUB_TOKEN environment variable is not set")
        print("Please set it before running this script")
        return False

    # GitHub API endpoint
    url = f"https://api.github.com/repos/{owner}/{repo}/branches/{branch}/protection"

    # Headers
    headers = {
        "Accept": "application/vnd.github+json",
        "Authorization": f"token {token}",
        "X-GitHub-Api-Version": "2022-11-28"
    }

    # Branch protection configuration
    data = {
        "required_pull_request_reviews": {
            "dismiss_stale_reviews": True,
            "require_code_owner_reviews": False,
            "required_approving_review_count": 1
        },
        "required_status_checks": {
            "strict": True,
            "contexts": []
        },
        "enforce_admins": True,
        "dismiss_stale_reviews": True,
        "require_branches_to_be_up_to_date": True,
        "require_conversation_resolution": False,
        "allow_force_pushes": False,
        "allow_deletions": False,
        "block_creations": False,
        "required_linear_history": False
    }

    print(f"Configuring branch protection rules for {owner}/{repo} - {branch} branch...")
    print()

    try:
        response = requests.put(url, headers=headers, json=data)

        if response.status_code in [200, 201]:
            print("✓ Branch protection configured successfully!")
            print()
            print("Configuration applied:")
            print("  ✓ Require pull request reviews: Yes (1 approval required)")
            print("  ✓ Require status checks to pass: Yes")
            print("  ✓ Require branches to be up to date: Yes")
            print("  ✓ Dismiss stale reviews on new commits: Yes")
            print("  ✓ Include administrators in restrictions: Yes")
            print("  ✓ Allow force pushes: No")
            print("  ✓ Allow deletions: No")
            print()

            # Display the response
            result = response.json()
            print("Response from GitHub API:")
            print(json.dumps(result, indent=2))
            return True
        else:
            print(f"Error: Failed to configure branch protection")
            print(f"Status code: {response.status_code}")
            print(f"Response: {response.text}")
            return False

    except Exception as e:
        print(f"Error: {e}")
        return False

if __name__ == "__main__":
    success = configure_branch_protection()
    sys.exit(0 if success else 1)
