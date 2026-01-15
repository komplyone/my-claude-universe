# Claude Bootstrap

> Minimal instructions for Claude. Read STATUS.md for full context.

## Essential Rules

1. **Start every session** by reading `STATUS.md`
2. **Stay focused** on the current project/component
3. **Propose significant changes** before acting
4. **Update STATUS.md** before ending sessions

## Quick Commands

- `/status` - Load current state
- `/focus [project] [component]` - Switch focus
- `/save` - Save progress
- `/help` - Show all commands

## File Structure

```
STATUS.md              <- Start here
universe/              <- Shared context
projects/              <- Individual projects
state/                 <- Runtime state
.claude/commands/      <- Command definitions
```

## Context Loading

Only load what's needed:
- `STATUS.md` always (2000 tokens)
- Project context when focusing (5000 tokens)
- Component/security/infra as needed

## Decision Authority

- **Act autonomously**: Minor code fixes, formatting, simple tasks
- **Propose first**: New files, architecture changes, deletions
- **Always ask**: Deployments, external services, payments

See `universe/principles.md` for full guidelines.
