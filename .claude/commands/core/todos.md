# Todos Command

View and manage tasks across the universe.

## Usage

```
/todos [filter]
--todos
"show todos"
"tasks"
"what needs to be done"
```

## Arguments

| Argument | Required | Description |
|----------|----------|-------------|
| filter | No | Filter by project, assignee, or status |

## Filters

- `/todos` - All active todos
- `/todos my-project` - Todos for specific project
- `/todos @claude` - Todos assigned to Claude
- `/todos @user` - Todos assigned to user
- `/todos @together` - Collaborative todos
- `/todos completed` - Recently completed todos

## Task Format

Tasks in `state/todos.md` follow this format:

```markdown
## Active Tasks

### [Project Name] (or Universe)

- [ ] @claude Task description #priority
  - Context or subtasks
- [ ] @user Another task #high
- [x] @together Completed task ~~done 2024-01-15~~

### Another Project

- [ ] @user Task here
```

## Assignees

- `@user` - Human is responsible
- `@claude` - Claude should handle this
- `@together` - Collaborative effort needed

## Priority Tags

- `#critical` - Urgent, do first
- `#high` - Important
- `#normal` - Standard priority (default)
- `#low` - When time permits

## Output Format

```
## Tasks Overview

### Universe-Level
- [ ] @claude Set up CI/CD pipeline #high
- [ ] @user Review security guidelines #normal

### my-project
- [ ] @together Design API endpoints #high
- [ ] @claude Implement user auth #normal
- [x] @claude Set up project structure ~~done 2024-01-15~~

---

**Summary**: 4 active, 1 completed recently
**Your tasks**: 1 | **Claude's tasks**: 2 | **Together**: 1

Add task: Just describe it, I'll add it
Complete task: "mark [task] as done"
```

## Managing Tasks

- **Add**: Describe the task naturally
- **Complete**: Say "done with [task]" or "completed [task]"
- **Reassign**: Say "assign [task] to @claude/@user"
- **Prioritize**: Say "make [task] high priority"

## Notes

- Tasks persist in `state/todos.md`
- Project-specific tasks also in `projects/[id]/state/tasks.md`
- Completed tasks are kept for reference (with completion date)
- Archive old completed tasks during `/cleanup`
