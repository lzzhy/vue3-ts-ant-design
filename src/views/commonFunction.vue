<template>
  <div class="common-function">
    <div class="codeMirror">
      <textarea id="editDom" style="display: none" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick } from 'vue'
import CodeMirror from 'codemirror'
export default defineComponent({
  name: 'commonFunction',
  setup () {
    nextTick(() => {
      const editDom = document.getElementById('editDom')
      CodeMirror.fromTextArea(editDom as HTMLTextAreaElement, {
        mode: 'text/javascript', // 识别js代码
        lineNumbers: true, // 显示行号
        tabSize: 2, // 自动缩进
        theme: 'ayu-mirage', // 主题
        autofocus: true // 是否在初始化时自动获取焦点
      })
    })
  }
})
</script>

<style lang="less">
@import '@/utils/css/codeMirror.css';
.codeMirror {
  height: 100%;
  padding: 10px;
}
</style>
