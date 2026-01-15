# Security Review Command

Review code for security vulnerabilities.

## Usage

```
/review security [target]
--review security
"security audit"
"check security"
```

## Arguments

| Argument | Required | Description |
|----------|----------|-------------|
| target | No | File or directory to review (defaults to current focus) |

## Behavior

1. **Load** security guidelines from `universe/security.md`
2. **Identify** target files to review
3. **Analyze** for security issues
4. **Report** findings with severity
5. **Suggest** fixes

## What Gets Checked

### Authentication & Authorization
- [ ] Proper authentication on all protected routes
- [ ] Role-based access control implemented correctly
- [ ] Session management secure
- [ ] Password handling follows best practices

### Input Validation
- [ ] All user inputs validated
- [ ] Parameterized queries (no SQL injection)
- [ ] Output encoding (no XSS)
- [ ] File upload restrictions

### Data Protection
- [ ] Sensitive data encrypted at rest
- [ ] Secure transmission (HTTPS/TLS)
- [ ] PII handling compliant
- [ ] Secrets not in code

### API Security
- [ ] Rate limiting implemented
- [ ] CORS configured correctly
- [ ] API keys not exposed
- [ ] Request size limits

### Dependencies
- [ ] No known vulnerable dependencies
- [ ] Dependencies up to date
- [ ] Minimal dependency surface

## Severity Levels

| Level | Description |
|-------|-------------|
| CRITICAL | Immediate exploitation possible |
| HIGH | Serious vulnerability, fix soon |
| MEDIUM | Moderate risk, should fix |
| LOW | Minor issue, fix when convenient |
| INFO | Best practice suggestion |

## Output Format

```
## Security Review: [target]

### Summary
- Critical: [N]
- High: [N]
- Medium: [N]
- Low: [N]

### Findings

#### [CRITICAL] SQL Injection in user.go:45
**File**: `internal/user/user.go`
**Line**: 45
**Issue**: Raw SQL query with string concatenation
**Risk**: Database compromise, data theft
**Fix**:
```go
// Before (vulnerable)
query := "SELECT * FROM users WHERE id = " + userID

// After (safe)
query := "SELECT * FROM users WHERE id = $1"
db.Query(query, userID)
```

#### [HIGH] Missing Authentication on /api/admin
**File**: `internal/routes/routes.go`
**Line**: 78
**Issue**: Admin endpoint has no auth middleware
**Risk**: Unauthorized admin access
**Fix**: Add `authMiddleware` to route

[Additional findings...]

---

### Recommendations
1. [Priority fix for critical issues]
2. [Next steps]

### Clean Areas
- Authentication flow: OK
- Password hashing: OK
```

## Post-Review

Options after review:
1. Generate fix tasks (`/todos`)
2. Start fixing issues (`/act`)
3. Document in decisions
4. Request human review

## Notes

- Based on OWASP Top 10
- Follows `universe/security.md` guidelines
- Automated scan, not exhaustive
- Consider professional audit for production
