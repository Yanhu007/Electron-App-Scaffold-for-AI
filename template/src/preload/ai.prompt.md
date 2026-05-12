<!-- Last verified: 2026-05-12 -->

# Preload Module Guide

## Key Files

| File | Responsibility |
|------|----------------|
| `main.ts` | Safe bridge exposure from Electron to the renderer |

## Architecture

- Expose the smallest typed surface needed by the renderer.
- Keep Electron APIs behind the preload boundary.

## Common Changes

1. Update shared contracts before extending preload exports.
2. Re-run `npm run typecheck` after any preload surface change.

## Gotchas

- Do not expose raw Electron modules directly to the renderer.
- Do not add ad-hoc stringly typed channels without updating shared contracts.

## Related

- [src/shared/ai.prompt.md](../shared/ai.prompt.md)
- [../../docs/cross-platform-electron-ai-scaffold.md](../../docs/cross-platform-electron-ai-scaffold.md)