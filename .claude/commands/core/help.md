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

Commands can be invoked with `/command` or `--command` syntax.

### Core Commands (Daily Use)

| Command | Description |
|---------|-------------|
| `/load-status` or `--load-status` | Load current state, continue from where you left off |
| `/focus` or `--focus` | Switch project/component focus |
| `/save` or `--save` | Save session progress |
| `/handoff` or `--handoff` | Prepare for tool transition |
| `/plan` or `--plan` | Enter plan mode (no changes) |
| `/act` or `--act` | Enter act mode (make changes) |
| `/ask` or `--ask` | Enter ask mode (read-only) |

### Project Commands

| Command | Description |
|---------|-------------|
| `/new-project` or `--new-project` | Create a new project |
| `/import-project` or `--import-project` | Import existing project by scanning folder/repo |
| `/deprecate-project` or `--deprecate-project` | Mark project as deprecated |
| `/delete-project` or `--delete-project` | Remove project from MCU |

### Context Commands

| Command | Description |
|---------|-------------|
| `/update-universe` or `--update-universe` | Modify universal context files |
| `/update-project` or `--update-project` | Modify current project context |

### Feature & Review Commands

| Command | Description |
|---------|-------------|
| `/plan-feature` or `--plan-feature` | Guided feature planning |
| `/review security` or `--review security` | Security-focused review |
| `/review performance` or `--review performance` | Performance review |
| `/review code` or `--review code` | Code quality review |

### Utility Commands

| Command | Description |
|---------|-------------|
| `/cleanup` or `--cleanup` | Clean stale state |
| `/decisions` or `--decisions` | View decision log |
| `/todos` or `--todos` | View/manage tasks |
| `/sync-check` or `--sync-check` | Validate consistency |

### MCU System Commands

| Command | Description |
|---------|-------------|
| `/update-mcu` or `--update-mcu` | Update, commit, and push changes to public MCU repo |
| `/version` or `--version` | Display the current MCU version |

---

### Error Format

Errors are displayed as: `Guru Meditation: [error description]`

---

### Quick Tips

- All commands work with both `/` and `--` prefix
- Use `/plan` or `--plan` before designing, `/act` or `--act` before implementing
- Save progress with `/save` or `--save` before ending sessions

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
