# GitHub MCP Server Setup

> Enhanced GitHub operations through Claude.

---

## What It Does

The GitHub MCP server extends Claude's GitHub capabilities:

- Repository management
- Issue and PR operations
- File operations
- Branch management
- Search across repositories

---

## Prerequisites

1. **GitHub Account**: You already have this
2. **Personal Access Token**: Generate from Settings

---

## Setup

### 1. Create Personal Access Token

1. Go to GitHub → Settings → Developer settings
2. Click "Personal access tokens" → "Tokens (classic)"
3. Generate new token with scopes:
   - `repo` (full control of repositories)
   - `read:org` (if working with organizations)
4. Copy the token

### 2. Configure Claude Code

Add to `~/.claude/mcp.json`:

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_your_token_here"
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
List my recent GitHub repositories
```

---

## Usage Examples

### Repository Operations

```
Create a new private repository called "my-project"
```

```
Fork the repository owner/repo
```

### Issues

```
Create an issue in my-project:
Title: Bug in authentication
Body: Users can't log in after password reset
Labels: bug, high-priority
```

```
List open issues in my-project
```

### Pull Requests

```
Create a PR from feature-branch to main
Title: Add user authentication
Body: Implements JWT-based auth
```

### File Operations

```
Read the README.md from my-project
```

```
Create a new file CONTRIBUTING.md in my-project
```

### Search

```
Search for repositories about "machine learning" in Python
```

---

## Available Tools

| Tool | Description |
|------|-------------|
| `create_repository` | Create new repo |
| `get_file_contents` | Read file from repo |
| `create_or_update_file` | Write file to repo |
| `push_files` | Push multiple files |
| `create_issue` | Create issue |
| `create_pull_request` | Create PR |
| `fork_repository` | Fork a repo |
| `create_branch` | Create branch |
| `search_repositories` | Search repos |
| `search_code` | Search code |
| `search_issues` | Search issues |

---

## Token Scopes

| Scope | What It Allows |
|-------|----------------|
| `repo` | Full access to repositories |
| `read:org` | Read organization data |
| `gist` | Create and manage gists |
| `delete_repo` | Delete repositories |

Start with `repo` and add more as needed.

---

## Best Practices

### Use Fine-Grained Tokens

Consider using fine-grained personal access tokens for:
- Limited repository access
- Specific permissions
- Better security

### Organize with Labels

```
Add labels to my issue: bug, high-priority, v2.0
```

### Use Templates

```
Create an issue using the bug_report template
```

---

## Troubleshooting

### "Bad Credentials"

- Token might have expired
- Check token has required scopes
- Regenerate token if needed

### "Not Found"

- Check repository exists
- Verify you have access
- Repository might be private

### Rate Limits

- GitHub has API rate limits
- Authenticated requests: 5000/hour
- Wait and retry if hitting limits

---

## Security Notes

- Keep your token secure
- Never commit tokens to repositories
- Use environment variables
- Rotate tokens periodically
- Consider using fine-grained tokens for specific tasks

---

## Resources

- [GitHub API Documentation](https://docs.github.com/en/rest)
- [Creating Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
