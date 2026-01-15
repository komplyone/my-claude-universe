# Contributing to My Claude Universe

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

---

## Ways to Contribute

### Bug Reports

Found a bug? Please open an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Environment details

### Feature Requests

Have an idea? Open an issue with:
- Clear description of the feature
- Why it would be useful
- Possible implementation approach

### Code Contributions

Want to contribute code? Great! Follow the process below.

### Documentation

Documentation improvements are always welcome:
- Fix typos
- Improve clarity
- Add examples
- Update outdated information

---

## Development Process

### 1. Fork and Clone

```bash
# Fork on GitHub, then:
git clone https://github.com/YOUR_USERNAME/my-claude-universe.git
cd my-claude-universe
```

### 2. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

### 3. Make Changes

- Follow existing code style
- Update documentation if needed
- Test your changes with Claude

### 4. Test with Claude

Before submitting, test that:
- Commands work as expected
- Documentation is clear
- No existing functionality is broken

### 5. Commit

```bash
git add .
git commit -m "Add: brief description of changes"
```

Commit message prefixes:
- `Add:` New feature
- `Fix:` Bug fix
- `Update:` Enhancement to existing feature
- `Docs:` Documentation only
- `Refactor:` Code restructuring

### 6. Push and Create PR

```bash
git push origin feature/your-feature-name
```

Then open a Pull Request on GitHub.

---

## Pull Request Guidelines

### Before Submitting

- [ ] Code follows existing patterns
- [ ] Documentation is updated
- [ ] Changes tested with Claude
- [ ] Commit messages are clear
- [ ] PR description explains changes

### PR Description Template

```markdown
## Summary
Brief description of changes.

## Changes
- Change 1
- Change 2

## Testing
How the changes were tested.

## Related Issues
Fixes #123
```

---

## Code Style

### File Naming

- Lowercase with hyphens: `my-file.md`
- YAML configs: `config.yaml`
- Commands: `command-name.md`

### Markdown Style

- Use ATX headers (`#`, `##`, etc.)
- One sentence per line (for diffs)
- Code blocks with language hints

### YAML Style

- 2 space indentation
- Quoted strings when needed
- Comments for non-obvious values

---

## Areas for Contribution

### High Priority

- Additional technology stack templates
- More MCP server integrations
- Internationalization (i18n)
- Accessibility improvements

### Medium Priority

- New slash commands
- Better error handling
- Performance optimizations
- Additional examples

### Documentation

- Tutorial content
- Video script outlines
- FAQ sections
- Troubleshooting guides

---

## Communication

### Issues

Use GitHub Issues for:
- Bug reports
- Feature requests
- Questions

### Pull Requests

- Reference related issues
- Respond to feedback promptly
- Be patient with review process

---

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

## Questions?

Open an issue with the `question` label.

Thank you for contributing!
