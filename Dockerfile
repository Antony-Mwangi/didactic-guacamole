# --- Stage 1: Build ---
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build Arguments (passed from Jenkins)
ARG MONGODB_URI
ENV MONGODB_URI=$MONGODB_URI

RUN npm run build

# --- Stage 2: Runner ---
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Re-declare ARG in the second stage to make it available at runtime
ARG MONGODB_URI
ENV MONGODB_URI=$MONGODB_URI

# Copy standalone build files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

# Next.js standalone server
CMD ["node", "server.js"]