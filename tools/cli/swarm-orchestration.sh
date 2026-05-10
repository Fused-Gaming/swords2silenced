#!/bin/bash

###############################################################################
# Swords2Silenced Swarm Orchestration CLI
# Manages distributed task execution across workspaces
###############################################################################

set -euo pipefail

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m'

# Configuration
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
CACHE_DIR="${PROJECT_ROOT}/.cache"
LOGS_DIR="${PROJECT_ROOT}/logs/orchestration"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
SWARM_LOG="${LOGS_DIR}/swarm-${TIMESTAMP}.log"

# Initialize logs
mkdir -p "${LOGS_DIR}"

# Logging functions
log_section() {
  local msg="$1"
  echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}" | tee -a "${SWARM_LOG}"
  echo -e "${MAGENTA}▶ ${msg}${NC}" | tee -a "${SWARM_LOG}"
  echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}" | tee -a "${SWARM_LOG}"
}

log_info() {
  echo -e "${CYAN}ℹ $1${NC}" | tee -a "${SWARM_LOG}"
}

log_success() {
  echo -e "${GREEN}✓ $1${NC}" | tee -a "${SWARM_LOG}"
}

log_warning() {
  echo -e "${YELLOW}⚠ $1${NC}" | tee -a "${SWARM_LOG}"
}

log_error() {
  echo -e "${RED}✗ $1${NC}" | tee -a "${SWARM_LOG}"
}

# Worker state tracking
declare -A WORKER_STATES
declare -A WORKER_RESULTS
ACTIVE_WORKERS=0
MAX_WORKERS=4

# Parse command line arguments
COMMAND="${1:-help}"
TARGET="${2:-all}"
PARALLEL="${3:-true}"

# Help function
show_help() {
  cat << 'EOF'
Swords2Silenced Swarm Orchestration CLI

Usage: swarm-orchestration.sh <command> [target] [parallel]

Commands:
  build              Build all workspaces in parallel
  test               Run tests across workspaces
  lint               Run linting across workspaces
  clean              Clean build artifacts and cache
  validate           Validate workspace integrity
  status             Show orchestration status
  cache-info         Display cache information
  reset              Reset orchestration state
  help               Show this help message

Targets:
  all                Target all workspaces (default)
  web                Target apps/web only
  core               Target packages/core only
  api                Target packages/api only
  mcp                Target tools/mcp only

Parallel:
  true               Execute tasks in parallel (default)
  false              Execute tasks sequentially

Examples:
  ./swarm-orchestration.sh build              # Build all in parallel
  ./swarm-orchestration.sh test web false    # Test web sequentially
  ./swarm-orchestration.sh lint all true     # Lint all in parallel
  ./swarm-orchestration.sh status            # Show current status
EOF
}

# Initialize orchestration state
init_orchestration() {
  log_section "Initializing Swarm Orchestration"

  # Create orchestration state file
  cat > "${CACHE_DIR}/orchestration/state.json" << EOF
{
  "initialized": true,
  "timestamp": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "session_id": "$(uuidgen 2>/dev/null || echo ${TIMESTAMP})",
  "parallel_mode": ${PARALLEL},
  "target": "${TARGET}",
  "command": "${COMMAND}",
  "workers": {},
  "status": "initializing"
}
EOF

  log_success "Orchestration state initialized"
}

# Get workspace list based on target
get_target_workspaces() {
  local target="$1"

  case "${target}" in
    all)
      echo "apps/web packages/core packages/api tools/mcp"
      ;;
    web)
      echo "apps/web"
      ;;
    core)
      echo "packages/core"
      ;;
    api)
      echo "packages/api"
      ;;
    mcp)
      echo "tools/mcp"
      ;;
    *)
      log_error "Unknown target: ${target}"
      exit 1
      ;;
  esac
}

# Execute task in workspace
execute_workspace_task() {
  local workspace="$1"
  local task="$2"
  local log_file="${LOGS_DIR}/${task}-${workspace//\//-}-${TIMESTAMP}.log"

  cd "${PROJECT_ROOT}"

  log_info "Executing: npm run ${task} -w ${workspace}"

  if npm run "${task}" -w "${workspace}" > "${log_file}" 2>&1; then
    WORKER_RESULTS["${workspace}_${task}"]="success"
    log_success "[${workspace}] ${task} completed successfully"
    return 0
  else
    WORKER_RESULTS["${workspace}_${task}"]="failed"
    log_error "[${workspace}] ${task} failed - see ${log_file}"
    return 1
  fi
}

# Execute task across workspaces
execute_swarm_task() {
  local task="$1"
  local parallel="${2:-true}"

  local workspaces=$(get_target_workspaces "${TARGET}")
  local pids=()
  local success_count=0
  local fail_count=0

  log_section "Executing Swarm Task: ${task}"

  if [ "${parallel}" = "true" ]; then
    log_info "Mode: Parallel execution"

    for ws in ${workspaces}; do
      execute_workspace_task "${ws}" "${task}" &
      pids+=($!)

      # Limit concurrent workers
      if [ ${#pids[@]} -ge ${MAX_WORKERS} ]; then
        wait -n
        pids=("${pids[@]:1}")
      fi
    done

    # Wait for remaining tasks
    for pid in "${pids[@]}"; do
      wait "${pid}" || true
    done
  else
    log_info "Mode: Sequential execution"

    for ws in ${workspaces}; do
      execute_workspace_task "${ws}" "${task}" || true
    done
  fi

  # Count results
  for ws in ${workspaces}; do
    if [ "${WORKER_RESULTS[${ws}_${task}]}" = "success" ]; then
      ((success_count++))
    else
      ((fail_count++))
    fi
  done

  log_section "Task Summary: ${task}"
  log_success "Completed: ${success_count}"
  if [ ${fail_count} -gt 0 ]; then
    log_error "Failed: ${fail_count}"
  fi

  return $([[ ${fail_count} -eq 0 ]] && echo 0 || echo 1)
}

# Build command
cmd_build() {
  log_section "Swords2Silenced Build Orchestration"
  execute_swarm_task "build" "${PARALLEL}"
}

# Test command
cmd_test() {
  log_section "Swords2Silenced Test Orchestration"
  execute_swarm_task "test" "${PARALLEL}"
}

# Lint command
cmd_lint() {
  log_section "Swords2Silenced Lint Orchestration"
  execute_swarm_task "lint" "${PARALLEL}"
}

# Clean command
cmd_clean() {
  log_section "Cleaning Build Artifacts and Cache"

  cd "${PROJECT_ROOT}"
  npm run clean 2>&1 | tee -a "${SWARM_LOG}"

  # Clear cache
  log_info "Clearing orchestration cache..."
  rm -rf "${CACHE_DIR}/build"/* 2>/dev/null || true

  log_success "Clean completed"
}

# Validate command
cmd_validate() {
  log_section "Validating Workspace Integrity"

  local workspaces=$(get_target_workspaces "${TARGET}")
  local all_valid=true

  for ws in ${workspaces}; do
    if [ -f "${PROJECT_ROOT}/${ws}/package.json" ]; then
      log_success "Workspace valid: ${ws}"
    else
      log_error "Invalid workspace: ${ws}"
      all_valid=false
    fi
  done

  if [ "${all_valid}" = true ]; then
    log_success "All workspaces are valid"
    return 0
  else
    log_error "Some workspaces are invalid"
    return 1
  fi
}

# Status command
cmd_status() {
  log_section "Orchestration Status"

  if [ -f "${CACHE_DIR}/orchestration/state.json" ]; then
    log_info "State file:"
    cat "${CACHE_DIR}/orchestration/state.json" | jq . 2>/dev/null || cat "${CACHE_DIR}/orchestration/state.json"
  else
    log_warning "No orchestration state found"
  fi

  log_info "Recent logs:"
  ls -lh "${LOGS_DIR}"/ 2>/dev/null | tail -5 || log_warning "No logs found"
}

# Cache info command
cmd_cache_info() {
  log_section "Cache Information"

  if [ -d "${CACHE_DIR}" ]; then
    log_info "Cache directory: ${CACHE_DIR}"
    log_info "Cache size: $(du -sh ${CACHE_DIR} 2>/dev/null | awk '{print $1}')"

    echo -e "\n${CYAN}Cache contents:${NC}"
    find "${CACHE_DIR}" -type f -printf "%f\n" | head -20
  else
    log_warning "Cache directory not found"
  fi
}

# Reset command
cmd_reset() {
  log_section "Resetting Orchestration State"

  rm -rf "${CACHE_DIR}/orchestration/state.json" 2>/dev/null || true
  log_success "Orchestration state reset"
}

# Route commands
case "${COMMAND}" in
  build)
    init_orchestration
    cmd_build
    ;;
  test)
    init_orchestration
    cmd_test
    ;;
  lint)
    init_orchestration
    cmd_lint
    ;;
  clean)
    cmd_clean
    ;;
  validate)
    cmd_validate
    ;;
  status)
    cmd_status
    ;;
  cache-info)
    cmd_cache_info
    ;;
  reset)
    cmd_reset
    ;;
  help)
    show_help
    ;;
  *)
    log_error "Unknown command: ${COMMAND}"
    show_help
    exit 1
    ;;
esac

log_info "Orchestration log: ${SWARM_LOG}"
