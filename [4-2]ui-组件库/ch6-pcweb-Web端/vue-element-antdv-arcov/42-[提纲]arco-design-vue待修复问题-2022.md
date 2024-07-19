# [提纲]arco-design-vue待修复问题-2022

- @issue https://github.com/arco-design/arco-design-vue/issues

---

# 模型组件

- select选择项没办法用model-value(v-model)绑定选中值
    - https://github.com/arco-design/arco-design-vue/issues/1296

```
v-same

让数字与字符串保持一致
```

- 请问如何全局注入并修改组件的默认属性
    - https://github.com/arco-design/arco-design-vue/issues/1311

```
v-prefer
```

- 当select option value值 为空时，选项label不显示
    - https://github.com/arco-design/arco-design-vue/issues/1252

```
@ps 这是设计失误

""、null、undefined 当做没有选择的状态
并且 default-value = ""

暂时用 "*" 代替

===
v-fix
```

- 能否实现表格数据的跨页行选择
    - https://github.com/arco-design/arco-design-vue/issues/1315

```
v-keep
```

- Tree组件default-expand-all属性不生效 @todo
    - https://github.com/arco-design/arco-design-vue/issues/1298

```
v-util // 直到这个数据有值且不为空
回调展开事件

===
v-if 简单处理一下也行
```  

- List组件虚拟列表追加数据时滚动条乱蹦
    - https://github.com/arco-design/arco-design-vue/issues/1238
    - https://github.com/arco-design/arco-design-vue/issues/1270
    - https://github.com/arco-design/arco-design-vue/issues/1239


```
v-virtual
```


- 权限控制功能需要优化
    - https://github.com/arco-design/arco-design-vue/issues/1002

```
v-auth
```

- 全局的v-loading指令
    - https://github.com/arco-design/arco-design-vue/issues/443

```
v-loading
```

- 建议增加一种主题设置方式，根据主色自动生成色阶（辅助颜色）
    - https://github.com/arco-design/arco-design-vue/issues/475

```
v-mode
```

- DatePicker支持时区
    - https://github.com/arco-design/arco-design-vue/issues/241

```
国际站中一般不会采用东八区时间
希望支持时区自由选择

===
v-format="u8"
```


- Tree 能否支持点击整个 node 而非 node-title 来展开节点
    - https://github.com/arco-design/arco-design-vue/issues/1307

```
v-infect
```

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1656093126423-e47JZDnZWzPJ-image.png)

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1656093143546-CKWnFSsP6stH-image.png)


- Select: 当 v-show 为 false 时不应显示
    - https://github.com/arco-design/arco-design-vue/issues/760
    - https://github.com/TuSimple/naive-ui/blob/main/src/select/src/Select.tsx

```
naiveui等处理了vShow, 没有这个问题

所以v-if也会有相应问题

===
v-show只能对有根结点的组件使用产生的问题

===
这个也可以用 v-fix
```

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1656117558585-rBbRJz3khJW4-image.png)

- 表单验证器改进
    - https://github.com/arco-design/arco-design-vue/issues/823
    - https://github.com/arco-design/arco-design-vue/issues/672

```
参考async-validator中的fullField
```

- a-modal组件bug。a-table性能问题
    - https://github.com/arco-design/arco-design-vue/issues/1290

```
a-modal组件开启draggable时当内容长度超出屏幕高度的时候，去拖动标题
整个弹窗直接就上移了，怎么都弄不回来

a-table组件开启column-resizable时 数据有100条时而且数据并不复杂
拖动列宽已经有明显卡顿，而且拖动的时候线是不跟着鼠标的
鼠标移动了100px，可能线才移动了七八十px
```

- 数据穿梭框 Transfer 新增tree结构
    - https://github.com/arco-design/arco-design-vue/issues/1260

```
这个tdesign做的比较好
```

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1656063169553-PKts6rANF3w4-image.png)

# 模型组件 @sub

- Typography.Paragraph类型缺少ellipsis @ignore
    - https://github.com/arco-design/arco-design-vue/issues/1312

```
没有类型提示, 但是实际上是支持的

===
v-ellipsis
```

- Table 中行数据更新后（rowKey为id，并且id不变），Column 的 Tooltip 不更新 @tofix
    - https://github.com/arco-design/arco-design-vue/issues/1259
    - https://codesandbox.io/s/misty-bash-n1bodz?file=/src/Demo.vue

```
naiveui等其他框架没有这个问题

===
针对id的性能优化
```

- date-picker控件的readonly无效
    - https://github.com/arco-design/arco-design-vue/issues/1215

```
设置readonly以后，还可以编辑，allow-clear也生效
```

- 级联选择中不同分组下相同的 value 回填展示不正确 @fix
    - https://github.com/arco-design/arco-design-vue/issues/1192
    - https://element-plus.gitee.io/zh-CN/component/cascader.html
    - https://stackblitz.com/edit/angular-eq6kfj-8es9ey?file=src/App.vue

```
开启path-mode即可

===
其他组件库没有这个问题
```

- 开放一些表格的方法
    - https://github.com/arco-design/arco-design-vue/issues/875

- 函数调用modal，按回车会无限新增modal 
    - https://github.com/arco-design/arco-design-vue/issues/603


- 按需加载，a-layout-sider组件设置resize-directions=['right']闪屏
    - https://github.com/arco-design/arco-design-vue/issues/1269

```
按需加载导致
```

- 选择框组件输入汉字报错 @tofix
    - https://github.com/arco-design/arco-design-vue/issues/1322
    - https://stackblitz.com/edit/angular-lyhrun?file=src%2FApp.vue

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1656059356571-R8BEBX8ansHD-image.png)


- arco-design 替换掉 normlize.css 而使用 modern-normalize
    - https://github.com/arco-design/arco-design-vue/issues/759


- Table组件 bodyCellStyle 样式问题
    - https://github.com/arco-design/arco-design-vue/issues/1326
    - https://stackblitz.com/edit/angular-vnekqh

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1656059170744-sJHiTkKWAbXt-image.png)


- 选择器 Select在允许搜索的情况下怎么禁止输入前后空格
    - https://github.com/arco-design/arco-design-vue/issues/1146

- Table selectedRowKeys的类型问题
    - https://github.com/arco-design/arco-design-vue/issues/1145

```
如果是ts检验警告，可以先加个 as string[] 或者 ignore 处理下
```

- 希望增加一个取色器组件
    - https://github.com/arco-design/arco-design-vue/issues/1225

- 上传列表的开始按钮，如何不显示它
    - https://github.com/arco-design/arco-design-vue/issues/1226

- 导出props以及emits定义
    - https://github.com/arco-design/arco-design-vue/issues/1319

- upload-draggable模式下添加slot 
    - https://github.com/arco-design/arco-design-vue/issues/1313

- Popover频繁闪现
    - https://github.com/arco-design/arco-design-vue/issues/1318
    - https://github.com/arco-design/arco-design-vue/issues/1310

- tooltip部分场景导致页面抖动
    - https://github.com/arco-design/arco-design-vue/issues/1321

- a-transfer组件的item插槽增加value值传参 @tofix
    - https://github.com/arco-design/arco-design-vue/issues/1295

- a-tree 、a-tree-select组件勾选框状态异常 @fix
    - https://github.com/arco-design/arco-design-vue/issues/1276
    - https://github.com/arco-design/arco-design-vue/pull/1331

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1656062865159-mRep6FGZXfNn-image.png)

- 增加标签组，效果类似于InputTag
    - https://github.com/arco-design/arco-design-vue/issues/957
    - https://arco.design/vue/component/tag


# 模型组件 @other

- TextArea文字遮挡问题
    - https://github.com/arco-design/arco-design-vue/issues/223

```
@ps 设计问题

===
多行时直接单独一行

或者阴影遮罩
```

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1656058417452-d4T3nhHX5fiE-image.png)


- vuepress2中通过clientAppEnhance引入arco报错
    - https://github.com/arco-design/arco-design-vue/issues/660

- webpack如何按需引入
    - https://github.com/arco-design/arco-design-vue/issues/1265

- 当a-modal里放入a-tree的时候，同时给a-tree的父元素加上max-height: 400px
    - https://github.com/arco-design/arco-design-vue/issues/1283
    - https://codesandbox.io/s/dreamy-parm-p8fois?file=/src/App.vue

```
样式问题
去掉父容器的 overflow-y: auto; 即可
```

- 表格自定义渲染
    - https://github.com/arco-design/arco-design-vue/issues/1328
    - https://github.com/arco-design/arco-design-vue/issues/1327  

---

# 布局组件

- scrollbar

```
已经在计划中, 已经合并了代码

并且优化到其他关联组件中
```


# 布局组件 @other

- Accessibility improvement
- RTL

---

# 参考 @ref