<template>
  <el-form :model="config">
    <el-form-item label="AI 提供商">
      <el-select v-model="config.provider">
        <el-option label="OpenAI" value="openai" />
        <el-option label="文心一言" value="wenxin" />
      </el-select>
    </el-form-item>
    <el-form-item label="API Key">
      <el-input v-model="config.apiKey" />
    </el-form-item>
    <el-form-item label="模型名称">
      <el-input v-model="config.model" />
    </el-form-item>
    <el-form-item label="温度">
      <el-input-number v-model="config.temperature" :min="0" :max="1" step="0.1" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="saveConfig">保存</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import api from '@/utils/api';

const config = reactive({ provider: '', apiKey: '', model: '', temperature: 0.5 });

async function loadConfig() {
  const res = await api.get('/system-settings/ai-config');
  Object.assign(config, res);
}

async function saveConfig() {
  await api.post('/system-settings/ai-config', config);
  alert('保存成功');
}

onMounted(loadConfig);
</script>
