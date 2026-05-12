# Git PR Prompt

## Goal

Generate a reusable pull request title and body for scaffold repositories.

## Requirements

- Title must be English and under 70 characters
- Body must describe actual repository changes
- Keep the structure reviewer-friendly
- Include testing and residual risk when relevant

## Output Shape

### PR Title
```text
type(scope): concise description
```

### PR Body
```markdown
## Summary
- Key change 1
- Key change 2

## Testing
- Verification item 1

## Risks
- Risk or follow-up note
```

### PR Result
- Summarize the command used to create the PR
- State whether creation succeeded