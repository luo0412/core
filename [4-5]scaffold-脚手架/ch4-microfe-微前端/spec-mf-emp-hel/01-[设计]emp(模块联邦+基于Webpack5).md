# [设计]emp(模块联邦+基于Webpack5)

> @ps 不适合融合老系统

- @code https://github.com/efoxTeam/emp
- @doc https://emp2.netlify.app/

```
@efox/plugin-vue-2
@efox/plugin-vue-3
@efox/emp-compile-swc
```

```js
module.exports={
   empShare: {
   name: 'microApp',
   remotes: {
     '@microHost': `microHost@http://localhost:8001/emp.js`,
   },
   exposes: {
     './App': './src/App',
   },
   // 实现 Module Feration 与 shareLib 只能保留一个
   shared: {
     react: {requiredVersion: '^17.0.1'},
     'react-dom': {requiredVersion: '^17.0.1'},
   },
   // 实现 emp share 的 三级共享模式 与 shared 只能保留一个,地址可以自行判断
   shareLib: {
     react: 'React@https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.development.js',
     'react-dom': 'ReactDOM@https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.development.js',
   }
   },
}
```

---

# 参考

- EMP微前端解决方案
  - https://mp.weixin.qq.com/s/l0-uCLFRcBBrs4yTiAvryg