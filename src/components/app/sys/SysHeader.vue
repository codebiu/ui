<template>
  <!-- 网站页首 -->
  <header v-show="sysStyle.headShow" >
    <div flex flex-wrap justify-between p-4>
      <router-link to="/" flex>
        <img src="@/assets/img/ion/sy_w.svg" h-8 mr-3 />
        <span self-center text-2xl font-semibold whitespace-nowrap>XYZ</span>
      </router-link>
      <!-- 空标题 可以加装饰 -->
      <span left-0 right-0 m-auto></span>
      <!-- 用户图标 -->
      <UserLogin @click="sysStyle.isUserControlShow = !sysStyle.isUserControlShow" w-8 h-8/>
      <!-- 点击用户图标下拉 导航栏-->
      <MinPopover v-model="sysStyle.isUserControlShow">
        <ShowHidden v-show="sysStyle.isUserControlShow">
          <UserControl
            absolute
            z-10
            w-70
            right-2
            top-4
            rounded-lg
            bg-deep-0
            p-4
            text-xl
            shadow-xl
          />
        </ShowHidden>
      </MinPopover>
    </div>
  </header>
</template>

<script setup lang="ts">
// 样式控制
import { SysSettingStore } from '@/stores/sys'
const sysSettingStore = SysSettingStore()
const sysStyle = sysSettingStore.sysStyle
</script>

<style scoped></style>
