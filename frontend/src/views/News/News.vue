
<template>
  <div>
    <h2>每日新闻</h2>
    <ul>
      <li v-for="n in news" :key="n.title">{{ n.title }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from '@/utils/request'

const news = ref([])
onMounted(async () => {
  const { data } = await axios.get('/api/news/daily')
  news.value = data
})
</script>
