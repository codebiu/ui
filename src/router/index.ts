import { createRouter, createWebHistory } from 'vue-router'
/**
 * 自动路由
 * 原本routes更换
 * 路由规则 https://uvr.esm.is/guide/file-based-routing.html
 */
import { routes, handleHotUpdate } from "vue-router/auto-routes"
// 生成路由  注意nginx发布配置 添加跳转
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

// 热更新并刷新路由
if (import.meta.hot) handleHotUpdate(router)

export default router
