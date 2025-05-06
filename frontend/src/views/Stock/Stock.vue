
<template>
  <div>
    <h2>股票走势分析</h2>
    <el-button @click="loadTrend">查看走势</el-button>
    <div v-if="trend.length">
      <p>股票：{{ stock }}</p>
      <p>走势：{{ trend.join(' → ') }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from '@/utils/request'

const stock = ref('')
const trend = ref([])

const loadTrend = async () => {
  const { data } = await axios.get('/api/stock/trend')
  stock.value = data.stock
  trend.value = data.trend
}
</script>
