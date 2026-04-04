# Security Policy

## Reporting Security Vulnerabilities

If you discover a security vulnerability in the Swords to Silenced project, please report it responsibly. We appreciate your efforts to responsibly disclose your findings and will make every effort to acknowledge your contributions.

### How to Report

Please **do not** open a public GitHub issue for security vulnerabilities. Instead:

1. Visit the GitHub Security Advisory page: https://github.com/Fused-Gaming/swords2silenced/security/advisories
2. Click "Report a vulnerability" to submit a private security report
3. Provide detailed information about the vulnerability:
   - Description of the issue
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if applicable)

### Response Timeline

- Initial acknowledgment: Within 24 hours
- Assessment and initial response: Within 7 days
- Patch availability: Within 14-30 days (depending on severity)
- Public disclosure: After patch is released or 90 days, whichever is sooner

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | Development        |
| < 0.1   | Not supported      |

## Security Best Practices

When using Swords to Silenced:

1. Keep your dependencies up to date
2. Use environment variables for sensitive configuration
3. Never commit secrets or API keys to the repository
4. Follow the principle of least privilege for access control
5. Enable two-factor authentication on your GitHub account

## Dependency Security

We use:
- **Dependabot** for automated dependency monitoring and updates
- **GitHub Secret Scanning** to prevent accidental credential exposure
- **CodeQL** for code security analysis

All security updates are prioritized and released as soon as possible.

## Contact

For security-related questions or concerns, please contact:
- Email: Report via GitHub Security Advisory (recommended)
- GitHub: [@4eckd](https://github.com/4eckd)

## Bug Bounty

At this time, we do not have a formal bug bounty program. However, we greatly appreciate responsible disclosure of security issues and will acknowledge your contribution in our security advisory when publicly disclosed.

---

Last updated: 2026-04-04
