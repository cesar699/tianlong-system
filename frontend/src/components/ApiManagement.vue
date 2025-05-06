
<template>
  <div class="api-management">
    <h2>{{ $t('apiManagement') }}</h2>
    <el-select v-model="selected" placeholder="选择 API 接口" style="width: 300px;">
      <el-option
        v-for="api in apiList"
        :key="api.url + api.method"
        :label="api.name"
        :value="api"
      />
    </el-select>
    <div v-if="selected">
      <APIEditor
        :req="{ method: selected.method, url: selected.url, headers: '{}', body: '{}' }"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import apiList from '@/config/apiList'
import APIEditor from '@/components/APIEditor.vue'

const apiListRef = ref(apiList)
const selected = ref(null)
</script>

<style scoped>
.api-management {
  padding: 20px;
}
</style>
