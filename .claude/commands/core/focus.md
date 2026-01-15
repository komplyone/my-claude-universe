# Focus Command

Change project and/or component focus.

## Usage

```
/focus [project] [component]
--focus my-app api
"switch to my-app"
"work on the frontend"
```

## Arguments

| Argument | Required | Description |
|----------|----------|-------------|
| project | No | Project ID to focus on |
| component | No | Component within the project |

## Behavior

1. **Save current state** if there's unsaved work
2. **Validate** the target project exists in `projects/_index.yaml`
3. **Validate** the component exists (if specified)
4. **Update** `state/focus.yaml` with new focus
5. **Load** project context:
   - `projects/[project]/project.yaml`
   - `projects/[project]/context.md`
   - `projects/[project]/components/[component].md` (if component specified)
6. **Unload** previous project context (to save tokens)
7. **Summarize** the new focus

## Without Arguments

If called without arguments:
1. Show list of available projects from `projects/_index.yaml`
2. Ask user to select one
3. Then show components for that project
4. Ask if they want to focus on a specific component

## Output Format

```
## Focus Changed

**Project**: [project name] ([project id])
**Component**: [component] (or "All")
**Status**: [project status]

### Project Context
[Brief summary from context.md]

### Current Tasks
[Active tasks for this project]

---

Ready to work on [project]. What would you like to do?
```

## Notes

- Switching focus triggers an auto-save of previous state
- Component focus is optional - you can work on entire project
- Invalid project/component IDs should fail gracefully with suggestions

## Security

**Input Validation (MUST enforce):**
- Project IDs MUST match pattern: `^[a-z0-9][a-z0-9-]*[a-z0-9]$` (lowercase alphanumeric with hyphens, no leading/trailing hyphens)
- Component IDs MUST match same pattern
- **REJECT** any ID containing: `/`, `..`, `\`, spaces, or special characters
- **REJECT** IDs longer than 64 characters

**Path Traversal Prevention:**
- NEVER construct file paths by concatenating user input directly
- ALWAYS validate project exists in `projects/_index.yaml` BEFORE attempting to load files
- If project ID doesn't exist in index, return error: `Guru Meditation: Project '[id]' not found in registry`

**Example rejections:**
```
/focus ../secrets         → Guru Meditation: Invalid project ID - contains forbidden characters
/focus my-project/../../  → Guru Meditation: Invalid project ID - contains forbidden characters
/focus "my project"       → Guru Meditation: Invalid project ID - spaces not allowed
```
