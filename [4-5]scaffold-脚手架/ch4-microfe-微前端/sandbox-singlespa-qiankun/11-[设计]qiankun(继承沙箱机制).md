# [设计]qiankun(继承沙箱机制)

# 缺点

- 适配成本高

```
对工程化、生命周期、静态资源路径、路由的改造
```

- 沙箱机制不成熟

- 无法同时激活多个子应用

- 不成熟的通信机制

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1696689292268-wJNTBnS8Ga8B-image.png)


---

# 参考 @ref

- "几时归去做个闲人"的qiankun源码解读 @todo
    - https://juejin.cn/user/448256473834829/posts

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1705668868481-PmHxjBrcQKk5-image.png)

- `深入浅出解析阿里成熟的微前端框架 qiankun 源码` @nice
  - https://mp.weixin.qq.com/s/aVxPIp7qgtfEnh2vGXD0Hw

```
沙箱运行环境 - genSandbox
```

- 万字解析微前端、微前端框架qiankun以及源码 
    - @by https://juejin.cn/user/2999123450531000/posts
    - @doc
      - https://juejin.cn/post/5e8aa8d1f265da47ae4ab8c5
      - https://mp.weixin.qq.com/s/o7L_Sxl1s0uKywRy-Ao5fg
      - https://juejin.cn/post/6844904151231496200

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1665820307567-z6wbiJPj3YQa-image.png)

- 【得物技术】微前端，大世界-qiankun源码研读
  - https://juejin.cn/post/6956896756202209288

- Qiankun原理——JS沙箱是怎么做隔离的 @todo
  - @by https://juejin.cn/user/272334614432887/posts
  - @doc https://juejin.cn/post/7148075486403362846

- qiankun中的数据通讯方式源码分析
  - https://juejin.cn/post/6937492575100076039

- qiankun 2.x 运行时沙箱 源码分析 @coll
  - https://juejin.cn/post/6885214342552223757
  - https://juejin.cn/post/6981756262304186405

- qiankun源码解读 @coll
  - https://juejin.cn/post/7077210357541896200
  - https://juejin.cn/post/7107841837675020302
  - https://juejin.cn/post/6885211340999229454  