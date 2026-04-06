# Project Status Blockers and Active Steps (April 6, 2026)

## Sources reviewed

- `PARALLEL_DEVELOPMENT_PLAN.md` (roadmap and coordinated milestones)
- `AGENT_HANDOFF_SUMMARY.md` (current-version handoff context)
- `apps/web/src/pages/api/health.ts` (current health endpoint implementation)

## Current blockers

1. **Authentication chain is degraded**
   - GitHub auth not verifiable from runtime status checks.
   - Telegram auth not verifiable from runtime status checks.
   - Admin auth not verifiable from runtime status checks.
2. **`/status` endpoint missing from web app API routes**
   - `health` route exists but does not report per-integration readiness.
3. **Launch narrative page lacked implementation context**
   - Prior flow had visual/content direction, but missing explicit blockers, active steps, and directives.

## Current steps in progress

1. Add narrative launch page implementation with tokenized dark-layout skeleton.
2. Add source-registry links and context block for missing operational pieces.
3. Add `/api/status` endpoint with typed checks for API, GitHub, Telegram, and admin auth readiness.

## Top 3 prioritized items and directives

1. **P0 · Fix authentication chain (GitHub, Telegram, admin)**
   - Directive: platform/auth agent owns secret validation, expiry checks, startup diagnostics, and rollback-safe rotation workflow.
2. **P1 · Stabilize `/status` endpoint**
   - Directive: reliability agent owns status contract, degraded-state semantics, and deployment probe compatibility.
3. **P2 · Complete source-backed launch publication**
   - Directive: content systems agent owns replacement of placeholders with primary records and future exhibit index.
