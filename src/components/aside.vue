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
          <router-link :to="subMenu.path">{{subMenu.name}}</router-link>
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
        name: 'vue3',
        path: '/home',
        component: 'home',
        children: [
          {
            name: 'vue',
            path: '/home',
            component: ''
          }
        ]
      },
      {
        name: '常用方法封装',
        path: '/commonFunction',
        component: 'commonFunction',
        children: [
          {
            name: 'commonFunction',
            path: '/commonFunction',
            component: 'commonFunction'
          }
        ]
      }
    ]

    return {
      selectedKeys2: ref<string[]>(['2']),
      openKeys: ref<string[]>(['vue3']),
      menus
    }
  }
})
</script>
