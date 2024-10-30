<template>
  <RouterView />
  <!-- 非正常结构 弹窗类 控制类 异步加载-->
  <Suspense>
    <!-- 异步弹窗 -->
    <AppRoot z-999 />
    <!-- 加载中状态 -->
    <template #fallback>
      <!-- <WaitAnimate></WaitAnimate> -->
    </template>
  </Suspense>
</template>

<script setup lang="ts">
console.log('VITE_ENV', import.meta.env.VITE_ENV)
console.log('VITE_SOME_KEY', import.meta.env.VITE_SOME_KEY)
</script>

<style>
/* 导入main.css */
@import '@/assets/main.css';
</style>
