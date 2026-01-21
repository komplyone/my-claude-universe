# Consistency Guidelines

> How to keep documentation and state in sync across the universe.

---

## The Consistency Problem

Documentation and state can drift out of sync at three levels:

| Level | What Can Drift | Impact |
|-------|----------------|--------|
| **System** | Commands, registry, help | Claude doesn't know about new commands |
| **Universe** | Project index, identity, infrastructure | Cross-project confusion |
| **Project** | Context, tasks, decisions | Outdated information affects work quality |

---

## Three-Part Solution

### 1. Single Source of Truth

Each piece of information has ONE authoritative source:

| Information | Authoritative Source | Derived From |
|-------------|---------------------|--------------|
| Available commands | `_registry.yaml` | `--help` reads from this |
| Project list | `projects/_index.yaml` | `--focus` autocomplete |
| Project details | `projects/*/project.yaml` | Should match `_index.yaml` |
| Current focus | `state/focus.yaml` | Used by all commands |
| Component details | `projects/*/components/*.md` | Referenced in project.yaml |

**Rule:** Update the authoritative source. Derived views will reflect changes.

### 2. Automated Sync Checks

Use `--sync-check` to validate consistency:

```bash
--sync-check              # Check everything
--sync-check system       # Check command registry
--sync-check universe     # Check project index
--sync-check project      # Check current project
--sync-check --fix        # Fix automatable issues
```

**When to run:**
- After adding commands
- After creating/modifying projects
- Before `--save` or `--handoff`
- Weekly maintenance

### 3. Post-Change Reminders

Claude should proactively remind about related updates.

---

## Post-Change Checklist

### After Adding a Command

| Step | File | Action |
|------|------|--------|
| 1 | `.claude/commands/*/*.md` | Create command file |
| 2 | `.claude/commands/_registry.yaml` | Add registry entry |
| 3 | — | `--help` auto-updates (reads from registry) |

**Claude reminder:** "I've added the command file and registry entry. Help will reflect this automatically."

### After Creating a Project

| Step | File | Action |
|------|------|--------|
| 1 | `projects/*/` | Create directory structure |
| 2 | `projects/*/project.yaml` | Create project config |
| 3 | `projects/*/context.md` | Create context doc |
| 4 | `projects/*/state/*.md` | Create state files |
| 5 | `projects/_index.yaml` | Add index entry |

**Claude reminder:** "Project created. I've added it to the index. Use `--focus {project}` to start working on it."

### After Modifying Project Config

| If Changed | Also Update |
|------------|-------------|
| `project.yaml` status | `_index.yaml` status |
| `project.yaml` priority | `_index.yaml` priority |
| `project.yaml` components | Create/update component .md files |
| `project.yaml` budget | `_index.yaml` budget (if present) |

**Claude reminder:** "I've updated project.yaml. Let me sync _index.yaml to match."

### After Making Decisions

| Step | File | Action |
|------|------|--------|
| 1 | `state/decisions.md` or `projects/*/state/decisions.md` | Log decision |
| 2 | Related docs | Update if decision affects them |

**Claude reminder:** "Decision logged. This affects [X] — should I update that too?"

### After Significant Code Changes

| Step | File | Action |
|------|------|--------|
| 1 | Code files | Make changes |
| 2 | `projects/*/context.md` | Update if architecture changed |
| 3 | `projects/*/components/*.md` | Update affected component docs |
| 4 | `projects/*/state/decisions.md` | Log if significant decision |

**Claude reminder:** "This changes how [component] works. Should I update its documentation?"

---

## Reminder Triggers

Claude should suggest updates when:

### Automatic Triggers

| Event | Suggestion |
|-------|------------|
| New command created | "Added to registry. Help will auto-update." |
| New project created | "Should I add this to _index.yaml?" |
| Component added | "Should I create a component doc?" |
| Major refactor | "Context.md may need updating." |
| Decision made | "Should I log this decision?" |

### Session Triggers

| Event | Suggestion |
|-------|------------|
| `--save` | "Running quick sync check first..." |
| `--handoff` | "Let me verify context is current..." |
| Long session (>10 exchanges) | "Consider running --sync-check" |
| End of significant work | "Should I update the relevant docs?" |

---

## Consistency Patterns

### Pattern 1: Update Immediately

When changing something with a direct dependency:

```
Change project.yaml → Immediately update _index.yaml
Add command file → Immediately add registry entry
```

### Pattern 2: Suggest at Transition

When impact is less direct:

```
Major code change → Suggest context update at --save
Architecture shift → Suggest doc update at session end
```

### Pattern 3: Periodic Review

For gradual drift:

```
Weekly: --sync-check
Before release: --sync-check --verbose
After major milestone: Review all project docs
```

---

## What NOT to Duplicate

Avoid maintaining the same information in multiple places:

| Don't | Do Instead |
|-------|------------|
| List commands in help.md | Generate from registry |
| Repeat project list in multiple places | Read from _index.yaml |
| Copy tech stack to multiple docs | Reference project.yaml |
| Duplicate security rules | Reference universe/security.md |

---

## Recovery from Drift

If things get out of sync:

1. **Run `--sync-check --verbose`** to identify all issues
2. **Fix authoritative source first** (registry, project.yaml)
3. **Let derived sources update** (help regenerates)
4. **Manually update content docs** (context.md, decisions.md)
5. **Run `--sync-check` again** to verify

---

## Claude's Responsibility

As the AI partner, Claude should:

1. **Proactively suggest** updates when making changes
2. **Never assume** derived docs are current
3. **Update registry** when adding commands
4. **Update index** when creating projects
5. **Remind about** context updates after significant changes
6. **Run sync-check** before major transitions

---

*This document is part of the universe context and applies to all projects.*
