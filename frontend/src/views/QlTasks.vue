
<template>
  <div class="ql-tasks">
    <h2>定时任务管理 (Qinglong)</h2>
    <el-button type="primary" @click="fetchTasks">刷新列表</el-button>
    <el-table :data="tasks" style="width:100%; margin-top: 20px;">
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="command" label="命令" />
      <el-table-column prop="schedule" label="Cron 表达式" />
      <el-table-column prop="status" label="状态" />
      <el-table-column label="操作" width="220">
        <template #default="scope">
          <el-button size="small" @click="runTask(scope.row.id)">执行</el-button>
          <el-button size="small" type="danger" @click="deleteTask(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from '@/utils/request'

const tasks = ref([])

const fetchTasks = async () => {
  const { data } = await axios.get('/api/ql/tasks')
  tasks.value = data.data || data  // depending on Qinglong API response structure
}

const runTask = async (id) => {
  await axios.put(`/api/ql/tasks/${id}/run`)
  fetchTasks()
}

const deleteTask = async (id) => {
  await axios.delete(`/api/ql/tasks/${id}`)
  fetchTasks()
}

fetchTasks()
</script>

<style scoped>
.ql-tasks { padding: 20px; }
</style>
