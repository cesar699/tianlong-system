
<template>
  <div class="netease-music-embed">
    <h3>{{ $t('music') }}</h3>
    <!-- NetEase Cloud Music widget embed -->
    <iframe 
      frameborder="no" border="0" marginwidth="0" marginheight="0" 
      width="330" height="86" 
      :src="widgetUrl">
    </iframe>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Replace with the desired playlist or song ID
const type = 'playlist' // or 'song'
const id = '123456789' // your playlist or song ID

const widgetUrl = computed(() => 
  `https://music.163.com/outchain/player?type=${type}&id=${id}&auto=0&height=66`
)
</script>

<style scoped>
.netease-music-embed {
  margin-top: 20px;
}
.netease-music-embed h3 {
  color: var(--text-color);
  margin-bottom: 8px;
}
</style>
