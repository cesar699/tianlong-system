
<template>
  <div class="seckill-dashboard">
    <h2>多平台秒杀控制台</h2>
    <el-select v-model="platform" placeholder="选择平台" style="width: 200px;">
      <el-option v-for="p in platforms" :key="p" :label="p" :value="p" />
    </el-select>
    <el-input v-model="sku" placeholder="商品 SKU" style="width:200px; margin: 0 8px;" />
    <el-input v-model="userId" placeholder="用户 ID" style="width:200px; margin: 0 8px;" />
    <el-button type="primary" @click="startSeckill">开始秒杀</el-button>

    <h3 style="margin-top:20px;">实时库存</h3>
    <el-button @click="checkStock">查询库存</el-button>
    <div v-if="stock">
      平台: {{stock.platform}}, SKU: {{stock.sku}}, 库存: {{stock.stock}}
    </div>

    <h3 style="margin-top:20px;">秒杀日志</h3>
    <el-table :data="logs" style="width: 100%">
      <el-table-column prop="time" label="时间" />
      <el-table-column prop="platform" label="平台" />
      <el-table-column prop="sku" label="SKU" />
      <el-table-column prop="userId" label="用户" />
      <el-table-column prop="result" label="结果" />
    </el-table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from '@/utils/request'

const platforms = ['jd', 'taobao', 'pinduoduo', 'suning']
const platform = ref(platforms[0])
const sku = ref('')
const userId = ref('')
const logs = ref([])
const stock = ref(null)

const loadLogs = async () => {
  const { data } = await axios.get('/api/seckill/logs')
  logs.value = data
}

const startSeckill = async () => {
  await axios.post(`/api/seckill/start?platform=${platform.value}&sku=${sku.value}`, { userId: userId.value })
  loadLogs()
}

const checkStock = async () => {
  const { data } = await axios.get(`/api/seckill/stock?platform=${platform.value}&sku=${sku.value}`)
  stock.value = data
}

onMounted(loadLogs)
</script>

<style scoped>
.seckill-dashboard { padding: 20px; }
</style>
