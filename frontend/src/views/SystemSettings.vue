
<template>
  <div>
    <el-card>
      <h2>系统设置</h2>
      <el-form label-width="120px">
        <el-form-item v-for="item in settings" :key="item.key" :label="item.key">
          <el-input v-model="item.value" />
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="saveSettings">保存设置</el-button>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'SystemSettings',
  data() {
    return {
      settings: []
    };
  },
  created() {
    this.loadSettings();
  },
  methods: {
    async loadSettings() {
      const res = await axios.get('/api/system-settings');
      this.settings = res.data;
    },
    async saveSettings() {
      await axios.post('/api/system-settings', { settings: this.settings });
      this.$message.success('设置已保存');
    }
  }
};
</script>
