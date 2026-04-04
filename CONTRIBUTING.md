# Contributing Guide

Welcome to Swords2Silenced! This guide covers how to contribute to the project.

## Quick Start

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0
- Git

### Setup Development Environment

```bash
# Clone the repository
git clone <repository-url>
cd swords2silenced

# Install dependencies
npm install

# Start development server
npm run dev

# Run linting and formatting
npm run lint
npm run format

# Run tests
npm run test

# Type checking
npm run type-check
```

## Project Stack

### Core Technologies
- **React** - UI framework
- **TypeScript** - Type safety
- **Node.js** - Runtime environment
- **npm** - Package manager

### Development Tools
- **ESLint** - Code linting (@typescript-eslint/eslint-plugin)
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **Monorepo** - Workspaces structure (apps/, packages/, tools/)

## Workflow

### 1. Create a Feature Branch
Follow Git Flow strategy (see BRANCHING.md):
```bash
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name
```

### 2. Make Your Changes
- Write clean, readable code
- Follow the existing code style
- Keep commits focused and descriptive
- Update CHANGELOG.md if adding significant changes

### 3. Code Quality Checks

```bash
# Format code automatically
npm run format

# Run linter
npm run lint

# Type check
npm run type-check

# Run tests (if applicable)
npm run test
```

### 4. Commit & Push
```bash
git add .
git commit -m "feat: brief description of changes"
git push origin feature/your-feature-name
```

### 5. Create a Pull Request
- Provide a clear description of changes
- Reference any related issues
- Ensure all checks pass

### 6. Code Review & Merge
- Address any feedback
- Once approved, merge to `develop` branch

## Code Style Guidelines

### General Principles
- Keep it simple and readable
- Follow TypeScript best practices
- Use meaningful variable and function names
- One responsibility per component

### Formatting
- 2-space indentation (configured in Prettier)
- Maximum line length: 80 characters (where reasonable)
- Consistent file naming conventions

### React Components
- Use functional components with hooks
- Keep components focused and reusable
- Props should be well-typed with TypeScript
- Extract complex logic into custom hooks

### Git Commit Messages
Use conventional commit format:
```
feat: add user authentication
fix: resolve styling issue on mobile
docs: update README
chore: update dependencies
```

## Testing Expectations
- Write tests for new features
- Ensure existing tests pass
- Aim for meaningful coverage (not arbitrary percentages)

## Questions or Issues?

- Check existing documentation
- Review BRANCHING.md for workflow details
- Check the ROADMAP.md for current priorities

---

**Thank you for contributing!** 🚀
