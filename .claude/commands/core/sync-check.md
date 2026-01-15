# Sync Check Command

Validate consistency across universe files.

## Usage

```
/sync-check
--sync-check
"check consistency"
"validate universe"
```

## Behavior

1. **Load** relevant configuration files
2. **Cross-reference** for consistency
3. **Report** any discrepancies
4. **Suggest** fixes

## What Gets Checked

### Project Registry
- All projects in `projects/_index.yaml` have directories
- All project directories are registered
- Project IDs match across files

### Command Registry
- All commands in `_registry.yaml` have definition files
- All command files are registered
- Aliases don't conflict

### State Consistency
- Focus in `state/focus.yaml` points to valid project
- Todos reference existing projects
- Decisions have valid project references

### File References
- Context loading rules reference existing files
- Project configs reference valid components
- Tool configs reference valid templates

## Output Format

```
## Sync Check Results

### Project Registry
[OK] 3 projects registered, 3 directories found
[OK] All project IDs match

### Command Registry
[OK] 22 commands registered
[OK] All command files present
[WARN] Alias "continue" used by multiple commands

### State Consistency
[OK] Current focus (my-project) is valid
[OK] All todo references valid
[WARN] Decision DEC-2024-002 references archived project

### File References
[OK] Context loading rules valid
[OK] Component references valid

---

### Summary
- Checks passed: 8
- Warnings: 2
- Errors: 0

### Recommended Actions
1. Review alias "continue" - currently maps to /status
2. Update DEC-2024-002 project reference
```

## Error Handling

**Warnings**: Flag for attention but don't block
**Errors**: Should be fixed before continuing

## Common Issues

1. **Orphaned project directory**: Directory exists but not in registry
2. **Missing command file**: Registered but file doesn't exist
3. **Stale focus**: Pointing to deleted/renamed project
4. **Broken reference**: File path that doesn't exist

## Notes

- Run periodically to maintain universe health
- Always run before major reorganizations
- Safe to run - read-only operation
