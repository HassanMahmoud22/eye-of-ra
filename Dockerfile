FROM node:20-slim AS base
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app

FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY lib/db/package.json lib/db/
COPY lib/api-spec/package.json lib/api-spec/
COPY lib/api-zod/package.json lib/api-zod/
COPY lib/api-client-react/package.json lib/api-client-react/
COPY artifacts/api-server/package.json artifacts/api-server/
COPY artifacts/eye-of-ra/package.json artifacts/eye-of-ra/
COPY artifacts/mockup-sandbox/package.json artifacts/mockup-sandbox/
COPY scripts/package.json scripts/

RUN sed -i "/: '-'$/d" pnpm-workspace.yaml
RUN pnpm install --no-frozen-lockfile

FROM base AS builder
COPY --from=deps /app/ ./
COPY . .
COPY --from=deps /app/pnpm-workspace.yaml ./pnpm-workspace.yaml

ENV NODE_ENV=production
ENV PORT=3000
ENV BASE_PATH=/

RUN pnpm --filter @workspace/eye-of-ra run build

FROM nginx:alpine
COPY --from=builder /app/artifacts/eye-of-ra/dist/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 3001
CMD ["nginx", "-g", "daemon off;"]
