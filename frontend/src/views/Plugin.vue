<template>
  <div>
    <h2>插件管理</h2>
    <el-table :data="plugins">
      <el-table-column prop="name" label="名称" />
      <el-table-column label="状态">
        <template #default="scope">
          <el-switch v-model="scope.row.enabled" @change="toggle(scope.row)" />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from '@/utils/api';

const plugins = ref([]);

async function load() {
  plugins.value = await api.get('/plugins');
}

async function toggle(row) {
  await api.post(`/plugins/${row.id}/toggle`, { enabled: row.enabled });
}

onMounted(load);
</script>
