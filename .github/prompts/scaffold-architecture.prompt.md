# Scaffold Architecture Prompt

## Goal

Produce architecture guidance for a cross-platform Electron AI application in a reusable, framework-level form.

## Required Output Shape

Use this structure:

1. Purpose
2. Scope
3. Do
4. Don't
5. Decide
6. Validate

## Requirements

- Stay generic and reusable.
- Do not include product-specific business workflows.
- Focus on process boundaries, repository structure, typed IPC, state flow, persistence, packaging, and observability.
- Prefer rules and decision criteria over feature descriptions.
- If examples are needed, keep them abstract and minimal.

## Good Topics

- main vs renderer responsibilities
- preload boundaries
- shared IPC contracts
- session lifecycle rules
- runtime service boundaries
- packaging and dependency placement
- multi-platform constraints

## Avoid

- vertical-domain examples
- specific customer journeys
- one-product naming or branding
- app-specific menus, pages, or feature copy