
<template>
  <div>
    <h2>天气查询</h2>
    <el-input v-model="city" placeholder="输入城市名" />
    <el-button @click="fetchWeather">查询</el-button>
    <div v-if="weather">{{ weather.city }}：{{ weather.temperature }}，{{ weather.description }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from '@/utils/request'

const city = ref('北京')
const weather = ref(null)

const fetchWeather = async () => {
  const { data } = await axios.get('/api/weather', { params: { city: city.value } })
  weather.value = data
}
</script>
