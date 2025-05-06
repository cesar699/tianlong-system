
// frontend/src/config/apiList.js
export default [
  { name: '登录', method: 'POST', url: '/api/user/login', description: '用户登录' },
  { name: '注册', method: 'POST', url: '/api/user/register', description: '用户注册' },
  { name: '获取用户信息', method: 'GET', url: '/api/user/profile', description: '获取当前用户信息' },
  { name: '秒杀开始', method: 'POST', url: '/api/seckill/start', description: '发起秒杀请求' },
  { name: '秒杀日志', method: 'GET', url: '/api/seckill/logs', description: '获取秒杀日志' },
  { name: '健康检测', method: 'GET', url: '/api/seckill-monitor/health', description: '获取接口健康状态' },
  { name: 'IP 切换', method: 'POST', url: '/api/seckill-monitor/ip-switch', description: '手动切换 IP' },
  { name: '获取角色', method: 'GET', url: '/api/permission/roles', description: '查询角色列表' },
  { name: '创建角色', method: 'POST', url: '/api/permission/roles', description: '创建新角色' },
  { name: '获取配置', method: 'GET', url: '/api/settings', description: '获取系统配置项' },
  { name: '更新配置', method: 'POST', url: '/api/settings/update', description: '更新系统配置项' },
  { name: '网易云登录', method: 'POST', url: '/api/ncm/login', description: '网易云音乐登录' },
  { name: '获取歌单', method: 'GET', url: '/api/ncm/playlists', description: '获取用户歌单' },
  { name: '获取日志', method: 'GET', url: '/api/logs', description: '获取系统日志' },
  { name: '清空日志', method: 'POST', url: '/api/logs/clear', description: '清空日志' },
  { name: '获取天气', method: 'GET', url: '/api/weather/city?name=城市', description: '查询城市天气' },
  { name: '获取新闻', method: 'GET', url: '/api/news/top', description: '获取热点新闻' },
  // ... add more entries here
];
