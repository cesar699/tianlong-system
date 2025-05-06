<template>
  <div class="mobile-menu">
    <nav>
      <ul>
        <li><router-link to="/">{{ $t('dashboard') }}</router-link></li>
        <li><router-link to="/user">{{ $t('userSystem') }}</router-link></li>
        <li><router-link to="/purchase">{{ $t('purchaseSystem') }}</router-link></li>
        <li><router-link to="/scheduler">{{ $t('scheduler') }}</router-link></li>
        <li><router-link to="/security">{{ $t('security') }}</router-link></li>
        <li><router-link to="/logs">{{ $t('logs') }}</router-link></li>
        <li><router-link to="/weather">{{ $t('weather') }}</router-link></li>
        <li><router-link to="/music">{{ $t('music') }}</router-link></li>
        <li><router-link to="/ip">{{ $t('ipToolbox') }}</router-link></li>
        <li><router-link to="/news">{{ $t('news') }}</router-link></li>
        <li><router-link to="/ai">{{ $t('aiCenter') }}</router-link></li>
        <li><router-link to="/model">{{ $t('modelSwitch') }}</router-link></li>
        <li>
          <select v-model="lang" @change="switchLang">
            <option value="zh">中文</option>
            <option value="en">English</option>
          </select>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MobileMenu',
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
.mobile-menu {
  width: 100%;
}
nav ul {
  list-style: none;
  padding: 0;
}
nav li {
  padding: 10px;
}
</style>
