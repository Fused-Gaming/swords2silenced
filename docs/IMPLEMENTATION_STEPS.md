# Implementation Steps — Phase 1 Deliverables

Last updated: 2026-04-16

## Orientation Inputs Reviewed

- `ROADMAP.md`
- `VERSION.md`
- `CHANGELOG.md`
- `CLAUDE.md`
- Local git history for recent PR merges (`git log --oneline`)

## Blockers

1. No git remote is configured in this clone, so recent PR comments/check-runs/deployment statuses cannot be fetched from GitHub.
2. No local GitHub CLI/API credentials are available in this container for PR comment triage.

## Phase 1 Deliverable Mapping (One Mergeable PR per Step)

| Phase 1 deliverable                              | Branch / stack name              | Owner agent type                | Entry criteria                                                                                                 | Done criteria                                                                                                                                                                            |
| ------------------------------------------------ | -------------------------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Auth recovery + status contract hardening        | `stack/auth-status-recovery`     | **Platform/Auth Agent**         | `/api/status` contract keys are stable (`status`, `checks`, `notes`, `version`); auth env inventory collected. | Auth readiness validators pass for expected healthy/degraded permutations; non-GET returns `405` with `Allow: GET`; tests + lint + type-check + build pass in CI/local.                  |
| Thesis layout foundation and responsive behavior | `stack/thesis-layout-foundation` | **Frontend/UI Agent**           | Design/content outline for thesis page approved; baseline route/component scaffold exists.                     | Mobile/tablet/desktop responsive layout merged; typography/spacing tokenized; no layout regressions on core breakpoints; accessibility smoke checks pass.                                |
| Production build/deploy checks + SEO/perf pass   | `stack/release-seo-perf-pass`    | **Release/QA Agent**            | Prior two steps are merged and deployable; CI pipeline is green on branch tip.                                 | Build/deploy pipeline passes; SEO basics (title/meta/canonical/OG) validated; performance baseline captured and within agreed target budget; deployment health endpoint returns healthy. |
| React component architecture and page templates  | `stack/component-architecture`   | **Frontend Architecture Agent** | Shared layout conventions and folder structure agreed.                                                         | Reusable page templates/components documented and adopted by active pages; lint/type-check/build pass.                                                                                   |
| Professional UI/design implementation            | `stack/pro-ui-implementation`    | **Design Systems Agent**        | Theme tokens + core components in place.                                                                       | Visual polish completed for MVP pages; design token usage consistent; no unresolved design QA issues.                                                                                    |
| Static site generation and optimization          | `stack/ssg-optimization`         | **Performance Build Agent**     | Page routes and data needs finalized for static output.                                                        | Pages render via static generation where applicable; no blocking dynamic fallback regressions; build output validated.                                                                   |
| Live domain and hosting setup                    | `stack/domain-hosting-launch`    | **DevOps/Infra Agent**          | Build/deploy checks pass and launch checklist approved.                                                        | Domain + DNS + hosting connected; TLS active; production URL and `/status` probe verified.                                                                                               |

## Current Steps (Seeded Priority Order)

1. **Auth recovery + status contract** (`stack/auth-status-recovery`) — scoped to one mergeable PR.
2. **Thesis layout foundation and responsive behavior** (`stack/thesis-layout-foundation`) — scoped to one mergeable PR.
3. **Production build/deploy checks and SEO/perf pass** (`stack/release-seo-perf-pass`) — scoped to one mergeable PR.

## Immediate Next 3 Steps

1. Add/refresh PR template checklists for entry/done criteria alignment per stack.
2. Attach GitHub remote/API access so PR comments/check-runs/deployments can be triaged directly.
3. Run deployment check triage first on any newly discovered failing PR checks before starting new feature work.

## Recent PR Snapshot (Local History Only)

> Remote PR comments and deployment/check statuses are currently blocked in this environment.

- `#45` — `fix(ci): add lockfile and migrate workflows to node 24`
- `#44` — `docs: record failed-testing continuation status and blockers`
- `#42` — `fix(web): restore tailwind pipeline and stabilize color tokens`
- `#41` — `fix(deploy): unblock next build by relocating api contract test`
- `#38` — `fix(web): stabilize /api/status contract, method handling, and probe docs`

## Agent Deployment Directives (Top 3 Priorities)

1. **Platform/Auth Agent** → execute `stack/auth-status-recovery` until PR is merge-ready.
2. **Frontend/UI Agent** → execute `stack/thesis-layout-foundation` after Step 1 merges.
3. **Release/QA Agent** → execute `stack/release-seo-perf-pass` after Step 2 merges.

## Session Handoff

- Created an implementation-step map linking Phase 1 deliverables to branch stacks, owner agent types, and explicit entry/done criteria.
- Seeded current-step order and immediate next actions with single-PR scope guardrails.
- Captured environment blockers (remote/API visibility) so next agent can continue without repeating discovery.
