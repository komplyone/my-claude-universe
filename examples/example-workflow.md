# Example Workflow

> A walkthrough of common workflows in the universe.

---

## Scenario: Adding a User Profile Feature

Let's walk through a complete feature development workflow.

### 1. Starting the Session

```
User: Hey Claude, let's continue

Claude: [Reads STATUS.md]

## Current Status

**Focus**: my-app / api
**Mode**: ask
**Last Session**: Yesterday

### Recent Progress
- Set up project structure
- Created database schema

### Open Threads
- User authentication is ready
- Need to add profile feature

---

What would you like to work on?
```

### 2. Planning the Feature

```
User: Let's add user profiles

Claude: Good idea! Let me switch to plan mode first.

[/plan]

## Mode: Plan

Now in plan mode. I'll help design this without making changes yet.

Let me ask a few questions about the profile feature:

1. What fields should a user profile have?
   - Name, bio, avatar?
   - Location?
   - Social links?

2. Should profiles be public or private by default?

3. Any profile-related features?
   - Avatar upload?
   - Profile URL (e.g., /u/username)?
```

### 3. Documenting Requirements

```
User: Basic fields: name, bio, avatar. Public by default.
      Yes to avatar upload and profile URLs.

Claude: Got it! Let me create a feature plan.

## Feature Plan: User Profiles

### Requirements

**Must Have**:
- [ ] Profile fields: name, bio, avatar_url
- [ ] Profile URL: /u/{username}
- [ ] Avatar upload to R2 storage
- [ ] Profile visibility (public default)

**Nice to Have**:
- [ ] Social links
- [ ] Profile banner image

### Technical Design

**Database Changes**:
```sql
CREATE TABLE user_profiles (
  user_id UUID PRIMARY KEY REFERENCES users(id),
  name VARCHAR(100),
  bio TEXT,
  avatar_url VARCHAR(255),
  username VARCHAR(50) UNIQUE,
  is_public BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

**API Endpoints**:
- GET /api/v1/users/{username}/profile
- PUT /api/v1/users/me/profile
- POST /api/v1/users/me/avatar

**Files to Create/Modify**:
- `migrations/002_add_profiles.sql` (new)
- `internal/models/profile.go` (new)
- `internal/handlers/profile.go` (new)
- `internal/repository/profile.go` (new)

---

Does this plan look good? Ready to implement?
```

### 4. Getting Approval

```
User: Looks good, let's do it!

Claude: Great! Switching to act mode.

[/act]

## Mode: Act

Starting implementation. I'll create the files and
run tests as we go.

Let me add these tasks to track progress:

### Tasks
- [ ] Create migration for profiles table
- [ ] Add profile model
- [ ] Implement profile repository
- [ ] Create profile handlers
- [ ] Add routes
- [ ] Write tests

Starting with the migration...
```

### 5. Implementation

```
Claude: Created migration file:

📄 migrations/002_add_profiles.sql

```sql
-- User profiles
CREATE TABLE user_profiles (
  user_id UUID PRIMARY KEY REFERENCES users(id),
  name VARCHAR(100),
  bio TEXT,
  avatar_url VARCHAR(255),
  username VARCHAR(50) UNIQUE NOT NULL,
  is_public BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_profiles_username ON user_profiles(username);
```

Shall I continue with the model and repository?

User: Yes, continue

Claude: [Creates remaining files...]

✅ Migration created
✅ Profile model created
✅ Profile repository created
✅ Profile handlers created
✅ Routes added
⏳ Tests next...

Running tests...

```bash
$ go test ./...
ok   my-app/internal/handlers   0.234s
ok   my-app/internal/repository 0.156s
```

All tests passing! Implementation complete.

Shall I document this decision and update STATUS.md?
```

### 6. Documenting the Decision

```
User: Yes, document it

Claude: Adding to decisions log:

## DEC-MYAPP-001: User Profile Schema

**Date**: 2024-01-15
**Status**: active

### Context
Need to add user profiles with basic info and avatar support.

### Decision
- Separate profiles table linked to users
- Username-based profile URLs (/u/{username})
- Public profiles by default
- Avatar storage in R2

### Rationale
- Separation allows profile-specific queries without user table bloat
- Username URLs are SEO-friendly and shareable
- Public default aligns with social platform patterns

### Reversible
Partially - schema changes would need migration

---

STATUS.md updated with today's progress.
```

### 7. Ending the Session

```
User: Great work, I'm done for today

Claude: [/save]

## Session Saved

### Progress Captured
- ✅ Created user profiles feature
- ✅ Database migration added
- ✅ API endpoints implemented
- ✅ Tests written and passing
- ✅ Decision documented

### Next Steps
- Deploy migration to staging
- Test avatar upload flow
- Consider social links (nice-to-have)

---

STATUS.md updated. See you next time!
```

---

## Other Common Workflows

### Code Review

```
/review security internal/handlers/
```

### Switching Projects

```
/focus other-project web
```

### Tool Transition

```
/handoff cursor
```

### Checking Status

```
/status
```

---

## Key Patterns

1. **Start with /status** to load context
2. **Use /plan before /act** for significant work
3. **Document decisions** for future reference
4. **Save before ending** to preserve state
5. **Use handoff** when switching tools
