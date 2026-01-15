# Delete Project Command

Permanently remove a project from the universe.

## Usage

```
/delete-project [project-id]
--delete-project my-old-project
"remove project"
```

## Arguments

| Argument | Required | Description |
|----------|----------|-------------|
| project-id | Yes | ID of project to delete |

## Prerequisites

- Must be in act mode
- Project must exist
- Recommend deprecate first

## Behavior

1. **Validate** project exists
2. **Show** what will be deleted
3. **Require** explicit confirmation
4. **Create** backup (optional)
5. **Delete** project directory
6. **Update** project registry
7. **Clean** any references

## Warning

```
## ⚠️ Delete Project: [project-name]

This is a PERMANENT operation that will:
- Delete all files in projects/[project-id]/
- Remove from project registry
- Clear all project-specific state
- Remove references from todos/decisions

Files to be deleted:
- projects/[project-id]/project.yaml
- projects/[project-id]/context.md
- projects/[project-id]/components/* ([N] files)
- projects/[project-id]/state/* ([N] files)

Total: [N] files

This CANNOT be undone (unless backed up to git).
```

## Confirmation

Require explicit confirmation:

```
To confirm deletion, type the project ID: [project-id]
```

Must match exactly to proceed.

## Backup Option

```
Create backup before deleting?
[ ] Yes - Create .deleted/[project-id]-[timestamp]/
[ ] No - Delete immediately
```

## Process

1. Final confirmation
2. If backup: copy to `.deleted/`
3. Delete `projects/[project-id]/`
4. Remove from `projects/_index.yaml`
5. Clean references in `state/` files
6. Clear focus if was focused

## Output Format

```
## Project Deleted: [project-name]

Removed:
- [N] configuration files
- [N] component files
- [N] state files

Registry updated.
References cleaned.

[If backup: Backup saved to .deleted/[project-id]-[timestamp]/]

---

Project permanently removed.
Use /focus to select another project.
```

## Recovery

If backed up:
- Files in `.deleted/[project-id]-[timestamp]/`
- Can manually restore if needed

If not backed up:
- Check git history: `git checkout HEAD~1 -- projects/[project-id]/`
- Otherwise, unrecoverable

## Notes

- Permanent operation - use with caution
- Consider `/deprecate-project` first
- Backups recommended
- Git provides additional safety net
