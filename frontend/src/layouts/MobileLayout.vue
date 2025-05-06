
<template>
  <div class="mobile-layout">
    <header class="mobile-header">{{ $t('dashboard') }}</header>
    <router-view />
    <nav class="mobile-nav">
      <router-link v-for="item in menu" :key="item.path" :to="item.path">
        {{ $t(item.label) }}
      </router-link>
    </nav>
  </div>
</template>

<script setup>
const menu = [
  { label: 'dashboard', path: '/dashboard' },
  { label: 'purchaseSystem', path: '/purchase' },
  { label: 'scheduler', path: '/scheduler' }
  // add more as needed
];
</script>

<style scoped>
.mobile-layout { display: flex; flex-direction: column; height: 100vh; }
.mobile-header { background: var(--header-bg); color: var(--text-color); padding: 10px; text-align: center; }
.mobile-nav { display: flex; justify-content: space-around; background: var(--bg-color); padding: 5px 0; }
.mobile-nav a { color: var(--text-color); text-decoration: none; font-size: 14px; }
</style>
