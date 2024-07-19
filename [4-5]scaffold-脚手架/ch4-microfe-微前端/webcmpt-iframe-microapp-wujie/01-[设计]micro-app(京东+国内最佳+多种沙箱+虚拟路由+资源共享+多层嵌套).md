# [设计]micro-app(京东+国内最佳+多种沙箱+虚拟路由+资源共享+多层嵌套)

- @code https://github.com/micro-zoe/micro-app
- @doc https://micro-zoe.github.io/micro-app/

```html
<micro-app name='my-app' url='http://localhost:3000/'></micro-app>
```

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1718870785128-f84WN4AXWbSm-image.png)

---

# 虚拟路由 @nice @digest

> @ps 这个比较难理解, 几种拦截路由的方法

- `native/native-scope` -- 放开路由隔离, 自行配置主子应用路由和可能的冲突
  - https://micro-zoe.github.io/micro-app/docs.html#/zh-cn/native-mode

```
@ps 根据需求, 这个是唯一选择

放开路由隔离，子应用和主应用共同基于浏览器路由进行渲染
```

- search(默认) -- 子应用的路由信息会作为query参数同步到浏览器地址上 @ignore

```
我们的菜单url是需要数据库配置的, 所以不是所有模式都能用的

===
search模式可能会导致Vue主应用循环刷新??

fullPath那些代码不方便改
```

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1718868629107-HSxsDAZ6QDjx-image.png)

- pure -- 不修改浏览器地址，也不增加路由堆栈，像组件一样 @ignore
- state -- 基于浏览器history.state, 同样不修改浏览器地址

# JS沙箱

- with沙箱
- iframe沙箱

# 样式隔离

> 最佳样式隔离思路

```css
micro-app[name=xxx] .test {
  color: red;
}
```

# 元素隔离 

- 主应用可以获取子应用的元素吗?

```
在微前端下主应用拥有统筹全局的作用
所以没有对主应用操作子应用元素的行为进行限制
```

# 数据通信 @ignore

没看到啥创意, 其实一个pubsub.js/mitt库就够了

---

# 资源共享

```js
import microApp from '@micro-zoe/micro-app'

microApp.start({
  // 设置全局共享资源
  globalAssets: {
    js: ['js地址1', 'js地址2', ...], // js地址
    css: ['css地址1', 'css地址2', ...], // css地址
  }
})
```

```html
<link rel="stylesheet" href="xx.css" global>
<script src="xx.js" global></script>
```

# 插件系统

- 地图插件

---

# 多层嵌套

```js
microApp.start({
  tagName: 'micro-app-xxx', // 标签名称必须以 `micro-app-` 开头
})
```

# 跨应用保活

- keep-alive 

```html
<micro-app name='xx' url='xx' keep-alive></micro-app>
```

```
不会被真正的卸载，也就不会触发 unmount 事件

afterhidden
beforeshow
aftershow

===
micro-app的keep-alive是应用级别的
```

---

# 部署

- micro-app-demo
  - https://github.com/micro-zoe/micro-app-demo
  - https://www.micro-zoe.com/main-vue2/

```
root(服务器根目录)
├── child
│   ├── angular11         // 子应用 angular11
│   ├── react16           // 子应用 react16
│   ├── react17           // 子应用 react17
│   ├── sidebar           // 子应用 sidebar
│   ├── vite              // 子应用 vite
│   ├── vue2              // 子应用 vue2
│   ├── vue3              // 子应用 vue3
│   ├── nextjs11          // 子应用 nextjs11，为每个主应用单独打包，端口号：5001~5009
│   └── nuxtjs2           // 子应用 nuxtjs2，为每个主应用单独打包，端口号：6001~6009
│ 
├── main-angular11        // 主应用 angular11
├── main-react16          // 主应用 react16
├── main-react17          // 主应用 react17
├── main-vite             // 主应用 vite
├── main-vue2             // 主应用 vue2
├── main-vue3             // 主应用 vue3
├── main-nextjs11         // 主应用 nextjs11，监听端口号：5000
├── main-nuxtjs2          // 主应用 nuxtjs2，监听端口号：7000
```

---

# 常见问题 @faq

- Vue应用中, 虚拟路由系统为search模式时主应用循环刷新

```html
<!-- bad 😭 -->
<router-view :key="$route.fullPath"></router-view>

<!-- good 😊 -->
<router-view :key="$route.path"></router-view>
```

---

# 参考 @ref