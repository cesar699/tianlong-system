
<template>
  <div class="api-editor">
    <h2>API Editor</h2>
    <el-form :model="req">
      <el-form-item label="Method">
        <el-select v-model="req.method">
          <el-option label="GET" value="GET"></el-option>
          <el-option label="POST" value="POST"></el-option>
          <el-option label="PUT" value="PUT"></el-option>
          <el-option label="DELETE" value="DELETE"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="URL">
        <el-input v-model="req.url" placeholder="/api/your/endpoint" />
      </el-form-item>
      <el-form-item label="Headers (JSON)">
        <el-input type="textarea" v-model="req.headers" rows="3" />
      </el-form-item>
      <el-form-item label="Body (JSON)">
        <el-input type="textarea" v-model="req.body" rows="5" />
      </el-form-item>
      <el-button type="primary" @click="sendRequest">Send</el-button>
    </el-form>
    <div v-if="res">
      <h3>Response</h3>
      <pre>{{ res }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from '@/utils/request'

const req = ref({
  method: 'GET',
  url: '/api/',
  headers: '{}',
  body: '{}'
})
const res = ref(null)

const sendRequest = async () => {
  let headers = {}
  try { headers = JSON.parse(req.value.headers) } catch {}
  let body = {}
  try { body = JSON.parse(req.value.body) } catch {}
  const response = await axios({
    method: req.value.method,
    url: req.value.url,
    headers,
    data: body
  })
  res.value = JSON.stringify(response.data, null, 2)
}
</script>

<style scoped>
.api-editor { padding: 20px; }
</style>
