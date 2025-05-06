<template>
  <div>
    <h2>审计日志</h2>
    <el-form inline @submit.prevent="fetchLogs">
      <el-input v-model="filter.level" placeholder="级别" />
      <el-date-picker v-model="filter.from" type="date" placeholder="开始日期" />
      <el-date-picker v-model="filter.to" type="date" placeholder="结束日期" />
      <el-button @click="fetchLogs">查询</el-button>
    </el-form>
    <el-table :data="logs">
      <el-table-column prop="timestamp" label="时间" />
      <el-table-column prop="level" label="级别" />
      <el-table-column prop="message" label="消息" />
    </el-table>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import api from '@/utils/api';

const filter = ref({ level: '', from: '', to: '' });
const logs = ref([]);

async function fetchLogs() {
  logs.value = await api.get('/audit-logs', filter.value);
}

onMounted(fetchLogs);
</script>
