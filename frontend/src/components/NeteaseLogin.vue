
<template>
  <div class="netease-login">
    <h3>{{ $t('music') }} {{ $t('login') }}</h3>
    <el-form :model="form">
      <el-form-item label="Phone">
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" v-model="form.password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">{{ $t('login') }}</el-button>
      </el-form-item>
    </el-form>
    <div v-if="playlists">
      <h4>Playlists</h4>
      <ul>
        <li v-for="pl in playlists" :key="pl.id">{{ pl.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from '@/utils/request'

const form = ref({ phone: '', password: '' })
const playlists = ref(null)

const login = async () => {
  const { data } = await axios.post('/api/ncm/login', form.value)
  const uid = data.account.id
  const plRes = await axios.get('/api/ncm/playlists', { params: { uid } })
  playlists.value = plRes.data.playlist
}
</script>

<style scoped>
.netease-login { padding: 20px; background: var(--bg-color); color: var(--text-color); }
</style>
