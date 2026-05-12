# Copilot Instructions

This repository is a guidance-first scaffold for AI-assisted engineering in cross-platform Electron applications.

## Purpose

The repository exists to teach reusable engineering patterns. Do not treat it as a product repository, a vertical solution, or a source of business requirements.

Your output should stay:

- framework-level
- guidance-first
- architecture-oriented
- instruction-oriented
- reusable across products

Avoid:

- business-specific workflows
- product-specific UX assumptions
- company-specific domain logic
- feature guidance that only fits one application

## How To Use This Repo

When answering questions or generating artifacts from this repository:

1. Prefer principles over implementation detail.
2. Prefer reusable constraints over product examples.
3. Prefer decision rules over feature descriptions.
4. Prefer checklists over long narrative explanations.
5. Prefer repository patterns that can be reused by other Electron AI apps.

## Default Output Style

When generating or editing scaffold content, prefer this structure:

1. Purpose
2. Scope
3. Do
4. Don't
5. Decide
6. Validate

Use short, directive language. Write as if the document is teaching another AI how to work safely and correctly in an Electron AI codebase.

## Allowed Guidance Areas

You should focus on:

- process boundaries
- typed IPC
- renderer and main-process responsibilities
- state-management rules
- streaming UI constraints
- persistence rules
- cancellation and concurrency rules
- logging and observability
- packaging and dependency rules
- cross-platform concerns
- CI/CD and repository governance

## Repository Reading Order

Read in this order when deeper context is needed:

1. `README.md`
2. `docs/cross-platform-electron-ai-scaffold.md`
3. `docs/frontend-guidelines.md`
4. `docs/backend-guidelines.md`
5. `docs/repo-governance-index.md`

## Writing Rules

- Keep documents generic and reusable.
- Use concrete engineering language.
- Do not embed product stories or business scenarios unless clearly marked as optional examples.
- Do not assume one frontend framework beyond the repository baseline.
- Do not assume one model provider, one tool system, or one domain.
- When in doubt, move toward abstraction, not specialization.