# Minimal Runnable Template

## Purpose

Provide a minimal runnable Electron + React + TypeScript scaffold that stays business-neutral and demonstrates only the architectural baseline.

## Scope

This template is intentionally limited to:

- one Electron main process entry
- one preload bridge
- one React renderer entry
- one trivial typed bridge example

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

## Purpose of the Files

- `package.json`: minimal scripts and dependencies
- `electron.vite.config.ts`: build configuration for main, preload, and renderer
- `src/main/main.ts`: BrowserWindow bootstrap
- `src/preload/main.ts`: safe bridge surface
- `src/renderer/*`: minimal React UI

## Next Steps

Use the docs in the repository root before extending this template. Add runtime capabilities only after the process boundaries, packaging strategy, and repository governance are clear.