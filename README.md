Vue3 跟 Vite 正式版发布有很长一段时间了，生态圈也渐渐丰富起来。总结一下：就是快！也不用担心稳定性问题，开发体验真不是一般好！我们一起尝试从本文开始学习吧，从 0 开始手把手搭建一套基于 Vite + Vue3 + TypeScript 规范的前端工程化项目环境。

本文主要从以下几个方面展开来说：

* 架构搭建（后期规范后会整理成脚手架）
> 讲解了两种方式，vite生成和vue-cli，vite生成的需要自己配置vuex,vue-router... vue-cli脚手架生成的项目则是脚手架自己集成了这些配置，只需要对应选择所需要的就行

> 其中包括了集成ui框架ant-design，集成axios，集成css预编译器less

* 代码规范
> 主要说明了 EditorConfig + Prettier + ESLint 组合来实现代码规范化
* 提交规范
> 通过对代码commit时进行校验


详细说明请看博客讲解：https://lzzhy.cn/vite+vue3+ts%20%E4%BB%8E0%E5%BC%80%E5%A7%8B%E6%90%AD%E5%BB%BA%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/


* 新增codemirror代码编辑器
