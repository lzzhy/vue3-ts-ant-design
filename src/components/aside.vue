<template>
  <a-layout-sider width="200" style="background: #fff">
    <a-menu
      mode="inline"
      v-model:selectedKeys="selectedKeys2"
      v-model:openKeys="openKeys"
      :style="{ height: '100%', borderRight: 0 }"
    >
      <!-- 循环左侧菜单栏 -->
      <a-sub-menu v-for="item in menus" :key="item.name">
        <template #title>
          {{item.name}}
        </template>
        <a-menu-item v-for="subMenu in item.children" :key="subMenu.name">
          {{subMenu.name}}
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup () {
    const menus = [
      {
        name: '数据集管理',
        icon: '',
        path: '/home',
        component: 'home',
        children: [
          {
            name: '创建数据集',
            icon: '',
            path: '/home',
            component: ''
          }
        ]
      }
    ]

    return {
      selectedKeys2: ref<string[]>(['2']),
      openKeys: ref<string[]>(['数据集管理']),
      menus
    }
  }
})
</script>
