# [设计]semi-design(抖音+迷幻风+DSM)

- @code
    - https://github.com/DouyinFE/semi-design/tree/main/packages/semi-ui
    - https://github.com/DouyinFE/semi-design

- @doc https://semi.design/zh-CN/show/table

---

# 依赖项 @deps

- react-scroll-parallax
- react-sortable-hoc
- react-virtualized
- reset-css
- wcag-color
- jsdom
- crypto
- axios
- storybook
- gatsby

# 跨框架技术方案

- Foundation 
- Adapter

```
任意需要 DOM 操作
驱动组件渲染更新的部分会委派给 Adapter 执行

===
Adapter 是一个接口
具有 Foundation 实现 Semi Design 业务逻辑所需的所有方法
```

![](https://raw.githubusercontent.com/luo0412/static/main/20211124172218.png)

---

# 参考 @ref