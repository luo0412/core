# [轮子]berial

- @code https://github.com/berialjs/berial

# 参考

- berial：更精致的微前端框架
  - https://zhuanlan.zhihu.com/p/301283431

```
微前端的本质就是前端路由

微前端多个实例其实没有什么依赖关系
是完全可以独立不行渲染的

// 实现思路
使用 web component 制造一棵树(顺序)
自上而下 load，自下而上 mount

load 阶段是同步的，用来确定顺序
后续的 mount/unmout 是异步的

有序的异步渲染
子树渲染完，再冒泡到父亲

借用了 web component 的 runtime
```

```js
new MutationObserver((mutations) => {
  mutations.forEach(async (m: any) => {
    switch (m.type) {
      case 'childList':
        if (m.target !== host) {
          for (let i = 0; i < m.addedNodes.length; i++) {
            const node = m.addedNodes[i]
            if (node instanceof HTMLScriptElement) {
              // 塞回去
            }
          }
        }
        break
      default:
    }
  })
}).observe(document, { childList: true, subtree: true })
```