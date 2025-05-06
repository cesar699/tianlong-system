
<template>
  <div>
    <h2>学习资源</h2>
    <ul>
      <li v-for="res in resources" :key="res.id">{{ res.name }} ({{ res.type }})</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from '@/utils/request'

const resources = ref([])
onMounted(async () => {
  const { data } = await axios.get('/api/study/resources')
  resources.value = data
})
</script>
