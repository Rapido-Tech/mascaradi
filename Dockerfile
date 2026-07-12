# --- deps: install all dependencies (needed for the build stage) ---
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# --- builder: generate Prisma client and build the Next.js app ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# --- runner: minimal production image ---
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV DATABASE_URL="file:/app/data/prod.db"

# Prisma's query engine needs OpenSSL on Alpine
RUN apk add --no-cache openssl

RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# Next.js standalone output: a pruned server + only the node_modules it traced
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Prisma CLI + schema, needed at startup to push the schema before serving
COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma
COPY --from=builder --chown=nextjs:nodejs /app/node_modules/prisma ./node_modules/prisma
COPY --from=builder --chown=nextjs:nodejs /app/node_modules/.bin/prisma ./node_modules/.bin/prisma

COPY --chown=nextjs:nodejs docker-entrypoint.sh ./docker-entrypoint.sh
RUN chmod +x docker-entrypoint.sh && mkdir -p /app/data && chown nextjs:nodejs /app/data

VOLUME ["/app/data"]
USER nextjs

EXPOSE 3000

ENTRYPOINT ["./docker-entrypoint.sh"]
