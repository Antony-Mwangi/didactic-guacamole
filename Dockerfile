# --- Stage 1: Build ---
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies first for better caching
COPY package*.json ./
RUN npm ci

# Copy all source files
COPY . .

# --- NEW: Handle the MONGODB_URI for the Build Process ---
# This accepts the variable from the --build-arg flag in Jenkins
ARG MONGODB_URI
# This makes it available as a system environment variable during "npm run build"
ENV MONGODB_URI=$MONGODB_URI

RUN npm run build

# --- Stage 2: Production Runner ---
FROM node:20-alpine AS runner
WORKDIR /app

# Ensure we are in production mode
ENV NODE_ENV=production

# Copy the standalone output and static assets
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

# Start the optimized server
CMD ["node", "server.js"]