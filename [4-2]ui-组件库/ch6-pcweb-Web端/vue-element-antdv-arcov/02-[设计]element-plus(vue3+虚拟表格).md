# [设计]element-plus(vue3+虚拟表格)

> @ps 还是没有给table加columns字段...

- @code https://github.com/element-plus/element-plus
- @doc
    - https://element-plus.gitee.io/zh-CN/
    - https://element-plus.org/zh-CN/

---

# 参考 @ref    

- 深入解析 Vue 3 组件库 element-plus 架构源码
    - https://mp.weixin.qq.com/s?__biz=MzI3NTM5NDgzOA==&mid=2247489991&idx=1&sn=6dd5a9891b2fce9a7f15402c9e07d86a

```
// 使用 Lerna 维护和管理项目
"gen": "bash ./scripts/gc.sh", // 生成一个基础的组件文件夹

===
// 插件
@rollup/plugin-node-resolve -- 打包依赖的 npm 包
rollup-plugin-terser -- 压缩代码
rollup-plugin-typescript2 -- 编译 typescript 
rollup-plugin-vue -- 打包 vue 文件

// 组件库和样式打包

使用 gulp 打包样式文件和字体图标 --> lib/theme-chalk 目录

gulp 的配置比 webpack 更简洁
适用于打包需求比较单一的情况去使用

===
// 使用 Vue 3.0 Teleport 新特性重构挂载类组件
Teleport 提供了一种干净的方法，允许我们控制在 DOM 中哪个父节点下呈现 HTML
而不必求助于全局状态或将其拆分为两个组件

  <teleport to="body" :disabled="!appendToBody">
    <transition
      name="dialog-fade"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
    >
        ...
     </transition>
  </teleport>  

===
// Hooks 带来的好处
1) 暴露给模板的属性具有明确的来源，因为它们是从 Hook 函数返回的值
2) Hook 函数返回的值可以任意命名，因此不会发生名称空间冲突
```    

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1689082374062-W7Kz2zb4zxfM-image.png)