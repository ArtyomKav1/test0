
FROM node:20-alpine AS builder


RUN apk add --no-cache git python3 make g++ && \
    corepack enable && \
    corepack prepare pnpm@latest --activate

WORKDIR /app
COPY pnpm-lock.yaml package.json ./
RUN pnpm install --frozen-lockfile
COPY . .


FROM node:20-alpine


RUN corepack enable && \
    corepack prepare pnpm@latest --activate

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY . .

RUN pnpm prune --prod

EXPOSE 3000
CMD ["node", "index.js"]