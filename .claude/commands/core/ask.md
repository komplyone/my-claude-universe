# Ask Mode Command

Enter ask mode - read-only exploration and questions.

## Usage

```
/ask
--ask
"ask mode"
"just exploring"
"I have questions"
```

## Behavior

1. **Update** mode in `state/focus.yaml` to "ask"
2. **Confirm** mode change to user
3. **Explain** read-only nature

## In Ask Mode

- **DO**: Answer questions about the codebase
- **DO**: Explain code, architecture, patterns
- **DO**: Read and analyze files
- **DO**: Provide recommendations and suggestions
- **DON'T**: Make any file changes
- **DON'T**: Create any new files
- **DON'T**: Execute any commands that modify state

## Best For

- Learning about a new codebase
- Understanding existing implementations
- Getting explanations without risk
- Exploring options before committing to changes

## Output Format

```
## Mode: Ask

Now in **ask mode**. I'll help you explore and understand without
making any changes.

What I can do:
- Answer questions about code and architecture
- Explain how things work
- Analyze and review existing code
- Suggest improvements (without implementing)
- Search and explore the codebase

What I won't do:
- Create or modify any files
- Execute any commands
- Make any changes to state

What would you like to know?
```

## Switching Out

- Use `/plan` to switch to design mode
- Use `/act` to switch to implementation mode
- No save needed - ask mode doesn't create state
