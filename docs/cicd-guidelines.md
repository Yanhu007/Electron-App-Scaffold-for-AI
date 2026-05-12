# CI/CD Guidelines

## Purpose

Teach AI systems and developers how to organize CI/CD for a reusable Electron AI scaffold repository.

## Scope

Applies to:

- pull-request validation
- release automation
- artifact checks
- repository policy checks
- workflow responsibility boundaries

## Do

- Use CI to enforce repository rules that should never depend on manual review alone.
- Separate validation workflows from release workflows.
- Keep PR checks fast, targeted, and predictable where possible.
- Add workflow checks for correctness, maintainability, and packaging-sensitive regressions.
- Keep workflow names and responsibilities obvious.

Recommended PR checks:

- typecheck
- unit tests
- end-to-end tests when appropriate
- file-length or complexity policy checks
- bundle-size or artifact-delta checks when relevant

Recommended release checks:

- release build
- packaging validation
- publish gating

## Don't

- Do not overload one workflow with unrelated responsibilities.
- Do not use prompts as a substitute for executable CI checks.
- Do not depend only on human reviewers to catch mechanical policy violations.
- Do not make release automation the first place where packaging problems are discovered if earlier checks can catch them.

## Decide

When deciding whether a rule belongs in CI, prefer CI when the rule is:

- mechanical
- repeatable
- easy to validate automatically
- expensive to enforce by manual review alone

When deciding workflow boundaries, prefer:

- one workflow per major validation concern
- one release workflow for publishing concerns
- clear names over clever names

## Validate

Before a CI/CD setup is considered sound, verify:

1. PR validation and release automation are separated
2. essential correctness checks are automated
3. repository policies that can be automated are enforced automatically
4. packaging-sensitive issues have at least one executable validation path
5. workflow responsibilities are easy to understand from file names alone