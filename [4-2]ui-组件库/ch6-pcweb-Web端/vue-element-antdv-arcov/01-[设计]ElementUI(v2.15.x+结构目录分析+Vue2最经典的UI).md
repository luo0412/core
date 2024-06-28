# [设计]ElementUI(v2.15.x+结构目录分析+Vue2最经典的UI)

> 缩写: ele

- @code https://github.com/ElemeFE/element

# 安装运行

> 需要Nodejs 14.x的环境, 这才是最关键的

- 代理镜像安装

```bash
npm install --registry=http://registry.npm.taobao.org
```

- node-sass + webpack4.x

```
webpack
webpack-cli
webpack-dev-server

npm install -g webpack@4.14.0 webpack-cli@3.0.8 webpack-dev-server@3.1.11 --registry=http://registry.npm.taobao.org

===
cnpm install node-sass@4.14.1 --dev

node-gyp 
python2.7环境

安装gyp命令 npm install -g node-gyp

安装Python 2.7（v3.x.x不支持），安装后要配置环境变量。成功后执行
npm config set python python2.7

执行 npm config set msvs_version 2017
```

![](https://raw.githubusercontent.com/luo0412/static/main/202210281159743.png)

---

# 工具类

- https://github.com/ElemeFE/element/tree/dev/src/utils



---

# 源码阅读

- 从 Element UI 源码的构建流程来看前端 UI 库设计 @nice
    - https://juejin.cn/entry/5ef17463e51d4573d47d384f

```
@ps 大致讲了整体结构

===
采用gulp基于工作流去处理会更加方便

===
cp-cli 是一个跨平台的copy工具，和CopyWebpackPlugin类似

===
官方文档的展示

现在各大主流组件库文档都是用采用md编写

===
npm run bootstrap是用来安装依赖的

Element中发布主要是用shell脚本实现的

===
提供全局引入（UMD）和按需加载两种形式的包
```

![](https://raw.githubusercontent.com/luo0412/static/main/202210271124164.png)

![](https://raw.githubusercontent.com/luo0412/static/main/202210271153642.png)

- Element源码分析系列 
    - @by https://juejin.cn/user/59a3d3f851882524241a703d/posts
    - @doc https://juejin.cn/post/5b741fad6fb9a0098474bbb0

```
@ps 主要讲了表单组件
```

---

# 参考 @ref

- Element-UI 技术揭秘 @nice
    - @by https://juejin.cn/user/586db400a22b9d005695a69d/posts
    - @doc https://juejin.cn/post/5d64fa0af265da03cd0a8e7f

```
@ps 断更了
```

- 我的 Element-ui 源码学习 @building
  - https://juejin.cn/post/5e60740951882549575f98b6    

- EOITek-element @old
  - https://github.com/EOITek/element

```
社区修复版
```

