# Plan Mode Command

Enter plan mode - research and design without making changes.

## Usage

```
/plan
--plan
"plan mode"
"design mode"
"let's plan"
```

## Behavior

1. **Update** mode in `state/focus.yaml` to "plan"
2. **Confirm** mode change to user
3. **Explain** what plan mode means

## In Plan Mode

- **DO**: Research, explore, analyze, design, document plans
- **DO**: Read files, search code, examine structure
- **DO**: Create design documents, diagrams, specs
- **DON'T**: Modify existing code
- **DON'T**: Create new source files
- **DON'T**: Make git commits
- **DON'T**: Run destructive commands

## Allowed Actions

- Reading any files
- Creating markdown documents (specs, plans)
- Updating state files (todos, decisions)
- Web searches and research
- Answering questions
- Proposing changes (without executing)

## Output Format

```
## Mode: Plan

Now in **plan mode**. I'll help you research and design without
making changes to your code.

What I can do:
- Explore and analyze the codebase
- Research solutions and approaches
- Create design documents and specs
- Document decisions and plans
- Answer questions about architecture

What I won't do (until you switch to /act):
- Modify source code files
- Create new code files
- Make commits or deployments

What would you like to plan?
```

## Switching Out

- Use `/act` to switch to implementation mode
- Use `/ask` to switch to read-only mode
- Mode persists until explicitly changed
