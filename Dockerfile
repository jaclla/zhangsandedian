# 构建阶段
FROM docker.1ms.run/library/node:latest AS builder

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm docs:build

# 生产阶段
FROM docker.1ms.run/library/nginx:latest

COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
