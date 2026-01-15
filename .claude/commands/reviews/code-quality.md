# Code Quality Review Command

Review code for quality and best practices.

## Usage

```
/review code [target]
--review code
"code review"
"review quality"
```

## Arguments

| Argument | Required | Description |
|----------|----------|-------------|
| target | No | File or directory to review (defaults to current focus) |

## Behavior

1. **Identify** target files to review
2. **Analyze** for quality issues
3. **Report** findings by category
4. **Suggest** improvements

## What Gets Checked

### Code Structure
- [ ] Single responsibility principle
- [ ] Appropriate function length
- [ ] Reasonable file size
- [ ] Clear module boundaries
- [ ] Proper separation of concerns

### Naming & Readability
- [ ] Clear, descriptive names
- [ ] Consistent naming conventions
- [ ] Self-documenting code
- [ ] Appropriate comments (not too many/few)
- [ ] Logical code organization

### Error Handling
- [ ] All errors handled appropriately
- [ ] Meaningful error messages
- [ ] No swallowed exceptions
- [ ] Proper error propagation
- [ ] User-friendly error responses

### Testing
- [ ] Adequate test coverage
- [ ] Tests are maintainable
- [ ] Edge cases covered
- [ ] Tests are actually testing something
- [ ] No flaky tests

### Maintainability
- [ ] DRY (Don't Repeat Yourself)
- [ ] Minimal complexity
- [ ] Easy to extend
- [ ] Well-defined interfaces
- [ ] Appropriate abstractions

### Language-Specific
Based on language, check for:
- Go: Error handling, goroutine leaks, idiomatic patterns
- Python: Type hints, pythonic idioms, PEP 8
- JavaScript/TypeScript: Async handling, type safety
- Rust: Ownership patterns, unsafe usage

## Categories

| Category | Focus |
|----------|-------|
| BUG | Likely bugs or logic errors |
| STYLE | Style and convention issues |
| MAINTAINABILITY | Long-term maintenance concerns |
| COMPLEXITY | Overly complex code |
| DOCUMENTATION | Missing or poor documentation |
| TESTING | Test quality issues |

## Output Format

```
## Code Quality Review: [target]

### Summary
- Files reviewed: [N]
- Issues found: [N]
- Overall quality: [Good/Needs Work/Poor]

### By Category
- Bugs: [N]
- Style: [N]
- Maintainability: [N]
- Complexity: [N]

### Findings

#### [BUG] Potential nil pointer in user.go:89
**File**: `internal/user/user.go`
**Line**: 89
**Issue**: `user.Profile` accessed without nil check
**Suggestion**:
```go
if user.Profile != nil {
    return user.Profile.Name
}
return ""
```

#### [COMPLEXITY] Function too long (150 lines)
**File**: `internal/order/service.go`
**Function**: `ProcessOrder`
**Issue**: Function does too many things, hard to test
**Suggestion**: Break into smaller functions:
- `validateOrder()`
- `calculateTotals()`
- `applyDiscounts()`
- `saveOrder()`

#### [STYLE] Inconsistent naming
**File**: `internal/api/handlers.go`
**Issue**: Mix of `getUserHandler` and `HandleGetProduct`
**Suggestion**: Use consistent pattern: `handleGetUser`, `handleGetProduct`

[Additional findings...]

---

### Strengths
- Good test coverage in auth module
- Clean separation of concerns in API layer
- Consistent error handling pattern

### Improvement Areas
1. Reduce function complexity in order processing
2. Add missing documentation to public APIs
3. Consolidate duplicate validation logic

### Quick Fixes
- [ ] Add nil checks (5 instances)
- [ ] Rename inconsistent handlers
- [ ] Remove unused imports
```

## Post-Review

Options after review:
1. Generate improvement tasks
2. Start fixing issues
3. Focus on specific category
4. Save report for team review

## Notes

- Subjective aspects are suggestions, not mandates
- Focus on actionable feedback
- Balance perfectionism with pragmatism
- Consider project context and constraints
