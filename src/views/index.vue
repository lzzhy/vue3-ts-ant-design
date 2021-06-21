<template>
  <div class="container">
    <a-layout>
      <VHeader></VHeader>
      <a-layout>
        <VAside></VAside>
        <a-layout style="padding: 0 24px 24px">
          <a-layout-content
            :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
          >
            <router-view></router-view>
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VHeader from '@/components/header.vue'
import VAside from '@/components/aside.vue'

export default defineComponent({
  name: 'App',
  components: {
    VHeader,
    VAside
  }
})
</script>

<style lang="less" scoped>
.container {
  height: calc(100vh);
}
.ant-layout {
  height: 100%;
}
</style>
