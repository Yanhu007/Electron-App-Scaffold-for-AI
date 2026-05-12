# Frontend Guidelines

## Purpose

Teach AI systems how to generate and modify renderer-side code safely in an Electron AI application.

## Scope

Applies to:

- renderer UI
- routes and pages
- local state
- renderer IPC clients
- high-frequency rendering paths

## Do

- Treat the renderer as a UI layer, not a privileged runtime.
- Prefer the smallest state scope that solves the problem.
- Keep app-wide state separate from feature-local shared state.
- Use explicit loading, opening, and transition states.
- Separate completed rendering from in-flight rendering.
- Localize high-frequency updates.
- Lazy load heavy modules.
- Keep interruptive UI flows close to their current context.
- Surface recoverable errors locally when possible.

Recommended structure:

- `components/` for UI pieces
- `routes/` for route assembly
- `lib/` for renderer helpers and adapters
- `ipc/` for typed feature clients
- `states/` for app-wide state
- local `*.atom.ts` files for nearby shared state

## Don't

- Do not access file systems, child processes, or native modules directly from the renderer.
- Do not store sensitive credentials in renderer state.
- Do not place fast-changing state too high in the tree.
- Do not allow state transitions to flash stale content.
- Do not combine completed rendering and in-flight rendering in one uncontrolled path.
- Do not bypass preload for privileged operations.
- Do not trust raw external content without validation.

## Decide

Use this state-placement order:

1. props for parent-child communication
2. local shared atom state for nearby components
3. context only for truly ambient concerns

When a path updates frequently, decide in favor of localized rendering and localized subscriptions.

When an interaction interrupts the user flow, decide in favor of inline, contextual UI before adding separate overlays.

## Validate

After frontend changes, verify:

1. route transitions still work
2. state transitions do not show stale content
3. high-frequency rendering remains progressive and stable
4. interruptive UI flows render and resolve correctly
5. loading and empty states remain correct