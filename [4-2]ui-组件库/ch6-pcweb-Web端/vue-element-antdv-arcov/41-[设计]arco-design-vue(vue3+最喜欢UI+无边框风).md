# [设计]arco-design-vue(vue3+最喜欢UI+无边框风)

> 缩写: arcov

- @code
    - https://github.com/arco-design/arco-design-vue/tree/main/packages/web-vue/components
    - https://github.com/arco-design/arco-design-vue
- @doc https://arco.design/vue/docs/pro/start
- @demo https://vue-pro.arco.design/login

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1647264911514.png)

# 模板

- https://github.com/arco-design/arco-design-pro-vue
- https://github.com/qingqingxuan/arco-work

# 运行

> 需要用yarn安装

- yarn install

```
指定源

yarn config set registry https://registry.npm.taobao.org
```

- yarn run init 

```
不支持花括号, 展开命令重写下

 "init": "lerna run build --stream --scope=@arco-design/vite-plugin-arco-vue-docs && lerna run build --stream --scope=@arco-design/arco-vue-scripts && lerna link && lerna run build --scope=@arco-design/arco-vue-docs-navbar && lerna run init --scope=@arco-design/web-vue",
```

---

# 参考 @ref