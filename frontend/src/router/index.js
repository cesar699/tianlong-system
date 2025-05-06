
import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/BaseLayout.vue'
import ApiManagement from '@/components/ApiManagement.vue'
import ProxySettings from '@/components/ProxySettings.vue'
import MobileLayout from '@/layouts/MobileLayout.vue'
import Dashboard from '@/views/Dashboard.vue'
import PurchaseSystem from '@/views/PurchaseSystem.vue'
import Scheduler from '@/views/Scheduler.vue'
import APIEditor from '@/components/APIEditor.vue'

const routes = [
  {
    path: '/m',
    component: MobileLayout,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'purchase', component: PurchaseSystem },
      { path: 'scheduler', component: Scheduler }
    ]
  },
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'purchase', component: PurchaseSystem },
      { path: 'scheduler', component: Scheduler },
      { path: 'api-editor', component: APIEditor }
    ]
  },
  { path: '/ncm-login', component: () => import('@/components/NeteaseLogin.vue') },
  { path: '/api-management', component: ApiManagement },
  { path: '/proxy-settings', component: ProxySettings },
  { path: '/schedule', component: ScheduledTasks },
  { path: '/:pathMatch(.*)*', redirect: '/dashboard' }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
