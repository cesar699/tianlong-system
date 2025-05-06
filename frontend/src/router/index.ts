
// Insert routes for new modules
routes.push(
  { path: '/audit', component: () => import('@/views/AuditLog.vue'), meta: { requiresRole: 'audit:view' } },
  { path: '/plugins', component: () => import('@/views/Plugin.vue'), meta: { requiresRole: 'plugin:view' } }
);