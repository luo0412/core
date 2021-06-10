# [元素]面板(Panel+Alert)

# 弹框设计

```js
// 弹框应用级别

简单提示
出错
确认
阻止继续

// 弹框设计

如何支持alert()这样的阻塞
与其他组件之间的异步问题 setTimeout(fn, 0);
弹框上的下拉框内容是否允许溢出弹框 select下拉选项不确定
是否允许浏览器滚动条滚动

// 弹出层提取理念

lhgdialog会销毁之前提取的内容, 这种处理不合理
layer这种复制比较好
```

# 弹框

- vue插件开发练习--`实用弹窗` @nice
  - @doc https://juejin.im/post/5a0c19f26fb9a045186a465a
  - https://github.com/chenhuiYj/ec-slider
  - @code https://github.com/chenhuiYj/ec-dialog  

- 深度解析！Vue3 & React Hooks 新UI组件原理：Modal 弹窗
    - https://juejin.im/post/5e774a1ae51d4527271ebc92