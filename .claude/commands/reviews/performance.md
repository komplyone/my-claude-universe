# Performance Review Command

Review code for performance issues.

## Usage

```
/review performance [target]
--review performance
"perf review"
"check performance"
```

## Arguments

| Argument | Required | Description |
|----------|----------|-------------|
| target | No | File or directory to review (defaults to current focus) |

## Behavior

1. **Identify** target files to review
2. **Analyze** for performance issues
3. **Report** findings with impact
4. **Suggest** optimizations

## What Gets Checked

### Database
- [ ] N+1 query problems
- [ ] Missing indexes on queried columns
- [ ] Large result sets without pagination
- [ ] Unnecessary data fetching
- [ ] Connection pool usage

### Memory
- [ ] Memory leaks (unclosed resources)
- [ ] Large object allocations
- [ ] Inefficient data structures
- [ ] Unbounded caches
- [ ] Buffer sizing

### CPU
- [ ] Unnecessary loops or iterations
- [ ] Blocking operations on main thread
- [ ] Inefficient algorithms (O(n²) when O(n) possible)
- [ ] Redundant computations
- [ ] Missing caching opportunities

### I/O
- [ ] Synchronous I/O in async contexts
- [ ] Missing streaming for large files
- [ ] Excessive disk operations
- [ ] Network call optimization

### Frontend (if applicable)
- [ ] Bundle size optimization
- [ ] Unnecessary re-renders
- [ ] Missing lazy loading
- [ ] Image optimization
- [ ] Caching headers

## Impact Levels

| Level | Description |
|-------|-------------|
| HIGH | Significant user-facing impact |
| MEDIUM | Noticeable under load |
| LOW | Minor optimization opportunity |
| INFO | Best practice suggestion |

## Output Format

```
## Performance Review: [target]

### Summary
- High Impact: [N]
- Medium Impact: [N]
- Low Impact: [N]

### Findings

#### [HIGH] N+1 Query in GetUsers
**File**: `internal/user/service.go`
**Line**: 67-80
**Issue**: Loading user roles in a loop causes N+1 queries
**Impact**: ~100ms per user loaded
**Fix**:
```go
// Before (N+1)
for _, user := range users {
    user.Roles = db.GetRolesByUser(user.ID)
}

// After (single query with join)
users := db.GetUsersWithRoles()
```

#### [MEDIUM] Missing Index on orders.user_id
**File**: `migrations/001_create_orders.sql`
**Issue**: Frequent queries filter by user_id without index
**Impact**: Full table scan on large datasets
**Fix**:
```sql
CREATE INDEX idx_orders_user_id ON orders(user_id);
```

[Additional findings...]

---

### Quick Wins
1. Add index on orders.user_id (5 min, high impact)
2. Enable gzip compression (10 min, medium impact)

### Deeper Optimizations
1. Implement query result caching
2. Add pagination to user list endpoint

### Metrics to Monitor
- Query response times
- Memory usage trends
- API response latency
```

## Post-Review

Options after review:
1. Generate optimization tasks
2. Start implementing fixes
3. Benchmark before/after
4. Schedule for later

## Notes

- Focus on measurable impact
- Avoid premature optimization
- Profile first for production issues
- Consider trade-offs (readability vs speed)
