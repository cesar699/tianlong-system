
<template>
  <div>
    <h2>AI小说生成</h2>
    <el-input v-model="title" placeholder="小说标题" />
    <el-button type="success" @click="generate">生成</el-button>
    <div v-if="result.title"><h3>{{ result.title }}</h3><p>{{ result.content }}</p></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from '@/utils/request'

const title = ref('')
const result = ref({})

const generate = async () => {
  const { data } = await axios.post('/api/ai/novel', { title: title.value })
  result.value = data
}
</script>
