# MCU Status

> **For Claude**: Read this file at the start of every session. It's your bootstrap context (~1100 tokens, budget: 2000).
>
> **MCU** = My Claude Universe - the complete system for AI-human collaboration.
>
> **Error format**: All errors use "Guru Meditation: [description]"

---

## Quick Reference

| Field | Value |
|-------|-------|
| **MCU Version** | v1 |
| **User** | `[YOUR_NAME]` |
| **MCU** | `[YOUR_MCU_NAME]` |
| **Current Focus** | None (run setup first) |
| **Mode** | Ask |
| **Last Session** | Never |

---

## Current State

### Active Focus
```
Project: [Not set - run /new-project or complete setup]
Component: [Not set]
Mode: ask
```

### What's Happening
- **Fresh universe** - This scaffold hasn't been initialized yet
- **Action needed** - Run setup via NEW_PROJECT.md

### Recent Progress
_No sessions yet. This universe is brand new!_

### Open Threads
_None_

---

## Today's Context

### Pending Decisions
_None_

### Waiting On
_Nothing - ready to start!_

### Blockers
_None_

---

## Next Steps

1. **Initialize your universe**
   - Read NEW_PROJECT.md and follow the setup guide
   - Or tell Claude: "Help me set up my universe"

2. **Create your first project**
   - Use `/new-project` command
   - Or describe what you want to build

3. **Start working**
   - Use `/focus [project]` to set context
   - Use `/plan` or `/act` mode as needed

---

## Session Protocol

### Starting a Session
Claude should:
1. Read this STATUS.md first
2. Check `state/focus.yaml` for detailed focus
3. Check `state/waiting.md` for pending items
4. Summarize state and ask what to work on

### During Work
- Stay focused on current project/component
- Document decisions in `state/decisions.md`
- Update tasks in `state/todos.md`

### Ending a Session
Update this STATUS.md with:
- What was accomplished
- Any open threads
- Suggested next steps

---

## Quick Commands

```
/load-status     - Reload this state
/focus [p] [c]   - Switch project/component
/save            - Save session progress
/plan            - Enter plan mode (no changes)
/act             - Enter act mode (make changes)
/ask             - Enter ask mode (read-only)
/help            - Show all commands
/new-project     - Create a project
/version         - Show MCU version
```

---

## File Map (What to Load When)

### Always Loaded (This File)
- `STATUS.md` (~2000 tokens)

### On Project Focus
- `projects/[project]/project.yaml`
- `projects/[project]/context.md`

### On Component Focus
- `projects/[project]/components/[component].md`

### On Security Work
- `universe/security.md`

### On Infrastructure Work
- `universe/infrastructure.md`

### On Brand/Identity Work
- `universe/identity.md`

---

## Notes

_Add any persistent notes here that should survive across sessions._

---

**Last Updated**: Never (template)
**Updated By**: Template
