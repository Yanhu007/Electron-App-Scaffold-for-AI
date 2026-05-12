<!-- Last verified: 2026-05-12 -->

# Shared Module Guide

## Key Files

| File | Responsibility |
|------|----------------|
| `app-contract.ts` | Typed IPC contract |
| `app-ipc.ts` | Main-side IPC registration |
| `brand.ts` | Shared brand metadata lookup |
| `runtime-info.ts` | Shared testable runtime-info factory |

## Architecture

- Keep shared modules free of direct renderer-only or main-only side effects.
- Treat shared contracts and brand metadata as source-of-truth surfaces.

## Common Changes

1. Update shared contracts first.
2. Update module docs if a shared file changes responsibilities.
3. Re-run `npm run typecheck`, `npm test`, and `npm run build` after changing shared code.

## Gotchas

- Do not let brand metadata diverge between packaging config and runtime selection.
- Do not mix process-specific imports into shared utility files.

## Related

- [../../docs/build-and-packaging-guidelines.md](../../docs/build-and-packaging-guidelines.md)
- [../../docs/postmortem-derived-constraints.md](../../docs/postmortem-derived-constraints.md)