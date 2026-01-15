# Consistency Guidelines

> How to keep the universe synchronized and consistent. Reference when making changes that affect multiple files.

---

## Single Source of Truth

### Where Things Live

| Information | Source of Truth | Also Referenced In |
|-------------|-----------------|-------------------|
| Project list | `projects/_index.yaml` | STATUS.md (summary) |
| Project config | `projects/[id]/project.yaml` | _index.yaml (brief) |
| Command list | `.claude/commands/_registry.yaml` | README.md (docs) |
| Current focus | `state/focus.yaml` | STATUS.md (summary) |
| Decisions | `state/decisions.md` | Project decisions (if project-specific) |
| Universe identity | `universe/identity.md` | Nowhere else |
| Security rules | `universe/security.md` | Nowhere else |

### The Rule

> **Update the source of truth. References update automatically or via /sync-check.**

---

## Change Checklists

### Adding a New Project

```
1. [ ] Create projects/[id]/ directory
2. [ ] Create project.yaml with full config
3. [ ] Create context.md with background
4. [ ] Create state/ directory with tasks.md, decisions.md
5. [ ] Add to projects/_index.yaml
6. [ ] Run /sync-check
```

### Adding a New Command

```
1. [ ] Create .claude/commands/[category]/[command].md
2. [ ] Add to .claude/commands/_registry.yaml
3. [ ] Add any aliases to registry
4. [ ] Update README.md command reference
5. [ ] Run /sync-check
```

### Renaming a Project

```
1. [ ] Rename directory: projects/[old]/ → projects/[new]/
2. [ ] Update project.yaml id field
3. [ ] Update projects/_index.yaml
4. [ ] Update state/focus.yaml (if was focused)
5. [ ] Search and update all references:
   - [ ] state/todos.md
   - [ ] state/decisions.md
   - [ ] STATUS.md
6. [ ] Run /sync-check
```

### Archiving a Project

```
1. [ ] Update project.yaml status to "archived"
2. [ ] Update projects/_index.yaml status
3. [ ] Clear from state/focus.yaml (if focused)
4. [ ] Move active todos to another project or close
5. [ ] Run /sync-check
```

### Updating Universe Context

```
1. [ ] Make changes in universe/[file].md
2. [ ] If affects project defaults, check projects inherit correctly
3. [ ] If security changes, review all projects for compliance
4. [ ] Run /sync-check
```

---

## Sync Check Details

### What /sync-check Validates

```
Project Registry:
- All directories in projects/ are registered
- All registered projects have directories
- IDs match between files

Command Registry:
- All command files in .claude/commands/ are registered
- All registered commands have files
- No duplicate aliases

State Consistency:
- Focus points to valid project/component
- Todo references exist
- Decision references exist

File References:
- Context loading rules reference existing files
- Component references in project.yaml exist
```

### Common Sync Issues

| Issue | Cause | Fix |
|-------|-------|-----|
| Orphaned directory | Created project but didn't register | Add to _index.yaml |
| Missing project | Registered but directory missing | Create directory or remove from index |
| Stale focus | Project was renamed/deleted | Update state/focus.yaml |
| Broken reference | File moved or renamed | Update all references |

---

## Automated Sync Triggers

### When to Run /sync-check

```
- After any project addition/removal/rename
- After any command addition/removal
- Before major releases
- When something "feels off"
- Weekly maintenance (suggested)
```

### Auto-Fix Capabilities

Some issues can be auto-fixed:
- Adding missing registry entries
- Updating stale focus
- Cleaning orphaned references

Others require manual intervention:
- Missing files (need content)
- Conflicting aliases (need decision)

---

## Best Practices

### Preventing Inconsistency

1. **Use commands** for structural changes (`/new-project`, etc.)
2. **Don't bypass** by editing files directly (when commands exist)
3. **Run sync-check** after manual edits
4. **Commit atomically** (all related changes together)

### When Editing Manually

If you must edit files directly:

1. Identify all affected files first
2. Make changes to source of truth first
3. Update references immediately after
4. Run /sync-check before committing
5. Use git diff to verify all changes

### Recovery

If things get out of sync:

1. Run `/sync-check` to identify issues
2. Check git history for when divergence happened
3. Decide which version is correct
4. Fix discrepancies manually
5. Run `/sync-check` again
6. Commit the fix

---

## Notes

```
[Add project-specific consistency notes here]
```

---

**Last Updated**: [Date]
**Updated By**: [Name/Claude]
