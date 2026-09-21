# 构建阶段
FROM registry.cn-shanghai.aliyuncs.com/aipgpt/node:20-alpine AS buildstage

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
# 固定 pnpm 版本，避免跟随 latest 变化导致构建行为不一致
RUN npm install -g --registry=https://registry.npmmirror.com pnpm@10.10.0
RUN pnpm install --frozen-lockfile

# 只复制构建所需内容，避免无关文件影响缓存
COPY docs ./docs
COPY tsconfig.json ./
COPY postcss.config.js ./
COPY tailwind.config.js ./

RUN pnpm docs:build

# 生产阶段
FROM registry.cn-shanghai.aliyuncs.com/aipgpt/nginx

COPY --from=buildstage /app/docs/.vitepress/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
