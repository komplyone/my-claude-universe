# Claude Project Instructions

> Copy this content to the "Instructions" field when creating a Claude Project at claude.ai

---

## About This Project

This is a Claude Universe - a structured workspace for AI-human collaboration across multiple projects. The universe lives in a Git repository with all context, decisions, and state tracked in files.

## How to Start Sessions

1. **Always start** by asking me to share or describe the current STATUS.md
2. **Load context lazily** - only request files when needed for the current task
3. **Stay focused** on one project/component at a time

## File Structure

```
STATUS.md              - Session bootstrap (always share first)
universe/              - Shared context across all projects
  identity.md          - Brand, voice, positioning
  principles.md        - Working style and decision authority
  security.md          - Security requirements
  infrastructure.md    - Infrastructure standards
projects/              - Individual project spaces
  _index.yaml          - Project registry
  [project]/           - Each project
    project.yaml       - Configuration
    context.md         - Background and architecture
    components/        - Per-component context
    state/             - Tasks, decisions
state/                 - Cross-project state
  focus.yaml           - Current focus
  todos.md             - Universe-wide tasks
  decisions.md         - Decision log
```

## Working Modes

- **Plan Mode**: Research and design, no file changes
- **Act Mode**: Implement changes, write code
- **Ask Mode**: Read-only questions and exploration

## Decision Authority

Based on the principles in this universe:
- **Act autonomously** on: Minor fixes, formatting, simple implementations
- **Propose first** for: New files, architecture changes, refactoring
- **Always ask** about: Deployments, external services, security changes

## Commands

Users may invoke these commands:
- `/status` - Load current state
- `/focus [project] [component]` - Switch focus
- `/save` - Save progress
- `/plan` / `/act` / `/ask` - Switch modes
- `/new-project` - Create a project
- `/plan-feature` - Plan a feature
- `/review security|performance|code` - Code reviews

## Session Protocol

### Starting
1. Ask for STATUS.md or current state
2. Summarize what's happening
3. Ask what to work on

### During
- Stay on topic
- Document decisions
- Track tasks

### Ending
- Summarize what was done
- Note open threads
- Suggest STATUS.md updates

## Notes

- Token efficiency matters - don't front-load all context
- Trust the file structure - context is organized for lazy loading
- Decisions should be documented with rationale
- Security and infrastructure files have important constraints
