# [提纲]兼容IE8的MVC框架-2017(anujs)

---

# 兼容IE8+的框架

- `anujs` @nice
- `react0.14.x` @nice
- regular
- avalon2

# 兼容IE8+的框架 @other

- omio ??
- yoxjs
- react-lite
- vue1
- angular1 
- sanjs @old 
- nerv.js @old
- knockoutjs @old
- Nec + Nej @old 

---

# 常用文档

- antd-design v1.x.x 文档 
    - https://1x.ant.design/docs/react/introduce
- webpack1.X 渐进教程
    - https://segmentfault.com/a/1190000008908550  
- react14到15版本主要变更
    - https://www.jianshu.com/p/a8bc5b292561
- React规范
    - https://github.com/react-component/react-component.github.io/blob/master/docs/zh-cn/component-code-style.md
- react-router-dom示例讲解
    - https://blog.csdn.net/mapbar_front/article/details/79605346
- webuploader
    - http://fex.baidu.com/webuploader/getting-started.html
- sockjs
    - https://github.com/sockjs/sockjs-client
- Ant-Tool @old
    - 蚂蚁金服新一代构建和调试工具
    - http://ant-tool.github.io/index.html

---

# 小型MVC

- yox.js @nice
  - 小型MVVM 兼容IE8
  - @by https://github.com/musicode 
  - @code https://github.com/yoxjs/yox
  - @doc https://yoxjs.github.io/yox/#/

- VM4IE8
    - A simple vue-like library which supports IE8.
    - https://github.com/wcflmy/VM4IE8


---

# 通用模板 @nice

- Antd社区示例和模板收集
    - https://github.com/ant-design/ant-design/issues/129

- dc-sdk-js
    - 兼容IE8+ @nice
    - @code https://github.com/xtTech/dc-sdk-js
    - Webpack4+Babel7+ES6兼容IE8 https://juejin.cn/post/5cabf7b0e51d456e8b07dd04
    - babel-polyfill VS babel-runtime https://juejin.cn/post/5a96859a6fb9a063523e2591

```js
// es3ify-loader -> 保留字给你加上引号
// 编译前
function(t) { return t.default; }
// 编译后
function(t) { return t["default"]; }


//  UglifyJS已提供了对IE浏览器的支持，不需要额外引入es3ify-loader
{
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          ie8: true
        }
      })
    ]
  }
}

// 使用commonjs -> 放弃tree shaking 
@babel/plugin-transform-modules-commonjs


require('core-js/features/object/define-property')
require('core-js/features/object/create')
require('core-js/features/object/assign')
require('core-js/features/array/for-each')
require('core-js/features/array/index-of')
require('core-js/features/function/bind')
require('core-js/features/promise')
```

- webpack-frames 
    - (兼容的)各种模板 
    - https://github.com/HeavenSky/webpack-frames 

- express-multipage
    - 改写express兼容IE8的多页面框架
    - https://github.com/aiplat/express-multipage

- ie-webpack-start @old
    - 可兼容到IE8 
    - 作者还提供了react,avalon其他版本
    - 模板配置结构和vue-cli等相差较大 @old
    - @code https://github.com/sayll/ie-webpack-start

---

# anujs

- 支持React全家桶
- 支持99％的antd组件 @nice
- @code https://github.com/RubyLouvre/anu
- @doc 
    - https://rubylouvre.github.io/anu/ch/install.html
    - 兼容性 https://rubylouvre.github.io/anu/ch/compat.html

```js
resolve: {
   alias: {
      react: "anujs",
      "react-dom": "anujs",
      // 若要兼容 IE 请使用以下配置
      // 'react': 'anujs/dist/ReactIE',
      // 'react-dom': 'anujs/dist/ReactIE',
      rematch: "anujs/dist/Rematch.js"
      router: "anujs/dist/Router.js",
      rematch: "anujs/dist/Rematch.js",

      // 如果引用了 prop-types 或 create-react-class
      // 需要添加如下别名
      'prop-types': 'anujs/lib/ReactPropTypes',
      'create-react-class': 'anujs/lib/createClass',
      //如果你在移动端用到了onTouchTap事件
      'react-tap-event-plugin': 'anujs/lib/injectTapEventPlugin',  
   }
},
```

```jsx
<script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>

// https://github.com/RubyLouvre/anu-ie8-example/blob/master/src/index.js
import 'es5-shim'; //IE8 ^4.5.10
import 'object-create-ie8';//这样就不用加上es5-sham
import 'object-defineproperty-ie8';
import 'console-polyfill';
//只有打开了F12才会有这个方法
import 'json3';  //比IE8的JSON好用
import 'bluebird'; //性能超高的Promise实现
import 'fetch-polyfill2'; //fetch 实现
import 'media-match'
```

```js
// npm install uglifyjs-webpack-plugin@1.0.0-beta.2  
// UglifyJs3
// 测试下来有点问题 司徒大佬随手粘贴的??
new UglifyJsPlugin({
    parallel: {
        cache: true,
        workers: 4,
    },
    uglifyOptions: {
        mangle: {
            eval: true,
            toplevel: true,
        },
        parse: {
            html5_comments: false,
        },
        output: {
            comments: false,
            ascii_only: true,
            beautify: false,
        },
        ecma: 5,
        // ??
        // ie8: false, 
        ie8: true,
        compressor: {
            properties: true,
            unsafe: true,
            unsafe_comps: true,
            unsafe_math: true,
            unsafe_proto: true,
            unsafe_regexp: true,
            unsafe_Func: true,
            dead_code: true,
            unused: true,
            conditionals: true,
            keep_fargs: false,
            drop_console: true,
            drop_debugger: true,
            reduce_vars: true,
            if_return: true,
            comparisons: true,
            evaluate: true,
            booleans: true,
            typeofs: false,
            loops: true,
            toplevel: true,
            top_retain: true,
            hoist_funs: true,
            hoist_vars: true,
            inline: true,
            join_vars: true,
            cascade: true,
            collapse_vars: true,
            negate_iife: true,
            pure_getters: true,
            pure_funcs: true,
            // arrows: true,
            passes: 3,
            ecma: 5,
        },
    },
    sourceMap: false,
}),
```

# anujs - 模板

- anu-starter-kit @nice
    - @by  L-Chris(可视化 + sync) 
        - https://github.com/L-Chris
    - 整合了antd 
    - @code https://github.com/L-Chris/anu-starter-kit

- reactie @nice
    - 建议考虑这个
    - polyfill转换思路清晰
    - A solution that makes React stack work in IE8.
    - Ant Design 1.x + React 16 + Reach + Rematch  
    - @code https://github.com/ambit-tsai/reactie

```js
{
  loader: 'babel-loader',
  options: {
    presets: [
      ['@babel/preset-env', {
        loose: true,
        modules: 'commonjs',
      }]
    ]
  }
}
```

```html
<!DOCTYPE html> 
<meta http-equiv="X-UA-Compatible" content="IE=EDGE"/>
```

- anu-antd-axios-echarts-ie8  @nice
    - @code https://github.com/yunpengGit/anu-antd-axios-echarts-ie8 
    - IE9+相对正常， 勉强兼容IE8，仍有很多antd UI上的BUG 
    - 提供了一些测试用例
    - 需要拷贝anujs到node_modules @fix

```js
import createReactClass from 'create-react-class';
```

```html
<!-- media-match polyfill的报错处理  -->
<script src="https://as.alipayobjects.com/g/component/??console-polyfill/0.2.2/index.js,es5-shim/4.1.14/es5-shim.min.js,es5-shim/4.1.14/es5-sham.min.js,html5shiv/3.7.2/html5shiv.min.js,media-match/2.0.2/media.match.min.js"></script>

<!-- 或者加上去这句话 IE9需要改为IE10 -->
<!--[if lt IE 10]>
    <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->
```

```py
# 存在以下问题
1. 对象不支持“getComputedStyle”属性或方法
2. 下拉框不能正常使用
3. 日期选择器位置漂移
```


- ie8-cli @nice
    - anu + typescript
    - https://github.com/cxphoe/ie8-cli

- anujs-webpack4-ie7-8 @nice @simple
    - 打包兼容IE8+
    - https://github.com/magicapple/anujs-webpack4-ie7-8 

- react-webpack-boilerplate @nice @simple
    - 打包兼容IE8+
    - https://github.com/sitorhy/react-webpack-boilerplate

# anujs-模板 @old

- anu-antd-ie8
    - 暂时只兼容到IE9
    - https://github.com/hcxowe/anu-antd-ie8

- react-webpack-ie6-boilerplate
    - 支持多页面
    - Lcss
    - https://github.com/meeteason/react-webpack-ie6-boilerplate

- anu-cli @old 
    - 暂时没成功
    - https://github.com/Levan-Du/anu-cli

- React_IE8_boilerplate 
    - https://gitee.com/menhal/React_IE8_boilerplate    
- react-ssr-ie8-startup 
    - https://github.com/nasawz/react-ssr-ie8-startup
    
- create-anu-app  @old 
    - 跑不起来,缺点东西
    - 如何让React(anujs)跑在IE8上 
        - https://zhuanlan.zhihu.com/p/39103023
    - @code https://github.com/RubyLouvre/create-anu-app 
- anu-ie8-example @simple
    - https://github.com/RubyLouvre/anu-ie8-example

---

# React14 

```
虽然过时了
但很多人都会react16, 学习成本低
```

# React14 - 模板 

- typescript-react-redux-ie8
    - https://github.com/hifizz/typescript-react-redux-ie8
    - IE8 下访问webpack.UglifyJsPlugin 压缩的代码出错 https://github.com/SamHwang1990/blog/issues/6

- react-antd-webpack-ie8 @nice 
    - 初期参考HeavenSky react-ie8-cli
    - 集成了webuploader/sockjs/echarts @nice
    - 一些工具库 @nice
    - 请求测试面板
    - @code https://github.com/youka2012/react-antd-webpack-ie8
    - https://github.com/youka2012/peas_front @nil

```js
考虑node_modules成功安装后打包压缩
下次本地解压
```

- react-antd-ie8 @nice
    - 使用antd1
    - @demo https://heavensky.github.io/react-antd-ie8/#/home
    - @code https://github.com/HeavenSky/react-antd-ie8

```js
比较诡异，原来试过是兼容IE8+的

在nodejs-v10.15.1时 
打包测试仅兼容IE9
```

- react-ie8-cli @nice
    - 功能示例较少
    - 使用react-components(rc)
    - @code https://github.com/tanggd7/react-ie8-cli

- react-adminlte-ie8-test @nice
    - 打包可以兼容
    - 使用adminlte + jquery
    - react相对使用较弱
    - @code https://github.com/cshenger/react-adminlte-ie8-test

- react-boilerplate-ie8 @nice 
    - browserSync
    - react14 + antd1
    - 给出了视频的场景示例 @nice
    - 组件例子有些简陋
    - https://github.com/localSummer/react-boilerplate-ie8
    - https://github.com/hjx5309/reactIe8

- react-family-ie8 @nice

    - 能够支持IE8+
    - 开发时要热更新，打包代码才能兼容IE8
    - 没有UI示例 @old
    - 存在IE8报栈溢出的错误
    - @code https://github.com/brickspert/react-family-ie8 

- react-ie8-webpack3-example @nice
    - 没有使用UI库
    - 支持async/await语法，fetch，sass，redux + redux thunk @nice
    - @nice https://github.com/dunhuang/react-ie8-webpack3-example

# React14-模板 @old

- react-app-ie8 @nice
    - 目前测试未通过 --> IE9+
    - cmui --> 小众
        - 自写UI支持IE8+ @nice
        - https://github.com/aiplat/cmui
    - 改写react兼容ie8的跨平台app框架
    - @code 
        - https://github.com/aiplat/react-app-ie8
    

- ant-init @archived 
    - 官方模板
    - @code https://github.com/ant-design/antd-init

- react-ie8-boilerplate @old
    - 目前打包测试仅支持IE9+
    - antd2
    - 使用Docker
    - @code https://github.com/jaychsu/react-ie8-boilerplate

- ai-react-template @nice @old 
    - 多页面 
    - 没给太多示例
    - 技术偏旧
    - @code https://github.com/AI-UNICOM/ai-react-template


- react-redux-support-ie8 @old 
    - 有一些star
    - 疑似IE8不能运行
    - https://github.com/ericyang89/react-redux-support-ie8
    - https://github.com/zhoulijie/react-redux-support-ie8

- react-redux-antd-ie8 @old
    - 疑似打包IE8不通过
    - https://github.com/bertFu/react-redux-antd-ie8

- web-react-ie8-antd-cool @old
    - 目前没运行成功
    - 蚂蚁金服打包工具 dora + atool @old --> 自造轮子
    - 多页面处理
    - @code https://github.com/webgameone/web-react-ie8-antd-cool

- reactwithie8 
    - 好像有点示例内容?? 模块化 --> 暂时跑不动
    - @code https://github.com/sampsonli/reactwithie8

- React-antd-IE8 @old
    - 暂时跑不动
    - 提供后台express
    - @code https://github.com/MrJoe0929/React-antd-IE8

```js
// 目前报错
  12 | 
  13 | ReactDom.render(
> 14 |     <BrowserRouter>
     |     ^
  15 |         <App/>
  16 |     </BrowserRouter>
  17 |     ,

 @ multi app
```

---


# React-Lite 

- @code https://github.com/Lucifier129/react-lite

```js
IE8+
兼容React15
```

---

# regular

- 网易
- @code <https://github.com/regularjs/regular>
- @doc http://regularjs.github.io/guide/
- 组件库regular-ui 
    - <https://github.com/regular-ui/regular-ui>

# regular - 模板

- fisher-zh-regular 
    - https://github.com/fisher-zh/webpack-regular
- 官方 
    - https://github.com/regularjs/example ??
- es6-regular-gulp @old
    - 跑不动
    - <https://github.com/xuyanquan/es6-regular-gulp>
    - 采用es6 + regular + gulp技术 ??
    - 后台管理系统前端开发方案

---

# avalon

- @doc <http://avalonjs.coding.me/> 
- @code <https://github.com/RubyLouvre/avalon>
- oniui 
    - Avalon组件库 
    - <https://github.com/RubyLouvre/avalon.oniui>
- ane 组件库 @old 
    - <https://github.com/xxapp/ane>
- 发布基于 Avalon2 的 UI 组件库与 SPA 脚手架 
    - <https://segmentfault.com/a/1190000009625441>

```
可以兼容IE7
```

# avalon - 模板

- avalon2-webpack2-spa @nice
    - 由vue脚手架修改过来
    - 采用类vue的单文件组件书写，异步、嵌套路由  
    - https://github.com/hmhao/avalon2-webpack2-spa
- webpack-avalon2-SPA-seed 
    - https://github.com/crazyliuzc/webpack-avalon2-SPA-seed
- avalon-spa-app 
    - https://github.com/Levan-Du/avalon-spa-app
- avalon-typescript
    - https://github.com/geyinhui/avalon-typescript

---

# yoxjs

- 还没试成功...

# yoxjs-模板

- bell-ui
    - https://github.com/divawth/bell-ui

- yox-project
    - https://github.com/yoxjs/yox-project

---

# omio

- @by 腾讯 
- 全面兼容 IE8 和移动端
- @code 
    - https://github.com/Tencent/omi/blob/master/packages/omio/README.md
- @doc 
  - https://github.com/Tencent/omi/blob/master/tutorial/omio.cn.md
  - https://tencent.github.io/omi/assets/md2site/
   
- mapping-omio
    - https://github.com/Tencent/omi/blob/master/packages/omi-cli/template/o/src/utils/mapping-omio.js

```jsx
// IE填坑
```

---

# San 

```
百度
类Vue的开发体验 @nice

webpack打包不兼容IE8 @old 
没有支持IE8+的官方UI @old

为了兼容 IE8, 
放弃 ES6的 export 和 import 语法,
使用es5中的module.exports 和 require 语法

UI还是采用bootstrap等 cdn引入的
```

- @code <https://github.com/baidu/san>
- @doc https://baidu.github.io/san/

- ER
    - San以前的版本
    - @code https://github.com/erik168/ER

- 常见问题
    
    - interlliJ idea 不识别文件类型 
        - <https://blog.csdn.net/aaashen/article/details/46740817>
        - 借用Vue|HTML IDEA插件语法高亮下先
    - 初始化数据时ie8报错
        - https://github.com/baidu/san/issues/422

- babel-plugin-transform-reserved-words
    - https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-reserved-words

- santd
    - UI库 
    - IE8+兼容几乎很悬
    - https://github.com/ecomfe/santd

# San - 模板

- @issue 什么时候提供类似vuecli的快速开发框架 
    - https://github.com/baidu/san/issues/280

- SanFrameWork-IE8 
    - 引用组件也一样不能兼容啊 
    - @code https://github.com/QingHuanMoon/SanFrameWork-IE8

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/static/images/mvc/diff.jpg)

> @from  https://www.zhihu.com/question/65498751/answer/294265707

---

# Vue1

- vue1-ie
    - vue1兼容ie8，判断当前浏览器为IE8后，会把Vue实例修改为VBScript对象，在非ie8浏览器，仍然是原来的Vue的实现
    - https://github.com/abeet/vue1-ie

---

# Angular1

- angular更迭快, 用老早过时的会心理不平衡 

# Angular1 - 模板

- ng-seed 
    - https://github.com/jm-team/ng-seed

---

# NervJS 

```js
@from 京东

A blazing fast React alternative, compatible with IE8 and React 16

至今没找到兼容IE8+(+router)的例子....
```

- @code <https://github.com/NervJS/nerv>
- @doc <https://nervjs.github.io/docs/>
- at-ui-nerv
    - 组件库
    - https://github.com/NervJS/at-ui-nerv

# NervJS - 模板

- nervjs-ie8 @nice
    - 改写nervjs（react）兼容ie8的多页面框架 
    - https://github.com/aiplat/nervjs-ie8     


- nerv-webpack-boilerplate @org
    - 官方模板 
    - <https://github.com/NervJS/nerv-webpack-boilerplate>

- nerv-ie8-boilerplate 
    - https://github.com/saltyshiomix/nerv-ie8-boilerplate

- Nerv-ie8
    - ts支持??
    - https://github.com/zhans1993/Nerv-ie8

- nerv-website
    - nerv文档 同框架搭建 
    - <https://github.com/NervJS/nerv-website>

- nerv-redux-todomvc 
    - <https://github.com/NervJS/nerv-redux-todomvc>

---

# Knockout @old

```js
过时
不好用
```

# Knockout- 模板

- webpack-knockout-ie8 
    - https://github.com/xianlong1226/webpack-knockout-ie8

---

# Backbone

---

# Nec + Nej @old 

- @by 网易 
- @doc 
    - <http://nej.netease.com/>
    - <http://nej.netease.com/course/quickStart>

---

# 参考

- 为什么我要牺牲现代浏览器用户的体验去兼容 ie8？
    - https://juejin.cn/post/7279096030536581181
    - https://github.com/xcatliu/react-ie8

- 支持ie8的mvvm框架比较 @diff
    - <https://www.zhihu.com/question/52069420>

- anu-与其他迷你react的比较 @diff
    - https://rubylouvre.github.io/anu/ch/index.html

- 如何评价百度新造的 MVVM 轮子 San 
    - <https://www.zhihu.com/question/65498751/answer/294265707>
- 如果要兼容IE8，前端用什么框架最好？ 
    - https://www.zhihu.com/question/268725034

- aiplat/womendi 
    - https://github.com/aiplat

- HeavenSky 
    - 兼容IE8/9
    - https://github.com/HeavenSky