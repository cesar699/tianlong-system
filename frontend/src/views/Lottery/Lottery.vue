
<template>
  <div>
    <h2>彩票推荐</h2>
    <el-button @click="getRecommendations">获取推荐号码</el-button>
    <div v-if="numbers.length">推荐号码：{{ numbers.join(', ') }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from '@/utils/request'

const numbers = ref([])
const getRecommendations = async () => {
  const { data } = await axios.get('/api/lottery/recommend')
  numbers.value = data.numbers
}
</script>
