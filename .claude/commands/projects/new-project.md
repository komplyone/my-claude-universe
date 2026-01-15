# New Project Command

Create a new project with guided setup.

## Usage

```
/new-project [name]
--new-project
"create project"
"start new project"
```

## Arguments

| Argument | Required | Description |
|----------|----------|-------------|
| name | No | Project name (will prompt if not provided) |

## Behavior

1. **Gather** project information through questions
2. **Create** project directory structure
3. **Generate** configuration files
4. **Register** in project index
5. **Set focus** to new project

## Guided Questions

### Basic Info
```
1. What's the project name? (lowercase, hyphens ok)
2. Give it a tagline (one sentence description)
3. What problem does it solve?
```

### Project Type
```
What type of project is this?
[ ] Web application
[ ] Mobile app
[ ] Desktop application
[ ] API / Backend service
[ ] CLI tool
[ ] Library / Package
[ ] Full-stack (multiple clients)
```

### Technology Stack

Based on project type, ask about:
- Backend language (Go recommended, Python, Node, Rust)
- Frontend framework (React recommended, Vue, Svelte)
- Mobile framework (Flutter recommended, React Native)
- Desktop framework (Tauri recommended, Electron)
- Database (PostgreSQL via Neon recommended)
- Cache (Redis Cloud if needed)

Or offer: "Use recommended default stack?"

### Infrastructure
```
Where will this be hosted?
[ ] Hetzner (recommended)
[ ] AWS
[ ] GCP
[ ] Cloudflare Workers
[ ] Self-hosted
[ ] Not sure yet
```

### Budget
```
What's the budget category?
[ ] Hobby (free tiers only)
[ ] Personal ($0-50/month)
[ ] Startup ($50-500/month)
[ ] Business ($500+/month)
```

## Created Structure

```
projects/[project-name]/
├── project.yaml          # Configuration
├── context.md            # Project background
├── components/           # Component contexts
│   └── [based on type]
└── state/
    ├── tasks.md         # Project tasks
    └── decisions.md     # Project decisions
```

## Generated Files

### project.yaml
```yaml
id: [project-name]
name: [Project Name]
tagline: [user's tagline]
status: concept

components:
  - id: [based on type]
    status: planned
    tech: [selected stack]

budget:
  category: [selected]
  cost_priority: aggressive

infrastructure:
  compute: [selected]
  database: [selected]
  region: [from universe defaults]
```

### context.md
```markdown
# [Project Name]

## Overview
[User's description]

## Problem
[What it solves]

## Architecture
[Generated based on type and stack]

## Status
Concept phase - initial setup
```

## Post-Creation

1. **Update** `projects/_index.yaml`
2. **Set focus** to new project
3. **Show** next steps

## Output Format

```
## Project Created: [project-name]

### Structure
[Show created files]

### Configuration
- Type: [type]
- Stack: [tech summary]
- Budget: [category]

### Next Steps
1. Review and customize context.md
2. Define first components
3. Start with /plan-feature

---

Focus is now on [project-name].
Ready to start planning?
```

## Notes

- Creates minimal viable structure
- User can customize after creation
- Follows universe defaults from `universe/defaults.yaml`
- Inherits security and infrastructure guidelines
