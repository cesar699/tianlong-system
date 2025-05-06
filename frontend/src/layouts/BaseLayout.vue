
<template>
  <div class="base-layout">
    <header class="header">
      <div class="logo">天龙系统</div>
      <el-tabs v-model="activeTab" @tab-click="onTabClick" class="module-tabs">
        <el-tab-pane v-for="item in tabs" :key="item.path" :label="$t(item.label)" :name="item.path" />
      </el-tabs>
      <LanguageSwitcher />
    </header>
    <aside class="sidebar" :class="{ collapsed }">
      <el-menu :default-active="$route.path" class="el-menu-vertical">
        <el-menu-item v-for="item in menu" :key="item.path" :index="item.path">
          <i :class="item.icon"></i>
          <span>{{ $t(item.label) }}</span>
        </el-menu-item>
      </el-menu>
      <div class="collapse-btn" @click="collapsed = !collapsed">
        <i :class="collapsed ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
      </div>
    </aside>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

const router = useRouter()
const activeTab = ref('dashboard')
const collapsed = ref(false)

const tabs = [
  { label: 'dashboard', path: '/dashboard' },
  { label: 'purchaseSystem', path: '/purchase' },
  { label: 'scheduler', path: '/scheduler' },
  // ... add more as needed
]

const menu = [
  { label: 'dashboard', path: '/dashboard', icon: 'el-icon-s-home' },
  { label: 'purchaseSystem', path: '/purchase', icon: 'el-icon-shopping-bag-1' },
  { label: 'scheduler', path: '/scheduler', icon: 'el-icon-timer' },
  // ... add more items
]

function onTabClick(tab) {
  router.push(tab.name)
}
</script>

<style scoped src="../assets/styles/theme.css"></style>
