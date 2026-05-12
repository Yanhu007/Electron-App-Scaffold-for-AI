# Electron App Scaffold for AI

A practical scaffold blueprint for building cross-platform AI desktop applications with Electron.

This repository focuses on the architecture, engineering rules, and repository organization needed for a production-grade AI desktop app, rather than a toy chat demo.

## What This Repo Is

This repo is a starter knowledge base for building an AI-native Electron application with:

- Electron multi-process architecture
- React + TypeScript renderer
- Main-process AI runtime
- Typed IPC boundaries
- Streaming chat UX
- Tool execution and MCP integration
- Cross-platform packaging for Windows, macOS, and Linux
- Release, CI/CD, and engineering governance guidance

## Document Map

- [Scaffold Overview](docs/cross-platform-electron-ai-scaffold.md)
- [Frontend Guidelines](docs/frontend-guidelines.md)
- [Backend Guidelines](docs/backend-guidelines.md)
- [Repository Governance](docs/repo-governance-index.md)

## Recommended Reading Order

1. Start with [Scaffold Overview](docs/cross-platform-electron-ai-scaffold.md)
2. Then read [Frontend Guidelines](docs/frontend-guidelines.md)
3. Then read [Backend Guidelines](docs/backend-guidelines.md)
4. Use [Repository Governance](docs/repo-governance-index.md) as the operating index for repo structure, CI/CD, release, and contribution rules

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

- Architecture and engineering guidance
- Frontend and backend conventions
- Repo governance guidance

This repository does not yet provide:

- A fully runnable application template
- Generated project boilerplate
- Example production code modules

Those can be added in a later phase once the architecture and repo shape are stable.

## Next Evolution

The next logical step for this repo is to add:

1. A minimal runnable Electron + React + TypeScript template
2. A typed IPC starter implementation
3. A streaming chat page example
4. A GitHub Actions starter pipeline
5. Packaging examples for Windows, macOS, and Linux