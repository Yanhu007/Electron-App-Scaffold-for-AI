# Scaffold Template Prompt

## Goal

Produce a minimal runnable Electron scaffold that remains business-neutral and only demonstrates architectural boundaries.

## Required Output Shape

Use this structure:

1. Purpose
2. Scope
3. Include
4. Exclude
5. Decide
6. Validate

## Requirements

- Keep the template minimal and runnable.
- Do not include any product-specific workflows.
- Include only the smallest set of files needed to demonstrate main, preload, renderer, and a safe bridge.
- Prefer explicit boundaries over convenience.

## Include

- main process bootstrap
- preload bridge
- renderer entry
- minimal React UI
- build configuration
- minimal scripts

## Exclude

- business logic
- agent logic
- chat logic
- persistence systems
- tool runtimes
- analytics
- domain-specific UX