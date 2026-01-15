# Waiting / Blocked Items

> Items waiting for approval, external input, or blocked by dependencies.

---

## Pending Approvals

| Item | Waiting For | Since | Context |
|------|-------------|-------|---------|
| _None_ | | | |

<!--
Example:
| Deploy to staging | User approval | 2024-01-15 | Ready to deploy, needs sign-off |
| Database migration | DBA review | 2024-01-14 | Schema change needs review |
-->

---

## Blocked by External

| Item | Blocked By | Since | Notes |
|------|------------|-------|-------|
| _None_ | | | |

<!--
Example:
| API integration | Third-party API access | 2024-01-10 | Applied for API key |
| Design work | Designer availability | 2024-01-12 | Waiting for mockups |
-->

---

## Blocked by Internal

| Item | Blocked By | Since | Notes |
|------|------------|-------|-------|
| _None_ | | | |

<!--
Example:
| Feature B | Feature A completion | 2024-01-15 | Depends on Feature A |
| Mobile app | API endpoints | 2024-01-14 | Needs backend first |
-->

---

## Recently Resolved

| Item | Resolution | Date |
|------|------------|------|
| _None_ | | |

---

## Managing This List

### Adding Items

When something is blocked:
1. Add to appropriate section
2. Note what it's waiting for
3. Include relevant context

### Resolving Items

When unblocked:
1. Move to "Recently Resolved"
2. Note the resolution
3. Continue with the work

### Checking Status

Claude should check this file:
- At session start (via /status)
- Before proposing blocked work
- When asked about blockers

---

**Last Updated**: Never (template)
