FROM oven/bun:1.0.9-alpine AS deps
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json ./
RUN bun install

# Rebuild the source code only when needed
FROM node:20.9.0-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1

RUN ls
RUN yarn build

# Production image, copy all the files and run next
FROM node:20.9.0-alpine AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 80
ENV PORT 80

CMD ["node", "server.js"]