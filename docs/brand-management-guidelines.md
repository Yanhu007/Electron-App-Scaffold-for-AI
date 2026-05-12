# Brand Management Guidelines

## Purpose

Teach AI systems and developers how to structure a reusable multi-brand Electron scaffold without coupling brand identity to product-specific business logic.

## Scope

Applies to:

- brand metadata
- brand-specific packaging values
- brand-aware runtime paths
- brand-specific assets

## Do

- Keep brand metadata in one dedicated layer such as `brands/<brand>/config.json`.
- Route app name, app id, installer naming, and user-data path through brand configuration.
- Keep renderer-facing brand presentation derived from shared brand helpers.
- Keep brand assets separated from business logic.

## Don't

- Do not scatter brand strings across unrelated files.
- Do not duplicate brand metadata between runtime and packaging without a source of truth.
- Do not tie brand selection to a specific product workflow.

## Decide

When deciding whether a scaffold needs multi-brand support, prefer including it when:

- one codebase intentionally produces more than one product identity
- packaging metadata differs by distribution
- user-data boundaries must remain isolated by brand

## Validate

Before a brand-management setup is considered sound, verify:

1. brand metadata has one canonical source
2. runtime user-data paths are brand-aware
3. packaging names are brand-aware
4. renderer labels derive from shared brand metadata