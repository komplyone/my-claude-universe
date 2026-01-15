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

1. **Ask** project category (first question - determines workflow)
2. **Gather** project information through questions
3. **Create** project directory structure
4. **Generate** configuration files
5. **Register** in project index
6. **Set focus** to new project

## Guided Questions

### Project Category (FIRST QUESTION - Always ask this first)
```
What kind of project is this?

[ ] Software Development
    Build applications, APIs, websites, mobile apps, etc.
    Includes: tech stack selection, infrastructure, CI/CD

[ ] General Project
    Planning, documentation, research, or any non-code project.
    Includes: task management, notes, information context
```

This determines the subsequent questions and project structure.

---

## Software Development Projects

### Basic Info
```
1. What's the project name? (lowercase, hyphens ok)
2. Give it a tagline (one sentence description)
3. What problem does it solve?
```

### Software Type
```
What type of software is this?
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

### Created Structure (Software)

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

---

## General Projects

### Basic Info
```
1. What's the project name? (lowercase, hyphens ok)
2. Give it a tagline (one sentence description)
3. What is this project about?
```

### Project Purpose
```
What's the main purpose of this project?
[ ] Planning / Strategy
[ ] Research / Analysis
[ ] Documentation
[ ] Event / Campaign
[ ] Personal / Learning
[ ] Other
```

### Priority
```
What's the priority level?
[ ] Primary (active focus)
[ ] Secondary (ongoing)
[ ] Background (low priority)
```

### Created Structure (General)

```
projects/[project-name]/
├── project.yaml          # Configuration
├── context.md            # Project background & notes
├── resources/            # Information context files
│   └── README.md         # Resource index
└── state/
    ├── tasks.md         # Project tasks
    └── decisions.md     # Project decisions
```

---

## Generated Files

### project.yaml (Software)
```yaml
id: [project-name]
name: [Project Name]
tagline: [user's tagline]
category: software
type: [web-app | mobile | api | etc.]
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

### project.yaml (General)
```yaml
id: [project-name]
name: [Project Name]
tagline: [user's tagline]
category: general
purpose: [planning | research | documentation | etc.]
status: active
priority: [primary | secondary | background]

# No components, infrastructure, or tech stack for general projects
```

### context.md (Software)
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

### context.md (General)
```markdown
# [Project Name]

## Overview
[User's description]

## Purpose
[What this project aims to achieve]

## Key Information
[Add important context, notes, and reference material here]

## Status
Active - initial setup
```

### resources/README.md (General projects only)
```markdown
# Resources

This folder contains information context for the project.

## How to Use

Add files here that provide context for the project:
- Research documents
- Reference materials
- Meeting notes
- External links and summaries
- Any information Claude should know about

## Files

_No resources added yet._
```

## Post-Creation

1. **Update** `projects/_index.yaml`
2. **Set focus** to new project
3. **Show** next steps

## Output Format (Software)

```
## Project Created: [project-name]

### Structure
[Show created files]

### Configuration
- Category: Software Development
- Type: [type]
- Stack: [tech summary]
- Budget: [category]

### Quick Reference

| Command | What it does |
|---------|--------------|
| `/status` or `--status` | See current state |
| `/focus [project-name]` or `--focus [project-name]` | Switch to this project |
| `/save` or `--save` | Save progress |
| `/help` or `--help` | All commands |

### Next Steps
1. Review and customize context.md
2. Define first components
3. Start with `/plan-feature` or `--plan-feature`

---

Focus is now on [project-name]. Ready when you are.
```

## Output Format (General)

```
## Project Created: [project-name]

### Structure
[Show created files]

### Configuration
- Category: General Project
- Purpose: [purpose]
- Priority: [priority]

### Quick Reference

| Command | What it does |
|---------|--------------|
| `/status` or `--status` | See current state |
| `/focus [project-name]` or `--focus [project-name]` | Switch to this project |
| `/todos` or `--todos` | Manage tasks |
| `/save` or `--save` | Save progress |
| `/help` or `--help` | All commands |

### Next Steps
1. Add context and notes to context.md
2. Add reference materials to resources/
3. Create tasks with `/todos` or `--todos`

---

Focus is now on [project-name]. Ready when you are.
```

## Notes

- Creates minimal viable structure
- User can customize after creation
- Follows universe defaults from `universe/defaults.yaml`
- Inherits security guidelines
- General projects don't have tech stack or infrastructure
- Both project types support todos and decisions
