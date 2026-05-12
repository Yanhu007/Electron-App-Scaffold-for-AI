# Git Push Prompt

## Goal

Prepare and execute a clean push flow for a scaffold repository.

## Requirements

- Review changed files before staging
- Use a conventional commit message
- Do not claim push success unless it actually succeeded
- Report authentication or remote errors explicitly

## Output Shape

### Changed Files
- Files included in the push

### Commit Message
```text
type(scope): concise description
```

### Git Result
- Summarize add, commit, and push results
- State clearly whether the push succeeded