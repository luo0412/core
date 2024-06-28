# [设计]Umi-v4.x(MFSU+支持Vite+依赖预打包)

- @code https://github.com/umijs/umi-next
- @doc https://next.umijs.org/

---

# 简介

推荐pnpm安装

---

# MFSU

- https://github.com/umijs/umi-next/tree/master/packages/mfsu

比 Vite 还快的 Webpack 打包方案

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1655951592663-ZheDQkyiiKtP-image.png)

---

# 数据流

- https://umijs.org/docs/max/data-flow

基于 hooks 

# 微前端

- https://umijs.org/docs/max/micro-frontend

# 状态管理dva

- https://umijs.org/docs/max/dva

```
@connect(({ user }) => ({
  user,
}))
```

---

# 微生成器 @sub

> @ps 感觉怪怪的

- @doc https://umijs.org/docs/guides/generator

umi g page foo

umi g page bar --dir

g page far/far/away/kingdom

---

# 调试

- XSwtich
    - @dl https://chrome.google.com/webstore/detail/xswitch/idkjhjggpffolpidfkikidcokdkdaogg

```
chrome插件

在线上项目调试本地代码

$SOCKET_SERVER=http://127.0.0.1:8000/ npx umi dev

===
{
  "proxy": [
    // 数组的第 0 项的资源会被第 1 项目替换
    [
      "https://www.myproject.com/umi.2c8a01df.js",
      "http://127.0.0.1:8000/umi.js"
    ],
    // 使用正则可以方便处理分包情况下 js 资源的加载
    [
      "https://www.myproject.com/(.*\.js)",
      "http://127.0.0.1:8000/$1",
    ],
    // 如果需要验证视觉表现，不要忘记替换 css 资源
    [
      "https://www.myproject.com/umi.ae8b10e0.css",
      "http://127.0.0.1:8000/umi.css"
    ]
  ]
}
```

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1655952760927-RbKBed34Ze84-image.png)

---

# 参考 @ref

- Umi 4 RC 发布
    - https://zhuanlan.zhihu.com/p/462930831

- umi使用mfsu的问题，有人遇到过吗
    - https://www.zhihu.com/question/493039832

- umi-blog-example
    - https://github.com/umijs/umi-blog-example
    - https://umijs.org/docs/tutorials/blog