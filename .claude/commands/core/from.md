# From Command

Specify session context source for continuity across tools.

## Usage

```
/from [source]
--from cursor
--from "claude chat"
```

## Arguments

| Argument | Required | Description |
|----------|----------|-------------|
| source | Yes | Source tool or context identifier |

## Behavior

1. **Check** for handoff context from specified source
2. **Load** `state/handoff.md` if present
3. **Restore** context from source
4. **Confirm** continuity with user

## Common Sources

- `cursor` - Coming from Cursor IDE
- `vscode` - Coming from VS Code
- `claude-chat` - Coming from Claude Chat (claude.ai)
- `windsurf` - Coming from Windsurf
- `terminal` - Coming from command line session

## Process

```
1. Parse source identifier
2. Look for handoff.md with matching source
3. Load previous context
4. Restore focus and state
5. Show what was restored
6. Continue seamlessly
```

## Output Format

```
## Continuing from [Source]

### Restored Context
- **Project**: my-project
- **Component**: api
- **Mode**: act
- **Last Action**: Implementing user authentication

### Where We Left Off
[Summary from handoff context]

### Open Tasks
- [ ] Complete auth middleware
- [ ] Add tests

---

Ready to continue. What's next?
```

## Without Handoff File

If no handoff context exists:

```
## Starting from [Source]

I don't see a handoff file from [source].
Let me load the general status instead.

[Falls back to /status behavior]
```

## Notes

- Pairs with `/handoff` command
- Enables seamless tool transitions
- Preserves work context across sessions
- Falls back gracefully if no handoff exists
