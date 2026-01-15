# Load Status Command

Load current state and continue from where you left off.

## Usage

```
/load-status
--load-status
/status          (alias)
--status         (alias)
"continue"
"where were we"
```

## Behavior

1. **Read STATUS.md** for current universe state
2. **Read state/focus.yaml** for detailed focus information
3. **Check state/waiting.md** for pending approvals or blockers
4. **Check state/todos.md** for active tasks
5. **Summarize** current state to the user:
   - What project/component is in focus
   - Recent progress
   - Open threads
   - Pending decisions
6. **Ask** what to work on next

## What to Load

- `STATUS.md` (always)
- `state/focus.yaml` (if exists)
- `state/waiting.md` (if exists)
- `projects/[current]/project.yaml` (if focused)
- `projects/[current]/context.md` (if focused)

## Output Format

```
## Current Status

**Focus**: [project] / [component]
**Mode**: [plan|act|ask]
**Last Session**: [date/time]

### Recent Progress
- [What was accomplished]

### Open Threads
- [Unfinished work]

### Pending
- [Decisions or approvals needed]

---

What would you like to work on?
```

## Notes

- This is the default "session start" behavior
- If STATUS.md seems stale (>24h since last update), mention it
- If there are pending approvals, highlight them prominently
- If focus is not set, suggest running `/new-project` or `/focus`
