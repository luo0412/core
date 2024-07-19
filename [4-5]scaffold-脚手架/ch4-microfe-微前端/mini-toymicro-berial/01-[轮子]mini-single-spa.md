# [轮子]mini-single-spa

- https://github.com/woai3c/mini-single-spa
- https://github.com/woai3c/Front-end-articles/issues/31

```
single-spa、qiankun、micro-app @diff

===
extractScriptsAndStyles(node: Element, app: Application) 
```

# 注册

- URL监听

```
重写两个 API 和监听两个事件

重写 window.history.pushState()
重写 window.history.replaceState()
监听 popstate 事件
监听 hashchange 事件
```

- 正常加载

```
拉取 HTML 内容

解析 HTML 并提取 style script 标签内容

添加 style 标签，执行 script 脚本内容

将剩下的 body 部分的 HTML 内容赋值给子应用要挂载的 DOM 下
```

- 卸载子应用

```
pageEntry

===
window['mini-single-spa-vue'] = {
    bootstrap,
    mount,
    unmount
}

===
registerApplication({
    name: 'vue',
    pageEntry: 'http://localhost:8001',
    activeRule: pathPrefix('/vue'),
    container: $('#subapp-viewport')
})

registerApplication({
    name: 'react',
    pageEntry: 'http://localhost:8002',
    activeRule:pathPrefix('/react'),
    container: $('#subapp-viewport')
})

start()
```

# 隔离

- Proxy代理

```
app.window = new Proxy({}, {
    get(target, key) {
        if (Reflect.has(target, key)) {
            return Reflect.get(target, key)
        }
        
        const result = originalWindow[key]
        // window 原生方法的 this 指向必须绑在 window 上运行，否则会报错 "TypeError: Illegal invocation"
        // e.g: const obj = {}; obj.alert = alert;  obj.alert();
        return (isFunction(result) && needToBindOriginalWindow(result)) ? result.bind(window) : result
    },

    set: (target, key, value) => {
    	this.injectKeySet.add(key)
        return Reflect.set(target, key, value)
    }
})
```

- 卸载时清除子应用 window 作用域
- 记录绑定的全局事件、定时器，卸载时清除
- 缓存子应用快照
- 隔离子应用元素作用域

```
// 作用域隔离
重写查询类的 DOM API


===
// 样式隔离 single-spa-name 属性
div[single-spa-name=vue] {
	color: red;
}

===
// 样式隔离 @old
const re = /^(\s|,)?(body|html)\b/g
// 将 body html 标签替换为子应用挂载容器的 id
cssText.replace(re, `#${app.container.id}`)
```

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1653982122187-atXknyQitKmK.png)

# 通信

- window.spaGlobalState
- 订阅/发布

```js
// 父应用
window.spaGlobalState.set('msg', '父应用在 spa 全局状态上新增了一个 msg 属性')
// 子应用
window.spaGlobalState.onChange((state, operator, key) => {
    alert(`vue 子应用监听到 spa 全局状态发生了变化: ${JSON.stringify(state)}，操作: ${operator}，变化的属性: ${key}`)
})

===
// 父应用
window.spaGlobalState.emit('testEvent', '父应用发送了一个全局事件: testEvent')
// 子应用
window.spaGlobalState.on('testEvent', () => alert('vue 子应用监听到父应用发送了一个全局事件: testEvent'))
```

---

# 参考 @ref