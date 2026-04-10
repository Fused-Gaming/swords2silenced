# CLAUDE.md

## Agent Orientation Notes

- Repository uses npm workspaces at root.
- Web app is in `apps/web` and uses Next.js pages router.
- `next lint` is not supported in Next.js 16 CLI behavior used here; use workspace ESLint CLI script instead.
- Keep `apps/web/next.config.js` free of deprecated options (e.g., avoid `swcMinify` and `eslint` keys).
- If type-checking fails around `--ignoreDeprecations`, verify TypeScript version compatibility first.

## Common Validation Commands

```bash
npm install
npm --workspace @swords2silenced/web run lint
npm --workspace @swords2silenced/web run build
```

## Documentation Hygiene

- Update `CHANGELOG.md` and version fields when delivering user-facing changes.
- Update README "Recent Updates" section for visible feature additions.
