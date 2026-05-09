#!/usr/bin/env node

/**
 * Swords2Silenced Orchestration Bootstrap
 * Initializes swarm orchestration framework and caches all tooling
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

// Logger functions
const log = {
  section: (msg) => {
    console.log(`\n${colors.blue}${'━'.repeat(50)}${colors.reset}`);
    console.log(`${colors.magenta}▶ ${msg}${colors.reset}`);
    console.log(`${colors.blue}${'━'.repeat(50)}${colors.reset}\n`);
  },
  success: (msg) => console.log(`${colors.green}✓ ${msg}${colors.reset}`),
  warning: (msg) => console.log(`${colors.yellow}⚠ ${msg}${colors.reset}`),
  error: (msg) => console.log(`${colors.red}✗ ${msg}${colors.reset}`),
  info: (msg) => console.log(`${colors.cyan}ℹ ${msg}${colors.reset}`),
};

// Paths
const projectRoot = path.resolve(__dirname, '..', '..');
const cacheDir = path.join(projectRoot, '.cache');
const logsDir = path.join(projectRoot, 'logs');
const timestamp =
  new Date().toISOString().replace(/[:.]/g, '-').split('T')[0] +
  '_' +
  new Date().getTime().toString().slice(-6);

// Ensure directories exist
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Execute command safely
const exec = (cmd, options = {}) => {
  try {
    const result = execSync(cmd, {
      cwd: projectRoot,
      encoding: 'utf8',
      ...options,
    });
    return { success: true, output: result };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Main bootstrap function
async function bootstrap() {
  log.section('Swords2Silenced Orchestration Bootstrap');

  // Step 1: Verify prerequisites
  log.section('Verifying Prerequisites');

  try {
    const nodeVersion = exec('node --version').output.trim();
    const npmVersion = exec('npm --version').output.trim();

    log.success(`Node.js ${nodeVersion}`);
    log.success(`npm ${npmVersion}`);
  } catch (error) {
    log.error('Failed to verify prerequisites');
    process.exit(1);
  }

  // Step 2: Initialize cache structure
  log.section('Initializing Cache Infrastructure');

  const cacheDirs = [
    'dependencies',
    'build',
    'node-modules',
    'workspace',
    'orchestration',
    'artifacts',
  ];

  cacheDirs.forEach((dir) => {
    ensureDir(path.join(cacheDir, dir));
    log.success(`Cache directory ready: ${dir}`);
  });

  ensureDir(logsDir);
  ['build', 'lint', 'test', 'orchestration'].forEach((dir) => {
    ensureDir(path.join(logsDir, dir));
  });
  log.success(`Logs directory ready: ${logsDir}`);

  // Step 3: Build tooling manifest
  log.section('Building Tooling Manifest');

  const manifest = {
    project: 'swords2silenced',
    type: 'monorepo',
    bootstrapped: new Date().toISOString(),
    version: '1.0.0',
    tools: {
      mcp: {
        enabled: true,
        path: 'tools/mcp',
        skills: [
          'pre-deploy-validator',
          'frontend-design',
          'theme-factory',
          'mcp-builder',
          'skill-creator',
          'ascii-mockup',
          'algorithmic-art',
          'canvas-design',
        ],
      },
      workspace: {
        enabled: true,
        managers: ['npm', 'husky'],
        formatters: ['prettier'],
        linters: ['eslint'],
        typeCheckers: ['typescript'],
      },
    },
    workspaces: {
      'apps/web': {
        type: 'application',
        framework: 'next.js',
        language: 'typescript',
      },
      'packages/core': {
        type: 'library',
        framework: 'none',
        language: 'typescript',
      },
      'packages/api': {
        type: 'library',
        framework: 'none',
        language: 'typescript',
      },
      'tools/mcp': {
        type: 'tools',
        framework: 'mcp',
        language: 'typescript',
      },
    },
    orchestration: {
      mode: 'distributed',
      maxConcurrency: 4,
      retries: 2,
      timeout: 300000,
    },
  };

  fs.writeFileSync(
    path.join(cacheDir, 'orchestration', 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  log.success('Tooling manifest created');

  // Step 4: Cache npm package information
  log.section('Caching Package Information');

  const pkgInfo = exec('npm ls --depth=0 --json');
  if (pkgInfo.success) {
    fs.writeFileSync(
      path.join(cacheDir, 'dependencies', `packages-${timestamp}.json`),
      pkgInfo.output
    );
    log.success('Package tree cached');
  } else {
    log.warning('Could not cache package tree');
  }

  // Step 5: Initialize orchestration configuration
  log.section('Initializing Orchestration Configuration');

  const orchestrationConfig = {
    version: '1.0.0',
    enabled: true,
    mode: 'distributed',
    session: {
      id: `session-${timestamp}`,
      created: new Date().toISOString(),
    },
    workers: {
      build: {
        concurrency: 4,
        timeout: 300000,
        retries: 2,
        queue: [],
      },
      test: {
        concurrency: 2,
        timeout: 600000,
        retries: 1,
        queue: [],
      },
      lint: {
        concurrency: 4,
        timeout: 120000,
        retries: 1,
        queue: [],
      },
    },
    cache: {
      strategy: 'filesystem',
      path: '.cache',
      enabled: true,
      ttl: 3600000,
    },
    logging: {
      enabled: true,
      level: 'info',
      path: 'logs/orchestration',
    },
  };

  fs.writeFileSync(
    path.join(cacheDir, 'orchestration', 'config.json'),
    JSON.stringify(orchestrationConfig, null, 2)
  );
  log.success('Orchestration configuration initialized');

  // Step 6: Verify workspace integrity
  log.section('Verifying Workspace Integrity');

  const workspacePaths = ['apps/web', 'packages/core', 'packages/api', 'tools/mcp'];

  let workspacesValid = true;
  const workspaceStatus = {};

  workspacePaths.forEach((ws) => {
    const pkgJsonPath = path.join(projectRoot, ws, 'package.json');
    if (fs.existsSync(pkgJsonPath)) {
      log.success(`Workspace verified: ${ws}`);
      workspaceStatus[ws] = 'valid';
    } else {
      log.warning(`Workspace missing: ${ws}`);
      workspaceStatus[ws] = 'missing';
      workspacesValid = false;
    }
  });

  // Step 7: Create bootstrap report
  log.section('Creating Bootstrap Report');

  const report = {
    timestamp: new Date().toISOString(),
    projectRoot,
    status: workspacesValid ? 'success' : 'partial',
    workspaces: workspaceStatus,
    cacheInitialized: true,
    cacheLocation: cacheDir,
    logsLocation: logsDir,
    tools: {
      npm: exec('npm --version').output.trim(),
      node: exec('node --version').output.trim(),
      git: exec('git --version').output.trim(),
    },
    nextSteps: [
      'Review .env.local and configure environment variables',
      'Run: npm run build (to build all workspaces)',
      'Run: npm run test (to run all tests)',
      'Run: npm run lint (to verify code style)',
      'Check logs/orchestration for detailed execution logs',
    ],
  };

  const reportPath = path.join(logsDir, `bootstrap-${timestamp}.json`);
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  log.success(`Bootstrap report saved: ${reportPath}`);

  // Step 8: Display summary
  log.section('Bootstrap Complete');

  console.log(`${colors.green}✓ Orchestration framework initialized${colors.reset}`);
  console.log(`${colors.green}✓ All caches established${colors.reset}`);
  console.log(`${colors.green}✓ Tools catalogued and ready${colors.reset}`);

  console.log(`\n${colors.cyan}Key directories:${colors.reset}`);
  console.log(`  Cache: ${cacheDir}`);
  console.log(`  Logs: ${logsDir}`);

  console.log(`\n${colors.cyan}Available commands:${colors.reset}`);
  console.log(`  npm run dev              - Start development servers`);
  console.log(`  npm run build            - Build all workspaces`);
  console.log(`  npm run test             - Run all tests`);
  console.log(`  npm run lint             - Run linting`);

  console.log(`\n${colors.cyan}Orchestration tools:${colors.reset}`);
  console.log(`  tools/cli/setup-environment.sh`);
  console.log(`  tools/cli/swarm-orchestration.sh`);

  process.exit(0);
}

// Run bootstrap
bootstrap().catch((error) => {
  log.error(`Bootstrap failed: ${error.message}`);
  process.exit(1);
});
