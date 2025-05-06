
<template>
  <div>
    <h2>推荐歌曲</h2>
    <el-list v-if="songs.length">
      <el-list-item v-for="song in songs" :key="song.id">{{ song.title }}</el-list-item>
    </el-list>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from '@/utils/request'

const songs = ref([])
onMounted(async () => {
  const { data } = await axios.get('/api/music/recommend')
  songs.value = data.songs
})
</script>
