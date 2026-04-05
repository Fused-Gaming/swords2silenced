# MCP Skills Complete Guide

This comprehensive guide covers all 8 installed Fused-Gaming MCP skills with detailed examples and best practices.

## Table of Contents

1. [Pre-Deploy Validator](#pre-deploy-validator)
2. [Frontend Design](#frontend-design)
3. [Theme Factory](#theme-factory)
4. [MCP Builder](#mcp-builder)
5. [Skill Creator](#skill-creator)
6. [ASCII Mockup](#ascii-mockup)
7. [Algorithmic Art](#algorithmic-art)
8. [Canvas Design](#canvas-design)

---

## Pre-Deploy Validator

**Purpose:** Ensure code quality and deployment readiness before pushing to production.

### Setup

```bash
# Verify installation
npm run validate --workspace=@swords2silenced/mcp-skills

# Check configuration
cat tools/mcp/config.json | jq '.skills.preDeployValidator'
```

### Configuration

Edit `config.json`:
```json
{
  "pre-deploy-validator": {
    "enabled": true,
    "config": {
      "rules": ["lint", "types", "tests"],
      "failOnWarning": true,
      "allowUncommittedChanges": false,
      "checkBranchProtection": true
    }
  }
}
```

### Usage Examples

```bash
# Run all validation rules
npm run validate

# Validate single workspace
npm run validate:app --workspace=apps/web

# Validate and generate report
npm run validate -- --report=json > validation-report.json

# Skip specific rules
npm run validate -- --skip=tests

# Verbose output
npm run validate -- --verbose
```

### CI/CD Integration

Add to `.github/workflows/deploy.yml`:
```yaml
- name: Validate deployment
  run: npm run validate
  
- name: Check branch protection
  run: npm run validate -- --check-branch-protection
  
- name: Fail on warnings
  run: npm run validate -- --fail-on-warning
```

### Best Practices

1. Always run before pushing
2. Configure for your project's needs
3. Integrate into pre-commit hooks
4. Monitor validation metrics
5. Update rules as project evolves

---

## Frontend Design

**Purpose:** Generate HTML/CSS components and UI elements.

### Setup

```bash
# Verify templates are available
ls tools/mcp/templates/components/

# Check frontend design config
cat tools/mcp/config.json | jq '.skills.frontendDesign'
```

### Configuration

Edit `config.json`:
```json
{
  "frontend-design": {
    "enabled": true,
    "config": {
      "templateDir": "templates/components",
      "outputDir": "apps/web/src/components",
      "cssFramework": "tailwind",
      "includeTests": true
    }
  }
}
```

### Usage Examples

```bash
# Generate Button component
npx skill frontend-design generate Button

# Generate with TypeScript
npx skill frontend-design generate Badge --language=typescript

# Generate with Tailwind CSS
npx skill frontend-design generate Card --css=tailwind

# Generate entire form
npx skill frontend-design generate Form \
  --fields=email,password,submit

# Generate responsive layout
npx skill frontend-design generate Header --responsive

# List available templates
npx skill frontend-design list

# Generate with story file
npx skill frontend-design generate Input --with-story
```

### Component Structure

Generated component will include:
```
apps/web/src/components/
└── Button/
    ├── Button.tsx           # Component
    ├── Button.module.css    # Styles
    ├── Button.test.tsx      # Tests
    ├── Button.stories.tsx   # Storybook
    └── index.ts             # Exports
```

### Best Practices

1. Keep components small and focused
2. Use TypeScript for type safety
3. Include tests with generation
4. Document props with JSDoc
5. Follow project naming conventions
6. Use Tailwind for consistency

---

## Theme Factory

**Purpose:** Create consistent design systems and theme variants.

### Setup

```bash
# Initialize theme factory
npx skill theme-factory init

# Check theme config
cat tools/mcp/config.json | jq '.skills.themeFactory'
```

### Configuration

Edit `config.json`:
```json
{
  "theme-factory": {
    "enabled": true,
    "config": {
      "baseColor": "#4F46E5",
      "outputDir": "apps/web/src/themes",
      "generateTypography": true,
      "generateSpacing": true,
      "generateBreakpoints": true
    }
  }
}
```

### Usage Examples

```bash
# Generate default theme
npx skill theme-factory generate

# Generate with custom primary color
npx skill theme-factory generate --primary="#FF6B6B"

# Generate with secondary color
npx skill theme-factory generate --secondary="#4ECDC4"

# Generate light and dark variants
npx skill theme-factory generate-variants

# Generate only typography
npx skill theme-factory generate typography

# Generate spacing scale
npx skill theme-factory generate spacing

# Export as CSS variables
npx skill theme-factory export --format=css

# Export as Tailwind config
npx skill theme-factory export --format=tailwind
```

### Theme Structure

Generated theme will include:
```
apps/web/src/themes/
├── default/
│   ├── colors.ts
│   ├── typography.ts
│   ├── spacing.ts
│   ├── breakpoints.ts
│   └── index.ts
├── dark/
│   └── ... (dark variant)
└── light/
    └── ... (light variant)
```

### Using Themes in Components

```typescript
import { useTheme } from 'apps/web/src/themes';

export function MyComponent() {
  const theme = useTheme();
  
  return (
    <div style={{
      color: theme.colors.primary,
      fontSize: theme.typography.body.size,
      padding: theme.spacing.md
    }}>
      Content
    </div>
  );
}
```

### Best Practices

1. Establish single source of truth
2. Use consistent naming conventions
3. Generate variants for accessibility
4. Document color choices
5. Test theme switching
6. Export for easy sharing

---

## MCP Builder

**Purpose:** Create custom MCP server implementations.

### Setup

```bash
# Create new MCP
npx skill mcp-builder create my-api

# Check MCP builder config
cat tools/mcp/config.json | jq '.skills.mcpBuilder'
```

### Configuration

Edit `config.json`:
```json
{
  "mcp-builder": {
    "enabled": true,
    "config": {
      "templateDir": "templates/mcp",
      "outputDir": "tools/mcp/custom",
      "includeTests": true,
      "includeDocumentation": true
    }
  }
}
```

### Usage Examples

```bash
# Create basic MCP
npx skill mcp-builder create my-mcp

# Create with specific template
npx skill mcp-builder create auth-service --template=auth

# Create database MCP
npx skill mcp-builder create db-service --template=database

# Create API MCP
npx skill mcp-builder create api-gateway --template=api

# Create with TypeScript strict mode
npx skill mcp-builder create strict-mcp --strict

# List available templates
npx skill mcp-builder list-templates

# Build MCP
npm run build --workspace=tools/mcp/custom/my-mcp

# Test MCP
npm run test --workspace=tools/mcp/custom/my-mcp

# Start development server
npm run dev --workspace=tools/mcp/custom/my-mcp
```

### MCP Structure

Generated MCP will include:
```
tools/mcp/custom/my-mcp/
├── src/
│   ├── index.ts
│   ├── handlers/
│   ├── utils/
│   └── types/
├── dist/
├── tests/
├── docs/
├── package.json
└── tsconfig.json
```

### MCP Implementation Example

```typescript
// src/index.ts
import { MCPServer } from '@mcp/core';

export class MyMCPServer extends MCPServer {
  constructor() {
    super({
      name: 'my-mcp',
      version: '1.0.0'
    });
  }

  async initialize(): Promise<void> {
    this.registerHandler('myHandler', this.myHandler.bind(this));
  }

  async myHandler(input: string): Promise<string> {
    return `Processed: ${input}`;
  }
}
```

### Best Practices

1. Follow MCP protocol specifications
2. Add comprehensive error handling
3. Include type definitions
4. Write integration tests
5. Document all handlers
6. Version your MCP properly

---

## Skill Creator

**Purpose:** Build custom skills for your project.

### Setup

```bash
# Create new skill
npx skill skill-creator new analytics-tracker

# Check skill creator config
cat tools/mcp/config.json | jq '.skills.skillCreator'
```

### Configuration

Edit `config.json`:
```json
{
  "skill-creator": {
    "enabled": true,
    "config": {
      "templateDir": "templates/skills",
      "outputDir": "tools/mcp/custom-skills",
      "language": "typescript",
      "includeTests": true
    }
  }
}
```

### Usage Examples

```bash
# Create basic skill
npx skill skill-creator new my-skill

# Create with category
npx skill skill-creator new monitoring-skill --category=monitoring

# Create with description
npx skill skill-creator new "Database Migration Tool" --category=database

# Create with author
npx skill skill-creator new my-skill --author="John Doe"

# Create with version
npx skill skill-creator new my-skill --version=2.0.0

# List available templates
npx skill skill-creator list-templates

# Build skill
npm run build --workspace=tools/mcp/custom-skills/my-skill

# Test skill
npm run test --workspace=tools/mcp/custom-skills/my-skill

# Publish skill (if repository configured)
npm run publish --workspace=tools/mcp/custom-skills/my-skill
```

### Skill Structure

Generated skill will include:
```
tools/mcp/custom-skills/my-skill/
├── src/
│   └── index.ts
├── tests/
│   └── index.test.ts
├── docs/
│   └── README.md
├── package.json
├── tsconfig.json
└── .eslintrc.json
```

### Custom Skill Implementation

```typescript
// src/index.ts
export interface SkillOptions {
  debug?: boolean;
  timeout?: number;
}

export class MySkill {
  private options: SkillOptions;

  constructor(options: SkillOptions = {}) {
    this.options = {
      debug: false,
      timeout: 5000,
      ...options
    };
  }

  async execute(input: string): Promise<string> {
    if (this.options.debug) {
      console.log(`Executing skill with input: ${input}`);
    }
    
    return `Result: ${input}`;
  }
}

export default MySkill;
```

### Best Practices

1. Single responsibility principle
2. Comprehensive error handling
3. Proper TypeScript typing
4. Full test coverage
5. Clear documentation
6. Semantic versioning

---

## ASCII Mockup

**Purpose:** Create mobile-first wireframe designs using ASCII art.

### Setup

```bash
# Initialize ASCII mockup
npx skill ascii-mockup init

# Check ASCII mockup config
cat tools/mcp/config.json | jq '.skills.asciiMockup'
```

### Configuration

Edit `config.json`:
```json
{
  "ascii-mockup": {
    "enabled": true,
    "config": {
      "outputDir": "apps/web/src/mockups",
      "mobileFirst": true
    }
  }
}
```

### Usage Examples

```bash
# Create basic mockup
npx skill ascii-mockup create

# Create mobile mockup
npx skill ascii-mockup create --mobile

# Create desktop mockup
npx skill ascii-mockup create --desktop

# Create with name
npx skill ascii-mockup create --name=landing-page

# Create responsive mockup
npx skill ascii-mockup create --responsive

# List templates
npx skill ascii-mockup list

# Export to image
npx skill ascii-mockup export --format=png

# Export to PDF
npx skill ascii-mockup export --format=pdf

# Generate documentation
npx skill ascii-mockup generate-docs
```

### Mockup Format Example

```
┌─────────────────────────────────┐
│     LANDING PAGE MOCKUP         │
├─────────────────────────────────┤
│  [LOGO]        [NAV ITEMS]      │
├─────────────────────────────────┤
│                                 │
│        [HERO IMAGE]             │
│        "Headline"               │
│                                 │
├─────────────────────────────────┤
│  [Feature 1]  [Feature 2]       │
├─────────────────────────────────┤
│  [CTA Button]                   │
├─────────────────────────────────┤
│         [Footer Content]        │
└─────────────────────────────────┘
```

### Best Practices

1. Start mobile-first
2. Keep it simple initially
3. Iterate quickly
4. Validate with stakeholders
5. Document interactions
6. Export for presentations

---

## Algorithmic Art

**Purpose:** Create generative art using p5.js.

### Setup

```bash
# Initialize algorithmic art
npx skill algorithmic-art init

# Verify p5.js is available
npm list p5
```

### Configuration

Edit `config.json`:
```json
{
  "algorithmic-art": {
    "enabled": true,
    "config": {
      "outputDir": "apps/web/src/art",
      "canvasSize": "800x600",
      "framerate": 60
    }
  }
}
```

### Usage Examples

```bash
# Create generative art
npx skill algorithmic-art create

# Create with pattern
npx skill algorithmic-art create --pattern=perlin-noise

# Create particle system
npx skill algorithmic-art create --type=particles

# Create with animation
npx skill algorithmic-art create --animate

# Create with specific colors
npx skill algorithmic-art create --colors=["#FF6B6B","#4ECDC4"]

# Export as animation
npx skill algorithmic-art export --format=gif

# Export as image sequence
npx skill algorithmic-art export --format=png --frames=60

# Generate documentation
npx skill algorithmic-art generate-docs
```

### p5.js Implementation Example

```typescript
// apps/web/src/art/particle-system.ts
import p5 from 'p5';

export function createParticleSystem(p: p5): void {
  let particles: Particle[] = [];

  p.setup = () => {
    p.createCanvas(800, 600);
  };

  p.draw = () => {
    p.background(255);
    
    // Update and display particles
    particles.forEach(particle => {
      particle.update();
      particle.display(p);
    });
  };

  class Particle {
    position: p5.Vector;
    velocity: p5.Vector;

    constructor(x: number, y: number) {
      this.position = p.createVector(x, y);
      this.velocity = p.createVector(
        p.random(-1, 1),
        p.random(-1, 1)
      );
    }

    update(): void {
      this.position.add(this.velocity);
    }

    display(p: p5): void {
      p.fill(0);
      p.circle(
        this.position.x,
        this.position.y,
        5
      );
    }
  }
}
```

### Best Practices

1. Optimize for performance
2. Use meaningful algorithms
3. Document parameters
4. Test on various screen sizes
5. Export for sharing
6. Include interactive controls

---

## Canvas Design

**Purpose:** Create SVG-based visual designs and vector graphics.

### Setup

```bash
# Initialize canvas design
npx skill canvas-design init

# Check canvas design config
cat tools/mcp/config.json | jq '.skills.canvasDesign'
```

### Configuration

Edit `config.json`:
```json
{
  "canvas-design": {
    "enabled": true,
    "config": {
      "outputDir": "apps/web/src/svg",
      "includeAnimations": true
    }
  }
}
```

### Usage Examples

```bash
# Create basic SVG design
npx skill canvas-design create

# Create with name
npx skill canvas-design create --name=logo

# Create icon set
npx skill canvas-design create-icons

# Create with animations
npx skill canvas-design create --animate

# Create responsive SVG
npx skill canvas-design create --responsive

# Create gradient
npx skill canvas-design create-gradient --name=primary

# Export to PNG
npx skill canvas-design export --format=png

# Export to PDF
npx skill canvas-design export --format=pdf

# Generate icon library
npx skill canvas-design generate-icons
```

### SVG Implementation Example

```tsx
// apps/web/src/svg/MyLogo.tsx
export function MyLogo() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#4F46E5" />
      <text x="50" y="55" fontSize="24" textAnchor="middle" fill="white">
        Logo
      </text>
    </svg>
  );
}
```

### Best Practices

1. Use semantic SVG elements
2. Optimize paths
3. Include alt text
4. Make responsive
5. Add animations thoughtfully
6. Document color palettes

---

## Common Workflows

### Workflow 1: Create a Complete Page

1. Create mockup with ASCII Mockup
2. Design theme with Theme Factory
3. Generate components with Frontend Design
4. Create custom MCP for backend
5. Validate with Pre-Deploy Validator

### Workflow 2: Build Custom Tools

1. Create skill with Skill Creator
2. Build supporting MCP with MCP Builder
3. Test thoroughly
4. Document with examples
5. Integrate into project

### Workflow 3: Design System Creation

1. Generate theme with Theme Factory
2. Create components with Frontend Design
3. Add visual design with Canvas Design
4. Document all choices
5. Export for team sharing

---

## Tips and Tricks

### Speed Up Component Generation

```bash
# Generate multiple components at once
npx skill frontend-design generate Button Badge Input Card
```

### Automate Theme Updates

```bash
# Generate theme on build
"build": "npm run generate:theme && npm run compile"
```

### Create Reusable Templates

1. Copy generated output
2. Customize and refine
3. Save as custom template
4. Use in future generations

### Version Control

Always commit skill configurations:
```bash
git add tools/mcp/config.json tools/mcp/.env
git commit -m "Update MCP skill configurations"
```

---

## Troubleshooting Guide

See the main `README.md` for detailed troubleshooting steps.
