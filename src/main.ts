import 'virtual:uno.css'

import { createApp } from 'vue'


import App from './App.vue'
import router from './router'

// 初始化css 用来重置边距 margin等0
import '@unocss/reset/tailwind.css'
import { i18n } from '@/i18n/language'
import { createPinia } from 'pinia'



const app = createApp(App)

// i18n

app.use(i18n)

// pina

app.use(createPinia())
app.use(router)

app.mount('#app')
