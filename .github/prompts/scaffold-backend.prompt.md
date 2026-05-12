# Scaffold Backend Prompt

## Goal

Produce main-process and runtime guidance for an Electron AI application in a reusable, instruction-oriented form.

## Required Output Shape

Use this structure:

1. Purpose
2. Scope
3. Do
4. Don't
5. Decide
6. Validate

## Requirements

- Focus on runtime orchestration, typed IPC, persistence, cancellation, concurrency, packaging, and security.
- Prefer rules that can guide AI code generation and code review.
- Keep the content reusable across products.

## Good Topics

- critical-path IPC discipline
- runtime state vs persisted state
- bounded retries and fallback behavior
- tool runtime boundaries
- dependency placement for packaging
- cross-platform path and process concerns

## Avoid

- product-specific agent logic
- one-provider assumptions
- business-specific backend flows