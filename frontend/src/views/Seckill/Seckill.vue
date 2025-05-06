
<template>
  <div>
    <h2>商品抢购</h2>
    <el-input v-model="productId" placeholder="输入商品ID" />
    <el-button type="primary" @click="startSeckill">开始抢购</el-button>
    <div v-if="status">状态：{{ status }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from '@/utils/request'

const productId = ref('')
const status = ref('')

const startSeckill = async () => {
  const { data } = await axios.post('/api/seckill/start', { productId: productId.value })
  status.value = data.status
}
</script>
