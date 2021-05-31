<template>
  <div class="home">
    123
    <div class="list">哈哈哈</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import axios from '../utils/axios'

export default defineComponent({
  setup () {
    axios
      .get('/users/XPoet')
      .then((res) => {
        console.log('res: ', res)
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  }
})
</script>

<style lang="less" scoped>
.home {
  padding: 0;
  margin: 0;
  .list {
    width: 100%;
  }
}
</style>
