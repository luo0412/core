# [方案]Vue-组件库设计

# 模块化

- vue-component-devtool 
    - 基于 webpack 打造的 Vue 组件开发工具 
    - https://github.com/mengdu/vue-component-devtool
    
- Lerna+webpack+juction来拆分组件库为多个单独的npm包
    - vc-popup https://github.com/deepkolos/vc-popup
    - 参考mintUI https://github.com/ElemeFE/mint-ui
    - @doc https://juejin.im/post/6844903537520951303

# 简单实践

- vue插件开发、文档书写、github发布、npm包发布一波流
    - @by https://juejin.im/user/58ae78da8d6d8100584bc207
    - @doc https://juejin.im/post/5b96586de51d450e7d0984a6

- Vue 插件编写与实战 
    - https://juejin.im/post/599c18b2f265da249823f21f

```js
/* toast.js */
// 引入组件
import ToastComponent from './toast.vue' 

let $vm

export default {    
    install(Vue, options) {
        
        // 判断实例是否存在
        if (!$vm) {            
            const ToastPlugin = Vue.extend(ToastComponent); // 创建一个“扩展实例构造器”
            
            // 创建 $vm 实例
            $vm = new ToastPlugin({                
                el: document.createElement('div')  // 声明挂载元素          
            });            
            
            document.body.appendChild($vm.$el); // 把 toast 组件的 DOM 添加到 body 里
        } 
        
        // 给 toast 设置自定义文案和时间
        let toast = (text, duration) => {
            $vm.text = text;
            $vm.duration = duration;
            
            // 在指定 duration 之后让 toast 消失
            setTimeout(() => {
                $vm.isShow = false;  
            }, $vm.duration);
        }
        
        // 判断 Vue.$toast 是否存在
        if (!Vue.$toast) {            
            Vue.$toast = toast;        
        }        
        
        Vue.prototype.$toast = Vue.$toast; // 全局添加 $toast 事件
    }
}
```

![Vue组件注册方式](https://luo0412.oss-cn-hangzhou.aliyuncs.com/static/images/juejin/vue-reg.png)



- 如何使用@vue/cli 3.0在npm上创建，发布和使用你自己的Vue.js组件库  
  - https://juejin.im/post/5b23149b6fb9a00e325e6a80
    
- 手把手教你封装 Vue 组件，并使用 npm 发布 

    - @code https://github.com/frankxjkuang/custom-ui
    - @doc https://juejin.im/post/5b45df255188251b1d474860 
    
```js
注册
// https://www.npmjs.com/ 
npm adduser | npm login | npm whoami

"private": false, -> 组件能公用
npm publish
```

- 发布自己第一个npm 组件包（基于Vue的文字跑马灯组件）
    - https://github.com/wj704/vue-marquee-ho

- 从0开始，手把手带你打造自己的UI库
    - https://juejin.im/post/6856213306920468493

- 如何手把手打造自己的Vue组件库 @digest
    - 主要讲如何实现组件的按需加载
    - https://juejin.im/post/5d6c7982e51d4561e0516b4a
    - @code https://github.com/gaoljie/vue-uikit-boilerplate

- 手写Vue组件踩坑与心得 
    - https://github.com/linzx1993/linzx1993.github.io/issues/6  

- Vue组件开发姿势总结 @nice
    - https://juejin.im/entry/5a9a4fd3518825558251cbd4
    - @code https://github.com/dbxr/elapse/tree/master/be/src/components

- 合格前端系列第十弹-揭秘组件库一二事 
  - vui <https://github.com/Brickies/vui>
  - <https://juejin.im/post/5aacd6d55188252c32197273>

- Vue 组件库实践和设计
    - https://juejin.im/post/598965bd5188256da941872c
    - @code https://github.com/ziksang/crib-ziksang

- 从零实现Vue的组件库
    - https://juejin.im/post/5c0b8ece5188254f9e2809fe
    - @code https://github.com/FatGe/UI-Library

---

# 参考

- Vue.js——60分钟组件快速入门（下篇）@old @deprecated  
    - http://www.cnblogs.com/keepfool/p/5637834.html#h2_13  
