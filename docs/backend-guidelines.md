# Backend Guidelines

This document defines backend and runtime rules for the main process side of an AI-focused Electron application.

## 1. Scope

Applies to:

- main process runtime
- preload boundaries
- shared IPC contracts
- persistence
- tools and MCP runtime
- packaging-sensitive runtime behavior

## 2. Key Rules

### 2.1 Main Process Owns the Trusted Runtime

The main process should own:

- auth
- AI orchestration
- tool execution
- persistence
- native integration
- security validation
- logging and analytics

### 2.2 Typed IPC Is the Default

New IPC surfaces should be defined once in shared contracts and reused across main, preload, and renderer.

### 2.3 Critical-Path IPC Must Stay Short

Do not block sign-in, navigation, or app readiness on non-essential background work.

### 2.4 Runtime Logic Must Be Recovery-Oriented

Assume providers, tools, streams, and native integrations can fail and design explicit fallback paths.

## 3. Runtime Design Rules

### 3.1 Separate Runtime State From Persisted State

Do not directly persist transient runtime internals such as:

- cancellation tokens
- event senders
- temporary execution state

### 3.2 Split Large Runtime Systems by Responsibility

Recommended separation:

- prompt service
- context service
- turn runner
- streaming service
- tool executor
- interaction service
- session service

### 3.3 Compression Should Run in the Active Send Path

Avoid heavy context compression during passive session initialization.

## 4. Tool and MCP Rules

- distinguish built-in tools from external tools
- support partial tool results where needed
- validate file, command, and external operations through security boundaries
- propagate cancellation through tool execution paths

## 5. Persistence Rules

- keep JSON schema changes backward-compatible unless migration is implemented
- serialize sensitive or order-dependent writes
- decouple disk persistence cadence from UI update cadence

## 6. Concurrency Rules

- avoid unbounded sequential awaits over network or LLM calls
- use bounded concurrency or all-settled patterns where appropriate
- make cancellation flow through the entire execution chain

## 7. Observability Rules

- use one structured logger for main-process runtime logs
- add trace points to critical flows such as startup, sign-in, streaming, tool execution, and persistence

## 8. Cross-Platform and Packaging Rules

- centralize platform-specific logic
- keep runtime dependencies in the correct package sections
- validate native modules in packaged builds, not only dev mode
- design for multi-brand and multi-platform constraints from the start

## 9. Security Rules

- validate renderer inputs in main
- prevent path traversal and command injection
- prefer default-deny boundaries for sensitive operations
- avoid leaking auth artifacts into untrusted surfaces

## 10. Validation Checklist

After backend changes, verify:

1. typecheck passes
2. impacted runtime tests pass
3. build passes
4. IPC contracts still align across layers
5. packaging-sensitive changes are validated if runtime dependencies are involved