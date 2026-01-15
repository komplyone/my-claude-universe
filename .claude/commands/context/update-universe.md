# Update Universe Command

Modify universal context files that apply across all projects.

## Usage

```
/update-universe [file]
--update-universe
"update universe settings"
```

## Arguments

| Argument | Required | Description |
|----------|----------|-------------|
| file | No | Specific file to update (identity, principles, security, infrastructure) |

## Behavior

1. **Check mode** - Must be in act mode
2. **Identify** which file(s) to update
3. **Load** current content
4. **Guide** user through changes
5. **Update** file(s)
6. **Run** `/sync-check` to verify consistency

## Updatable Files

| File | Contents |
|------|----------|
| `universe/identity.md` | Brand, voice, positioning |
| `universe/principles.md` | Working style, decision authority |
| `universe/security.md` | Security requirements, patterns |
| `universe/infrastructure.md` | Infrastructure standards, providers |
| `universe/defaults.yaml` | Default values for new projects |
| `universe/consistency.md` | Consistency guidelines |

## Without Arguments

Show menu of updatable files:

```
## Update Universe Context

Which file would you like to update?

1. **identity.md** - Brand, voice, positioning
2. **principles.md** - Working style, decision authority
3. **security.md** - Security requirements
4. **infrastructure.md** - Infrastructure standards
5. **defaults.yaml** - Default values
6. **consistency.md** - Consistency guidelines

Enter number or file name:
```

## Process

```
1. Load current file content
2. Show current values
3. Ask what to change
4. Validate changes make sense
5. Propose updated content
6. Get approval
7. Write changes
8. Verify with sync-check
```

## Output Format

```
## Updating: universe/[file].md

### Current Content
[Show relevant section]

### Proposed Changes
[Show diff or new content]

---

Apply these changes? (y/n)
```

## Post-Update

After updating:
- Run `/sync-check` to verify
- Note the change in session log
- Update STATUS.md if significant

## Notes

- Requires act mode
- Changes affect all projects
- Consider implications before changing
- Document reasoning for significant changes
