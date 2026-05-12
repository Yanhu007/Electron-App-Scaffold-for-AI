# Frontend Guidelines

This document defines renderer-side development rules that AI systems can follow when generating or modifying frontend code in an Electron AI application.

## 1. Scope

Applies to:

- renderer UI
- routes and pages
- local state
- renderer IPC clients
- streaming UI behavior

## 2. Key Rules

### 2.1 Renderer Owns UI, Not Privileged Work

The renderer should not directly own:

- file system access
- child process access
- native module access
- sensitive credential storage

### 2.2 Prefer the Smallest State Scope

Use this order:

1. props for parent-child communication
2. local shared atom state for nearby components
3. context only for truly ambient concerns

### 2.3 Split Large Components Early

Large components become the main source of long-term maintenance cost.

### 2.4 High-Frequency UI Must Avoid Full-Tree Re-Renders

High-frequency updates should be handled with localized rendering strategies.

## 3. Recommended Structure

- `components/` for UI pieces
- `routes/` for routing assembly
- `lib/` for renderer-side helpers and adapters
- `ipc/` for typed feature clients
- `states/` for app-wide state
- local `*.atom.ts` files for nearby shared state

## 4. State Transition and Streaming Rules

- do not flash stale state during entity or session switch
- use explicit loading/opening states
- respect user scroll escape during streaming
- keep completed-message rendering separate from in-flight rendering

## 5. Performance Rules

- lazy load heavy modules such as Mermaid and Monaco
- avoid placing fast-changing state too high in the tree
- keep message list updates localized

## 6. UX Rules

- render interruptive or decision-required UI inline with the current context when possible
- show recoverable errors locally instead of escalating everything globally
- preserve hierarchy between primary content, runtime metadata, and generated artifacts

## 7. Security Rules

- never bypass preload for privileged operations
- do not trust raw external content without validation
- keep secrets out of renderer state and storage

## 8. Validation Checklist

After frontend changes, verify:

1. route transitions still work
2. state transitions do not show stale content
3. high-frequency rendering remains progressive and stable
4. interruptive UI flows render and resolve correctly
5. loading and empty states remain correct