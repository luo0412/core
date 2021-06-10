# [源码]Dva

> dva = React-Router + Redux + Redux-saga

- https://github.com/dvajs/dva

# 示例

```js
*submit(action, { put, call, select }) {
  const formData = yield select(state => {
    const buyModel = state.buy;
    const context = state.context;
    const { stock } = buyModel;
    return {
      uuid: context.uuid,
      market: stock && stock.market,
      stockCode: stock && stock.code,
      stockName: stock && stock.name,
      price: String(buyModel.price),
      // 委托数量
      entrustAmount: String(buyModel.count),
      totalBalance: buyModel.totalBalance,
      availableTzbBalance: buyModel.availableTzbBalance,
      availableDepositBalance: buyModel.availableDepositBalance,
    };
  });
  const result = yield call(post, '/h5/ajax/trade/entrust_buy', formData, { loading: true });

  if (result.success) {
    toast({
      type: 'success',
      content: '委托已受理',
    });
    // 成功之后再获取一次现价，并填入
    // yield put({type: 'fetchQuotation', payload: stock});

    yield put({ type: 'entrustNoChange', payload: result.result && result.result.entrustNo });
    // 清空输入框内容
    yield put({ type: 'searchQueryChange', value: '' });
  }

  // 403时，需要验证密码再重新提交
  if (!result.success && result.resultCode === 403) {
    yield put({ type: 'checkPassword', payload: {} });
    return;
  }

  // 失败之后也需要更新投资宝和保证金金额
  if (result.result) {
    yield put({ type: 'balanceChange', payload: result.result });
  }

  // 重新获取最新可撤单列表
  yield put({ type: 'fetchRevockList' });

  // 返回的结果里面如果有uuid, 用新的uuid替换
  if (result.uuid) {
    yield put({ type: 'context/updateUuid', payload: result.uuid });
  }
},
```

# 依赖

```js
"babel-runtime": "^6.26.0", // 一个编译后文件引用的公共库，可以有效减少编译后的文件体积
"dva-core": "^1.1.0", // dva 另一个核心，用于处理数据层
"global": "^4.3.2", // 用于提供全局函数的引用
"history": "^4.6.3", // browserHistory 或者 hashHistory
"invariant": "^2.2.2", // 一个有趣的断言库
"isomorphic-fetch": "^2.2.1", // 方便请求异步的函数，dva 中的 fetch 来源
"react-async-component": "^1.0.0-beta.3", // 组件懒加载
"react-redux": "^5.0.5", // 提供了一个高阶组件，方便在各处调用 store
"react-router-dom": "^4.1.2", // router4，终于可以像写组件一样写 router 了
"react-router-redux": "5.0.0-alpha.6",// redux 的中间件，在 provider 里可以嵌套 router
"redux": "^3.7.2" // 提供了 store、dispatch、reducer 
```


# 文章

- Dva 源码解析 @org
  - https://dvajs.com/guide/source-code-explore.html
- 深入解析dva源码之dva-core篇
  - @by https://github.com/sulirc
  - @blog https://www.yuque.com/sulirc
  - @doc https://juejin.im/post/6844904008558051336
- dva源码分析 @nice
  - @by https://github.com/tangxiangmin
  - @blog https://shymean.com/
  - @doc https://juejin.im/post/6844904078435155982

# 参考

