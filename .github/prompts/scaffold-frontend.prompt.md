# Scaffold Frontend Prompt

## Goal

Produce renderer-side guidance for an Electron AI application in a reusable, instruction-oriented form.

## Required Output Shape

Use this structure:

1. Purpose
2. Scope
3. Do
4. Don't
5. Decide
6. Validate

## Requirements

- Focus on renderer architecture, state placement, streaming UI, session transitions, and preload boundaries.
- Prefer guidance that can teach another AI how to modify frontend code safely.
- Keep the content framework-level, not product-level.

## Good Topics

- props vs local atom vs context
- component size limits
- session-switch correctness
- high-frequency rendering strategy
- lazy-loading heavy modules
- local vs global error handling

## Avoid

- product-specific screens
- business-specific interaction flows
- domain-specific copy or workflows