# Handoff Command

Prepare context for transitioning to another tool.

## Usage

```
/handoff [tool]
--handoff cursor
"prepare for vscode"
"switching to cursor"
```

## Arguments

| Argument | Required | Description |
|----------|----------|-------------|
| tool | No | Target tool (cursor, vscode, windsurf, etc.) |

## Behavior

1. **Save current state** (triggers `/save`)
2. **Check** if tool is registered in `tools/_index.yaml`
3. **Generate** handoff context appropriate for target tool
4. **Update** `state/handoff.md` with handoff details
5. **Display** context for user to copy/use

## Handoff Content

For each handoff, generate:

```markdown
## Handoff to [Tool]

### Current State
- **Project**: [project]
- **Component**: [component]
- **Mode**: [mode]
- **Working On**: [current task]

### Recent Context
[Summary of what's been happening]

### Open Tasks
- [ ] [Task 1]
- [ ] [Task 2]

### Key Files
- `path/to/important/file.ext` - [why it matters]
- `path/to/another/file.ext` - [why it matters]

### Notes for [Tool]
[Tool-specific context if available]
```

## Tool-Specific Formats

If tool has a template in `tools/[tool]/handoff-template.md`, use it.

Common tools:
- **Cursor**: Focus on file paths and recent edits
- **VSCode**: Standard markdown format
- **Claude Chat**: Emphasize conversational context
- **Terminal**: Command-line focused

## Output Format

```
## Handoff Ready

I've prepared the handoff context for [tool].

[Handoff content displayed]

---

You can copy the above context into [tool].
Or if [tool] can read files, point it to: state/handoff.md

Session state has been saved. See you soon!
```

## Notes

- Always save before handoff
- Tool-specific templates improve handoff quality
- Handoff file persists for the target tool to read
