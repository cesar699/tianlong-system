
# 模块统一控制器（Module Master Controller）

该模块用于统一管理天龙系统内所有功能模块的状态开关、接口访问权限与运行状态监控。

## 核心功能

### 1. 模块开关管理
- 每个功能模块支持：启用 / 禁用 / 维护中
- 可设置默认状态 + 定时启停（定时维护）

### 2. 接口访问控制
- 针对每个模块的 API 可配置访问开关
- 支持动态拦截器统一校验模块状态

### 3. 运行状态监控
- 每个模块运行状态自动采集（如：是否正常运行、CPU占用、异常日志）
- 与控制面板集成显示

### 4. 权限集成
- 管理员可配置模块是否面向普通用户开放

## 示例结构

```
module-controller/
├── controller.ts
├── service.ts
├── module.ts
└── module-status.entity.ts
```

## API 示例

- `GET /modules`：查看所有模块状态
- `POST /modules/update`：更新指定模块状态
- `POST /modules/enable/:name`：启用模块
- `POST /modules/disable/:name`：禁用模块

## 数据示例

```json
{
  "module": "抢购系统",
  "key": "sniper",
  "enabled": true,
  "status": "running",
  "updatedAt": "2025-05-01T12:00:00"
}
```

## UI 集成建议
- 控制面板增加“模块控制”菜单项
- 支持拖拽排序 / 权限管理 / 状态可视化
