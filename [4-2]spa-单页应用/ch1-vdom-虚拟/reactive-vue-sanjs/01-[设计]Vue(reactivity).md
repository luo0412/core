# [设计]Vue(reactivity)

- @code 
    - https://github.com/vuejs/vue-next
    - https://github.com/vuejs/vue-next/tree/master/packages/reactivity

# 推荐

- mini-vue @nice ->>
    - https://github.com/cuixiaorui/mini-vue

- vue-interpretation
    - https://github.com/KieSun/vue-interpretation

- `vue-next-analysis` @nice
    - https://diy4869.github.io/vue-next-analysis/page/my.html

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1689079747370-3DQfCbrpByXD-image.png)

- `vue-design` @nice
    - Vue技术内幕 
    - Vue-逐行级别的源码分析
    - http://hcysun.me/vue-design/
    - https://github.com/HcySunYang/vue-design

- `Vue.js 技术揭秘` @nice
    - https://ustbhuangyi.github.io/vue-analysis/    

- `learnVue` @nice 
    - <https://github.com/answershuto/learnVue>

- 手拉手带你过一遍vue部分源码 @nice
    - https://juejin.cn/post/5adff30f518825672d33d596

- Vue源码阅读前必须知道javascript的基础内容 
    - https://juejin.cn/post/5b4ad441f265da0f7d4eeb7a

- Vue源码简析(版本vue-2.4.4) 
    - https://juejin.cn/post/5ab07a63f265da2389258b12

- SimpleVue 
    - <https://github.com/balancelove/SimpleVue>

- build-your-own-vue @nice
  - @code https://github.com/jackiewillen/build-your-own-vue

---

# vue3-目录结构

- reactivity: 数据响应，独立，可与任何框架配合
- runtime-core --> 虚拟 DOM 渲染器、Vue 组件和 Vue 的各种API
- runtime-dom --> 处理原生 DOM API、DOM 事件和 DOM 属性
- runtime-test --> 序列化 DOM、触发 DOM 事件，以及记录某次更新中的 DOM 操作
- server-renderer 
- compiler-core 
- compiler-dom 
- shared: 平台无关的内部帮助方法
- vue 

# Vue3-文章

- 从mini源码分析vue，优势特性总结，vue-cli知识点，以及vue项目的二次封装，mini项目源码附送（1W字+）
    - https://juejin.cn/entry/5f08281df265da230f2842b2

- [译]尤雨溪：Vue3的设计过程 @digest
    - https://juejin.cn/entry/5ecf6229e51d45783e17ad00

- Vue3 跟着尤雨溪学 TypeScript 之 Ref 类型从零实现
    - https://juejin.cn/post/5e94595c6fb9a03c341daa75

- 看了多篇Vue内核文章原理还是不太明白，看看这篇试试？
    - https://juejin.cn/post/5df2e2d96fb9a0165e330af9

---

# Vue原理解析

- Virtual DOM原理
- 响应式数据流 
  
  - 当面试官问你Vue响应式原理，你可以这么回答他 
    - https://juejin.cn/post/5adf0085518825673123da9a

- 源码解析
- Vue-router原理

# $nextTick-源码解析

- Vue中$nextTick源码解析
    - https://juejin.cn/entry/5eb096246fb9a043721b3000


---

# 计算缓存

- Vue 的计算属性真的会缓存吗？（保姆级教学，原理深入揭秘） @digest
    - https://juejin.cn/post/5e8fd7a3f265da47c35d7d29