
<template>
  <div>
    <h2>AI模型切换</h2>
    <el-select v-model="current" @change="switchModel">
      <el-option label="ChatGPT" value="ChatGPT" />
      <el-option label="Claude" value="Claude" />
      <el-option label="Gemini" value="Gemini" />
      <el-option label="DeepSeek" value="DeepSeek" />
    </el-select>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from '@/utils/request'

const current = ref('')

onMounted(async () => {
  const { data } = await axios.get('/api/aimodel/current')
  current.value = data.model
})

const switchModel = async (val) => {
  await axios.get('/api/aimodel/switch', { params: { name: val } })
}
</script>
