
<template>
  <div class="proxy-settings">
    <h2>{{ $t('proxySettings') }}</h2>
    <el-input
      type="textarea"
      :rows="4"
      v-model="proxyText"
      placeholder="每行一个代理，如 proxy1:8000"
    />
    <el-button type="primary" @click="save">{{ $t('save') }}</el-button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from '@/utils/request'

const proxyText = ref('')

const loadProxies = async () => {
  const { data } = await axios.get('/api/settings/proxies')
  proxyText.value = data.join('\n')
}

const save = async () => {
  const proxies = proxyText.value.split('\n').map(l => l.trim()).filter(l => l)
  await axios.post('/api/settings/proxies', { proxies })
  alert('Saved')
}

onMounted(loadProxies)
</script>

<style scoped>
.proxy-settings { padding: 20px; }
</style>
