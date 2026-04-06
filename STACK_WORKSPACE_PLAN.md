# GitButler Workspace Stack Plan (April 6, 2026)

## Inputs reviewed

- `ROADMAP.md` (last updated 2026-04-04)
- `VERSION.md` (current version and release strategy)

## Current version

- **0.1.0** (MVP Development)

## Current blockers

1. Authentication is broken for **GitHub**, **Telegram**, and **admin password** flows.
2. The `/status` endpoint is broken and not meeting reliable degraded-state reporting needs.
3. The thesis launch flow needs stable layout/content wiring to support reviewable incremental delivery.

## Current active steps

1. Establish a reviewable stacked branch flow from `develop` so each vertical can be merged independently.
2. Define and enforce auth + status contracts before endpoint hardening.
3. Complete thesis presentation work in two passes (layout foundation, then content wiring).

## Top-3 priorities (ordered)

### P0 — Restore authentication chain

**Scope:** GitHub auth, Telegram auth, admin-password auth contracts and validation.

**Directive (Auth Agent):**

- implement env-contract validation and explicit readiness statuses;
- fail-safe handling for missing/invalid secrets;
- deterministic integration output consumed by `/api/status`.

### P1 — Harden `/api/status`

**Scope:** status contract, rewrite behavior, degraded-state output guarantees.

**Directive (Reliability Agent):**

- enforce stable response schema and explicit degraded mode semantics;
- ensure rewrite + endpoint alignment in `next.config.js` and `pages/api/status.ts`;
- provide compatibility for probes and dashboard consumers.

### P2 — Finish thesis launch delivery path

**Scope:** layout foundation first, then narrative content/source-link wiring.

**Directive (Content/Frontend Agent):**

- ship page-shell and shared layout primitives under `apps/web/src/styles`;
- follow with `narrative-launch.tsx` content binding + source-link structure;
- preserve stack isolation to keep review scope small.

## Requested GitButler stack shape

Base branch: `develop`

1. `stack/thesis-layout-foundation` ← base: `develop`
2. `stack/auth-recovery-contracts` ← base: `stack/thesis-layout-foundation`
3. `stack/status-endpoint-hardening` ← base: `stack/auth-recovery-contracts`
4. `stack/thesis-content-wiring` ← base: `stack/status-endpoint-hardening`

This base-chain supports sequential review and independent cherry-picking.
