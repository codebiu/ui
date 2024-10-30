import { useDark } from '@vueuse/core'
const SysSettingStore = defineStore('sysSetting', () => {
  // state
  const baseMd = 768
  const sysStyle = ref({
    headShow: true,
    isUserControlShow: false,
    // 大小屏切分 普通页面不需要考虑横屏，部分三维场景考虑
    isMd: window.innerWidth > baseMd,
    theme: {
      isDark: useDark(),
      // useDark 本地设置 auto light dark
      themeValue: localStorage.getItem('vueuse-color-scheme'),
      head: [{ height: '35px' }],
      leftControl: {
        tabPosition: 'left'
      }
    },
    language: 'zh' as any
  })

  const sysObj = {
    $ObjLargeTemp: new Map()
  }
  // 窗口变化重置
  window.onresize = () => {
    // 判断中小设备
    sysStyle.value.isMd = window.innerWidth > baseMd
  }

  const isSysSettingShow = ref(false)

  return { sysStyle, sysObj, isSysSettingShow }
})

export { SysSettingStore }
