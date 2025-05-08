# 第一阶段：构建 TypeScript
FROM node:18 AS builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# 第二阶段：运行已构建好的 JS 文件
FROM node:18-alpine

WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package.json .
RUN npm install --only=production

CMD ["node", "dist/main.js"]
