# Swords2Silenced MCP Skills

Fused-Gaming MCP (Model Context Protocol) skills integrated with the swords2silenced monorepo. This module provides modular, production-ready tools for deployment validation, frontend design, theme generation, and custom skill creation.

## Installation

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- TypeScript >= 5.3.0

### Quick Start

1. Clone the repository (already done in swords2silenced):
```bash
cd /home/user/swords2silenced
```

2. Install dependencies:
```bash
npm install
```

3. Build the MCP module:
```bash
npm run build --workspace=@swords2silenced/mcp-skills
```

4. Initialize environment variables:
```bash
cp tools/mcp/.env.example tools/mcp/.env
```

## Configuration

### Environment Variables

Configure the MCP server by setting environment variables in `.env`:

```env
# Server Configuration
MCP_ENABLED=true
MCP_PORT=3000
MCP_HOST=localhost
MCP_DEBUG=false
MCP_LOG_LEVEL=info

# Enable/Disable specific skills
PRE_DEPLOY_VALIDATOR_ENABLED=true
FRONTEND_DESIGN_ENABLED=true
# ... other skills
```

See `.env.example` for a complete list of available variables.

### Config File

The `config.json` file contains skill-specific configurations:

```json
{
  "skills": {
    "pre-deploy-validator": {
      "enabled": true,
      "config": {
        "rules": ["lint", "types", "tests"],
        "failOnWarning": true
      }
    }
  }
}
```

## Installed Skills

### 1. Pre-Deploy Validator

**Category:** DevOps  
**Difficulty:** Intermediate  
**Installation Time:** 8 minutes

Validates code before deployment with configurable rules.

#### Usage:
```bash
npm run validate
```

#### Configuration:
```json
{
  "pre-deploy-validator": {
    "rules": ["lint", "types", "tests"],
    "failOnWarning": true,
    "allowUncommittedChanges": false,
    "checkBranchProtection": true
  }
}
```

#### Examples:
```bash
# Run standard validation
npm run validate

# Validate specific workspace
npm run validate --workspace=apps/web

# Check deployment readiness
npm run validate:deploy
```

### 2. Frontend Design

**Category:** Development  
**Difficulty:** Beginner  
**Installation Time:** 7 minutes

HTML/CSS component design and generation for the frontend.

#### Usage:
```bash
npx skill frontend-design generate component
```

#### Configuration:
```json
{
  "frontend-design": {
    "templateDir": "templates/components",
    "outputDir": "apps/web/src/components",
    "cssFramework": "tailwind",
    "includeTests": true
  }
}
```

#### Examples:
```bash
# Generate a new component
npx skill frontend-design generate Button

# Generate with custom template
npx skill frontend-design generate Form --template=form-v2

# Generate page layout
npx skill frontend-design generate page Dashboard

# List available templates
npx skill frontend-design list-templates
```

### 3. Theme Factory

**Category:** Design  
**Difficulty:** Intermediate  
**Installation Time:** 10 minutes

Design system and theme generation with consistent branding.

#### Usage:
```bash
npx skill theme-factory generate
```

#### Configuration:
```json
{
  "theme-factory": {
    "baseColor": "#4F46E5",
    "outputDir": "apps/web/src/themes",
    "generateTypography": true,
    "generateSpacing": true,
    "generateBreakpoints": true
  }
}
```

#### Examples:
```bash
# Generate default theme
npx skill theme-factory generate

# Generate with custom color
npx skill theme-factory generate --baseColor="#FF6B6B"

# Generate light and dark variants
npx skill theme-factory generate-variants

# List available themes
npx skill theme-factory list
```

### 4. MCP Builder

**Category:** Development Tools  
**Difficulty:** Advanced  
**Installation Time:** 15 minutes

Create custom MCP server implementations.

#### Usage:
```bash
npx skill mcp-builder create <name>
```

#### Configuration:
```json
{
  "mcp-builder": {
    "templateDir": "templates/mcp",
    "outputDir": "tools/mcp/custom",
    "includeTests": true,
    "includeDocumentation": true
  }
}
```

#### Examples:
```bash
# Create new MCP server
npx skill mcp-builder create my-custom-mcp

# Create with specific template
npx skill mcp-builder create auth-mcp --template=auth

# Build MCP
npm run build --workspace=tools/mcp/my-custom-mcp

# Test MCP
npm run test --workspace=tools/mcp/my-custom-mcp
```

### 5. Skill Creator

**Category:** Development Tools  
**Difficulty:** Advanced  
**Installation Time:** 15 minutes

Build custom skills for the project.

#### Usage:
```bash
npx skill skill-creator new <name>
```

#### Configuration:
```json
{
  "skill-creator": {
    "templateDir": "templates/skills",
    "outputDir": "tools/mcp/custom-skills",
    "language": "typescript",
    "includeTests": true
  }
}
```

#### Examples:
```bash
# Create new skill
npx skill skill-creator new database-migrator

# Create with specific category
npx skill skill-creator new analytics --category=monitoring

# List available templates
npx skill skill-creator list-templates

# Build skill
npm run build --workspace=tools/mcp/custom-skills/database-migrator
```

### 6. ASCII Mockup

**Category:** UI/UX  
**Difficulty:** Beginner  
**Installation Time:** 5 minutes

Mobile-first wireframe designs using ASCII art.

#### Usage:
```bash
npx skill ascii-mockup create
```

#### Configuration:
```json
{
  "ascii-mockup": {
    "outputDir": "apps/web/src/mockups",
    "mobileFirst": true
  }
}
```

#### Examples:
```bash
# Create wireframe mockup
npx skill ascii-mockup create --name=landing-page

# Create mobile mockup
npx skill ascii-mockup create --mobile

# Create desktop mockup
npx skill ascii-mockup create --desktop

# Export to image
npx skill ascii-mockup export --format=png
```

### 7. Algorithmic Art

**Category:** Design/Art  
**Difficulty:** Intermediate  
**Installation Time:** 10 minutes

Generative art using p5.js.

#### Usage:
```bash
npx skill algorithmic-art create
```

#### Configuration:
```json
{
  "algorithmic-art": {
    "outputDir": "apps/web/src/art",
    "canvasSize": "800x600",
    "framerate": 60
  }
}
```

#### Examples:
```bash
# Create generative art piece
npx skill algorithmic-art create --name=particle-system

# Create with specific pattern
npx skill algorithmic-art create --pattern=perlin-noise

# Animate art
npx skill algorithmic-art create --animate

# Export as animation
npx skill algorithmic-art export --format=gif
```

### 8. Canvas Design

**Category:** Design  
**Difficulty:** Intermediate  
**Installation Time:** 8 minutes

SVG-based visual design and vector graphics.

#### Usage:
```bash
npx skill canvas-design create
```

#### Configuration:
```json
{
  "canvas-design": {
    "outputDir": "apps/web/src/svg",
    "includeAnimations": true
  }
}
```

#### Examples:
```bash
# Create SVG design
npx skill canvas-design create --name=logo

# Create with animations
npx skill canvas-design create --animate

# Create icon set
npx skill canvas-design create-icons

# Export to different formats
npx skill canvas-design export --format=png
```

## Building

### Compile TypeScript:
```bash
npm run build --workspace=@swords2silenced/mcp-skills
```

### Watch for changes:
```bash
npm run dev --workspace=@swords2silenced/mcp-skills
```

### Type checking:
```bash
npm run type-check
```

## Testing

### Run tests:
```bash
npm run test --workspace=@swords2silenced/mcp-skills
```

### Run with coverage:
```bash
npm run test -- --coverage
```

### Watch mode:
```bash
npm run test -- --watch
```

## Linting

### Lint code:
```bash
npm run lint --workspace=@swords2silenced/mcp-skills
```

### Fix linting issues:
```bash
npm run lint -- --fix
```

## Integration with Monorepo

The MCP skills are integrated with the monorepo workspace structure:

```
swords2silenced/
├── tools/
│   └── mcp/
│       ├── src/
│       ├── dist/
│       ├── config.json
│       ├── package.json
│       └── README.md
├── apps/
│   └── web/
│       └── src/
│           ├── components/      (frontend-design output)
│           ├── themes/          (theme-factory output)
│           └── art/             (algorithmic-art output)
├── packages/
└── tsconfig.json                (includes MCP paths)
```

### TypeScript Path Aliases

The root `tsconfig.json` includes paths for MCP skills:

```json
{
  "paths": {
    "@tools/*": ["tools/*"],
    "@mcp/*": ["tools/mcp/*"]
  }
}
```

Use these in your imports:
```typescript
import { initializeMCPSkills } from '@mcp/src/index';
```

## Troubleshooting

### Issue: Skills not found

**Solution:**
```bash
# Verify installation
npm list @swords2silenced/mcp-skills

# Rebuild module
npm run build --workspace=@swords2silenced/mcp-skills

# Clear cache
npm run clean && npm install
```

### Issue: Dependency conflicts

**Solution:**
```bash
# Check for conflicts
npm audit

# Resolve conflicts
npm install --legacy-peer-deps

# Or update packages
npm update
```

### Issue: TypeScript compilation errors

**Solution:**
```bash
# Clear dist directory
rm -rf tools/mcp/dist

# Rebuild with verbose output
npm run build --workspace=@swords2silenced/mcp-skills --verbose

# Check tsconfig.json
cat tools/mcp/tsconfig.json
```

### Issue: ESLint errors

**Solution:**
```bash
# Run linter with details
npm run lint --workspace=@swords2silenced/mcp-skills

# Fix automatically
npm run lint -- --fix --workspace=@swords2silenced/mcp-skills
```

### Issue: Environment variables not loaded

**Solution:**
```bash
# Verify .env file exists
ls -la tools/mcp/.env

# Copy from template
cp tools/mcp/.env.example tools/mcp/.env

# Verify variables
cat tools/mcp/.env | head -20
```

### Issue: Skill command not working

**Solution:**
```bash
# Check if skill is installed
npm run -l | grep skill

# Verify configuration
cat tools/mcp/config.json | jq '.skills'

# Check if skill is enabled
grep "_ENABLED=true" tools/mcp/.env
```

## Development Workflow

### Creating a custom skill:

1. Create skill with skill-creator:
```bash
npx skill skill-creator new my-skill
```

2. Implement skill logic in generated files

3. Add tests:
```bash
npm run test --workspace=tools/mcp/custom-skills/my-skill
```

4. Build:
```bash
npm run build --workspace=tools/mcp/custom-skills/my-skill
```

5. Use in your project:
```typescript
import { mySkill } from '@mcp/custom-skills/my-skill';
```

### Extending existing skills:

1. Modify configuration in `config.json`

2. Update environment variables in `.env` if needed

3. Rebuild:
```bash
npm run build --workspace=@swords2silenced/mcp-skills
```

4. Test changes:
```bash
npm run test --workspace=@swords2silenced/mcp-skills
```

## Performance Considerations

- **Lazy Loading:** Skills are lazily loaded when needed
- **Caching:** Compiled templates are cached
- **Memory:** Keep config.json lean for faster startup
- **Build Time:** Use `npm run build` for production builds

## Security

- Never commit `.env` file with secrets
- Use `.env.example` for template
- Validate all user inputs in skills
- Keep dependencies updated: `npm audit`
- Review generated code before deploying

## Contributing

To contribute improvements to the MCP skills:

1. Create a feature branch
2. Make improvements
3. Add tests for new functionality
4. Submit a pull request
5. Update documentation

See the root `SKILLS_INTEGRATION.md` for details on contributing back to the original repositories.

## Resources

- [Fused-Gaming-Skill-MCP](https://github.com/Fused-Gaming/Fused-Gaming-Skill-MCP)
- [Model Context Protocol (MCP)](https://modelcontextprotocol.io)
- [Claude Code Documentation](https://claude.ai/help/code)

## License

MIT - See LICENSE file for details

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review configuration in `config.json`
3. Check environment variables in `.env`
4. Consult original skill documentation
5. Open an issue in the repository
