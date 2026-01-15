# React Web Dockerfile
# Multi-stage build for development and production

# ============================================
# Base Stage
# ============================================
FROM node:20-alpine AS base

WORKDIR /app

COPY package*.json ./

# ============================================
# Development Stage
# ============================================
FROM base AS development

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# ============================================
# Builder Stage
# ============================================
FROM base AS builder

RUN npm ci

COPY . .

# Build with production optimizations
ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

RUN npm run build

# ============================================
# Production Stage (Nginx)
# ============================================
FROM nginx:alpine AS production

# Copy custom nginx config
COPY docker/nginx.conf /etc/nginx/nginx.conf

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD wget -qO- http://localhost/health || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
