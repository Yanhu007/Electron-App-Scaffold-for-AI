# Backend Guidelines

## Purpose

Teach AI systems how to generate and modify main-process and runtime code safely in an Electron AI application.

## Scope

Applies to:

- main process runtime
- preload boundaries
- shared IPC contracts
- persistence
- tools and external runtimes
- packaging-sensitive runtime behavior

## Do

- Keep auth, orchestration, persistence, native integration, security validation, and observability in the main process.
- Define IPC surfaces once in shared contracts.
- Keep UI-critical IPC short.
- Design runtime logic around fallback and recovery.
- Separate runtime state from persisted state.
- Split large runtime systems by responsibility.
- Run heavy context maintenance in active execution paths, not passive initialization paths.
- Distinguish built-in tools from external runtimes.
- Support partial results where the runtime can surface progressive output.
- Serialize order-dependent writes.
- Use structured logging.
- Centralize platform-specific logic.

Recommended runtime separation:

- prompt service
- context service
- turn runner
- streaming service
- tool executor
- interaction service
- state/persistence service

## Don't

- Do not block sign-in, navigation, or readiness on non-essential background work.
- Do not persist transient internals such as cancellation tokens or temporary event senders.
- Do not allow raw renderer inputs to cross trust boundaries without validation.
- Do not use unbounded sequential awaits over network or LLM calls.
- Do not mix packaging-sensitive runtime dependencies into build-only dependency sections.
- Do not scatter platform-specific behavior across unrelated business logic.

## Decide

When a boundary is cross-process, decide in favor of typed IPC.

When a runtime path can fail independently, decide in favor of explicit fallback and bounded retry behavior.

When a write can race or overwrite another write, decide in favor of serialized persistence.

When an operation is expensive and not required for immediate UI progress, decide to move it off the critical path.

## Validate

After backend changes, verify:

1. typecheck passes
2. impacted runtime tests pass
3. build passes
4. IPC contracts still align across layers
5. packaging-sensitive changes are validated if runtime dependencies are involved