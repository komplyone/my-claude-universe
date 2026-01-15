# MCP Server Integration

> Model Context Protocol (MCP) servers extend Claude's capabilities by providing direct access to external services.

---

## What is MCP?

MCP (Model Context Protocol) allows Claude to interact directly with external services like databases, cloud providers, and APIs. Instead of you copying data back and forth, Claude can:

- Query your database directly
- Manage cloud servers
- Access external APIs
- Perform operations on your behalf

---

## Available MCP Servers

| Server | Purpose | Setup Guide |
|--------|---------|-------------|
| **Neon** | PostgreSQL database management | [neon.md](neon.md) |
| **Hetzner** | Cloud server management | [hetzner.md](hetzner.md) |
| **Redis Cloud** | Redis cache management | [redis.md](redis.md) |
| **GitHub** | Enhanced repository operations | [github.md](github.md) |

---

## General Setup

### Claude Code Configuration

MCP servers are configured in `~/.claude/mcp.json`:

```json
{
  "mcpServers": {
    "server-name": {
      "command": "npx",
      "args": ["-y", "@package/mcp-server"],
      "env": {
        "API_KEY": "your-api-key"
      }
    }
  }
}
```

### Verifying Setup

After configuring, restart Claude Code and ask:

```
What MCP servers are available?
```

Claude should list the configured servers.

---

## Security Considerations

### API Keys

- Store API keys securely (not in git)
- Use environment variables where possible
- Rotate keys periodically
- Use least-privilege access

### Access Control

- MCP servers can perform real operations
- Be careful with destructive commands
- Review what operations each server enables
- Consider read-only access for exploration

---

## Troubleshooting

### Server Not Connecting

1. Check `mcp.json` syntax
2. Verify API key is correct
3. Restart Claude Code
4. Check server-specific requirements

### Permission Errors

1. Verify API key has required permissions
2. Check account/project access
3. Review server documentation

---

## Contributing

Want to add a new MCP server guide? See [CONTRIBUTING.md](../../CONTRIBUTING.md).
