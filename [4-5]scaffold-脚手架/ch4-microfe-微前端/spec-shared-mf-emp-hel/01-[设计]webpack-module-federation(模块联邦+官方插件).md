# [设计]webpack-module-federation(模块联邦+官方插件)

- @doc https://module-federation.io/zh/index.html
- @code https://github.com/module-federation/core

---

# 参考 @ref


- `详解 Module Federation 的实现原理` @nice
    - @by https://juejin.cn/user/4353721774379054/posts
    - @doc
        - https://juejin.cn/post/7151281452716392462
        - https://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&mid=2651617653&idx=2&sn=fdc3cd0abdb1080c70727494f23e2053

```js
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  entry: './index.js',
  // ....
  plugins: [
    new ModuleFederationPlugin({
      name: 'component_app',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/Button.jsx',
        './Dialog': './src/Dialog.jsx',
        './Logo': './src/Logo.jsx',
        './ToolTip': './src/ToolTip.jsx',
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    })
  ]
};

===
const Button = React.lazy(() => import('component-app/Button'));

<Suspense fallback={<div>Loading...</div>}>
  <Button />
</Suspense>
```

```
// 使用 MF 构建出的产物新增了 
remoteEntry-chunk
shared-chunk
expose-chunk 
async-chunk

// 必须把原来的入口代码放到 bootstrap.js 里面

// 通过 JSONP 的形式去加载远程应用
拿到远程应用的 remoteEntry.js 文件后再去执行

webpack_require.I -- 初始化共享依赖
webpack_require.S -- 获取适合的版本

===
性能问题
多版本问题
```

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1715071290250-28E8md2KRJyA-image.png)

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1715074163431-RiGjnCNrmQNf-image.png)

- 字节 Web Infra 团队和 Module Federation 作者联手，正式推出 Module Federation 2.0！
    - https://juejin.cn/post/7362309246556651559

```
原本嵌入在 Webpack 中的 Module Federation Runtime 能力被提取出来
形成了一个独立的 SDK
```

```js
import { init, loadRemote } from '@module-federation/enhanced/runtime';

init({
  name: '@demo/app-main',
  remotes: [
    {
      name: "@demo/app1",
      entry: "http://localhost:3005/mf-manifest.json",
      alias: "app1"
    },
    {
      name: "@demo/app2",
      entry: "http://localhost:3006/remoteEntry.js",
      alias: "app2"
    },
  ],
});

loadRemote("app2/util").then((md)=>{
  md.add(1,2,3);
});
```

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1715070067793-e4sDrEC5CerJ-image.png)    