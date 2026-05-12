# Git Commit Prompt

## Goal

Generate a reusable commit message for scaffold repositories using conventional commits.

## Requirements

- Use `type(scope): description`
- Keep the subject in English
- Keep the body concise and factual
- Describe only actual changes
- Prefer repository-neutral wording

## Output Shape

### Changed Files
- List the files being committed

### Commit Message
```text
type(scope): concise description

- Change point 1
- Change point 2
```

### Git Result
- Summarize the git commands executed
- State whether the commit succeeded