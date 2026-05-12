# Release and Versioning Guidelines

## Purpose

Teach AI systems and developers how to structure release, versioning, and changelog discipline in a reusable Electron AI scaffold repository.

## Scope

Applies to:

- semantic versioning
- release flow design
- changelog maintenance
- release note generation
- tag strategy
- repository release checks

## Do

- Use semantic versioning and define what qualifies as patch, minor, and major changes.
- Keep release versioning rules explicit in repository docs or automation.
- Maintain one changelog strategy for the whole repository.
- Generate release notes from actual changes, not assumptions.
- Keep release tags predictable and machine-readable.
- Make release flow reproducible in both human and automated paths.
- Separate version bumping, changelog generation, packaging, and publishing as distinct steps.

Recommended baseline:

- `CHANGELOG.md` for human-readable release history
- annotated or predictable version tags such as `v1.2.3`
- one documented release path
- one release-note generation path
- scripted version bump commands such as `prepare:release:patch|minor|major`

## Don't

- Do not mix business announcements with engineering release notes in the scaffold layer.
- Do not hide version rules inside tribal knowledge.
- Do not create multiple competing changelog formats.
- Do not make release steps depend on manual memory alone.
- Do not generate release notes that describe work not present in the actual diff or commit history.

## Decide

When deciding version type:

- choose `patch` for backward-compatible fixes
- choose `minor` for backward-compatible additions
- choose `major` for breaking changes or incompatible repository shifts

When deciding release-note style, prefer:

- concise, user-readable summaries
- change categories that remain stable over time
- language that describes outcomes, not internal implementation noise

When deciding where to encode the release process, prefer:

- workflows for executable release automation
- prompts for reusable release assistance
- docs for durable release rules

## Validate

Before a release flow is considered sound, verify:

1. version rules are documented
2. tag format is stable and predictable
3. changelog ownership is clear
4. release notes can be generated from real repository history
5. the release path is reproducible by both humans and automation