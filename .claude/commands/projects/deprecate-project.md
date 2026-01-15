# Deprecate Project Command

Mark a project as deprecated (soft archive).

## Usage

```
/deprecate-project [project-id]
--deprecate-project my-old-project
```

## Arguments

| Argument | Required | Description |
|----------|----------|-------------|
| project-id | Yes | ID of project to deprecate |

## Prerequisites

- Must be in act mode
- Project must exist

## Behavior

1. **Validate** project exists
2. **Confirm** deprecation with user
3. **Update** project status to "deprecated"
4. **Update** project registry
5. **Add** deprecation note

## What Deprecation Does

- Sets status to "deprecated"
- Keeps all files intact
- Removes from active project lists
- Adds deprecation timestamp and reason
- Project can still be referenced

## What It Doesn't Do

- Delete any files
- Remove from registry completely
- Clear history or decisions

## Confirmation

```
## Deprecate Project: [project-name]

This will mark [project-name] as deprecated.

The project will:
- Be marked as deprecated (not deleted)
- Be hidden from active project lists
- Keep all files and history
- Remain accessible if needed

Reason for deprecation:
[Ask user for reason]

Proceed with deprecation? (y/n)
```

## Process

1. Get deprecation reason
2. Update `projects/[project]/project.yaml`:
   ```yaml
   status: deprecated
   deprecated:
     date: [ISO date]
     reason: [user's reason]
   ```
3. Update `projects/_index.yaml` status
4. Clear focus if this was focused project

## Output Format

```
## Project Deprecated: [project-name]

Status changed to: deprecated
Reason: [reason]
Date: [timestamp]

All files preserved. Project can be:
- Viewed with /focus [project-id]
- Restored by changing status back
- Deleted with /delete-project [project-id]

---

Focus cleared. Use /focus to select another project.
```

## Restoring

To un-deprecate, use `/update-project` to change status back.

## Notes

- Soft operation - nothing deleted
- Good for projects on hold
- Use `/delete-project` for permanent removal
