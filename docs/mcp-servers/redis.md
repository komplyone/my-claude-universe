# Redis Cloud MCP Server Setup

> Managed Redis cache operations through Claude.

---

## What It Does

The Redis Cloud MCP server allows Claude to:

- List subscriptions and databases
- Create and manage databases
- Monitor tasks and operations
- View available plans and regions

---

## Prerequisites

1. **Redis Cloud Account**: Sign up at [redis.io/cloud](https://redis.io/try-free/)
2. **API Credentials**: Generate from Account Settings

---

## Setup

### 1. Get API Credentials

1. Go to [Redis Cloud Console](https://app.redislabs.com)
2. Go to Account → Access Management → API Keys
3. Create a new API key
4. Copy both the **API Key** and **Secret Key**

### 2. Configure Claude Code

Add to `~/.claude/mcp.json`:

```json
{
  "mcpServers": {
    "redis-cloud": {
      "command": "npx",
      "args": ["-y", "@redis/mcp-server"],
      "env": {
        "REDIS_CLOUD_API_KEY": "your-api-key",
        "REDIS_CLOUD_SECRET_KEY": "your-secret-key"
      }
    }
  }
}
```

### 3. Restart Claude Code

Close and reopen Claude Code.

### 4. Verify

Ask Claude:

```
List my Redis Cloud subscriptions
```

---

## Usage Examples

### List Subscriptions

```
Show my Redis Cloud subscriptions
```

### Create Essential Database

```
Create a free Redis database in AWS us-east-1
```

### List Databases

```
List databases in my subscription
```

### Get Available Plans

```
Show available Redis Cloud plans for AWS
```

---

## Available Tools

| Tool | Description |
|------|-------------|
| `get-current-account` | Get account info |
| `get-current-payment-methods` | List payment methods |
| `get-database-modules` | List available modules |
| `get-pro-plans-regions` | List regions for pro plans |
| `get-pro-subscriptions` | List pro subscriptions |
| `get-pro-subscription` | Get subscription details |
| `create-pro-subscription` | Create pro subscription |
| `get-essential-subscriptions` | List essential subscriptions |
| `create-essential-subscription` | Create essential subscription |
| `get-pro-databases` | List pro databases |
| `create-pro-database` | Create pro database |
| `get-essential-databases` | List essential databases |
| `create-essential-database` | Create essential database |
| `get-tasks` | List running tasks |
| `get-task-by-id` | Get task status |

---

## Subscription Types

### Essential (Recommended for Starting)

- Fixed pricing
- Simpler management
- Good for small workloads
- Free tier available (30MB)

### Pro

- Flexible scaling
- More configuration options
- Better for production
- More expensive

---

## Free Tier Details

Redis Cloud offers a free tier with:
- 30MB storage
- 30 connections
- 1 database
- Single zone

Great for development and small projects!

---

## Best Practices

### Use Essential for Dev

```
Create an essential subscription for development
```

### Monitor Tasks

```
Check status of task [task-id]
```

### Enable Modules When Needed

```
What database modules are available?
```

---

## Troubleshooting

### "Invalid Credentials"

- Verify both API Key and Secret Key
- Check for whitespace
- Regenerate if needed

### "Subscription Not Found"

- Verify subscription ID
- Check account access

### Task Failures

- Check task status for error details
- Verify payment method is valid

---

## Resources

- [Redis Cloud Documentation](https://redis.io/docs/cloud/)
- [Redis Cloud API Reference](https://api.redislabs.com/v1/swagger-ui.html)
