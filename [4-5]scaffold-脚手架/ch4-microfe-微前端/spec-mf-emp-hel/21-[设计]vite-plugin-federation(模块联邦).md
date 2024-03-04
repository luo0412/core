# [设计]vite-plugin-federation(模块联邦)

---

# 参考 @ref

- 详解 Module Federation 的实现原理
    - @by https://juejin.cn/user/4353721774379054/posts
    - @doc
        - https://juejin.cn/post/7151281452716392462
        - https://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&mid=2651617653&idx=2&sn=fdc3cd0abdb1080c70727494f23e2053

```
使用 MF 构建出的产物发生了变化
里面新增了 remoteEntry-chunk、shared-chunk、expose-chunk 以及 async-chunk
```

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
```