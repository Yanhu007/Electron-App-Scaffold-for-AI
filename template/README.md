# Minimal Runnable Template

## Purpose

Provide a minimal runnable Electron + React + TypeScript scaffold that stays business-neutral and demonstrates only the architectural baseline.

## Scope

This template is intentionally limited to:

- one Electron main process entry
- one preload bridge
- one React renderer entry
- one minimal typed IPC starter example
- one minimal multi-brand scaffold example

It does not include:

- product features
- domain workflows
- chat logic
- tool runtimes
- persistence layers
- CI/CD workflows

## Run

1. Install dependencies with `npm install`
2. Start the template with `npm run dev`
3. Build the template with `npm run build`

Additional scaffold commands:

- `npm run build:vite`: alternate Vite production build path for migration phases
- `npm run dev:wp`: example Webpack watch path when a project still keeps Webpack-based production tooling
- `npm run dev -- --brand=pm-studio`: run the alternate brand in development
- `npm run typecheck`: template TypeScript validation
- `npm test`: minimal unit test baseline with Vitest
- `npm run check:file-length`: source file length policy check
- `npm run check:bundle-size`: artifact size policy check after `npm run build`
- `npm run release:notes`: generate scaffold-style release notes from recent git history
- `npm run prepare:release:patch|minor|major`: minimal version bump and changelog preparation flow
- `npm run pack -- --brand=pm-studio`: package a specific brand with electron-builder

## Purpose of the Files

- `package.json`: minimal scripts and dependencies
- `brands/*/config.json`: brand-specific product and packaging metadata
- `electron.vite.config.ts`: build configuration for main, preload, and renderer
- `electron-builder.config.cjs`: minimal brand-aware packaging configuration
- `src/main/main.ts`: BrowserWindow bootstrap
- `src/preload/main.ts`: safe bridge surface
- `src/shared/*`: minimal shared IPC contract and handler registration
- `src/shared/brand.ts`: shared brand selection helper
- `src/shared/runtime-info.ts`: small example of shared logic that can be unit tested
- `src/renderer/*`: minimal React UI

## Next Steps

Use the docs in the repository root before extending this template. Add runtime capabilities only after the process boundaries, packaging strategy, and repository governance are clear.