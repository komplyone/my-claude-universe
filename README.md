# My Claude Universe (MCU)

**Version: v1**

A production-ready system for AI-human collaboration across multiple projects. **My Claude Universe** (MCU) provides a structured, repo-based workflow system designed for seamless collaboration with Claude (via Claude Code, Claude Chat, Cursor, or other AI tools).

> **Note**: When referring to "My Claude Universe", "MCU", or "mcu", we mean this entire system - the workflow, commands, structure, and methodology for AI-human collaboration.

```
    ╔═══════════════════════════════════════════════════════════════╗
    ║                     MY CLAUDE UNIVERSE                        ║
    ║                                                               ║
    ║   ┌─────────────────────────────────────────────────────┐    ║
    ║   │                   STATUS.md                          │    ║
    ║   │              (Session Bootstrap)                     │    ║
    ║   └──────────────────────┬──────────────────────────────┘    ║
    ║                          │                                    ║
    ║          ┌───────────────┼───────────────┐                   ║
    ║          ▼               ▼               ▼                   ║
    ║   ┌──────────┐    ┌──────────┐    ┌──────────┐              ║
    ║   │ universe │    │ projects │    │  state   │              ║
    ║   │ (shared) │    │ (yours)  │    │(runtime) │              ║
    ║   └──────────┘    └──────────┘    └──────────┘              ║
    ║                                                               ║
    ╚═══════════════════════════════════════════════════════════════╝
```

## Why This Exists

Working with AI assistants across multiple projects presents challenges:

- **Context loss**: Starting fresh every session wastes time
- **Inconsistency**: Different sessions, different approaches
- **Scattered knowledge**: Project info spread across tools
- **No continuity**: No handoff between work sessions

MCU solves these problems with:

- **Single source of truth**: Everything lives in the repo
- **Lazy loading**: Load context only when needed (token-efficient)
- **Tool agnostic**: Works with Claude Code, Claude Chat, Cursor, Windsurf, etc.
- **Session continuity**: Pick up exactly where you left off
- **Structured workflows**: Consistent processes via slash commands

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [How It Works](#how-it-works)
3. [Lazy-Loading Architecture](#lazy-loading-architecture)
4. [Directory Structure](#directory-structure)
5. [Commands Reference](#commands-reference)
6. [Setting Up Your Universe](#setting-up-your-universe)
7. [Creating Projects](#creating-projects)
8. [Working with Claude](#working-with-claude)
9. [Technology Stacks](#technology-stacks)
10. [MCP Server Integration](#mcp-server-integration)
11. [CI/CD & Docker](#cicd--docker)
12. [Best Practices](#best-practices)
13. [Security](#security)
14. [Troubleshooting](#troubleshooting)
15. [Contributing](#contributing)

---

## Quick Start

### 30-Second Setup

```bash
# 1. Clone this repository
git clone https://github.com/YOUR_USERNAME/my-claude-universe.git
cd my-claude-universe

# 2. Initialize your universe (with Claude Code)
claude

# 3. Tell Claude to initialize
# Type: "Read NEW_PROJECT.md and help me set up my universe"
```

That's it! Claude will guide you through:
- Personalizing your universe
- Creating your first project
- Setting up your preferred tech stack
- Configuring CI/CD and Docker (optional)

### Manual Setup (Without Claude)

```bash
# 1. Clone and enter
git clone https://github.com/YOUR_USERNAME/my-claude-universe.git my-universe
cd my-universe

# 2. Edit STATUS.md with your info
# 3. Customize universe/identity.md
# 4. Create your first project in projects/
# 5. Initialize git
git init
git remote add origin YOUR_REPO_URL
```

---

## How It Works

### The Bootstrap Model

```
┌─────────────────────────────────────────────────────────────┐
│                     SESSION START                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1. Claude reads STATUS.md (~800 words, ~2000 tokens)       │
│     └─> Current focus, recent work, next steps              │
│                                                              │
│  2. Based on your request, Claude loads relevant context:   │
│     ├─> Project context (5000 tokens)                       │
│     ├─> Component specs (variable)                          │
│     └─> Security/infra guidelines (as needed)               │
│                                                              │
│  3. Work happens with full context                          │
│                                                              │
│  4. Before ending, STATUS.md is updated                     │
│     └─> Next session picks up exactly where you left off    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Core Philosophy

1. **"Claude proposes, you decide"**: AI suggests, human approves significant changes
2. **Lazy context loading**: Only load what's needed for the current task
3. **Structured freedom**: Commands provide consistency, but you can work naturally
4. **Repository as truth**: All context, decisions, and state live in the repo

---

## Lazy-Loading Architecture

One of MCU's most powerful features is its **lazy-loading context system**. Instead of front-loading Claude's context window with everything that might be relevant, MCU loads only what's needed, when it's needed.

### Why This Matters

```
┌─────────────────────────────────────────────────────────────────┐
│                 THE CONTEXT WINDOW PROBLEM                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Traditional approach:                                           │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ Load EVERYTHING at start → Context fills up quickly →      │ │
│  │ Less room for actual work → More expensive → Slower        │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                  │
│  MCU's lazy-loading approach:                                    │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ Load minimal bootstrap → Detect what's needed →            │ │
│  │ Load on demand → More room for work → Efficient            │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Token Budget System

MCU defines explicit token budgets for different scenarios:

| Scenario | Budget | What Gets Loaded |
|----------|--------|------------------|
| **Bootstrap** | ~2,000 tokens | STATUS.md only - enough to understand current state |
| **Project Switch** | ~5,000 tokens | + project.yaml + context.md |
| **Deep Work** | ~15,000 tokens | + component specs + security/infrastructure |
| **Maximum** | ~50,000 tokens | Hard limit - trigger cleanup above this |
| **Cleanup Threshold** | ~30,000 tokens | Suggest unloading stale context |

### How Context Gets Loaded

MCU uses three mechanisms to load context on-demand:

#### 1. Keyword Triggers

When you mention certain keywords, related context loads automatically:

```yaml
# From .claude/context.yaml
keywords:
  "security|auth|password|jwt|vulnerability":
    - universe/security.md

  "infrastructure|deploy|server|database":
    - universe/infrastructure.md

  "brand|marketing|voice|identity":
    - universe/identity.md

  "decision|decide|choice|alternative":
    - state/decisions.md
```

**Example**: Say "let's review the authentication security" and `universe/security.md` loads automatically.

#### 2. Action Triggers

When Claude is about to perform certain actions, relevant context loads:

```yaml
actions:
  code_generation:
    - universe/security.md      # Security guidelines for new code

  deployment:
    - universe/infrastructure.md
    - universe/security.md

  database_work:
    - universe/infrastructure.md
    - universe/security.md
```

**Example**: When Claude generates code, security.md loads to ensure secure patterns.

#### 3. Project Focus Loading

When you focus on a project, only that project's context loads:

```yaml
project_focus:
  always:                        # Always load these
    - "projects/{project}/project.yaml"
    - "projects/{project}/context.md"

  with_component:                # Only when working on specific component
    - "projects/{project}/components/{component}.md"

  optional:                      # Load if referenced
    - "projects/{project}/state/tasks.md"
```

### Context Lifecycle

```
┌─────────────────────────────────────────────────────────────────┐
│                    CONTEXT FLOW                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  SESSION START                                                   │
│  │                                                               │
│  ▼                                                               │
│  ┌────────────────┐                                              │
│  │  STATUS.md     │  ← Bootstrap (~2000 tokens)                  │
│  │  (always)      │    "What's happening? Where are we?"         │
│  └───────┬────────┘                                              │
│          │                                                       │
│          ▼                                                       │
│  ┌────────────────┐                                              │
│  │  User Request  │  ← "Work on my-project API auth"             │
│  └───────┬────────┘                                              │
│          │                                                       │
│          ├── Keyword "auth" detected ──▶ Load security.md       │
│          │                                                       │
│          ├── /focus my-project ──▶ Load project.yaml, context.md│
│          │                                                       │
│          └── Component "api" ──▶ Load components/api.md          │
│                                                                  │
│  DURING WORK                                                     │
│  │                                                               │
│  ├── Action: code_generation ──▶ Ensure security.md loaded      │
│  │                                                               │
│  └── Above cleanup_threshold ──▶ Suggest /cleanup                │
│                                                                  │
│  SESSION END                                                     │
│  │                                                               │
│  ▼                                                               │
│  ┌────────────────┐                                              │
│  │  /save         │  ← Update STATUS.md with progress            │
│  └────────────────┘                                              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Sticky vs Unloadable Files

Not all context is equal. Some files persist across context switches:

**Sticky Files** (always keep):
- `STATUS.md` - Session state
- `universe/principles.md` - Core working principles

**Unloadable Files** (can be dropped):
- `projects/*/components/*.md` - Component specs
- `projects/*/state/*.md` - Project-specific state

### Practical Benefits

1. **Longer productive sessions**: More context budget for actual work
2. **Faster responses**: Less to process means quicker Claude responses
3. **Lower costs**: Fewer tokens = lower API costs (if applicable)
4. **Better focus**: Claude sees only relevant context, reducing confusion
5. **Scalable**: Works the same whether you have 2 projects or 20

### Configuring Lazy-Loading

Edit `.claude/context.yaml` to customize:

```yaml
# Add your own keyword triggers
keywords:
  "my-custom-term|related-word":
    - path/to/relevant/file.md

# Adjust budgets for your needs
budgets:
  deep_work: 20000  # Increase if you need more context
```

### Tips for Token Efficiency

1. **Be specific**: "Work on auth in the API" loads less than "work on the project"
2. **Use components**: Focus on one component at a time
3. **Trust the system**: Don't manually load files - let triggers work
4. **Cleanup regularly**: Run `/cleanup` when switching between unrelated work
5. **Check budgets**: If responses slow down, you might be near limits

---

## Directory Structure

```
my-claude-universe/
│
├── STATUS.md                 # THE bootstrap file (read every session)
├── NEW_PROJECT.md            # Entry point for new users (you're here!)
├── README.md                 # This documentation
│
├── .claude/                  # Claude-specific configuration
│   ├── bootstrap.md          # Minimal startup instructions
│   ├── context.yaml          # Context loading rules
│   ├── project-instructions.md  # For Claude Project setup
│   └── commands/             # Slash command definitions
│       ├── _registry.yaml    # Command registry
│       ├── core/             # Core commands (status, focus, save, etc.)
│       ├── context/          # Context management commands
│       ├── projects/         # Project management commands
│       ├── features/         # Feature planning commands
│       └── reviews/          # Code review commands
│
├── universe/                 # Shared context across all projects
│   ├── identity.md           # Your brand, voice, positioning
│   ├── principles.md         # Working principles with AI
│   ├── security.md           # Security requirements & patterns
│   ├── infrastructure.md     # Infrastructure standards
│   ├── consistency.md        # Keeping things in sync
│   └── defaults.yaml         # Default values for new projects
│
├── projects/                 # Individual project spaces
│   ├── _index.yaml           # Master project registry
│   ├── _template/            # Template for new projects
│   └── [your-project]/       # Your actual projects
│       ├── project.yaml      # Project configuration
│       ├── context.md        # Project background
│       ├── components/       # Per-component context
│       └── state/            # Project-specific state
│
├── state/                    # Cross-project operational state
│   ├── focus.yaml            # Current focus (project, mode)
│   ├── todos.md              # Universe-wide tasks
│   ├── decisions.md          # Decision log
│   ├── session.md            # Session continuity notes
│   └── waiting.md            # Pending approvals
│
├── tools/                    # Third-party tool integration
│   ├── _index.yaml           # Tool registry
│   └── _template/            # Tool configuration template
│
├── examples/                 # Optional example projects (deletable)
│
├── docs/                     # Additional documentation
│   ├── guides/               # How-to guides
│   └── mcp-servers/          # MCP server setup guides
│
├── docker/                   # Docker configurations
│   └── templates/            # Docker templates for various stacks
│
└── .github/                  # GitHub-specific files
    ├── workflows/            # CI/CD workflows
    └── ISSUE_TEMPLATE/       # Issue templates
```

---

## Commands Reference

Commands can be invoked as:
- `/command` - Slash command in Claude Code
- `--command` - Flag style in any context
- Natural language: "switch to my-project" triggers `/focus`

### Core Commands

| Command | Aliases | Description |
|---------|---------|-------------|
| `/load-status` | `/status`, `--status`, `continue` | Load current state, continue work |
| `/focus [project] [component]` | `--focus`, `switch to` | Change project/component focus |
| `/save` | `--save`, `save progress` | Save session state |
| `/handoff [tool]` | `--handoff`, `prepare for` | Prepare for tool transition |
| `/plan` | `--plan` | Enter plan mode (no changes) |
| `/act` | `--act` | Enter act mode (make changes) |
| `/ask` | `--ask` | Enter ask mode (read-only) |
| `/help` | `--help` | Show command reference |
| `/cleanup` | `--cleanup` | Clean stale state |
| `/decisions` | `--decisions` | View decision log |
| `/todos` | `--todos` | View/manage todos |
| `/sync-check` | `--sync-check` | Validate consistency |

### Project Commands

| Command | Description |
|---------|-------------|
| `/new-project` | Create a new project with guided setup |
| `/import-project [path]` | Import existing project by scanning folder/repo |
| `/deprecate-project` | Mark project as deprecated |
| `/delete-project` | Remove project from MCU |

### Context Commands

| Command | Description |
|---------|-------------|
| `/update-universe` | Modify universal context files |
| `/update-project` | Modify current project context |

### Feature & Review Commands

| Command | Description |
|---------|-------------|
| `/plan-feature` | Guided feature planning workflow |
| `/review security` | Security-focused code review |
| `/review performance` | Performance review |
| `/review code` | General code quality review |

### MCU System Commands

| Command | Description |
|---------|-------------|
| `/update-mcu` | Update, commit, and push changes to public MCU repo |
| `/version` | Display the current MCU version |

### Error Handling

When Claude encounters errors, it uses the standardized format:

```
Guru Meditation: [error description]
```

This makes it easy to identify when something went wrong and what the issue is.

---

## Setting Up Your MCU

### Step 1: Personalize Identity

Edit `universe/identity.md`:

```markdown
# Your Identity

## Brand
- **Name**: [Your company/personal brand]
- **Tagline**: [Your mission in one line]
- **Voice**: [Professional? Casual? Technical?]

## Products
- [List your product naming conventions]
- [Any brand guidelines]

## Target Market
- [Who are you building for?]
```

### Step 2: Define Principles

Edit `universe/principles.md`:

```markdown
# Working Principles

## Decision Authority
- **Claude decides autonomously**: [What can Claude do without asking?]
- **Claude proposes, you approve**: [What needs your sign-off?]
- **Always ask first**: [What should Claude never do alone?]

## Communication Style
- [How should Claude communicate with you?]
- [Any preferences for explanations, code comments, etc.?]
```

### Step 3: Set Security Standards

Edit `universe/security.md`:

```markdown
# Security Requirements

## Always Do
- [ ] Validate all inputs
- [ ] Use parameterized queries
- [ ] Implement proper auth
- [Add your requirements]

## Never Do
- [ ] Hardcode secrets
- [ ] Trust user input
- [Add your prohibitions]
```

### Step 4: Configure Infrastructure

Edit `universe/infrastructure.md`:

```markdown
# Infrastructure Standards

## Preferred Providers
- **Compute**: [Hetzner / AWS / GCP / etc.]
- **Database**: [Neon / Supabase / etc.]
- **Cache**: [Redis Cloud / Upstash / etc.]
- **Storage**: [Cloudflare R2 / S3 / etc.]

## Cost Targets
- [Your budget guidelines]
```

---

## Creating Projects

### Guided Creation (Recommended)

```
/new-project
```

Claude will ask you:
1. Project name and purpose
2. Technology stack
3. Components (web, mobile, API, etc.)
4. Infrastructure needs
5. Security requirements

### Manual Creation

1. Copy `projects/_template/` to `projects/your-project/`
2. Edit `project.yaml` with your configuration
3. Add to `projects/_index.yaml`
4. Create component files in `components/`

### Project Configuration

```yaml
# projects/your-project/project.yaml

id: your-project
name: Your Project
tagline: What it does in one line
status: development  # concept | planned | development | beta | production

components:
  - id: api
    status: active
    tech: [go, postgresql]
    repo: github.com/you/project-api
  - id: web
    status: planned
    tech: [react, typescript]

budget:
  category: personal  # hobby | personal | commercial | enterprise
  monthly_limit: 50
  cost_priority: aggressive  # aggressive | moderate | relaxed

infrastructure:
  compute: hetzner
  database: neon
  region: eu-central
```

---

## Working with Claude

### Starting a Session

```
You: "Hey Claude, let's continue working"
Claude: [Reads STATUS.md, shows current state, asks what to work on]
```

Or be specific:

```
You: "/focus my-project api"
Claude: [Loads project context, focuses on API component]
```

### During Work

- **Plan first**: Use `/plan` mode for design work
- **Then act**: Switch to `/act` mode to implement
- **Ask questions**: Use `/ask` mode for exploratory work

### Ending a Session

```
You: "/save" or "I'm done for today"
Claude: [Updates STATUS.md with progress, next steps]
```

### Switching Tools

```
You: "/handoff cursor"
Claude: [Prepares context summary for Cursor]
```

---

## Technology Stacks

### Default Recommended Stack

This scaffold comes with a recommended "default stack" optimized for:
- **Cost efficiency**: Generous free tiers, EU-based pricing
- **Developer experience**: Modern tooling, great DX
- **Production readiness**: Battle-tested technologies

```
┌─────────────────────────────────────────────────────────────┐
│                    RECOMMENDED STACK                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  BACKEND                    FRONTEND                         │
│  ├── Go (APIs)              ├── React (Web)                 │
│  ├── PostgreSQL (Neon)      ├── Flutter (Mobile)            │
│  └── Redis (Redis Cloud)    └── Tauri (Desktop)             │
│                                                              │
│  INFRASTRUCTURE                                              │
│  ├── Hetzner (Compute)                                       │
│  ├── Neon (Database)                                         │
│  ├── Redis Cloud (Cache)                                     │
│  ├── Cloudflare R2 (Storage)                                │
│  └── Cloudflare (CDN)                                        │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Alternative Stacks

When running `/new-project`, you can choose:

**The Python Stack**
- FastAPI + SQLAlchemy + PostgreSQL
- Great for ML/AI projects

**The Node Stack**
- Express/Fastify + Prisma + PostgreSQL
- Familiar for JS developers

**The Rust Stack**
- Axum + SQLx + PostgreSQL
- Maximum performance

**The Serverless Stack**
- Cloudflare Workers + D1 + KV
- Zero server management

### Choosing Your Stack

The `/new-project` command will ask:

```
┌─────────────────────────────────────────────────────────────┐
│              TECHNOLOGY STACK SELECTION                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  What type of project?                                       │
│  [ ] Web application                                         │
│  [ ] Mobile app                                              │
│  [ ] Desktop application                                     │
│  [ ] API / Backend service                                   │
│  [ ] Full-stack (multiple clients)                          │
│                                                              │
│  Backend language?                                           │
│  [x] Go (Recommended)                                        │
│  [ ] Python                                                  │
│  [ ] Node.js                                                 │
│  [ ] Rust                                                    │
│                                                              │
│  Database?                                                   │
│  [x] PostgreSQL via Neon (Recommended)                      │
│  [ ] PostgreSQL via Supabase                                │
│  [ ] SQLite via Turso                                       │
│  [ ] MongoDB                                                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## MCP Server Integration

This scaffold supports MCP (Model Context Protocol) servers for enhanced Claude capabilities.

### Available MCP Servers

| Server | Purpose | Setup Guide |
|--------|---------|-------------|
| Neon | PostgreSQL database management | [docs/mcp-servers/neon.md](docs/mcp-servers/neon.md) |
| Hetzner | Cloud server management | [docs/mcp-servers/hetzner.md](docs/mcp-servers/hetzner.md) |
| Redis Cloud | Cache management | [docs/mcp-servers/redis.md](docs/mcp-servers/redis.md) |
| GitHub | Repository operations | [docs/mcp-servers/github.md](docs/mcp-servers/github.md) |

### Configuring MCP Servers

Add to your Claude Code configuration (`~/.claude/mcp.json`):

```json
{
  "mcpServers": {
    "neon": {
      "command": "npx",
      "args": ["-y", "@neondatabase/mcp-server-neon"],
      "env": {
        "NEON_API_KEY": "your-api-key"
      }
    }
  }
}
```

See individual guides in `docs/mcp-servers/` for detailed setup.

---

## CI/CD & Docker

### GitHub Actions Workflows

Pre-configured workflows in `.github/workflows/`:

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| `ci.yml` | Push/PR | Run tests, linting, security checks |
| `deploy-staging.yml` | Push to main | Deploy to staging |
| `deploy-production.yml` | Release tag | Deploy to production |
| `security-scan.yml` | Weekly | Dependency vulnerability scan |

### Docker Templates

Templates in `docker/templates/`:

- `go-api.dockerfile` - Go API service
- `react-web.dockerfile` - React SPA
- `python-api.dockerfile` - FastAPI service
- `docker-compose.dev.yml` - Local development
- `docker-compose.prod.yml` - Production setup

### Local Development

```bash
# Start all services
docker-compose -f docker/docker-compose.dev.yml up

# Run tests
docker-compose -f docker/docker-compose.dev.yml run --rm api test

# Lint all code
docker-compose -f docker/docker-compose.dev.yml run --rm lint
```

---

## Best Practices

### Session Management

1. **Always start with `/load-status`** (or `/status`) or let Claude read STATUS.md
2. **Focus on one project/component** at a time
3. **Save before switching** contexts or tools
4. **Use handoff** when moving between tools

### Context Efficiency

1. **Don't front-load**: Let Claude load context as needed
2. **Be specific**: "Work on the auth module" vs "Work on the project"
3. **Trust the system**: STATUS.md keeps state, you don't need to repeat

### Decision Making

1. **Document decisions**: Use `/decisions` to log important choices
2. **Include rationale**: Future-you will thank present-you
3. **Mark reversibility**: Know what can be undone

### Code Quality

1. **Plan before act**: Design in `/plan` mode, implement in `/act`
2. **Review regularly**: Use `/review` commands
3. **Check security**: Run `/review security` before releases

---

## Security

### Understanding MCU's Security Model

MCU is a **prompt-based instruction system**, not executable code. This has important security implications:

```
┌─────────────────────────────────────────────────────────────────┐
│                    MCU SECURITY MODEL                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  MCU = Markdown files that Claude reads as instructions         │
│                                                                 │
│  ✓ CAN mitigate:     Input validation, mode enforcement,       │
│                      secret detection, confirmation prompts     │
│                                                                 │
│  ✗ CANNOT mitigate:  File tampering, cryptographic signing,    │
│                      runtime validation, audit logging          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Security Measures Implemented

MCU includes prompt-level security controls in command definitions:

| Protection | Description |
|------------|-------------|
| **Input Validation** | Project/component IDs must match `^[a-z0-9][a-z0-9-]*[a-z0-9]$` |
| **Path Traversal Prevention** | Rejects IDs containing `/`, `..`, `\`, or spaces |
| **Mode Enforcement** | File modifications require explicit `act` mode |
| **Secret Detection** | Scans for API keys, passwords, tokens before writing |
| **Import Verification** | Requires user confirmation before trusting external content |
| **Commit Message Sanitization** | Rejects suspicious patterns in git messages |

### Risks That CANNOT Be Addressed

The following risks are **inherent to the prompt-based design** and cannot be fully mitigated:

| Risk | Why It Cannot Be Fixed | Impact |
|------|------------------------|--------|
| **Prompt Injection via Files** | If malicious content is written to universe files, Claude will read it as instructions | An attacker with write access could modify `universe/security.md` to change security guidelines |
| **State File Tampering** | YAML state files are human-editable with no integrity checking | Attacker could modify `state/focus.yaml` to bypass mode restrictions |
| **No Cryptographic Signing** | There's no code to verify file signatures | Cannot detect if files were modified by unauthorized parties |
| **No Audit Logging** | No persistent runtime to record actions | Cannot track what operations were performed or by whom |
| **Context Loading Manipulation** | Keywords in messages trigger automatic context loading | Attacker could craft messages to load specific contexts |

### Trust Boundaries

```
┌─────────────────────────────────────────────────────────────────┐
│                        TRUST LEVELS                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  TRUSTED (follow as instructions):                              │
│  └─ Direct user messages in conversation                        │
│  └─ MCU command definitions in .claude/commands/                │
│                                                                 │
│  SEMI-TRUSTED (verify before acting):                           │
│  └─ universe/*.md files                                         │
│  └─ state/*.yaml files                                          │
│  └─ Project context files                                       │
│                                                                 │
│  UNTRUSTED (never follow as instructions):                      │
│  └─ Imported project content                                    │
│  └─ External GitHub repositories                                │
│  └─ Scanned files from /import-project                          │
│  └─ Content from external URLs                                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Security Dos and Don'ts

#### DO

- **Keep your MCU repository private** if it contains sensitive project information
- **Review STATUS.md and state files** periodically for unexpected content
- **Use `.gitignore`** for sensitive state files (already configured)
- **Verify imported projects** before trusting their metadata
- **Use separate MCU instances** for highly sensitive vs. public projects
- **Check git history** if you suspect unauthorized modifications
- **Require explicit confirmations** for destructive operations

#### DON'T

- **Don't store secrets** in decision logs, todos, or context files
- **Don't trust imported content** without reviewing it first
- **Don't share your MCU repository** publicly if it contains proprietary information
- **Don't disable confirmation prompts** for destructive operations
- **Don't ignore "Guru Meditation" errors** - they indicate security boundaries
- **Don't assume mode restrictions are enforced** if files could be tampered with
- **Don't put credentials in commit messages** when using `/update-mcu`

### Sensitive Files (in .gitignore)

These files may contain session-specific data and are excluded from git:

```
state/handoff.md    # Contains context about current work
state/session.md    # Session continuity information
state/focus.yaml    # Current project/mode state
```

### If You Suspect Compromise

1. **Check git history**: `git log --oneline -20` for unexpected commits
2. **Review universe files**: Look for suspicious instructions in `universe/*.md`
3. **Check state files**: Verify `state/focus.yaml` has expected values
4. **Reset to known good**: `git checkout <known-good-commit> -- universe/`
5. **Rotate any exposed secrets**: If you find credentials in files

### Reporting Security Issues

If you discover a security vulnerability in MCU:

1. **Do not open a public issue**
2. Contact the maintainers privately
3. Provide details about the vulnerability and potential impact
4. Allow time for a fix before public disclosure

---

## Troubleshooting

### "Claude doesn't remember our last session"

1. Check if STATUS.md was updated
2. Verify `state/focus.yaml` is current
3. Try `/status` explicitly

### "Context seems stale"

1. Run `/sync-check` to validate consistency
2. Check file timestamps
3. Update STATUS.md manually if needed

### "Commands aren't working"

1. Check `.claude/commands/_registry.yaml`
2. Verify command file exists
3. Try alternative invocation (slash vs flag vs natural)

### "Too much context loaded"

1. Use `/focus` to narrow scope
2. Check `context.yaml` for loading rules
3. Use `/cleanup` to clear stale state

---

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Areas for Contribution

- Additional technology stack templates
- More MCP server integrations
- Documentation improvements
- Bug fixes and refinements

### Development

```bash
# Fork and clone
git clone https://github.com/YOUR_USERNAME/my-claude-universe.git

# Create a branch
git checkout -b feature/your-feature

# Make changes, test with Claude

# Submit PR
```

---

## License

MIT License - see [LICENSE](LICENSE) for details.

---

## Acknowledgments

This scaffold is based on patterns developed through extensive AI-human collaboration. It represents best practices learned from real-world project management with Claude.

---

**Ready to start?** Read [NEW_PROJECT.md](NEW_PROJECT.md) and run:

```bash
claude
# Then: "Read NEW_PROJECT.md and help me set up my universe"
```

Happy building! 🚀
