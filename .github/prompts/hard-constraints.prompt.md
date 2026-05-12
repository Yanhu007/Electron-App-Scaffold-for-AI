# Hard Constraints Prompt

## Goal

Review or design scaffold changes against postmortem-derived engineering constraints.

## Requirements

- Treat critical-path latency rules as hard constraints
- Flag unbounded sequential remote-call loops
- Flag packaging-sensitive changes that lack executable validation
- Flag provider-specific token or context logic that is incorrectly generalized
- Keep all guidance business-neutral and reusable

## Output Shape

## Constraint Findings
- Severity, rule, issue, impact

## Required Safeguards
- Validation or code change needed to preserve the rule

## Conclusion
- Safe to proceed / Needs revision