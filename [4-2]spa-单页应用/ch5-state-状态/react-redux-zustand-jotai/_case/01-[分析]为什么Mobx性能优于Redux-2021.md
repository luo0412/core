# [分析]为什么Mobx性能优于Redux-2021

---

# 参考 @ref

- 为什么我更喜欢 Mobx，而不是 Redux immutable @sub
  - @by 
    - https://www.zhihu.com/people/yu-cong-66-61-10/answers
    - https://github.com/imcuttle
  - @doc https://zhuanlan.zhihu.com/p/279600842
  - @repo
    - https://github.com/imcuttle/mometa

```
@ps 这篇文章没具体讲为什么

===
@ps 抖音web用的就是mobx

===
immer

===
mobx react 的更新渲染机制于官方的单向数据触发的渲染不同

mobx 会将 mdast 变成一个被观察的数据，在每一次 mutable 修改中，都会被观察到数据的改动
```  

- redux、immutablejs和mobx性能对比 @diff
  - https://www.cnblogs.com/kwzm/p/9889798.html
  - https://github.com/kwzm/redux-immutablejs-mobx-performance-test

```
mobx为什么js执行时间最短，因为它只有两个组件执行了render方法，两个必要的组件

而纵观其它两者都有些不必要的render

虽然react的diff算法已经很快了，但是当数据量达到一定规模的时候
这种不必要的render会越积越多，造成了内存和cpu的性能浪费
```