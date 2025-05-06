
<template>
  <div class="dashboard-page">
    <div class="stats-grid">
      <StatCard title="$t('purchaseSystem')" :number="1234" subtitle="$t('实时抢购总量')" />
      <StatCard title="$t('scheduler')" :number="56" subtitle="$t('今日任务数')" />
      <StatCard title="$t('news')" :number="8" subtitle="$t('今日新闻数')" />
      <StatCard title="$t('aiCenter')" :number="12" subtitle="$t('AI生成任务')" />
    </div>
    <NeteaseMusicEmbed />
    <!-- 这里可以添加更多图表组件 -->
  </div>
</template>

<script setup>
import StatCard from '@/components/StatCard.vue'
import NeteaseMusicEmbed from '@/components/NeteaseMusicEmbed.vue'
</script>

<style scoped src="../assets/styles/theme.css"></style>
