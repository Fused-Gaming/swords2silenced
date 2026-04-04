# Contributing to Swords2Silenced

Thank you for your interest in contributing! This document provides guidelines and instructions.

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Create a feature branch: `git checkout -b feature/your-feature`
4. Make your changes
5. Commit with conventional messages: `git commit -m "feat: description"`
6. Push to your fork: `git push origin feature/your-feature`
7. Create a Pull Request

## Development Setup

```bash
# Install dependencies
npm install

# Build all packages
npm run build

# Run tests
npm run test

# Run linter
npm run lint
```

## Code Style

- Use TypeScript for all new code
- Follow ESLint rules
- Run `npm run format` to auto-format
- 2-space indentation
- Single quotes preferred

## Commit Message Format

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code refactoring
- `test`: Tests
- `ci`: CI/CD changes
- `chore`: Dependencies, tools

**Example:**
```
feat(auth): add user authentication system

- Implement JWT token generation
- Add login/logout endpoints
- Protect private routes

Closes #123
```

## Pull Request Process

1. Update relevant documentation
2. Add tests for new features
3. Ensure all tests pass: `npm run test`
4. Ensure linting passes: `npm run lint`
5. Provide a clear PR description
6. Link related issues with `Closes #XXX`

## Testing

- Write tests for all new features
- Maintain or improve code coverage
- Run tests before submitting PR

```bash
npm run test           # Run tests
npm run test:watch   # Watch mode
npm run coverage     # Coverage report
```

## Questions?

- Check existing issues/PRs
- Open a new discussion
- Contact maintainers

Thank you for contributing! 🎉
