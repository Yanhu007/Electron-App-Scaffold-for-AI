# Postmortem-Derived Constraints

## Purpose

Capture reusable engineering constraints that should exist because real Electron AI applications fail in predictable ways under load, release pressure, or critical-path latency.

## Scope

Applies to:

- IPC critical paths
- startup and sign-in flows
- sequential network or model calls
- packaging-sensitive runtime behavior
- context and token budgeting rules
- release-time validation discipline

## Do

- Treat UI-gating IPC handlers as critical paths and keep them fast.
- Move non-essential startup work out of the blocking request path.
- Bound or parallelize remote-call loops when latency can grow with item count.
- Add executable validation for packaging-sensitive changes, not just typecheck.
- Keep model or context budgeting logic provider-aware when a repository supports multiple model families.
- Record the operational reason behind a hard rule so AI can preserve it during refactors.

Recommended hard rules:

- no unbounded sequential `await` loops over network or model calls
- no non-essential `await` inside UI-gating IPC handlers
- no release path that skips executable packaging validation
- no provider-agnostic token budgeting when different model families are supported
- no silent fallback from typed boundaries to ad-hoc string channels

## Don't

- Do not treat postmortem rules as optional style preferences.
- Do not move expensive work back onto startup or navigation critical paths.
- Do not assume build success proves runtime packaging correctness.
- Do not add retry or fallback behavior that hides latency explosions without visibility.
- Do not let release automation invent notes or versions that are not grounded in repository state.

## Decide

When deciding whether a rule should be elevated to a hard constraint, prefer elevation when:

- a failure mode can block sign-in, startup, navigation, or release
- the impact grows with scale or latency
- the rule is easy to violate during normal refactors
- the rule can be at least partially validated by CI, prompts, or review templates

When deciding where to encode the rule, prefer:

- docs for the stable rationale
- prompts for review and authoring guidance
- workflows or scripts for executable enforcement

## Validate

Before a postmortem-derived constraint is considered well captured, verify:

1. the triggering failure mode is named clearly
2. the constraint is written as an explicit rule, not a vague preference
3. at least one prompt, script, or workflow can help enforce it
4. the rule remains business-neutral and reusable across Electron AI apps