# MCP Skills Quick Start (5 Minutes)

Get up and running with Fused-Gaming MCP skills in under 5 minutes.

## Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Already in `/home/user/swords2silenced` directory

## 1. Install Dependencies (1 minute)

```bash
npm install
```

## 2. Build MCP Skills (2 minutes)

```bash
npm run build --workspace=@swords2silenced/mcp-skills
```

## 3. Set Up Environment (1 minute)

```bash
cp tools/mcp/.env.example tools/mcp/.env
```

## 4. Generate Your First Component (1 minute)

```bash
npx skill frontend-design generate Button
```

This creates: `apps/web/src/components/Button/`

## Done!

Your MCP skills are now ready to use. See below for common commands.

---

## Essential Commands

### Validation
```bash
npm run validate
```

### Generate Components
```bash
npx skill frontend-design generate ComponentName
```

### Generate Themes
```bash
npx skill theme-factory generate
```

### Create Custom Skills
```bash
npx skill skill-creator new skill-name
```

### Build All Workspaces
```bash
npm run build
```

### Run Tests
```bash
npm run test
```

---

## Common Workflows

### Create a Button Component
```bash
npx skill frontend-design generate Button
```

### Create a Complete Theme
```bash
npx skill theme-factory generate --primary="#4F46E5"
```

### Create a Custom Tool
```bash
npx skill skill-creator new my-tool
npm run build --workspace=tools/mcp/custom-skills/my-tool
```

---

## Verify Installation

```bash
# List installed skills
npm list @swords2silenced/mcp-skills

# Check configuration
cat tools/mcp/config.json | jq '.skills'

# Verify environment
head -10 tools/mcp/.env
```

---

## Need Help?

- **Main Guide:** `tools/mcp/README.md`
- **Detailed Skills:** `tools/mcp/docs/SKILLS_GUIDE.md`
- **Integration:** `tools/mcp/docs/INTEGRATION_GUIDE.md`
- **Troubleshooting:** See "Troubleshooting" in `tools/mcp/README.md`

---

## What's Next?

1. Generate your first component
2. Create a theme for your project
3. Explore the other skills
4. Read the full documentation
5. Create custom skills for your needs
