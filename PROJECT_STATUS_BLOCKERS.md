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
   - Directive: content systems agent owns replacement of placeholders with primary records and future exhibit index.

## Immediate next 3 steps

1. Validate production-like environment variables for GitHub, Telegram, and admin auth in hosting platform settings; confirm `/api/status` returns `ok` or actionable degraded reason codes.
2. Wire `/api/status` into deployment probes and incident alerts; treat `legacy_secret_in_use` and `invalid_format` as page-worthy conditions.
3. Execute a release-readiness pass (`lint`, `test`, `build`) after each auth secret rotation and before promoting deploys.

## Recent PR / branch check snapshot

- Latest auth/status+token work was reviewed and synchronized with local checks.
- Local deployment-blocking build error was reproduced (`next build` Turbopack root inference) and fixed by setting `turbopack.root` in `apps/web/next.config.js`.
- Remaining follow-up: verify hosted deployment logs after next push to confirm no environment-specific regressions.
