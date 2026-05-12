<!-- Last verified: 2026-05-12 -->

# Main Process Module Guide

## Key Files

| File | Responsibility |
|------|----------------|
| `main.ts` | Electron app bootstrap, window creation, user-data path setup |

## Architecture

- Keep the main process as the trusted runtime boundary.
- Put brand-aware path selection here, not in the renderer.
- Treat app startup and any UI-blocking IPC as critical-path code.

## Common Changes

1. Update `src/shared/*` first if the change affects contracts.
2. Keep brand-specific runtime choices data-driven through `brands/*/config.json`.
3. Re-run `npm run build` after changing startup or packaging-sensitive logic.

## Gotchas

- Do not block app startup with non-essential async work.
- Do not move user-data path selection into renderer code.

## Related

- [src/shared/ai.prompt.md](../shared/ai.prompt.md)
- [../../docs/postmortem-derived-constraints.md](../../docs/postmortem-derived-constraints.md)