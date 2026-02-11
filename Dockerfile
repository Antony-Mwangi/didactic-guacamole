
FROM node:20-alpine AS builder
WORKDIR /app


COPY package*.json ./
RUN npm ci


COPY . .


ARG MONGODB_URI
ENV MONGODB_URI=$MONGODB_URI

RUN npm run build


FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production


ARG MONGODB_URI
ENV MONGODB_URI=$MONGODB_URI


COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000


CMD ["node", "server.js"]