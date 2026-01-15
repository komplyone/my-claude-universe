# Update Project Command

Modify context files for the currently focused project.

## Usage

```
/update-project [file]
--update-project
"update project settings"
```

## Arguments

| Argument | Required | Description |
|----------|----------|-------------|
| file | No | Specific file to update (config, context, component) |

## Prerequisites

- Must have a project in focus (`/focus [project]` first)
- Must be in act mode

## Behavior

1. **Check** current focus exists
2. **Check mode** - Must be in act mode
3. **Identify** which file(s) to update
4. **Load** current content
5. **Guide** user through changes
6. **Update** file(s)
7. **Update** project registry if needed

## Updatable Files

| File | Contents |
|------|----------|
| `project.yaml` | Configuration, tech stack, budget, status |
| `context.md` | Project background, architecture |
| `components/[name].md` | Component-specific context |
| `state/tasks.md` | Project tasks |
| `state/decisions.md` | Project decisions |

## Without Arguments

Show menu based on project structure:

```
## Update Project: [project-name]

Which file would you like to update?

1. **project.yaml** - Configuration, tech, budget
2. **context.md** - Background and architecture
3. **components/** - Component contexts
   - api.md
   - web.md
   - mobile.md
4. **state/tasks.md** - Project tasks
5. **state/decisions.md** - Project decisions

Enter number or file name:
```

## Common Updates

### Update Status
```
Current status: development
New status options: concept | planned | development | beta | production | maintenance

Select new status:
```

### Update Tech Stack
```
Current stack:
- Backend: go
- Frontend: react
- Database: postgresql

What would you like to change?
```

### Add Component
```
New component name:
Component type: api | web | mobile | desktop | other
Initial status: planned | active
```

## Output Format

```
## Updating: projects/[project]/[file]

### Current Content
[Show relevant section]

### Proposed Changes
[Show diff or new content]

---

Apply these changes? (y/n)
```

## Post-Update

After updating:
- Update `projects/_index.yaml` if config changed
- Run `/sync-check` to verify
- Note the change in session log

## Notes

- Requires act mode and project focus
- Changes only affect current project
- Configuration changes may need registry update
