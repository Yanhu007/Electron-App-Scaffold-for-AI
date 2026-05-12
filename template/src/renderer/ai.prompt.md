<!-- Last verified: 2026-05-12 -->

# Renderer Module Guide

## Key Files

| File | Responsibility |
|------|----------------|
| `App.tsx` | Minimal UI entry and brand/runtime info display |

## Architecture

- Keep renderer code UI-focused and route runtime decisions through typed boundaries.
- Read brand presentation from shared brand configuration instead of hard-coding labels.

## Common Changes

1. Extend shared contracts before consuming new runtime data.
2. Keep brand visual differences data-driven.
3. Re-run `npm run typecheck` and `npm test` after renderer contract changes.

## Gotchas

- Do not import Electron APIs directly into renderer components.
- Do not duplicate brand metadata in multiple renderer files.

## Related

- [src/shared/ai.prompt.md](../shared/ai.prompt.md)
- [../../docs/frontend-guidelines.md](../../docs/frontend-guidelines.md)