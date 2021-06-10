# [源码]Axios

---

# 文章

- 77.9K Star 的 Axios 项目有哪些值得借鉴的地方
    - https://juejin.im/post/6885471967714115597
- 学习 axios 源码整体架构，打造属于自己的请求库
    - https://segmentfault.com/a/1190000021321303
- axios 之cancelToken原理以及使用
    - https://www.cnblogs.com/ysk123/p/11544211.html

```js
// 在外部控制CancelToken内部的promise对象
let resolveHandle;
new Promise((resolve)=>{
    resolveHandle=resolve;
}).then((val)=>{
    console.log('resolve',val);
});
resolveHandle('ok');
```

# 参考