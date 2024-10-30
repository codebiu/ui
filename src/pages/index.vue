<template>
  <div grid-head-center-foot>
    <SysHeader h-14 bg-deep-1 z-1 shadow />
    <!-- :style="'clip-path: polygon(0 0, 100% 0, 100% 100%, 0 '+clipPath[0]+'%)'"  -->
    <main bg-deep-1 px-1 py-2>
      <div bg-deep-2 h-full rounded-md p-2>
        测试

        <!-- 公开高评分  list  -->
        <!-- 私有置顶类别 -->
        <!-- 私有置顶文章 -->


        <!-- Chroma 嵌入式向量和 -->

        <!-- 类似知乎抖音刷 -->
        <!-- <div>
          图数据库选择 下拉 大类 跳转后子类


          考虑桌面风格文件和列表
        </div>

        <div>
          过滤
          list
        </div>

        <div>页码 </div>
        <div> 地球 飞船 黑洞 编辑 新建 删除</div>

        <div>语义化Semanticization</div>
        <div>设计代码器 2 editblog后面</div> -->


        <!-- https://github.com/google/diff-match-patch   diff比较  前后端 -->

        <!-- list -->
        <!-- 开源url 信息格式化 key value -->
        <!--  offset-path是用来实现路径动画  可以考虑流星浪花藤曼 -->
      </div>

      <MoveWindow ref="dragRef" right-8 bottom-30 z-2>
        <div w-30 h-30 rounded-3xl flex-center shadow-md shadow-gray bg-opacity-10 hover:bg-opacity-10 btn-deep-5
          backdrop-blur-sm>

          <div w-full h-full font-600 text-4xl font-serif text-deep-2 @click="addPage">新建</div>
          <!-- /blog/blog-new 路由 -->
          <!-- <RouterLink  to="/blog/blog-new" >新建</RouterLink> -->

        </div>
      </MoveWindow>
    </main>
    <SysFooter mx-auto w-full p-2 lg:py-2 bg-deep-0 />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { SysSettingStore } from '@/stores/sys'
import router from '@/router';
const { sysStyle } = storeToRefs(SysSettingStore())
sysStyle.value.headShow = true
const dragRef = ref();
const addPage = () => {
  // 拖拽中，不执行后续操作
  if (dragRef.value.$el.isMoving) return
  // 导航到 /blog/blog-new
  router.push('/blog/blog-new')
}
</script>
<style scoped></style>
