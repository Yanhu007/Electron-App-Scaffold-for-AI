# Build and Packaging Guidelines

## Purpose

Teach AI systems and developers how to reason about build, packaging, and runtime dependency discipline in a cross-platform Electron scaffold repository.

## Scope

Applies to:

- development builds
- production builds
- packaging strategy
- runtime dependency placement
- native module handling
- cross-platform build constraints

## Do

- Separate development build concerns from packaging concerns.
- Keep the main process, preload, and renderer build surfaces explicit.
- Document the build toolchain clearly.
- Treat packaged-runtime validation as a first-class requirement.
- Distinguish runtime dependencies from build-time tooling.
- Centralize platform-specific packaging rules.
- Model native modules explicitly in build and release documentation.

Recommended build topics to define:

- development entry points
- production entry points
- main / preload / renderer build responsibilities
- environment-variable injection rules
- artifact locations
- package-time validation steps

## Don't

- Do not assume a dev build proves packaging correctness.
- Do not bury native-module requirements inside ad-hoc scripts without documentation.
- Do not let runtime dependencies drift into build-only dependency sections.
- Do not assume one platform or one CPU architecture.
- Do not treat packaging as an afterthought after application logic is already fixed.

## Decide

When deciding build-system documentation, prefer:

- one place that describes how dev, build, and pack differ
- one place that explains platform-specific packaging behavior
- one place that explains dependency placement rules

When deciding dependency placement, prefer:

- `dependencies` or `optionalDependencies` for runtime requirements
- `devDependencies` for build tools, test tools, and non-runtime assets

When deciding how to handle native modules, prefer:

- explicit packaging guidance
- explicit unpacking rules where needed
- explicit post-package validation

## Validate

Before a build and packaging strategy is considered sound, verify:

1. dev and production build paths are clearly separated
2. runtime dependencies are placed correctly
3. native modules are accounted for in packaged output
4. platform-specific logic is documented and bounded
5. packaged artifacts are validated, not merely built