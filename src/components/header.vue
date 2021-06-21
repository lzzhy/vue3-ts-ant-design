<template>
  <a-layout-header class="header">
    <div class="logo">
      <img src="../assets/images/profile.png" alt="">
    </div>
    <a-menu
      theme="dark"
      mode="horizontal"
      v-model:selectedKeys="selectedKeys1"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="1">vue2</a-menu-item>
      <a-menu-item key="2">vue3</a-menu-item>
    </a-menu>
  </a-layout-header>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup () {
    return {
      selectedKeys1: ref<string[]>(['2'])
    }
  }
})
</script>

<style lang="less" scoped>
.logo {
  width: 50px;
  height: 50px;
  display: inline-block;
  line-height: 50px;
  margin-right: 20px;
  img  {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
.ant-menu-dark.ant-menu-horizontal {
  display: inline-block;
}
</style>
