# [轮子]vexip-ui(SFC风格+源码易读+在线playground)

> @ps 不知道为什么, 总感觉文档被掺入了杂色, 有种灰蒙蒙的感觉...

- @code https://github.com/qmhc/vexip-ui
- @doc 
    - https://www.vexipui.com/zh-CN/component/table.html
    - https://www.vexipui.com/zh-CN/component/resize-observer

# 创新点

- 表格Table
    - https://github.com/vexip-ui/vexip-ui/blob/main/components/table/table.vue

```
调整列宽的动画
```

- 右键菜单

```js
const selectedKeys = await this.$contextmenu.open({
    clientX: event.clientX,
    clientY: event.clientY,
    appear: true,
    configs: [{ key: '选项1' }, { key: '选项2' }, { key: '选项3' }, { key: '选项4' }]
})
```

- 排版Typo
    - https://www.vexipui.com/zh-CN/component/typography.html

```
HTML同名增强

避免眼花缭乱的组件名字
```

- 布局Grid
    - https://www.vexipui.com/zh-CN/component/grid.html

- 高亮

```html
<Highlight :content="content" :key-words="keyWords"></Highlight>
```

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1688308990253-DDNPzd2BA5Gs-image.png)

- 抽屉

```
添加 resizable 属性可以开启抽屉的调整大小功能
```

# 创新点 @sub

- 面包屑

```
仿win10风格
```

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1688308493799-ix4DG85HCfRK-image.png)

- 气泡Bubble

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1688308892802-GMYQhp7P7DEX-image.png)

- 滚轮 Scroll

```
@ps 但不是很有用
```

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1688308872887-f5m4HazZ7nEt-image.png)

---

# 参考 @ref