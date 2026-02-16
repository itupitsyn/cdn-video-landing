FROM oven/bun:slim AS base
WORKDIR /app

# 1. Установка зависимостей
FROM base AS deps
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# 2. Сборка приложения
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

RUN bunx prisma generate
RUN bun run build

# 3. Финальный образ
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
# Настройка порта
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Копируем только необходимые файлы для standalone режима
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

# Запускаем сервер с помощью Bun
CMD ["bun", "server.js"]
