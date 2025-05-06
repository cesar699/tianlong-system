<template>
  <div>
    <h2>{{ $t('money.title') }}</h2>
    <button @click="toggle">{{ enabled ? $t('money.disable') : $t('money.enable') }}</button>
    <ul>
      <li v-for="op in opportunities" :key="op._id">
        <h3>{{ op.title }}</h3>
        <p>{{ op.description }}</p>
        <p>{{ $t('money.risk') }}: {{ op.risk }}</p>
        <p>{{ $t('money.profit') }}: {{ op.estimatedProfit }}</p>
        <p>{{ $t('money.timeCost') }}: {{ op.timeCost }}h</p>
        <p>{{ $t('money.successRate') }}: {{ (op.successRate * 100) | number(0) }}%</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from '@/utils/request'

const opportunities = ref([])
const enabled = ref(true)

async function fetchData() {
  const { data } = await axios.get('/api/money/opportunities')
  if (data.status !== 'disabled') {
    opportunities.value = data
    enabled.value = true
  } else {
    opportunities.value = []
    enabled.value = false
  }
}

function toggle() {
  axios.post('/api/money/toggle', null, { params: { enable: (!enabled.value).toString() } })
    .then(() => fetchData())
}

onMounted(() => {
  fetchData()
  // SSE for real-time
  const es = new EventSource('/api/money/stream')
  es.onmessage = e => {
    opportunities.value = JSON.parse(e.data)
  }
})
</script>
