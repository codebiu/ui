<template>
  <div class="container mx-auto mt-8">
    <table class="min-w-full border-collapse border border-gray-300">
      <thead>
        <tr class="bg-gray-100">
          <th v-for="(column, index) in users.columns" :key="index" class="border border-gray-300 px-4 py-2">{{ column }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, userIndex) in users.list" :key="userIndex">
          <td v-for="(column, columnIndex) in users.columns" :key="columnIndex" class="border border-gray-300 px-4 py-2">
            {{
              user[column] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
    
<script setup lang="ts">
const users = reactive({
  columns: [] as string[], // 列名数组
  list: [] as any
})


onMounted(() => {
  getUsers()
})

const getUsers = async () => {
  // 模拟从服务器获取用户数据
  const response = await fetch('http://localhost:1777/user/list');
  const data = await response.json();
  users.columns = Object.keys(data[0]);
  users.list = data;
}

</script>
    
<style>
/* You can customize styles further here if needed */
</style>
    