<template>
  <div>
    <ul flex flex-col>
      <li my-1 mb-3>
        <div mini-text-center-between h-12>
          <!-- 名字 邮箱 -->
          <div flex items-center  h-full>
            <UserLogin m-2 w-12 h-full />
            <div text-deep-1>
              <div  text-lg font-600>Name User</div>
              <div  text-sm font-100 text-deep-5>**@***.com</div>
            </div>
          </div>
          <!-- 关闭 -->
          <button w-14 h-full rounded-full bg-deep-2 hover:bg-deep-3
            @click="sysStyle.isUserControlShow = false">×</button>
        </div>
      </li>
      <!-- 循环buttonList -->
      <li v-for="(item, index) in buttonList" :key="index" m-1>
        <!-- fuc -->
        <button v-if="item.clickFuc" flex items-center w-full h-16 p-1   bg-deep-0 rounded-lg
          hover:bg-deep-2 @click="item.clickFuc(item)"   :class="item.isShow&&'bg-deep-3'">
          <component :is="item.icon" v-if="item.icon" w-8 mx-1 />
          <span sm font-2  mx-2>{{ item.name }}</span>
        </button>
        <!-- child MinPopover-->
        <MinPopover v-if="item.child" v-model="item.isShow">
          <ShowHidden>
            <div v-show="item.isShow" relative left-4 w-55 p-2 rounded-lg
            bg-deep-0 hover:bg-deep-2>
              <Func_1></Func_1>
               <!-- <div>test</div>
               <div>test</div>
               <div>test</div>
               <div>test</div>
               <div>test</div>
               <div>test</div>
               <div>test</div>
               <div>test</div>
               <div>test</div>
               <div>test</div>
               <div>test</div>
               <div>test</div>
               <div>test</div>
               <div>test</div> -->
            </div>
          </ShowHidden>
        </MinPopover>

      </li>

    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Func_1 from './Func_1.vue'
//
import SettingSVG from '@/components/miniUI/miniSvg/SettingSVG.vue'
// 显隐控制
import { SysSettingStore } from '@/stores/sys'
// router
import { useRouter } from 'vue-router'
const router = useRouter()
const sysSettingStore = SysSettingStore()
const sysStyle = sysSettingStore.sysStyle
const showFun1 = ref(false)
const closeUserControlShow = () => sysStyle.isUserControlShow = false

const openSysSettingShow = () => {
  sysSettingStore.isSysSettingShow = true
  closeUserControlShow()
}

// 两级父子对象
const buttonList = ref([{
  name: '项目列表1',
  icon: SettingSVG,
  clickFuc: (item:any) => { item.isShow = !item.isShow },
  isShow:false,
  child: [
    { name: '项目列表1-1', icon: null },
    {
      name: '项目列表1-2', icon: null
    }
  ]
},
{
  name: 'blog',
  icon: null,
  clickFuc: () => {
    router.push('/blog')
  }
},
{
  name: '开发测试',
  icon: SettingSVG,
  url: '/_dev',
  clickFuc: () => {
    router.push('/_dev')
  }
},
{
  name: '后台管理',
  icon: SettingSVG,
  url: '/_server',
  clickFuc: () => {
    router.push('/_server')
  }
},
{
  name: '设置',
  icon: SettingSVG,
  clickFuc: openSysSettingShow
}
])
</script>

<style></style>
