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
2. **MCP upstream fetch is currently blocked from this runtime**
   - `git clone https://github.com/Fused-Gaming/Fused-Gaming-Skill-MCP.git` failed with `CONNECT tunnel failed, response 403`.
3. **PR/deployment telemetry is not directly queryable from this local clone**
   - No GitHub remote is configured in this repository checkout.

## Current steps in progress

1. Harden `/api/status` with deterministic integration diagnostics.
2. Implement auth contract helpers for GitHub, Telegram, and admin flows.
3. Ensure MCP skill workspace remains installable inside monorepo scripts.

## Immediate next 3 steps

1. Add/verify environment variables in deployment targets:
   - `GITHUB_TOKEN` or `GITHUB_APP_ID`, plus `GITHUB_TOKEN_EXPIRES_AT`
   - `TELEGRAM_BOT_TOKEN`, plus `TELEGRAM_BOT_TOKEN_EXPIRES_AT`
   - `ADMIN_PASSWORD_HASH`, plus `ADMIN_SECRET_EXPIRES_AT`
2. Re-run deployment health probes against `/status` and verify all auth checks return `ok`.
3. Restore GitHub connectivity for MCP source sync (network egress allowlist or mirrored artifact) and complete fused-gaming source pull.

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
