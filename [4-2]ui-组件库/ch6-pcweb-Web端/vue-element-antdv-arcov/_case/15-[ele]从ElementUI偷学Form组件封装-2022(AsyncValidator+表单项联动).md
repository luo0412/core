# [ele]从ElementUI偷学Form组件封装-2022(AsyncValidator+表单项联动)

# 核心方法

- field.removeValidateEvents()
- field.addValidateEvents()
- potentialLabelWidthArr
- broadcast + dispatch

---

# AsyncValidator

---

# 参考 @ref

- element-ui表单源码解析之el-form
    - @by https://juejin.cn/user/3667626519957671/posts
    - @doc https://juejin.cn/post/6844903798356312077

- 【ElementUI】源码分析 @nice
    - @by https://space.bilibili.com/1842032/video
    - @vid https://www.bilibili.com/video/BV1AR4y1K7qJ/

```
@by 樱满空

===
// 表单验证
组件联动
触发祖先组件

===
// 联动
el-form
el-form-item
el-input

===
隐藏的for属性

===
getPropByPath
```

![](https://raw.githubusercontent.com/luo0412/static/main/202210291036677.png)

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1667011167504-5EwBcHNzBjZZ-image.png)

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1667012440166-Fe5cQTzCbQdA-image.png)

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1667012531501-J5pRDdf4icy7-image.png)

- 山地人分析开源库——饿了么Element库
    - @vid https://space.bilibili.com/390120104/search/video?tid=0&page=1&keyword=element&order=pubdate

```
@ps 没有form+table等重要组件的源码分析
```

- https://xieyufei.com/2021/02/23/Front-Element.html    