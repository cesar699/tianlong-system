
<template>
  <el-form :model="form" @submit.prevent="handleLogin">
    <el-input v-model="form.username" placeholder="用户名" />
    <el-input v-model="form.password" placeholder="密码" type="password" />
    <el-button type="primary" @click="handleLogin">登录</el-button>
  </el-form>
</template>

<script setup>
import { ref } from 'vue'
import axios from '@/utils/request'
const form = ref({ username: '', password: '' })

const handleLogin = async () => {
  const { data } = await axios.post('/api/user/login', form.value)
  localStorage.setItem('token', data.token)
}
</script>
