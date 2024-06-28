# [方案]造一个状态机(Redux+Mobx)

- 全网最全！盘点2023年20大前端状态管理库 @diff
  - https://juejin.cn/post/7310895905574092837

- 各流派 React 状态管理对比和原理实现 @nice @diff @digest
  - https://zhuanlan.zhihu.com/p/394106764

```
// redux
上手难度比较高，模板代码太多

Redux-saga、计算衍生状态的 reselect

核心源码都在 createStore 和 combineReducers 里面

===
// Mobx
响应式编程
相当于 没有模板的 Vue

===
// Recoil
Atom 是 Recoil 里面最小的数据单元，它支持更新和订阅

useRecoilState

===
// 小结
Redux 不会根据组件使用的状态来定向通知, 粗暴通知所有connect过的组件
Mobx 通过数据劫持, 做到了精准更新
Recoil 利用Atom的监听队列, 做到了精准更新
```

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1644750659564.jpg)

- 前端状态管理设计——优雅与妥协的艺术
  - https://mp.weixin.qq.com/s/FZMvr42OX9cv2gPP3gsKUA

---

# 参考 @ref

- how-to-build-redux @nice
  - @doc https://zapier.com/engineering/how-to-build-redux/

- awesome-state
  - https://github.com/tnfe/awesome-state

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1647135819705.png)

- React状态管理 @todo @digest
  - https://github.com/lencx/fzj/discussions/11