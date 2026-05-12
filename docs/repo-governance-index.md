# Repository Governance Index

This document is the operating index for organizing a guidance-first AI Electron scaffold repository.

## 1. Governance Layers

Use four layers so AI can distinguish between instruction types:

### 1.1 Prompts

Use prompts for operational templates such as:

- commit workflow
- PR workflow
- release workflow
- release-note generation
- doc update workflow
- code review workflow
- architecture guidance generation
- frontend guidance generation
- backend guidance generation
- governance guidance generation

### 1.2 Workflows

Use GitHub Actions workflows for executable automation such as:

- typecheck
- unit tests
- e2e tests
- bundle checks
- release builds

### 1.3 Global Rules

Keep top-level engineering rules in a single source such as:

- repository conventions
- prohibited patterns
- post-change verification rules
- documentation maintenance rules

### 1.4 Architecture and Module Docs

Keep architecture and module-specific rules in docs that explain:

- process boundaries
- IPC models
- build system
- module gotchas
- co-change expectations

## 2. Topic Mapping

### 2.1 Release

Recommended assets:

- release prompt
- release-note prompt
- release workflow
- release process doc

### 2.2 CI/CD

Recommended assets:

- typecheck workflow
- unit test workflow
- e2e workflow
- bundle-size workflow
- file-length workflow

### 2.3 Versioning

Recommended assets:

- changelog
- semantic versioning process
- release commands

### 2.4 Build System

Recommended assets:

- compile-system doc
- packaging guide
- release workflow

### 2.5 Frontend Guidelines

Use [frontend-guidelines.md](frontend-guidelines.md).

### 2.6 Backend Guidelines

Use [backend-guidelines.md](backend-guidelines.md).

## 3. Recommended Repo Baseline

At minimum, a serious scaffold repository should define:

- a README
- frontend guidelines
- backend guidelines
- release and CI/CD workflows
- build and packaging documentation
- a changelog strategy
- review expectations

It should avoid embedding business-specific operating guidance unless that guidance is intentionally separated from the reusable scaffold layer.

## 4. Reading Order

1. README
2. `.github/copilot-instructions.md`
3. Scaffold overview
4. Frontend guidelines
5. Backend guidelines
6. Build and release docs