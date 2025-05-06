
<template>
  <div>
    <h2>系统模块状态</h2>
    <ul>
      <li v-for="(value, key) in status" :key="key">{{ key }}: {{ value ? '启用' : '禁用' }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from '@/utils/request'

const status = ref({})

onMounted(async () => {
  const { data } = await axios.get('/api/control/status')
  status.value = data
})
</script>
