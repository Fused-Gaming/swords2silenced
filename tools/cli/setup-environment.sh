#!/bin/bash

###############################################################################
# Swords2Silenced Environment Setup & Initialization
# Sets up development environment, caches, and tool orchestration
###############################################################################

set -euo pipefail

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
NC='\033[0m' # No Color

# Logging functions
log_section() {
  echo -e "\n${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
  echo -e "${MAGENTA}▶ $1${NC}"
  echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"
}

log_success() {
  echo -e "${GREEN}✓ $1${NC}"
}

log_warning() {
  echo -e "${YELLOW}⚠ $1${NC}"
}

log_error() {
  echo -e "${RED}✗ $1${NC}"
}

# Variables
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
CACHE_DIR="${PROJECT_ROOT}/.cache"
LOGS_DIR="${PROJECT_ROOT}/logs"
ENV_FILE="${PROJECT_ROOT}/.env.local"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

log_section "Swords2Silenced Environment Setup"

# Step 1: Verify Node.js and npm
log_section "Verifying Prerequisites"

if ! command -v node &> /dev/null; then
  log_error "Node.js is not installed"
  exit 1
fi

if ! command -v npm &> /dev/null; then
  log_error "npm is not installed"
  exit 1
fi

NODE_VERSION=$(node --version)
NPM_VERSION=$(npm --version)
log_success "Node.js: ${NODE_VERSION}"
log_success "npm: ${NPM_VERSION}"

# Step 2: Create cache directory structure
log_section "Setting Up Cache Infrastructure"

mkdir -p "${CACHE_DIR}"/{dependencies,build,node-modules,workspace}
mkdir -p "${LOGS_DIR}"/{build,lint,test,orchestration}
log_success "Cache directories created: ${CACHE_DIR}"
log_success "Logs directory created: ${LOGS_DIR}"

# Step 3: Initialize environment files
log_section "Initializing Environment Configuration"

if [ ! -f "${ENV_FILE}" ]; then
  cp "${PROJECT_ROOT}/.env.example" "${ENV_FILE}"
  log_success "Created .env.local from .env.example"
else
  log_warning ".env.local already exists, skipping copy"
fi

# Step 4: Cache npm modules info
log_section "Caching Project Metadata"

npm ls --depth=0 > "${CACHE_DIR}/dependencies/installed-packages-${TIMESTAMP}.txt" 2>&1 || true
log_success "Package list cached"

# Store workspace information
cat > "${CACHE_DIR}/workspace/metadata.json" << 'EOF'
{
  "name": "swords2silenced",
  "type": "monorepo",
  "workspaces": ["apps/*", "packages/*", "tools/*"],
  "timestamp": "TIMESTAMP_PLACEHOLDER",
  "initialized": true
}
EOF

sed -i "s/TIMESTAMP_PLACEHOLDER/$(date -u +%Y-%m-%dT%H:%M:%SZ)/g" "${CACHE_DIR}/workspace/metadata.json"
log_success "Workspace metadata cached"

# Step 5: Verify workspace structure
log_section "Verifying Workspace Structure"

WORKSPACES=("apps/web" "packages/core" "packages/api" "tools/mcp")
for ws in "${WORKSPACES[@]}"; do
  if [ -d "${PROJECT_ROOT}/${ws}" ]; then
    log_success "Workspace found: ${ws}"
  else
    log_warning "Workspace not found: ${ws}"
  fi
done

# Step 6: Build cache of available tools
log_section "Cataloging Tools & Skills"

cat > "${CACHE_DIR}/workspace/tools-manifest.json" << 'EOF'
{
  "mcp-skills": {
    "path": "tools/mcp",
    "enabled": true,
    "skills": [
      "pre-deploy-validator",
      "frontend-design",
      "theme-factory",
      "mcp-builder",
      "skill-creator",
      "ascii-mockup",
      "algorithmic-art",
      "canvas-design"
    ]
  },
  "workspace-scripts": {
    "dev": "Start development servers",
    "build": "Build all workspaces",
    "test": "Run all tests",
    "lint": "Run linting",
    "type-check": "Run TypeScript type checking",
    "format": "Format code with Prettier"
  }
}
EOF
log_success "Tools manifest created"

# Step 7: Initialize orchestration cache
log_section "Setting Up Orchestration Cache"

cat > "${CACHE_DIR}/orchestration/swarm-config.json" << 'EOF'
{
  "orchestration": {
    "enabled": true,
    "mode": "distributed",
    "workers": {
      "build": {
        "concurrency": 4,
        "timeout": 300000,
        "retries": 2
      },
      "test": {
        "concurrency": 2,
        "timeout": 600000,
        "retries": 1
      },
      "lint": {
        "concurrency": 4,
        "timeout": 120000,
        "retries": 1
      }
    },
    "cache-strategy": {
      "type": "filesystem",
      "path": ".cache",
      "ttl": 3600000,
      "compress": false
    }
  }
}
EOF
log_success "Swarm orchestration config initialized"

# Step 8: Git hooks verification
log_section "Verifying Git Hooks"

if [ -d "${PROJECT_ROOT}/.husky" ]; then
  HOOK_COUNT=$(find "${PROJECT_ROOT}/.husky" -type f ! -name "*.sample" ! -name "_" | wc -l)
  log_success "Git hooks found: ${HOOK_COUNT}"
else
  log_warning "Git hooks directory not found"
fi

# Step 9: Create environment summary
log_section "Environment Summary"

cat > "${LOGS_DIR}/setup-summary-${TIMESTAMP}.log" << EOF
Swords2Silenced Environment Setup Summary
==========================================

Timestamp: ${TIMESTAMP}
Project Root: ${PROJECT_ROOT}
Node.js Version: ${NODE_VERSION}
npm Version: ${NPM_VERSION}

Cache Location: ${CACHE_DIR}
Logs Location: ${LOGS_DIR}
Environment File: ${ENV_FILE}

Workspaces Configured:
- apps/web
- packages/core
- packages/api
- tools/mcp

MCP Skills Enabled:
- pre-deploy-validator
- frontend-design
- theme-factory
- mcp-builder
- skill-creator
- ascii-mockup
- algorithmic-art
- canvas-design

Orchestration Mode: distributed
Build Concurrency: 4
Test Concurrency: 2

Status: ✓ Successfully initialized
EOF

cat "${LOGS_DIR}/setup-summary-${TIMESTAMP}.log"
log_success "Setup summary logged to: ${LOGS_DIR}/setup-summary-${TIMESTAMP}.log"

# Step 10: Final verification
log_section "Final Verification"

# Check critical files
CRITICAL_FILES=("package.json" "tsconfig.json" ".eslintrc.json" ".prettierrc.json")
for file in "${CRITICAL_FILES[@]}"; do
  if [ -f "${PROJECT_ROOT}/${file}" ]; then
    log_success "Critical file verified: ${file}"
  else
    log_error "Missing critical file: ${file}"
  fi
done

log_section "Setup Complete"
echo -e "${GREEN}✓ Environment successfully initialized and cached${NC}"
echo -e "${GREEN}✓ Orchestration framework ready for swarm coordination${NC}"
echo -e "\nNext steps:"
echo -e "  1. Review .env.local and set required environment variables"
echo -e "  2. Run: npm run dev (to start development servers)"
echo -e "  3. Run: npm run build (to build all workspaces)"
echo -e "  4. Check: logs/setup-summary-${TIMESTAMP}.log (for detailed report)"
