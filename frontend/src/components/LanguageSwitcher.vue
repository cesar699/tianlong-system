<template>
  <div class="language-switcher">
    <select v-model="lang" @change="switchLang">
      <option value="zh">中文</option>
      <option value="en">English</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  data() {
    return {
      lang: localStorage.getItem('lang') || 'zh'
    }
  },
  methods: {
    switchLang() {
      this.$i18n.locale = this.lang;
      localStorage.setItem('lang', this.lang);
    }
  }
}
</script>

<style scoped>
.language-switcher {
  margin-left: auto;
  padding-right: 10px;
}
</style>
