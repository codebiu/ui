<template>
  <div>
    <!-- 黑白主题 -->
    <BaseSelect
      w-70
      h-21
      m-2
      v-model="theme.themeValue"
      :name="$t('theme')"
      :options="themeOptions"
      :changeValueFunc="changeThemeValue"
    />
    <!-- 语言选择 -->
    <SettingLanguage w-70 h-21 m-2 />
  </div>
</template>

<script setup lang="ts">
// import { storeToRefs } from 'pinia'
import { SysSettingStore } from '@/stores/sys'
import { i18n, languageOptions } from '@/i18n/language'
const { sysStyle } = SysSettingStore()
/////////////////////////////////////////////////////////主题控制/////////////////////////////////////////////////////////
// 全局主题
const theme = sysStyle.theme
// 主题选择
const themeOptions = ref([
  {
    value: 'light',
    label: computed(() => i18n.global.t('light'))
  },
  {
    value: 'dark',
    label: computed(() => i18n.global.t('dark'))
  },
  {
    value: 'auto',
    label: computed(() => i18n.global.t('autoSys'))
  }
])
/**
 * 手动更改主题
 */
function changeThemeValue() {
  switch (theme.themeValue) {
    case 'light':
      theme.isDark = false
      break
    case 'dark':
      theme.isDark = true
      break
    case 'auto':
      // 媒体查询检测夜晚/黑暗模式
      theme.isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      break
  }
}
/////////////////////////////////////////////////////////todo/////////////////////////////////////////////////////////
</script>
<style scoped></style>
