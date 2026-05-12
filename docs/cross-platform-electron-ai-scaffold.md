# Cross-platform Electron AI App Scaffold

This document captures the framework-level architecture and engineering patterns that an AI system can reuse when generating or modifying a cross-platform Electron application.

## 1. Target Shape

This scaffold is designed for repositories that need to teach AI how to work within an Electron-based AI application architecture.

Typical characteristics include:

- A desktop UI built with Electron
- A React + TypeScript renderer
- AI-assisted workflows
- Streaming output
- Tool or external-runtime execution
- Local persistence
- Cross-platform distribution

It is not intended for:

- Product-specific business playbooks
- Domain-specific workflows tied to one company or one app
- Guidance that only makes sense for a single feature surface

## 2. Core Architecture Principles

### 2.1 Main Process Owns the Trusted Runtime

The main process should own:

- AI orchestration
- Auth
- Tool execution
- File and process access
- Persistence
- Logging
- Updates
- Native module loading

The renderer should only own UI and user interaction.

### 2.2 Typed IPC Is the Default Boundary

All renderer-to-main communication should go through typed contracts.

Recommended pattern:

- shared contract definitions
- preload bridge with explicit allowlist
- renderer-side typed clients
- main-side typed handlers

### 2.3 UI Critical Paths Must Stay Fast

Any IPC that gates UI transitions should avoid long blocking work.

Examples:

- sign-in completion
- session open
- navigation
- app readiness

Background work should be fire-and-forget when the UI does not depend on its completion.

### 2.4 Design for Failure and Recovery

AI runtime systems are inherently failure-prone.

The scaffold should assume:

- providers can timeout
- tools can fail midway
- streams can cancel
- context windows can overflow
- external integrations can become unavailable

Every major path should have:

- logging
- fallback behavior
- bounded retries where justified
- explicit cancellation behavior

## 3. Suggested Repository Shape

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

## 4. Required Foundation Capabilities

The scaffold should encode these capabilities from the beginning:

- multi-window architecture
- typed IPC
- structured logging
- streaming output delivery
- session persistence
- cancellation propagation
- security validation for file and command operations
- cross-platform packaging awareness

## 5. AI-Specific Engineering Requirements

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

## 8. Scaffold Outcome

This scaffold is not a business solution template. It is a reusable architectural baseline that teaches AI systems how to reason about boundaries, recovery behavior, packaging discipline, and repository structure in an Electron AI codebase.