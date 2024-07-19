# [元素]列表(List+Tree)

> treeable的List

- ChangeLog
- Descriptions 描述列表

---

# 高性能渲染

- 「前端进阶」高性能渲染十万条数据(虚拟列表)
    - https://juejin.cn/post/5db684ddf265da4d495c40e5

# 虚拟列表

- 虚拟滚动要求每个cell都是定高的??
- 按需显示，仅对可见区域进行渲染

---

# List -> Tree -> Table

- 理论上来说，这三个也是同一个组件


---

# 结合布局用的Pagination

```
// 实现
删除数据时注意加载最适合的一页，可能删除了所在页的唯一一条数据
与数据表格的结合 滚动条 + 水平拉伸的省略号
```