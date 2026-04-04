# Skills Integration Guide for Swords2Silenced

## Overview

This document explains how to install and integrate skills from **trystpilot/skills** and **Fused-Gaming-Skill-MCP** repositories into the Swords2Silenced monorepo.

### Available Skills

#### From trystpilot/skills Repository

The following skills are available and recommended for this project:

1. **pre-deploy-validator**
   - Purpose: Validate code before deployment
   - Use Case: Pre-commit hooks, CI/CD pipeline validation
   - Installation: Copy to `tools/validators/`

2. **web-artifacts-builder**
   - Purpose: Rapid prototyping and artifact generation
   - Use Case: Generate boilerplate, components, and assets
   - Installation: Copy to `tools/builders/`

3. **skill-creator**
   - Purpose: Create new custom skills for the project
   - Use Case: Build project-specific skills and tools
   - Installation: Copy to `tools/creators/`

4. **project-status-tool**
   - Purpose: Track project status and metrics
   - Use Case: Monitor deployments, test status
   - Installation: Copy to `tools/monitors/`

5. **mcp-builder**
   - Purpose: Build and extend MCP (Model Context Protocol) implementations
   - Use Case: Create custom AI-powered tools
   - Installation: Copy to `tools/mcp/`

#### From Fused-Gaming-Skill-MCP Repository

This repository provides pre-built MCP implementations:

1. **Pre-built MCPs**
   - Skill development tools
   - Deployment utilities
   - Code generation frameworks

2. **Documentation**
   - MCP execution guides
   - Prompt templates
   - Integration examples

## Installation Steps

### Step 1: Clone Skill Repositories (If Not Already Done)

```bash
# Clone trystpilot/skills
git clone https://github.com/trystpilot/skills.git ../skills

# Clone Fused-Gaming-Skill-MCP
git clone https://github.com/fused-gaming/fused-gaming-skill-mcp.git ../fused-gaming-skill-mcp
```

### Step 2: Copy Selected Skills

```bash
# Create tools structure
mkdir -p tools/{validators,builders,creators,monitors,mcp}

# Copy pre-deploy-validator
cp -r ../skills/skills/pre-deploy-validator tools/validators/

# Copy web-artifacts-builder
cp -r ../skills/skills/web-artifacts-builder tools/builders/

# Copy skill-creator
cp -r ../skills/skills/skill-creator tools/creators/

# Copy project-status-tool
cp -r ../skills/skills/project-status-tool tools/monitors/

# Copy MCP builder
cp -r ../skills/skills/mcp-builder tools/mcp/
```

### Step 3: Configure Claude Code Settings

Create or update `.claude-settings.json` (or configure in Claude Code):

```json
{
  "hooks": {
    "before_commit": {
      "command": "npm run lint && npm run test"
    },
    "after_merge": {
      "command": "npm run build"
    }
  },
  "skills": {
    "enabled": true,
    "paths": [
      "tools/validators",
      "tools/builders",
      "tools/creators",
      "tools/monitors",
      "tools/mcp"
    ]
  }
}
```

### Step 4: Install Skill Dependencies

Each skill may have dependencies. Install them:

```bash
# For each skill directory
cd tools/validators/pre-deploy-validator
npm install

cd ../../builders/web-artifacts-builder
npm install

cd ../../creators/skill-creator
npm install

cd ../../monitors/project-status-tool
npm install

cd ../../mcp/mcp-builder
npm install

# Return to root
cd ../../../..
```

## Using Skills in the Project

### Pre-Deploy Validator

Validate before pushing:

```bash
# Manual validation
npm run validate

# Or in CI/CD (GitHub Actions)
- name: Validate before deploy
  run: npm run validate
```

### Web Artifacts Builder

Generate boilerplate and assets:

```bash
# Create new page component
npx skill web-artifacts-builder generate page HomePage

# Create API route
npx skill web-artifacts-builder generate api users

# Create stylesheet
npx skill web-artifacts-builder generate styles Button
```

### Skill Creator

Create custom skills for your project:

```bash
# Create new skill
npx skill skill-creator new deployment-notifier

# This will create:
# tools/creators/deployment-notifier/
# ├── index.ts
# ├── package.json
# └── README.md
```

### Project Status Tool

Monitor project health:

```bash
# Check project status
npx skill project-status-tool status

# Watch deployments
npx skill project-status-tool watch

# Generate report
npx skill project-status-tool report --format=json
```

### MCP Builder

Extend with custom MCPs:

```bash
# Create new MCP
npx skill mcp-builder create my-mcp

# Build MCP
npm run build --workspace=tools/mcp/my-mcp

# Test MCP
npm run test --workspace=tools/mcp/my-mcp
```

## Integration Examples

### Example 1: Pre-Commit Validation

Add to `.git/hooks/pre-commit`:

```bash
#!/bin/bash
npm run lint || exit 1
npm run type-check || exit 1
npm run validate || exit 1
exit 0
```

### Example 2: CI/CD Pipeline

Update `.github/workflows/deploy.yml`:

```yaml
- name: Run validators
  run: npm run validate

- name: Build artifacts
  run: npx skill web-artifacts-builder validate-build

- name: Check project status
  run: npx skill project-status-tool status
```

### Example 3: Custom Skill Development

Create a deployment notifier:

```typescript
// tools/creators/deployment-notifier/index.ts
export const deploymentNotifier = {
  name: 'deployment-notifier',
  version: '1.0.0',
  
  async notify(version: string, environment: string) {
    // Notify team of deployment
    console.log(`Deployed v${version} to ${environment}`);
    // Send webhook, Slack message, etc.
  }
};
```

## Monorepo Skills Structure

```
swords2silenced/
└── tools/
    ├── validators/
    │   └── pre-deploy-validator/
    │       ├── package.json
    │       ├── index.ts
    │       └── rules/
    ├── builders/
    │   └── web-artifacts-builder/
    │       ├── package.json
    │       ├── generators/
    │       └── templates/
    ├── creators/
    │   └── skill-creator/
    │       ├── package.json
    │       └── templates/
    ├── monitors/
    │   └── project-status-tool/
    │       ├── package.json
    │       └── reporters/
    └── mcp/
        ├── mcp-builder/
        │   ├── package.json
        │   └── builders/
        └── custom-mcps/
```

## Skill Configuration

### Per-Skill Configuration

Each skill can have configuration:

```json
{
  "skills": {
    "pre-deploy-validator": {
      "rules": ["lint", "types", "tests"],
      "failOnWarning": true
    },
    "web-artifacts-builder": {
      "templates": "custom-templates/",
      "outputDir": "apps/web/src"
    }
  }
}
```

### Environment-Specific Configuration

```bash
# Development
npm run validate --env=development

# Staging
npm run validate --env=staging

# Production
npm run validate --env=production
```

## Extending Skills

### Modifying Skills

You can customize skills for your project:

1. Copy skill to your project
2. Modify as needed
3. Update package.json name to avoid conflicts
4. Test thoroughly
5. Document changes

Example:

```bash
# Copy and customize
cp -r ../skills/skills/pre-deploy-validator tools/validators/custom-validator

# Modify custom-validator/package.json
# Change name to "@swords2silenced/custom-validator"

# Update rules in custom-validator/rules/
```

### Contributing Improvements Back

If you improve a skill:

1. Create a fork of the original skill repo
2. Make improvements
3. Submit PR to original repo
4. Reference in PR_CONTRIBUTION_LIST.md

Example PR entry:

```markdown
## Contributed Improvements

### To trystpilot/skills
- Enhanced pre-deploy-validator with custom rules for monorepos

### To fused-gaming/fused-gaming-skill-mcp  
- Added Docker containerization support for MCPs
```

## Troubleshooting

### Issue: Skill Not Found

```bash
# Check skill paths
npm list --depth=0

# Verify installation
ls -la tools/validators/pre-deploy-validator

# Reinstall
cd tools/validators/pre-deploy-validator
npm install
cd ../../../..
```

### Issue: Dependency Conflicts

```bash
# Check for conflicts
npm audit

# Resolve conflicts
npm install --legacy-peer-deps

# Or update conflicting packages
npm update
```

### Issue: Skill Command Not Working

```bash
# Verify skill is executable
npm run -l | grep skill

# Check skill configuration
cat .claude-settings.json

# Reinstall globally if needed
npm install -g <skill-name>
```

## Best Practices

1. **Keep skills organized** - Group by function (validators, builders, etc.)
2. **Document modifications** - Note any customizations
3. **Test thoroughly** - Run full test suite after skill installation
4. **Version control** - Commit skill changes with clear messages
5. **Share improvements** - Contribute back to original repos
6. **Monitor dependencies** - Keep skills updated
7. **Create custom skills** - Extend for project-specific needs

## Contributing Custom Skills

To contribute your custom skills back to the community:

1. Create skill following established patterns
2. Add comprehensive documentation
3. Write tests
4. Create PR to appropriate repository
5. Reference in PR_CONTRIBUTION_LIST.md

Example contribution:

```markdown
## New Skill: Swords2Silenced Custom Validator

**Repository**: fused-gaming/fused-gaming-skill-mcp
**PR**: #XXX
**Status**: Under Review

Custom validation rules for monorepo structure and deployment safety.
```

## Resources

- [trystpilot/skills Repository](https://github.com/trystpilot/skills)
- [Fused-Gaming-Skill-MCP Repository](https://github.com/fused-gaming/fused-gaming-skill-mcp)
- [Claude Code Documentation](https://claude.ai/help/code)
- [MCP Protocol Documentation](https://modelcontextprotocol.io)

## Next Steps

1. Clone skill repositories (if not already cloned)
2. Select and copy relevant skills
3. Install skill dependencies
4. Configure Claude Code settings
5. Test skills in your workflow
6. Create custom skills as needed
7. Document any modifications
8. Contribute improvements back
