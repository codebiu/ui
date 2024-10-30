import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// css 辅助
import UnoCSS from 'unocss/vite'

// 自动导入按需引入 vue ion router
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'//https://icon-sets.iconify.design/?category=General
import IconsResolver from 'unplugin-icons/resolver'
import VueRouter from 'unplugin-vue-router/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// 
import path from 'path'
const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({}),
    vue(),
    VueDevTools(),
    UnoCSS(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue', 'vue-router', 'pinia'], // eslint报错解决
      eslintrc: {
        // 生成配置文件之后，改成false防止重新生成导致eslint有时会找不到这个文件。
        enabled: false, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, 
      },
      resolvers: [
        // 自动导入图标组件
        IconsResolver({ prefix: 'Icon' }),
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        ElementPlusResolver(),
      ],
      dts: path.resolve(pathSrc, 'auto-imports.d.ts')
    }),
    Components({
      resolvers: [
        // 自动注册图标组件  edit引入格式 <i-ep-edit />
        IconsResolver({ enabledCollections: ['ep'] }),
        //自动导入 Element Plus 组件
        ElementPlusResolver(),
      ],
      dts: path.resolve(pathSrc, 'components.d.ts')
    }),
    // 自动引入图标资源并安装
    Icons({ autoInstall: true })
  ],
  // 路径别名
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 开发服务设置
  server: {
    port: 1666,
    strictPort: true,
    host: '0.0.0.0',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})
