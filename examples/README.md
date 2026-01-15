# Examples

> Optional example content demonstrating the universe workflow. Feel free to delete this folder after reviewing.

---

## What's Here

This folder contains example configurations and projects to help you understand how the universe works.

### Example Project

The `example-project/` directory shows a fully configured project with:
- Complete `project.yaml` configuration
- Detailed `context.md` with architecture
- Component definitions
- Task and decision tracking

### Example Workflow

See `example-workflow.md` for a walkthrough of common workflows:
- Starting a new session
- Creating a feature
- Handling code reviews
- Managing handoffs

---

## Using These Examples

### Learning

1. Read through the example project structure
2. Follow the example workflow
3. Understand how files reference each other

### Starting Fresh

Once you understand the patterns:

```bash
# Delete examples folder
rm -rf examples/

# Run sync-check to confirm clean state
# (via Claude): /sync-check
```

Or keep them as reference - they don't affect your actual projects.

---

## Creating Your Own Examples

If you want to document your own patterns:

1. Add files to this `examples/` folder
2. Use clear naming and documentation
3. They won't interfere with real projects

---

**Note**: Examples are not registered in `projects/_index.yaml` and are isolated from your actual universe.
