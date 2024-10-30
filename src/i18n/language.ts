import { createI18n } from 'vue-i18n'

//语言对照
const languageObj = {
  // 支持的语言
  languageTypeArray: ['zh', 'ja', 'en'],
  languageTypeFullArray: ['简体中文', '日本語', 'English'],
  language: ['语言选择', '言語選択', 'language selection'],
  theme: ['主题', 'テーマ', 'theme'],
  dark: ['暗', 'ダーク', 'dark'],
  light: ['明', '明るい', 'light'],
  autoSys: ['跟随系统', 'システムに従う', 'follow system'],
  auto: ['自动', '自動', 'auto'],
  home: ['首页', 'ホーム', 'home'],
  about: ['关于', 'アバウト', 'about']
} as any
// 语言对照选择格式
const languageOptions: {
  value: string
  label: string
}[] = []
// todo 根据ip地址或者定位，自动选择语言
const i18n = createI18n({
  // 'zh'
  locale: languageObj.languageTypeArray[0],
  fallbackLocale: languageObj.languageTypeArray[0],
  messages: {}
})
for (let index = 0; index < languageObj.languageTypeArray.length; index++) {
  const languageType = languageObj.languageTypeArray[index]
  const thisLanguageTypeObj = {} as any
  // 循环 languageObj
  for (const key in languageObj) {
    thisLanguageTypeObj[key] = languageObj[key][index]
  }
  // 设置i18n对应语言
  i18n.global.setLocaleMessage(languageType, thisLanguageTypeObj)

  // 设置语言类别对照
  languageOptions.push({
    value: languageType,
    label: languageObj.languageTypeFullArray[index]
  })
}


export { i18n, languageOptions }
