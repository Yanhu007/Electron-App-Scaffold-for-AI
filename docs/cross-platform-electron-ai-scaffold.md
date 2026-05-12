# Cross-platform Electron AI App Scaffold

## Purpose

Teach AI systems how to reason about a reusable Electron AI application architecture without encoding business-specific product behavior.

## Scope

This scaffold is meant for repositories that need:

- Electron multi-process boundaries
- a renderer UI layer
- a trusted main-process runtime
- typed IPC
- local persistence
- high-frequency streaming or runtime updates
- cross-platform distribution

It is not meant to describe one product's business workflow.

## Do

- Put trusted runtime concerns in the main process.
- Treat typed IPC as the default cross-process boundary.
- Keep UI-critical paths fast.
- Design for failure, recovery, and cancellation.
- Encode cross-platform packaging discipline from the start.
- Organize the repository so architecture, guidelines, and governance are distinct layers.

Suggested repository shape:

```text
src/
  main/
    bootstrap.ts
    main.ts
    lib/
      auth/
      chat/
      mcpRuntime/
      llm/
      persistence/
      workspace/
      security/
      token/
      compression/
      runtime/
      logger/
      updater/
  preload/
    main.ts
    toolbar.ts
    screenshot.ts
  renderer/
    App.tsx
    index.tsx
    routes/
    components/
    lib/
    ipc/
    atom/
    states/
  shared/
    ipc/
    types/
docs/
  cross-platform-electron-ai-scaffold.md
  frontend-guidelines.md
  backend-guidelines.md
  repo-governance-index.md
```

Encode these capabilities from the beginning:

- multi-window architecture
- typed IPC
- structured logging
- streaming output delivery
- session persistence
- cancellation propagation
- security validation for file and command operations
- cross-platform packaging awareness

## Don't

- Do not let renderer code absorb privileged runtime concerns.
- Do not spread raw string-based IPC across the codebase.
- Do not block UI transitions on non-essential background work.
- Do not assume one provider, one tokenizer, or one runtime integration model.
- Do not embed company-specific product flows into scaffold guidance.

## Decide

When a concern crosses process boundaries, decide in favor of shared contracts and typed IPC.

When a concern is runtime-critical, decide in favor of main-process ownership.

When a capability is packaging-sensitive or platform-sensitive, decide to model it explicitly instead of hiding it in incidental implementation details.

When guidance can be product-specific or reusable, decide in favor of the reusable form.

## Validate

Check that the scaffold teaches at least these reusable engineering concerns:

- process boundaries
- IPC boundaries
- persistence boundaries
- cancellation behavior
- packaging and dependency rules
- cross-platform behavior
- governance and CI/CD structure

## Additional Guidance

### 5.1 Streaming Is a First-Class Concern

The app should be designed around push-based streaming from main to renderer.

### 5.2 Tool Runtime Must Be Explicit

The scaffold should distinguish:

- built-in tools
- external tools or MCP tools

### 5.3 Token and Context Management Must Be Provider-Aware

Do not assume one tokenizer or one provider behavior fits all models.

### 5.4 Interactive Requests Should Be Part of the Model

The runtime should support structured user interactions such as:

- approvals
- choices
- forms
- interactive auth

## 6. Cross-Platform Constraints

The scaffold must consider:

- Windows x64
- Windows ARM64
- macOS x64
- macOS ARM64
- Linux

Platform-sensitive logic should be centralized in platform-aware modules.

## 7. Packaging Constraints

Runtime dependencies used by the main process must be packaged correctly.

Key rule:

- runtime dependencies belong in `dependencies` or `optionalDependencies`
- build-only tooling belongs in `devDependencies`

Native modules require package-time validation, not just development-time validation.

## Outcome

This scaffold should function as a reusable instruction layer for AI systems and developers, not as a product template or a business solution blueprint.