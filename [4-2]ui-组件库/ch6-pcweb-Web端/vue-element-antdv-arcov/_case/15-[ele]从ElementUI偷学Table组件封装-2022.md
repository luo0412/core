# [ele]从ElementUI偷学Table组件封装-2022

- https://github.com/ElemeFE/element/tree/dev/packages/table

```
tableStore() -- 存储数据

this.store.insertColumn()
this.store.updateColumns()
```

![](https://raw.githubusercontent.com/luo0412/static/main/202210220904973.png)

---

# 参考 @ref

- 【ElementUI】源码分析 @nice
    - @by https://space.bilibili.com/1842032/video
    - @vid https://www.bilibili.com/video/BV1AR4y1K7qJ/

```
// store
实现精简版本的统一状态管理

store - Vue.extend
相当于一个没有渲染和挂载的Vue组件

===
// TableLayout 
表头列宽和内容的列宽要保持一致
```

![](https://raw.githubusercontent.com/luo0412/static/main/202210291525820.png)

- `Element UI Table组件源码分析` @nice
    - @by 
        - https://github.com/jinzhanye
        - https://gitee.com/yejinzhan
    - @blog https://yejinzhan.gitee.io/
    - @code https://github.com/jinzhanye/element-table-analysis 
    - @doc https://yejinzhan.gitee.io/2018/07/25/Element%20UI%20table%E7%BB%84%E4%BB%B6%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/

- Element非官方分析 @coll @nice
    - https://www.jianshu.com/c/c71f9c127c71 
    - https://www.jianshu.com/p/91ae0724f5f3

- 封装element-ui表格，我是这样做的
    - https://juejin.cn/entry/5f1e0e9a6fb9a07e87673cd7

- Element UI Table组件源码分析
    - https://juejin.cn/post/6952312803159965709

- https://juejin.cn/post/6900046013726195720
- https://segmentfault.com/a/1190000015756225