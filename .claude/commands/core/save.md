# Save Command

Save current session state for continuity.

## Usage

```
/save
--save
"save progress"
"save my work"
"I'm done for now"
```

## Behavior

1. **Gather** current session state:
   - What was accomplished this session
   - Any open threads or incomplete work
   - Decisions made
   - Next steps identified

2. **Update** `STATUS.md`:
   - Recent Progress section
   - Open Threads section
   - Next Steps section
   - Last Updated timestamp

3. **Update** `state/focus.yaml`:
   - Current focus preserved
   - Mode preserved
   - Session timestamp

4. **Update** `state/session.md`:
   - Detailed session notes
   - Context that might be useful next time

5. **Confirm** save to user

## Output Format

```
## Session Saved

### Progress Captured
- [List of accomplishments]

### Open Threads
- [Incomplete work noted]

### Suggested Next Steps
- [What to do next session]

---

STATUS.md has been updated. You can safely end this session.
Pick up right where you left off with `/status` next time.
```

## Auto-Save Triggers

This command is automatically invoked when:
- User says "goodbye", "done for now", "bye"
- Before `/handoff` command
- Before `/focus` to a different project
- After significant milestones

## Notes

- Never lose work - save state before context switches
- Keep STATUS.md concise (target ~800 words)
- Include enough detail for seamless continuation
