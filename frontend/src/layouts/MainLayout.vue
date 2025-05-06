<template>
  <div class="main-layout">
    <header>
      <h1>{{ $t('dashboard') }}</h1>
      <LanguageSwitcher />
    </header>
    <router-view />
  </div>
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';

export default {
  name: 'MainLayout',
  components: {
    LanguageSwitcher
  }
}
</script>
