# Plan Feature Command

Guided feature planning workflow.

## Usage

```
/plan-feature [name]
--plan-feature
"design feature"
"new feature"
"plan a feature"
```

## Arguments

| Argument | Required | Description |
|----------|----------|-------------|
| name | No | Feature name (will prompt if not provided) |

## Prerequisites

- Should have a project in focus
- Automatically enters plan mode

## Behavior

1. **Enter** plan mode (if not already)
2. **Gather** feature requirements
3. **Analyze** existing codebase
4. **Design** implementation approach
5. **Document** the plan
6. **Get** approval before implementation

## Guided Questions

### Feature Definition
```
1. What's the feature name?
2. Describe what it should do
3. Who is this for? (user type)
4. What problem does it solve?
```

### Scope
```
5. Is this a new feature or enhancement?
6. Which components does it touch?
   [ ] API/Backend
   [ ] Web frontend
   [ ] Mobile app
   [ ] Desktop app
   [ ] Database
7. Any external dependencies?
```

### Requirements
```
8. Must-have requirements:
   - [ask for each]

9. Nice-to-have requirements:
   - [ask for each]

10. Out of scope (explicitly):
    - [ask for each]
```

### Constraints
```
11. Any technical constraints?
12. Performance requirements?
13. Security considerations?
```

## Analysis Phase

After gathering requirements:

1. **Search** codebase for related code
2. **Identify** files that need changes
3. **Check** for conflicts with existing features
4. **Review** security implications
5. **Estimate** complexity

## Plan Document

Generate a feature plan:

```markdown
# Feature: [Name]

## Overview
[Description]

## Requirements

### Must Have
- [ ] [Requirement 1]
- [ ] [Requirement 2]

### Nice to Have
- [ ] [Optional 1]

### Out of Scope
- [Explicitly excluded]

## Technical Design

### Components Affected
- **API**: [changes needed]
- **Web**: [changes needed]

### New Files
- `path/to/new/file.ext` - [purpose]

### Modified Files
- `path/to/existing/file.ext` - [changes]

### Database Changes
- [If any]

## Implementation Plan

### Phase 1: [Name]
1. [Step 1]
2. [Step 2]

### Phase 2: [Name]
1. [Step 1]

## Security Considerations
- [Based on universe/security.md]

## Testing Plan
- [ ] Unit tests for [...]
- [ ] Integration tests for [...]

## Rollout Plan
- [ ] Feature flag: [name]
- [ ] Gradual rollout steps
```

## Output Format

```
## Feature Plan: [Name]

[Show generated plan]

---

### Ready to Implement?

This plan covers:
- [N] requirements
- [N] files to modify
- [N] new files
- Estimated complexity: [Low/Medium/High]

Options:
1. Approve and start implementation (/act)
2. Revise requirements
3. Save plan for later

What would you like to do?
```

## Post-Approval

If approved:
1. Save plan to `projects/[project]/features/[name].md`
2. Create tasks from implementation steps
3. Switch to act mode
4. Begin implementation

## Notes

- Always in plan mode during this command
- Creates documentation before code
- Links to project decisions if significant
- Can be saved and resumed later
