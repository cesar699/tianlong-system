
<template>
  <div class="jd-seckill">
    <el-input v-model="sku" placeholder="输入商品 SKU" style="width: 300px; margin-right: 8px;"/>
    <el-button type="primary" @click="buy">开始抢购</el-button>
    <el-button @click="loadStatus">刷新状态</el-button>
    <div v-if="status">
      <h4>当前队列：</h4>
      <ul>
        <li v-for="item in status.queue" :key="item">{{ item }}</li>
      </ul>
      <p>时间戳：{{ status.timestamp }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from '@/utils/request'

const sku = ref('')
const status = ref(null)

const buy = async () => {
  if (!sku.value) return
  const { data } = await axios.post(`/api/jd/buy?sku=${sku.value}`)
  await loadStatus()
}

const loadStatus = async () => {
  const { data } = await axios.get('/api/jd/status')
  status.value = data
}

onMounted(() => {
  loadStatus()
})
</script>

<style scoped>
.jd-seckill {
  padding: 20px;
}
</style>
