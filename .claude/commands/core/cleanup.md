# Cleanup Command

Clean up stale state and optimize context.

## Usage

```
/cleanup
--cleanup
"clean up"
"clear stale state"
```

## Behavior

1. **Check** context usage against budget
2. **Identify** stale or unused state
3. **Propose** cleanup actions
4. **Execute** with user approval

## What Gets Cleaned

### State Files
- Old session notes in `state/session.md`
- Completed todos (archive, don't delete)
- Resolved waiting items
- Old handoff context

### Loaded Context
- Unload project context not currently focused
- Clear component context from previous work
- Reset to minimal context state

### Temporary Files
- Old handoff files
- Stale cache (if any)

## Process

```
1. Analyze current state
2. Calculate context usage
3. Identify cleanup candidates
4. Show proposed actions
5. Get user approval
6. Execute cleanup
7. Report results
```

## Output Format

```
## Cleanup Analysis

### Context Usage
- Current: ~[N] tokens
- Budget: [budget] tokens
- Status: [OK | High | Critical]

### Cleanup Candidates

**State Files:**
- [ ] Archive 15 completed todos
- [ ] Clear old session notes (>7 days)
- [ ] Remove resolved waiting items

**Loaded Context:**
- [ ] Unload project-x context (not focused)
- [ ] Clear old-component specs

**Estimated Savings:** ~[N] tokens

---

Proceed with cleanup? (y/n)
```

## Post-Cleanup

After cleanup:
- Update `state/focus.yaml` with cleanup timestamp
- Report final context usage
- Suggest next actions

## Notes

- Never delete decisions (archive instead)
- Keep STATUS.md intact
- Preserve current focus context
- This is safe - only cleans ephemeral state
