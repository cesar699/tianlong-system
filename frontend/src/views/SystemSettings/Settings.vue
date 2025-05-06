<template>
  <div>
    <h2>系统设置</h2>
    <el-table :data="settings">
      <el-table-column prop="key" label="配置项" />
      <el-table-column prop="value" label="数值">
        <template #default="scope">
          <el-input v-model="scope.row.value" size="small" />
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" @click="save">保存设置</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import api from '@/utils/api';

const settings = ref([]);

async function load() {
  settings.value = await api.get('/system-settings');
}

async function save() {
  for (const item of settings.value) {
    await api.post('/system-settings', item);
  }
  alert('保存成功');
}

onMounted(load);
</script>
