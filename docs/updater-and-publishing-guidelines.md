# Updater and Publishing Guidelines

## Purpose

Teach AI systems and developers how to structure reusable auto-update and publishing flows for Electron scaffold repositories.

## Scope

Applies to:

- release publishing
- artifact upload
- updater feed expectations
- release verification

## Do

- Separate release preparation from release publishing.
- Keep publish targets explicit in builder configuration.
- Validate packaged artifacts before publishing.
- Treat updater configuration as packaging-sensitive runtime behavior.

## Don't

- Do not publish unvalidated artifacts.
- Do not hide publish targets inside undocumented ad-hoc scripts.
- Do not couple updater metadata to one hard-coded brand when multiple brands are supported.

## Decide

When deciding whether to add updater scaffolding, prefer including it when:

- the scaffold claims desktop release readiness
- the repository already includes publish workflows
- brand-aware releases must target a stable artifact channel

## Validate

Before updater and publishing scaffolding is considered sound, verify:

1. publish targets are documented
2. release workflows validate artifacts before publish
3. brand-aware artifacts can be named predictably
4. the scaffold makes updater-sensitive assumptions explicit