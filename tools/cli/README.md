# Swords2Silenced Orchestration CLI

Distributed task execution framework for the Swords2Silenced monorepo. Provides swarm orchestration for building, testing, and linting across multiple workspaces.

## Overview

The orchestration CLI manages parallel task execution across workspaces with:

- **Distributed execution**: Run tasks in parallel across 4+ workers
- **Intelligent caching**: Filesystem-based cache for artifacts and metadata
- **Swarm coordination**: Centralized state management for task workflows
- **Comprehensive logging**: Detailed execution logs for debugging and monitoring

## Tools

### 1. `bootstrap-orchestration.js`

Initializes the entire orchestration framework in one command.

```bash
node tools/cli/bootstrap-orchestration.js
```

**What it does:**

- Verifies Node.js and npm prerequisites
- Creates cache infrastructure (.cache/\*)
- Creates logs directory structure (logs/\*)
- Builds tooling manifest with all available skills
- Caches package information
- Initializes orchestration configuration
- Verifies all workspace integrity
- Generates bootstrap report

**Output:**

- `.cache/orchestration/manifest.json` - Complete tooling inventory
- `.cache/orchestration/config.json` - Orchestration settings
- `.cache/dependencies/` - Cached package information
- `logs/bootstrap-*.json` - Detailed bootstrap report

### 2. `setup-environment.sh`

Comprehensive environment setup with caching and validation.

```bash
bash tools/cli/setup-environment.sh
```

**What it does:**

- Verifies Node.js and npm versions
- Sets up `.env.local` from `.env.example`
- Creates cache directory structure
- Caches installed packages list
- Creates workspace metadata
- Builds tools manifest
- Initializes swarm orchestration config
- Verifies git hooks
- Generates setup summary

**Output:**

- `.cache/` - Full cache infrastructure
- `.env.local` - Local environment configuration
- `logs/setup-summary-*.log` - Setup report

### 3. `swarm-orchestration.sh`

CLI for executing distributed tasks across workspaces.

```bash
bash tools/cli/swarm-orchestration.sh <command> [target] [parallel]
```

**Commands:**

| Command      | Description                      |
| ------------ | -------------------------------- |
| `build`      | Build all workspaces in parallel |
| `test`       | Run tests across workspaces      |
| `lint`       | Run linting across workspaces    |
| `clean`      | Clean build artifacts and cache  |
| `validate`   | Validate workspace integrity     |
| `status`     | Show orchestration status        |
| `cache-info` | Display cache information        |
| `reset`      | Reset orchestration state        |
| `help`       | Show help message                |

**Targets:**

| Target | Description              |
| ------ | ------------------------ |
| `all`  | All workspaces (default) |
| `web`  | apps/web only            |
| `core` | packages/core only       |
| `api`  | packages/api only        |
| `mcp`  | tools/mcp only           |

**Parallel:**

| Mode    | Description                         |
| ------- | ----------------------------------- |
| `true`  | Execute tasks in parallel (default) |
| `false` | Execute tasks sequentially          |

**Examples:**

```bash
# Build all workspaces in parallel
bash tools/cli/swarm-orchestration.sh build

# Test web workspace sequentially
bash tools/cli/swarm-orchestration.sh test web false

# Lint all workspaces in parallel
bash tools/cli/swarm-orchestration.sh lint all true

# Show orchestration status
bash tools/cli/swarm-orchestration.sh status

# Display cache information
bash tools/cli/swarm-orchestration.sh cache-info

# Clean all artifacts
bash tools/cli/swarm-orchestration.sh clean

# Validate workspace integrity
bash tools/cli/swarm-orchestration.sh validate
```

## Cache Structure

The orchestration framework creates and maintains this cache structure:

```
.cache/
├── dependencies/
│   └── packages-*.txt       # Cached npm package listings
│   └── *.json              # Cached package metadata
├── build/
│   └── *.log               # Build artifacts and logs
├── orchestration/
│   ├── manifest.json       # Complete tooling inventory
│   ├── config.json         # Orchestration configuration
│   ├── state.json          # Current orchestration state
│   └── swarm-*.log         # Swarm execution logs
├── workspace/
│   ├── metadata.json       # Workspace information
│   └── tools-manifest.json # Available tools registry
└── artifacts/
    └── */                  # Build and test artifacts
```

## Workspaces

The framework manages these workspaces:

| Path            | Type        | Framework  |
| --------------- | ----------- | ---------- |
| `apps/web`      | Application | Next.js    |
| `packages/core` | Library     | TypeScript |
| `packages/api`  | Library     | TypeScript |
| `tools/mcp`     | Tools       | MCP        |

## MCP Skills

The framework supports these Fused-Gaming MCP skills:

- **pre-deploy-validator** - Validate code before deployment
- **frontend-design** - HTML/CSS component design
- **theme-factory** - Design system generation
- **mcp-builder** - MCP server scaffolding
- **skill-creator** - Custom skill builder
- **ascii-mockup** - Mobile-first wireframes
- **algorithmic-art** - Generative art with p5.js
- **canvas-design** - SVG-based visual design

## Configuration

### Orchestration Config

Located at `.cache/orchestration/config.json`:

```json
{
  "workers": {
    "build": { "concurrency": 4, "timeout": 300000, "retries": 2 },
    "test": { "concurrency": 2, "timeout": 600000, "retries": 1 },
    "lint": { "concurrency": 4, "timeout": 120000, "retries": 1 }
  },
  "cache": {
    "strategy": "filesystem",
    "path": ".cache",
    "enabled": true,
    "ttl": 3600000
  }
}
```

### Environment Variables

Create `.env.local` from `.env.example`:

```bash
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://swordstosilenced.com
NEXT_PUBLIC_SITE_NAME=Swords to Silenced
NEXT_PUBLIC_API_URL=https://api.swordstosilenced.com
ENABLE_ANALYTICS=true
ENABLE_TRACKING=true
```

## Logging

All orchestration activities are logged to:

- **Build logs**: `logs/build/`
- **Lint logs**: `logs/lint/`
- **Test logs**: `logs/test/`
- **Orchestration logs**: `logs/orchestration/`
- **Setup logs**: `logs/setup-summary-*.log`
- **Bootstrap logs**: `logs/bootstrap-*.json`

## Usage Examples

### Initial Setup

```bash
# Initialize everything at once
node tools/cli/bootstrap-orchestration.js

# Then setup environment
bash tools/cli/setup-environment.sh

# Verify everything is working
bash tools/cli/swarm-orchestration.sh validate
```

### Development Workflow

```bash
# Build all workspaces in parallel
bash tools/cli/swarm-orchestration.sh build

# Run tests
bash tools/cli/swarm-orchestration.sh test

# Check code quality
bash tools/cli/swarm-orchestration.sh lint

# Or use npm directly
npm run build
npm run test
npm run lint
```

### Debugging

```bash
# Check current orchestration status
bash tools/cli/swarm-orchestration.sh status

# View cache information
bash tools/cli/swarm-orchestration.sh cache-info

# View recent logs
tail -f logs/orchestration/swarm-*.log

# Reset orchestration state
bash tools/cli/swarm-orchestration.sh reset
```

### Maintenance

```bash
# Clean all artifacts and rebuild
bash tools/cli/swarm-orchestration.sh clean

# Validate workspace integrity
bash tools/cli/swarm-orchestration.sh validate

# View bootstrap report
cat logs/bootstrap-*.json | jq .
```

## Integration with npm

The orchestration tools can be integrated with npm scripts:

```bash
# In package.json
"scripts": {
  "orchestrate:build": "bash tools/cli/swarm-orchestration.sh build all true",
  "orchestrate:test": "bash tools/cli/swarm-orchestration.sh test all true",
  "orchestrate:lint": "bash tools/cli/swarm-orchestration.sh lint all true"
}
```

## Performance

The framework achieves parallel execution through:

1. **Distributed workers** - Up to 4 concurrent build/lint jobs
2. **Smart caching** - Filesystem cache for dependencies and artifacts
3. **Workspace isolation** - Independent execution per workspace
4. **Retry logic** - Automatic retry on transient failures

Typical performance:

- **Build all**: ~1-2 minutes (4 workspaces in parallel)
- **Test all**: ~2-3 minutes (2 concurrent workers)
- **Lint all**: ~30-60 seconds (4 concurrent workers)

## Troubleshooting

### Cache Issues

```bash
# Clear all caches
bash tools/cli/swarm-orchestration.sh clean

# View cache size
bash tools/cli/swarm-orchestration.sh cache-info

# Reset orchestration state
bash tools/cli/swarm-orchestration.sh reset
```

### Workspace Issues

```bash
# Validate all workspaces
bash tools/cli/swarm-orchestration.sh validate

# Check specific workspace
bash tools/cli/swarm-orchestration.sh validate web false
```

### Build Failures

```bash
# Check recent logs
tail -20 logs/build/*.log

# View orchestration status
bash tools/cli/swarm-orchestration.sh status

# Reset and try again
bash tools/cli/swarm-orchestration.sh reset
npm run build
```

## Advanced Configuration

### Customize Concurrency

Edit `.cache/orchestration/config.json`:

```json
{
  "workers": {
    "build": { "concurrency": 8 },
    "test": { "concurrency": 4 }
  }
}
```

### Modify Cache TTL

```json
{
  "cache": {
    "ttl": 7200000
  }
}
```

## References

- [MCP Skills Documentation](../mcp/README.md)
- [Workspace Configuration](../../package.json)
- [Environment Setup](../../.env.example)
- [Bootstrap Report Format](../../logs/bootstrap-*.json)

## Support

For issues or questions:

1. Check the logs in `logs/orchestration/`
2. Review the bootstrap report in `logs/bootstrap-*.json`
3. Run validation: `bash tools/cli/swarm-orchestration.sh validate`
4. Review CLAUDE.md in the project root

---

**Last Updated**: 2026-05-09
**Version**: 1.0.0
