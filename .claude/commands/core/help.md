# Help Command

Show command reference and help.

## Usage

```
/help
--help
"show commands"
"what can you do"
"help"
```

## Behavior

1. **Load** command registry from `.claude/commands/_registry.yaml`
2. **Display** organized command reference
3. **Highlight** most useful commands for current context

## Output Format

```
## Command Reference

### Core Commands (Daily Use)

| Command | Description |
|---------|-------------|
| `/load-status` | Load current state, continue from where you left off |
| `/focus [project] [component]` | Switch project/component focus |
| `/save` | Save session progress |
| `/handoff [tool]` | Prepare for tool transition |
| `/plan` | Enter plan mode (no changes) |
| `/act` | Enter act mode (make changes) |
| `/ask` | Enter ask mode (read-only) |

### Project Commands

| Command | Description |
|---------|-------------|
| `/new-project` | Create a new project |
| `/import-project [path]` | Import existing project by scanning folder/repo |
| `/deprecate-project [id]` | Mark project as deprecated |
| `/delete-project [id]` | Remove project from MCU |

### Context Commands

| Command | Description |
|---------|-------------|
| `/update-universe` | Modify universal context files |
| `/update-project` | Modify current project context |

### Feature & Review Commands

| Command | Description |
|---------|-------------|
| `/plan-feature` | Guided feature planning |
| `/review security` | Security-focused review |
| `/review performance` | Performance review |
| `/review code` | Code quality review |

### Utility Commands

| Command | Description |
|---------|-------------|
| `/cleanup` | Clean stale state |
| `/decisions` | View decision log |
| `/todos` | View/manage tasks |
| `/sync-check` | Validate consistency |

### MCU System Commands

| Command | Description |
|---------|-------------|
| `/update-mcu` | Update, commit, and push changes to public MCU repo |
| `/version` | Display the current MCU version |

---

### Error Format

Errors are displayed as: `Guru Meditation: [error description]`

---

### Quick Tips

- Most commands have aliases: `/status`, `--status`, or "continue"
- Use `/plan` before designing, `/act` before implementing
- Save progress with `/save` before ending sessions
- Tab-complete works in Claude Code

### Current State
- **Focus**: [current project/component or "none"]
- **Mode**: [current mode]

Need help with a specific command? Ask me!
```

## Contextual Help

If user is:
- **New**: Emphasize `/load-status`, `/new-project`, `/help`
- **Working on project**: Emphasize `/focus`, `/plan`, `/act`
- **Ending session**: Emphasize `/save`, `/handoff`
