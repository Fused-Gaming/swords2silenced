# Swords to Silenced - Monorepo Platform

A scalable monorepo platform for swordstosilenced.com built with TypeScript, optimized for rapid development and deployment.

## 📁 Project Structure

```
swords2silenced/
├── apps/                 # Web applications and frontends
│   └── web/             # Main website (swordstosilenced.com)
├── packages/            # Shared libraries and utilities
│   ├── core/           # Core business logic
│   ├── ui/             # Reusable UI components
│   └── api/            # API clients and utilities
├── tools/              # Development tools and scripts
│   ├── cli/            # CLI tools
│   └── generators/     # Code generators
└── docs/               # Documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Install dependencies
npm install

# Build all packages
npm run build

# Run development servers
npm run dev

# Run tests
npm run test
```

## 📋 Branching Strategy

- **main**: Production-ready code
- **develop**: Integration branch for features
- **feature/**: Feature branches (e.g., `feature/auth-system`)
- **bugfix/**: Bug fix branches (e.g., `bugfix/login-issue`)
- **hotfix/**: Production hotfixes (e.g., `hotfix/critical-security`)

See [BRANCHING_STRATEGY.md](./docs/BRANCHING_STRATEGY.md) for details.

## 🔧 Development

### Styling Stack (Web App)

`apps/web` is configured for Tailwind CSS + PostCSS integration (Tailwind directives are enabled in `src/styles/globals.css`).

```bash
# install workspace deps (run in network-permitted environment)
npm install

# run web app
npm run dev --workspace=apps/web
```

### Workspace Management

This project uses npm workspaces. Each workspace has its own `package.json`:

```bash
# Run script in specific workspace
npm run dev --workspace=apps/web

# Install dependency in workspace
npm install axios --workspace=packages/api
```

### Available Scripts

- `npm run dev` - Start development servers
- `npm run build` - Build all packages
- `npm run test` - Run all tests
- `npm run lint` - Lint all packages
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

## 📦 Deployment

### Vercel Configuration

Deployments are configured through `vercel.json` in each app:

```bash
vercel deploy
```

### DNS Configuration

Domain: **swordstosilenced.com**

- Nameservers: Cloudflare
- A Records: Pointing to Vercel deployment

## 🧪 Testing

```bash
npm run test          # Run all tests
npm run test:watch   # Watch mode
npm run coverage     # Generate coverage report
```

## 📚 Documentation

### Getting Started

- [Setup Guide](./docs/SETUP_GUIDE.md) - Local development setup
- [Deployment Summary](./DEPLOYMENT_SUMMARY.md) - Complete project overview

### Development & Workflow

- [Branching Strategy](./docs/BRANCHING_STRATEGY.md) - Git Flow workflow
- [Contributing Guidelines](./docs/CONTRIBUTING.md) - How to contribute

### Deployment & Infrastructure

- [Deployment Guide](./docs/DEPLOYMENT.md) - Vercel deployment
- [DNS & Cloudflare Setup](./docs/DNS_CLOUDFLARE_GODADDY.md) - GoDaddy to Cloudflare migration
- [Skills Integration](./docs/SKILLS_INTEGRATION.md) - Install and use skills

## 🤝 Contributing

Please follow our [Contributing Guidelines](./docs/CONTRIBUTING.md).

## 📄 License

MIT - See LICENSE for details.
