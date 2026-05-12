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
- runnable scaffold generation

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

Use [release-and-versioning-guidelines.md](release-and-versioning-guidelines.md).

### 2.2 CI/CD

Recommended assets:

- typecheck workflow
- unit test workflow
- e2e workflow
- bundle-size workflow
- file-length workflow

Use [cicd-guidelines.md](cicd-guidelines.md).

### 2.3 Versioning

Recommended assets:

- changelog
- semantic versioning process
- release commands

Use [release-and-versioning-guidelines.md](release-and-versioning-guidelines.md).

### 2.4 Build System

Recommended assets:

- compile-system doc
- packaging guide
- release workflow

Use [build-and-packaging-guidelines.md](build-and-packaging-guidelines.md).

### 2.5 Hard Constraints

Recommended assets:

- postmortem-derived constraints doc
- hard-constraints review prompt
- CI checks for any rule that can be enforced mechanically

Use [postmortem-derived-constraints.md](postmortem-derived-constraints.md).

### 2.6 Frontend Guidelines

Use [frontend-guidelines.md](frontend-guidelines.md).

### 2.7 Backend Guidelines

Use [backend-guidelines.md](backend-guidelines.md).

## 3. Recommended Repo Baseline

At minimum, a serious scaffold repository should define:

- a README
- frontend guidelines
- backend guidelines
- build and packaging guidelines
- postmortem-derived hard constraints
- release and versioning guidelines
- CI/CD guidelines
- one minimal runnable template
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
6. Build and packaging guidelines
7. Postmortem-derived hard constraints
8. Release and versioning guidelines
9. CI/CD guidelines