# Welcome to My Claude Universe (MCU)

> **For Claude**: This file guides new users through MCU setup. Ask questions, be helpful, and make this a great onboarding experience.
>
> **MCU** = My Claude Universe - the complete system for AI-human collaboration.

---

## Hello, New User!

You've just cloned MCU - a complete system for AI-human collaboration. This guide will help you:

1. **Initialize your MCU** - Personalize it for your needs
2. **Create your first project** - Get started building
3. **Set up your workflow** - Configure tools and automation

Let's get started!

---

## Step 1: MCU Initialization

### What Claude Should Do

Claude, please ask the user these questions to personalize their MCU:

#### 1.1 Basic Identity

```
Questions to ask:
- What's your name or username?
- What's your company/brand name? (or "personal" for individual use)
- What's your main focus? (e.g., "SaaS products", "mobile apps", "consulting", etc.)
- What tone do you prefer? (Professional / Casual / Technical / Mixed)
```

#### 1.2 Working Style

```
Questions to ask:
- How hands-on do you want to be with AI decisions?
  - "Very hands-on" = Claude asks before most actions
  - "Balanced" = Claude proposes significant changes, acts on small ones
  - "Trust Claude" = Claude acts autonomously, reports after

- Do you want commit messages, PR descriptions, etc. in a specific format?
- Any coding style preferences? (tabs/spaces, naming conventions, etc.)
```

#### 1.3 Technology Preferences

```
Questions to ask:
- Do you have existing projects you want to import?
  - If yes: "Give me the local path or GitHub URL"
  - Claude can scan and auto-detect tech stacks

- Do you have preferred technologies?
  - Backend: Go / Python / Node / Rust / Other
  - Frontend: React / Vue / Svelte / Other
  - Mobile: Flutter / React Native / Native / None
  - Desktop: Tauri / Electron / Native / None

- Or do you want to use the recommended default stack?
  (Go + React + Flutter + Tauri + Neon + Hetzner + Redis Cloud)
```

#### 1.4 Infrastructure

```
Questions to ask:
- Do you have accounts with any cloud providers?
  - Hetzner / AWS / GCP / Azure / DigitalOcean / Other

- Database preference?
  - Neon (PostgreSQL) / Supabase / PlanetScale / MongoDB / Other

- Do you need caching?
  - Redis Cloud / Upstash / None

- What region should be primary?
  - EU (recommended for GDPR) / US / Asia / Other

- Budget constraints?
  - Hobby (free tiers only)
  - Personal ($0-50/month)
  - Startup ($50-500/month)
  - Business ($500+/month)
```

### After Gathering Information

Claude, update these files with the user's answers:

1. `STATUS.md` - Set the username and current focus
2. `universe/identity.md` - Brand and voice
3. `universe/principles.md` - Working style preferences
4. `universe/infrastructure.md` - Infrastructure choices
5. `universe/defaults.yaml` - Default values

---

## Step 2: GitHub Repository Setup

### What Claude Should Do

```
Questions to ask:
- Do you want to initialize a Git repository now?
- Do you want to create a GitHub repository?
  - If yes: "What should it be called?"
  - If yes: "Public or private?"

- Do you have the GitHub CLI (gh) installed?
  - If not, offer to help install it
```

### Git Initialization Steps

If the user wants Git setup:

```bash
# Claude should run these (with user permission):
git init
git add .
git commit -m "Initial commit: My Claude Universe scaffold"

# If creating GitHub repo:
gh repo create [name] --private --source=. --remote=origin --push
```

---

## Step 3: First Project Creation

### What Claude Should Do

```
Questions to ask:
- Ready to create your first project?
- What do you want to build?
  - Give a brief description

- What type of project?
  [ ] Web application
  [ ] Mobile app
  [ ] Desktop application
  [ ] API / Backend service
  [ ] CLI tool
  [ ] Library / Package
  [ ] Full-stack (multiple clients)
```

### Technology Stack Selection

Based on project type, ask:

```
For Web Applications:
- Frontend framework: React (recommended) / Vue / Svelte / Other
- Styling: Tailwind (recommended) / CSS Modules / Styled Components
- State management: Zustand (recommended) / Redux / Jotai

For Mobile Apps:
- Framework: Flutter (recommended) / React Native / Native
- Platforms: iOS / Android / Both

For Desktop Apps:
- Framework: Tauri (recommended) / Electron
- Platforms: macOS / Windows / Linux / All

For Backend/API:
- Language: Go (recommended) / Python / Node / Rust
- Framework: [depends on language choice]
- Database: PostgreSQL via Neon (recommended)

For CLI Tools:
- Language: Go (recommended) / Rust / Python / Node
```

### Or Use Default Stack

```
Offer the user:
"Would you like to use the recommended default stack?"

Default Stack:
├── Backend: Go with Chi router
├── Database: PostgreSQL via Neon
├── Cache: Redis Cloud
├── Web: React with TypeScript + Tailwind
├── Mobile: Flutter
├── Desktop: Tauri (Rust + React)
├── Hosting: Hetzner
├── CI/CD: GitHub Actions
└── Containerization: Docker

This stack is optimized for:
- Cost efficiency (generous free tiers)
- Developer experience
- Production readiness
- Cross-platform support
```

---

## Step 4: Claude Project Setup (Optional)

### For Claude Chat Users

If the user uses Claude Chat (claude.ai), help them set up a Claude Project:

```
Questions to ask:
- Do you use Claude Chat (claude.ai) in addition to Claude Code?
- Would you like to set up a Claude Project for browser-based work?
```

If yes, provide these instructions:

1. Go to claude.ai
2. Create a new Project
3. Name it: `[Universe Name]`
4. In the Instructions field, paste the contents of:
   `.claude/project-instructions.md`

Claude should also:
- Generate a customized `project-instructions.md` based on setup
- Offer to display it for easy copy-paste

---

## Step 5: Slash Commands Setup

### What Claude Should Do

Explain the command system:

```
Your universe comes with built-in commands:

ESSENTIAL COMMANDS:
/status     - Continue from where you left off
/focus      - Switch to a specific project/component
/save       - Save your progress before ending
/handoff    - Prepare context for another tool

PROJECT COMMANDS:
/new-project     - Create a new project
/plan-feature    - Plan a new feature

REVIEW COMMANDS:
/review security     - Security review
/review performance  - Performance review
/review code         - Code quality review

MODE COMMANDS:
/plan  - Design without changing files
/act   - Make changes and implement
/ask   - Read-only exploration
```

Ask:

```
- Would you like me to create custom commands for your workflow?
- Any specific shortcuts you frequently need?
```

---

## Step 6: MCP Server Setup (Optional)

### What Claude Should Do

```
Questions to ask:
- Do you want to set up MCP servers for enhanced capabilities?

Available servers:
[ ] Neon - Manage PostgreSQL databases directly
[ ] Hetzner - Manage cloud servers
[ ] Redis Cloud - Manage Redis instances
[ ] GitHub - Enhanced repository operations
[ ] Chrome Control - Browser automation

For each selected:
- Help user get API keys
- Update their MCP configuration
- Test the connection
```

See `docs/mcp-servers/` for detailed guides.

---

## Step 7: CI/CD & Docker Setup (Optional)

### What Claude Should Do

```
Questions to ask:
- Do you want to set up CI/CD with GitHub Actions?
  - Testing on push/PR?
  - Automatic deployment?
  - Security scanning?

- Do you want Docker configuration?
  - Local development environment?
  - Production containers?
```

If yes, customize the templates in:
- `.github/workflows/`
- `docker/`

---

## Step 8: Final Verification

### What Claude Should Do

Run through a checklist:

```
VERIFICATION CHECKLIST:

[ ] STATUS.md is personalized
[ ] universe/identity.md reflects user's brand
[ ] universe/principles.md has working preferences
[ ] universe/infrastructure.md has provider choices
[ ] projects/_index.yaml exists (empty or with first project)
[ ] Git is initialized (if requested)
[ ] GitHub repo is created (if requested)
[ ] First project is created (if requested)
[ ] Commands are working (/status test)
```

### Welcome Message

After setup, tell the user:

```
🎉 Your Claude Universe is ready!

QUICK REFERENCE:
- Start sessions with: /status
- Switch projects with: /focus [project]
- Save progress with: /save
- Get help with: /help

NEXT STEPS:
1. Start working on your project
2. Use /plan-feature to design new features
3. Use /review before releases

Your universe is saved in this repository.
Commit regularly to keep your context safe!

Happy building!
```

---

## Reference: Files to Customize

| File | Purpose | When to Edit |
|------|---------|--------------|
| `STATUS.md` | Session bootstrap | Auto-updated each session |
| `universe/identity.md` | Brand & voice | When brand changes |
| `universe/principles.md` | Working style | When preferences change |
| `universe/security.md` | Security rules | When requirements change |
| `universe/infrastructure.md` | Infra standards | When providers change |
| `projects/_index.yaml` | Project registry | When adding/removing projects |

---

## Reference: Example Conversation

Here's how a setup conversation might go:

```
User: Read NEW_PROJECT.md and help me set up my universe

Claude: Welcome! I'll help you set up your Claude Universe. Let's start
with some questions to personalize your setup.

First, what's your name or username?

User: Alex

Claude: Great, Alex! What's your company or brand name? If this is for
personal projects, just say "personal".

User: I'm building stuff for my startup, TechNova

Claude: TechNova - nice! What's the main focus of TechNova?

User: We're building developer tools, specifically for API testing

Claude: Developer tools for API testing - that's a great space.
What tone do you prefer for code comments, documentation, etc.?
- Professional
- Casual
- Technical
- Mixed

User: Technical

Claude: Perfect. Now for working style - how hands-on do you want to be
with AI decisions?
[continues with setup...]
```

---

## Need Help?

- Check the [README.md](README.md) for full documentation
- Review [docs/guides/](docs/guides/) for specific topics
- Open an issue on GitHub

Welcome to your Claude Universe! 🌌
