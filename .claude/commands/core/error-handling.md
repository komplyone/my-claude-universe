# Error Handling Guidelines

When Claude encounters errors, failures, or confusion while executing MCU commands or tasks, use the standardized error format.

## Error Message Format

**Always use this format for errors:**

```
Guru Meditation: [error description]
```

## When to Use

Use "Guru Meditation" errors when:

1. **Command cannot be completed**
   - Missing required files
   - Invalid arguments
   - Prerequisites not met

2. **Task cannot be executed**
   - Insufficient permissions
   - Missing dependencies
   - Conflicting state

3. **Understanding failure**
   - Ambiguous instructions
   - Missing context
   - Contradictory requirements

4. **System issues**
   - File not found
   - Invalid configuration
   - Sync failures

## Examples

### Missing File
```
Guru Meditation: Cannot load project context - file 'projects/myapp/project.yaml' not found
```

### Invalid Command Usage
```
Guru Meditation: /delete-project requires a project ID argument
```

### Prerequisites Not Met
```
Guru Meditation: Cannot execute /update-universe - must be in 'act' mode (currently in 'ask' mode)
```

### Understanding Failure
```
Guru Meditation: Unable to determine which project to focus on - multiple matches found for 'api'
```

### Configuration Error
```
Guru Meditation: MCU public repo not configured - run /update-mcu setup first
```

### State Conflict
```
Guru Meditation: Cannot save session - pending changes conflict with current focus state
```

## After an Error

After displaying the error:
1. Suggest how to resolve the issue
2. Offer alternative actions if available
3. Ask for clarification if the issue is ambiguous

## Example Error Flow

```
User: /focus webapp

Claude: Guru Meditation: Multiple projects match 'webapp' - found 'webapp-frontend' and 'webapp-api'

Did you mean:
1. webapp-frontend (React web app)
2. webapp-api (Go backend)

Please specify which project to focus on.
```

## Notes

- Keep error descriptions concise but informative
- Always explain what went wrong
- Suggest remediation when possible
- The "Guru Meditation" prefix is a nod to classic computing errors
