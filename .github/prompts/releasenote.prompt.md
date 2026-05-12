# Release Note Prompt

## Goal

Generate reusable release notes for a scaffold repository from a version range.

## Requirements

- Use actual git history in the requested range
- Focus on repository-facing changes, not marketing copy
- Group by stable categories
- Keep language concise and factual

## Suggested Categories

- New Guidance
- Template Improvements
- Build and Release Changes
- Workflow Changes
- Fixes

## Output Shape

### Release Notes
```markdown
## What's New in <version>

### New Guidance
- Item

### Template Improvements
- Item
```