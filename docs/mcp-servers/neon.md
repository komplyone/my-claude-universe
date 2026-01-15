# Neon MCP Server Setup

> Direct PostgreSQL database management through Claude.

---

## What It Does

The Neon MCP server allows Claude to:

- List and create projects
- Manage database branches
- Run SQL queries
- Execute migrations
- Analyze query performance
- Compare schemas between branches

---

## Prerequisites

1. **Neon Account**: Sign up at [neon.tech](https://neon.tech)
2. **API Key**: Generate from Neon Console → Account Settings → API Keys

---

## Setup

### 1. Get Your API Key

1. Go to [Neon Console](https://console.neon.tech)
2. Click your profile → Account Settings
3. Go to API Keys
4. Create a new API key
5. Copy the key (you won't see it again)

### 2. Configure Claude Code

Add to `~/.claude/mcp.json`:

```json
{
  "mcpServers": {
    "neon": {
      "command": "npx",
      "args": ["-y", "@neondatabase/mcp-server-neon"],
      "env": {
        "NEON_API_KEY": "your-neon-api-key"
      }
    }
  }
}
```

### 3. Restart Claude Code

Close and reopen Claude Code for changes to take effect.

### 4. Verify

Ask Claude:

```
List my Neon projects
```

---

## Usage Examples

### List Projects

```
Show me my Neon projects
```

### Create a Database

```
Create a new Neon project called "my-app"
```

### Run Queries

```
Run this query on my-app project:
SELECT * FROM users LIMIT 10
```

### Create a Branch

```
Create a staging branch from main on my-app project
```

### Compare Schemas

```
Compare the schema between main and staging branches
```

### Analyze Performance

```
Analyze this slow query:
SELECT * FROM orders WHERE user_id = 123
```

---

## Available Tools

| Tool | Description |
|------|-------------|
| `list_projects` | List all Neon projects |
| `create_project` | Create a new project |
| `describe_project` | Get project details |
| `run_sql` | Execute SQL queries |
| `run_sql_transaction` | Run multiple statements |
| `create_branch` | Create database branch |
| `describe_branch` | Get branch details |
| `compare_database_schema` | Diff schemas |
| `prepare_database_migration` | Plan migrations |
| `complete_database_migration` | Apply migrations |
| `prepare_query_tuning` | Analyze query performance |
| `list_slow_queries` | Find slow queries |

---

## Best Practices

### Use Branches for Testing

```
Create a test branch, run migrations there, then apply to main
```

### Review Before Migrating

Claude will show you the migration plan before applying.

### Monitor Query Performance

```
List slow queries on my production database
```

---

## Troubleshooting

### "Invalid API Key"

- Verify the key in Neon Console
- Check for extra whitespace
- Regenerate if needed

### "Project Not Found"

- Check project ID is correct
- Verify API key has access to the project

### Connection Timeouts

- Check if compute is suspended (wake it up)
- Verify network connectivity

---

## Resources

- [Neon Documentation](https://neon.tech/docs)
- [MCP Server Repository](https://github.com/neondatabase/mcp-server-neon)
