
<template>
  <div class="login-page">
    <el-card class="login-card">
      <h2>{{ $t('login') }}</h2>
      <el-form :model="form" @submit.prevent="onSubmit" ref="loginForm" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="Username" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="form.password" placeholder="Password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">{{ $t('login') }}</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from '@/utils/request'

const router = useRouter()
const form = ref({ username: '', password: '' })
const rules = {
  username: [{ required: true, message: '请填写用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请填写密码', trigger: 'blur' }]
}

const onSubmit = () => {
  const loginForm = loginFormRef.value
  loginForm.validate(async valid => {
    if (valid) {
      try {
        const { data } = await axios.post('/api/user/login', form.value)
        localStorage.setItem('token', data.token)
        router.push('/dashboard')
      } catch (err) {
        console.error(err)
      }
    }
  })
}

const loginFormRef = ref(null)
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.login-card {
  width: 400px;
  padding: 20px;
}
</style>
