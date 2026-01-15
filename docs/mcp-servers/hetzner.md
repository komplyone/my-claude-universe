# Hetzner MCP Server Setup

> Cloud server management through Claude.

---

## What It Does

The Hetzner MCP server allows Claude to:

- List and manage servers
- Create and delete VMs
- Manage firewalls
- Handle volumes
- Manage SSH keys
- Control power state

---

## Prerequisites

1. **Hetzner Account**: Sign up at [hetzner.com](https://www.hetzner.com/cloud)
2. **API Token**: Generate from Cloud Console

---

## Setup

### 1. Get Your API Token

1. Go to [Hetzner Cloud Console](https://console.hetzner.cloud)
2. Select your project (or create one)
3. Go to Security → API Tokens
4. Generate new API token (Read & Write)
5. Copy the token

### 2. Configure Claude Code

Add to `~/.claude/mcp.json`:

```json
{
  "mcpServers": {
    "hetzner": {
      "command": "npx",
      "args": ["-y", "@hetzner/mcp-server"],
      "env": {
        "HETZNER_API_TOKEN": "your-hetzner-api-token"
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
List my Hetzner servers
```

---

## Usage Examples

### List Servers

```
Show me my Hetzner servers
```

### Create a Server

```
Create a new Hetzner server:
- Name: web-server
- Type: cx22
- Image: ubuntu-22.04
- Location: fsn1
```

### Manage Power

```
Reboot my web-server
```

### Set Up Firewall

```
Create a firewall that allows HTTP and HTTPS traffic
```

### Manage Volumes

```
Create a 50GB volume and attach it to web-server
```

---

## Available Tools

| Tool | Description |
|------|-------------|
| `list_servers` | List all servers |
| `get_server` | Get server details |
| `create_server` | Create new server |
| `delete_server` | Delete server |
| `power_on` | Power on server |
| `power_off` | Power off server |
| `reboot` | Reboot server |
| `list_firewalls` | List firewalls |
| `create_firewall` | Create firewall |
| `set_firewall_rules` | Configure rules |
| `list_volumes` | List volumes |
| `create_volume` | Create volume |
| `attach_volume` | Attach to server |
| `list_ssh_keys` | List SSH keys |
| `create_ssh_key` | Add SSH key |

---

## Server Types Reference

| Type | vCPU | RAM | SSD | Price (approx) |
|------|------|-----|-----|----------------|
| cx22 | 2 | 4GB | 40GB | €4/mo |
| cx32 | 4 | 8GB | 80GB | €8/mo |
| cx42 | 8 | 16GB | 160GB | €15/mo |
| cx52 | 16 | 32GB | 320GB | €30/mo |

---

## Locations

| Code | Location |
|------|----------|
| fsn1 | Falkenstein, DE |
| nbg1 | Nuremberg, DE |
| hel1 | Helsinki, FI |
| ash | Ashburn, US |
| hil | Hillsboro, US |

---

## Best Practices

### Use SSH Keys

```
Add my SSH key and use it for new servers
```

### Set Up Firewalls First

```
Create a firewall with only necessary ports before creating servers
```

### Use Labels

```
Add labels env=production to my server
```

---

## Troubleshooting

### "Unauthorized"

- Verify API token is correct
- Check token has Read & Write permissions
- Token might have expired

### "Resource Not Found"

- Check resource ID
- Verify you're in the right project

### Rate Limits

- Hetzner has API rate limits
- Wait and retry if hitting limits

---

## Resources

- [Hetzner Cloud Documentation](https://docs.hetzner.com/cloud)
- [Hetzner API Reference](https://docs.hetzner.cloud)
