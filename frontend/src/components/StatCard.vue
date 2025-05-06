
<template>
  <el-card class="stat-card">
    <div class="stat-title">{{ title }}</div>
    <div class="stat-number">{{ number }}</div>
    <div class="stat-sub">{{ subtitle }}</div>
  </el-card>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: String,
  number: [String, Number],
  subtitle: String
})
</script>

<style scoped>
.stat-card {
  background: var(--bg-color);
  border-radius: 8px;
  color: var(--text-color);
  padding: 16px;
  margin: 8px;
}
.stat-title { font-size: 14px; }
.stat-number { font-size: 32px; font-weight: bold; color: var(--primary-color); }
.stat-sub { font-size: 12px; color: var(--sub-text-color); margin-top: 4px; }
</style>
