# Electron App Scaffold for AI

A guidance-first scaffold repository for teaching AI how to design and evolve a cross-platform Electron application for AI workloads.

This repository is intentionally instructional. Its purpose is to transfer mature engineering patterns, architectural boundaries, and repository rules to AI systems and developers. It is not a business template and it does not encode product-specific features.

## What This Repo Is

This repo is a scaffold knowledge base that teaches:

- Electron multi-process architecture
- React + TypeScript renderer
- Main-process AI runtime
- Typed IPC boundaries
- Streaming interaction patterns
- Tool-runtime integration patterns
- Cross-platform packaging for Windows, macOS, and Linux
- Release, CI/CD, and engineering governance guidance

This repo does not prescribe any specific business workflow, vertical domain, or end-user product behavior.

## Document Map

- [Scaffold Overview](docs/cross-platform-electron-ai-scaffold.md)
- [Frontend Guidelines](docs/frontend-guidelines.md)
- [Backend Guidelines](docs/backend-guidelines.md)
- [Build and Packaging Guidelines](docs/build-and-packaging-guidelines.md)
- [Release and Versioning Guidelines](docs/release-and-versioning-guidelines.md)
- [CI/CD Guidelines](docs/cicd-guidelines.md)
- [Repository Governance](docs/repo-governance-index.md)
- [.github/copilot-instructions.md](.github/copilot-instructions.md)

## Recommended Reading Order

1. Start with [.github/copilot-instructions.md](.github/copilot-instructions.md)
2. Then read [Scaffold Overview](docs/cross-platform-electron-ai-scaffold.md)
3. Then read [Frontend Guidelines](docs/frontend-guidelines.md)
4. Then read [Backend Guidelines](docs/backend-guidelines.md)
5. Then read [Build and Packaging Guidelines](docs/build-and-packaging-guidelines.md)
6. Then read [Release and Versioning Guidelines](docs/release-and-versioning-guidelines.md)
7. Then read [CI/CD Guidelines](docs/cicd-guidelines.md)
8. Use [Repository Governance](docs/repo-governance-index.md) as the operating index for repo structure, CI/CD, release, and contribution rules

## Intended Stack

This scaffold is designed around the following baseline:

- Electron
- React
- TypeScript
- Typed IPC contracts
- Vite or Webpack build pipeline
- GitHub Actions for CI/CD
- Optional MCP / tool runtime layer

## Scope

This repository currently provides:

- Architecture guidance
- Framework-level engineering conventions
- Frontend and backend decision rules
- Repository governance guidance
- A minimal runnable template with no business logic

This repository does not yet provide:

- A fully runnable application template
- Generated project boilerplate
- Example production code modules
- Product-specific feature guidance
- Vertical-specific business logic

Those should only be added later if they can remain generic and reusable.

## Next Evolution

The next logical step for this repo is to add reusable scaffold assets such as:

1. A more advanced typed IPC starter implementation
2. A generic streaming interaction example
3. A GitHub Actions starter pipeline
4. Packaging examples for Windows, macOS, and Linux

## Minimal Template

See [template/README.md](template/README.md) for the business-neutral runnable scaffold.

The template now mirrors the current KOSMOS transition pattern more closely:

- `dev` uses Vite
- `build` uses Webpack
- `build:vite` remains available as the migration path