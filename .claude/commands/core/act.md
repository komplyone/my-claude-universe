# Act Mode Command

Enter act mode - implement and make changes.

## Usage

```
/act
--act
"act mode"
"implement"
"let's build"
```

## Behavior

1. **Update** mode in `state/focus.yaml` to "act"
2. **Confirm** mode change to user
3. **Remind** about decision authority

## In Act Mode

- **CAN**: Write code, create files, make commits
- **CAN**: Run tests, linting, builds
- **CAN**: Execute commands (with appropriate caution)
- **SHOULD**: Still propose significant changes first
- **MUST**: Follow security guidelines from `universe/security.md`

## Decision Authority in Act Mode

Based on `universe/principles.md`:

**Act Autonomously**:
- Minor bug fixes
- Formatting and style fixes
- Adding comments or documentation
- Simple implementations with clear specs

**Propose First**:
- New files or modules
- Architecture changes
- Refactoring across multiple files
- Deleting code or files

**Always Ask**:
- Deployments
- Database migrations
- External service integrations
- Security-sensitive changes

## Output Format

```
## Mode: Act

Now in **act mode**. I can implement changes and write code.

What I can do:
- Write and modify code
- Create new files
- Run tests and builds
- Make commits (with your approval)

I'll still propose significant changes before acting.
See universe/principles.md for decision authority details.

What would you like me to implement?
```

## Switching Out

- Use `/plan` to switch to design mode
- Use `/ask` to switch to read-only mode
- Consider `/save` before switching if work is in progress
