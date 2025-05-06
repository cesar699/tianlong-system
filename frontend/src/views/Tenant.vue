<template>
  <div>
    <h2>租户管理</h2>
    <el-form inline @submit.prevent="createTenant">
      <el-input v-model="newName" placeholder="租户名称" />
      <el-button type="primary" @click="createTenant">新增</el-button>
    </el-form>
    <el-table :data="tenants">
      <el-table-column prop="name" label="名称" />
    </el-table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from '@/utils/api';

const tenants = ref([]);
const newName = ref('');

async function load() {
  tenants.value = await api.get('/tenants');
}
async function createTenant() {
  if (newName.value) {
    await api.post('/tenants', { name: newName.value });
    newName.value = '';
    load();
  }
}

onMounted(load);
</script>
