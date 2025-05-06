
# 天龙系统 (Tianlong System)

## 项目名称
**天龙系统**

## 目录
- [概述](#概述)
- [部署](#部署)
- [API 文档](#api-文档)
- [模块功能](#模块功能)
- [开发与测试](#开发与测试)

## 概述
天龙系统是一个高度模块化的全栈平台，支持抢购、AI创作、可视化控制、自动化任务、安全、IP工具、天气、音乐、学习、新闻、赚钱等功能。

...（其余内容保持不变）

## 改进与扩展功能集成
1. **代理池与 IP 轮换**：可通过 `USE_PROXY` 与 `PROXY_POOL_URL` 配置启用。
2. **多账号并发**：设置 `MULTI_ACCOUNT=true`，支持多账号同时入列抢购。
3. **AI 策略引擎**：`AI_STRATEGY_ENABLED=true` 可开启基于历史数据的智能调度。
4. **真实登录与验证码处理**：已在 Docker 镜像中集成 Chromium，方便 Puppeteer 无头浏览器调用。
5. **通知与告警**：通过 `NOTIFY_WEBHOOK_URL` 或 SMTP (`NOTIFY_EMAIL_*`) 发送抢购结果通知。
6. **分布式 Worker**：在 `docker-compose.yml` 中新增 `worker` 服务，可使用 `--scale worker=<n>` 横向扩展消费者。


## 全量扩展功能概览

1. **CI/CD (GitHub Actions)**  
   - 自动化测试、Lint、构建前端与后端  
   - 服务依赖：MySQL、MongoDB、Redis  

2. **API 文档 (Swagger)**  
   - 访问路径：`/api-docs`  
   - 基于 NestJS Swagger 模块自动生成  

3. **监控 (Prometheus & Grafana)**  
   - Prometheus 端口：`9090`  
   - Grafana 端口：`3000`  

4. **分布式追踪 (Jaeger)**  
   - Jaeger UI：`http://localhost:16686`  
   - 接收 UDP traces：`6831/udp`  

5. **鉴权 (JWT)**  
   - 环境变量 `JWT_SECRET` 配置  
   - 后端模块 `AuthModule`（需后续实现）  

```yaml
# 示例 Prometheus 配置文件路径：docker/prometheus.yml
# 示例 Jaeger 集成请在后端添加 @UseInterceptors(TraceInterceptor) 等
```

## 国际化支持
- 支持中英文 (zh-CN, en-US)
- 默认简体中文 (可通过环境变量 `VUE_APP_LOCALE` 切换)
- 前端采用 vue-i18n，后端采用 nestjs-i18n


### 网赚功能增强

- **持久化存储**：使用 MongoDB 保存机会列表  
- **定时刷新**：内置 Cron 任务 (默认每小时) 自动更新机会  
- **实时更新**：支持 SSE (`/api/money/stream`) 和 WebSocket (`/money` 命名空间)  
- **详细字段**：包含 `estimatedProfit`, `timeCost`, `successRate`  
- **权限保护**：接口添加 JWT 验证  
- **国际化**：多语言支持，界面文本可切换中英文  


### 内容聚合模块增强

- 插件化架构：支持动态注册内容源插件 (`backend/src/modules/aggregation/plugins`)
- 缓存：使用 CacheModule (Redis) 多级缓存，刷新周期可配置 (`AGG_CRON`)
- 存储：统一 `ContentItem` Schema 保存在 MongoDB
- 全文检索：集成 Elasticsearch (9200)，后续可实现全文搜索
- 定时刷新：Cron 每5分钟自动抓取与更新内容
- 实时推送：SSE 接口 `/api/aggregation/stream` 提供实时数据


## 核心模块改进与扩展（代码骨架已生成）

- **AI 创作 (ai)**：提示管理、成本监控、质量评估等功能骨架  
- **可视化控制 (visualization)**：可视化看板编辑器与联动支持骨架  
- **自动化任务 (tasks)**：可视化工作流设计与任务依赖管理骨架  
- **安全工具 (security)**：扫描调度、分级报告与合规审计骨架  
- **IP 工具 (ip-tools)**：离线数据库与批量查询支持骨架  

> 提示：请在 `backend/src/modules/<module>` 下补全具体逻辑，结合已有服务与依赖进行实现。


## 改进与扩展方案文档
- 查看 [docs/system-improvement-plan.md](docs/system-improvement-plan.md) 了解详细计划。
