# Project Status Blockers and Active Steps (April 10, 2026)

## Sources reviewed

- `PARALLEL_DEVELOPMENT_PLAN.md` (roadmap and coordinated milestones)
- `AGENT_HANDOFF_SUMMARY.md` (current-version handoff context)
- `apps/web/src/pages/api/status.ts` (status endpoint contract)

## Current blockers

1. **Authentication chain requires stronger runtime contracts**
   - GitHub auth needs expiry and startup diagnostics.
   - Telegram auth needs format and expiry validation.
   - Admin auth needs explicit hash-only enforcement and expiry checks.
2. **MCP upstream fetch may be blocked from this runtime (intermittent proxy restrictions)**
   - `git clone https://github.com/Fused-Gaming/Fused-Gaming-Skill-MCP.git` failed with `CONNECT tunnel failed, response 403`.
3. **Remote deployment/PR status is not queryable from this local clone**
   - No git remote is configured, so CI/deployment details cannot be pulled directly from GitHub APIs.

## Current steps in progress

1. Verify deployed environment variables for GitHub/Telegram/admin auth checks.
2. Monitor deployment health probes against `/status` contract after rollout.
3. Keep monorepo checks green (`lint`, `type-check`, `test`, `build`) across workspaces.

## Immediate next 3 steps

1. Run CI and deployment pipeline on this commit and validate all required checks pass.
2. Validate `/status` response in deployed environment with real rotated secrets/expiries.
3. Reconnect GitHub remote/API access for automated PR/deployment telemetry reporting.

## Top 3 prioritized items and directives

1. **P0 · Fix authentication chain (GitHub, Telegram, admin)**
   - Directive: platform/auth agent owns secret validation, expiry checks, startup diagnostics, and rollback-safe rotation workflow.
2. **P1 · Stabilize `/status` endpoint**
   - Directive: reliability agent owns status contract, degraded-state semantics, and deployment probe compatibility.
3. **P2 · Complete source-backed launch publication**
   - Directive: content-records agent owns S4-S6 placeholder replacement with primary records + mirrored archive links.
   - Add citation metadata fields for rendering provenance (`sourceTitle`, `publicationDate`, `archiveUrl`, `retrievalDate`).
   - Any claim without at least one linked primary source must be explicitly tagged `investigating`.
