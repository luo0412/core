# [设计]wujie(iframe隔离沙箱+组件级微前端+状态保活缓解白屏)

> @ps 先说好, 不要对iframe有偏见, [Why Not Iframe](https://www.yuque.com/kuitos/gky7yw/gesexv)

- @code https://github.com/Tencent/wujie
- @doc https://wujie-micro.github.io/doc/guide/
- @demo https://wujie-micro.github.io/demo-main-vue/home

```
// iframe
隔离的太完美导致缺点也非常明显

1) 刷新页面会导致iframe的url状态丢失
2) 弹窗只能在iframe内部展示
3) 白屏时间太长 ==> 应用保活来缓解
```

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1696689547912-5MZcbSaCGN27-image.png)


# 限制

- @issues https://github.com/Tencent/wujie/issues
- @doc https://wujie-micro.github.io/doc/question/

- 子应用必须做cors 设置

```
@ps 问题不大, 技术选型前就考虑到了
```

- 路由跳转API繁琐

```
@ps hash模式下需要记忆各种跳转API, 烦死...

===
路由API, 居然因为主子应用的跳转方向不同而各式各样, 这谁能记得住... 

window.microApp.router.push({name: 'my-app', path: '/page1'}) // 已优化

在实践qiankun项目时, 我们子应用调用this.$tab.push({path: '/base/xxx/yyy'})
其实绑定的是主应用的router.push方法, 这样形式上统一多了, 根本不需要记忆的
```

- 面板位置偏移, 弹框居中等问题
    - https://github.com/Tencent/wujie/issues/499

```
// 弹框偏移
子应用padding-left菜单宽度
```

# API设计

- iframe 路由同步机制

```
iframe的session-history

劫持iframe的history.pushState和history.replaceState
```

- `iframe 连接机制和 css 沙箱机制` @nice

```
@ps micro-app 好像也抄这条路了

子应用的实例instance在iframe内运行
dom在主应用容器下的webcomponent内
```

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1696694485198-nWrPzPK32ApT-image.png)

- 无感知的降级处理 @nice

---

# 参考 @ref

- "几时归去做个闲人"的wujie源码解读 @todo
    - https://juejin.cn/user/448256473834829/posts

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1705668837965-rRWYFYWr7tGC-image.png)

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1705668868481-PmHxjBrcQKk5-image.png)

- 极致的微前端方案_无界的源码剖析
    - @by https://juejin.cn/user/2436173499477623/posts
    - @doc https://juejin.cn/post/7158777745806196743

```
子应用的实例instance在iframe内运行，dom在主应用容器下的webcomponent内
通过代理 iframe的document到webcomponent，可以实现两者的互联

===
路由同步机制

===
props 注入机制

window.parent 通信机制

去中心化的通信机制
```    

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1688917633103-3kfs5DJDcW2S-image.png)


![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1688917637647-R72W6dBziRxe-image.png)


- 无界微前端是如何渲染子应用的？
    - https://zhuanlan.zhihu.com/p/618063377

- wujie在第三方SDK开发中的应用实践
    - https://juejin.cn/post/7245558239332335671    