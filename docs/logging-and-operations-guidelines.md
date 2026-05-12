# Logging and Operations Guidelines

## Purpose

Teach AI systems and developers how to keep runtime logging, updater diagnostics, and operational investigation paths explicit in an Electron scaffold repository.

## Scope

Applies to:

- main-process logging
- updater diagnostics
- operational investigation flows
- log formatting rules

## Do

- Keep one explicit logging path for main-process operational events.
- Log updater initialization, update checks, and failures with stable scope names.
- Prefer structured, grep-friendly log lines over ad-hoc console noise.
- Keep operational investigation steps documented so AI can follow them consistently.

## Don't

- Do not hide updater failures behind silent catch blocks.
- Do not spread logging conventions across unrelated files.
- Do not require temporary debug edits as the default troubleshooting strategy.

## Decide

When deciding whether a runtime event should be logged, prefer logging when:

- it affects startup, release, update, or packaging behavior
- it changes a critical-path status
- it is expensive to reproduce without diagnostics

## Validate

Before a logging and operations setup is considered sound, verify:

1. startup and updater flows emit at least minimal diagnostic signals
2. log line format is stable enough for scripted searches
3. the repository documents where operational diagnostics belong