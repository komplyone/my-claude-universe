# Go API Dockerfile
# Multi-stage build for development and production

# ============================================
# Base Stage
# ============================================
FROM golang:1.22-alpine AS base

RUN apk add --no-cache git ca-certificates tzdata

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

# ============================================
# Development Stage
# ============================================
FROM base AS development

# Install air for hot reload
RUN go install github.com/cosmtrek/air@latest

# Install delve for debugging
RUN go install github.com/go-delve/delve/cmd/dlv@latest

COPY . .

EXPOSE 8080
EXPOSE 2345

CMD ["air", "-c", ".air.toml"]

# ============================================
# Builder Stage
# ============================================
FROM base AS builder

COPY . .

# Build with optimizations
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build \
    -ldflags="-w -s -X main.Version=${VERSION:-dev}" \
    -o /app/server \
    ./cmd/server

# ============================================
# Production Stage
# ============================================
FROM alpine:3.19 AS production

RUN apk add --no-cache ca-certificates tzdata wget

# Create non-root user
RUN addgroup -g 1000 app && \
    adduser -u 1000 -G app -s /bin/sh -D app

WORKDIR /app

# Copy binary from builder
COPY --from=builder /app/server .

# Use non-root user
USER app

EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD wget -qO- http://localhost:8080/health || exit 1

ENTRYPOINT ["./server"]
