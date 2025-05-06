
<template>
  <div class="scheduled-tasks">
    <h2>{{ $t('scheduler') }}</h2>
    <el-form :model="form" label-width="120px">
      <el-form-item label="任务类型">
        <el-select v-model="form.type">
          <el-option label="秒杀" value="seckill"></el-option>
          <el-option label="视频发布" value="videoPublish"></el-option>
          <el-option label="内容生成" value="contentGenerate"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="用户ID">
        <el-input v-model="form.userId"></el-input>
      </el-form-item>
      <el-form-item label="项列表(逗号分隔)">
        <el-input v-model="form.items"></el-input>
      </el-form-item>
      <el-form-item label="Cron 表达式">
        <el-input v-model="form.schedule"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addTask">添加任务</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tasks" style="width: 100%; margin-top: 20px;">
      <el-table-column prop="id" label="ID" />
      <el-table-column prop="type" label="类型" />
      <el-table-column prop="userId" label="用户" />
      <el-table-column prop="items" label="项" />
      <el-table-column prop="schedule" label="时间表达式" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="danger" size="small" @click="removeTask(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button style="margin-top: 10px;" @click="loadQueueStatus">{{ $t('queueStatus') }}</el-button>
    <div>{{ queueStatus }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from '@/utils/request'

const form = ref({ type: 'seckill', userId: '', items: '', schedule: '' })
const tasks = ref([])
const queueStatus = ref(null)

const loadTasks = async () => {
  const { data } = await axios.get('/api/schedule/tasks')
  tasks.value = data
}

const addTask = async () => {
  const task = { 
    id: Date.now().toString(), 
    type: form.value.type, 
    userId: form.value.userId, 
    items: form.value.items.split(','), 
    schedule: form.value.schedule 
  }
  await axios.post('/api/schedule/task', task)
  loadTasks()
}

const removeTask = async (id) => {
  await axios.delete('/api/schedule/task', { params: { id } })
  loadTasks()
}

const loadQueueStatus = async () => {
  const { data } = await axios.get('/api/schedule/queue-status')
  queueStatus.value = data
}

onMounted(() => { loadTasks() })
</script>

<style scoped>
.scheduled-tasks { padding: 20px; }
</style>
