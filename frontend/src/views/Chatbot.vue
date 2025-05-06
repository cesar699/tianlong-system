<template>
  <div class="chatbox">
    <div v-for="msg in messages" :key="msg.id" :class="msg.from">{{ msg.text }}</div>
    <el-input v-model="input" @keyup.enter="send" placeholder="输入消息..." />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import api from '@/utils/api';
let id = 0;
const messages = ref([]);
const input = ref('');

async function send() {
  if (!input.value) return;
  messages.value.push({ id: id++, text: input.value, from: 'user' });
  const res = await api.post('/chatbot/message', { text: input.value });
  messages.value.push({ id: id++, text: res.reply, from: 'bot' });
  input.value = '';
}
</script>
