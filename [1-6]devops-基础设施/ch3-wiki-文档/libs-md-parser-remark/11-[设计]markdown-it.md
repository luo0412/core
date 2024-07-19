# [设计]markdown-it

- @code
  - https://github.com/markdown-it/markdown-it/tree/master/lib
  - https://github.com/markdown-it/markdown-it

- @doc
  - https://markdown-it.docschina.org/
  - https://markdown-it.github.io/markdown-it/

- @demo https://markdown-it.github.io/

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/20210819054103.png)

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1651893880530-4QathJzFxhP8.png)

# 插件

- https://github.com/pnewell/markdown-it-span/

# 文章

- markdown-it 原理浅析
  - @by https://juejin.cn/user/4195392101555534/posts
  - @doc 
    - https://juejin.cn/post/6844903834041450510
    - https://juejin.cn/post/6844903688536850440

```
解析器
markdown-it 内置了七个核心规则

block 和 inline
块分为两种类型：容器块和叶子块

===
token 流

===
渲染器

===
markdown-it 插件

让 __data 作为一个全局变量了，存储各个插件要用到的数据

匹配帕斯卡写法

===
markdown-it 提供了三种模式
1) commonmark
2) default
3) zero
```

```js
// 代码块包裹
md.renderer.rules.fence = (...args) => {
	const [tokens, idx] = args
	const token = tokens[idx]
	const rawCode = fence(...args)
	return `<!--beforebegin--><div class="language-${token.info.trim()} extra-class">` +
	`<!--afterbegin-->${rawCode}<!--beforeend--></div><!--afterend-->`
}
```

- markdown-it源码分析 @nice
  - @by https://juejin.cn/user/4195392101298510/posts
  - @doc
    - https://juejin.cn/post/6844903921555603470
    - https://juejin.cn/post/6844903921555619847
    - https://juejin.cn/post/6844903921555619854
    - https://juejin.cn/post/6844903921559797768
    - https://juejin.cn/post/6844903921559797767
    - https://juejin.cn/post/6844903921563992078
    - https://juejin.cn/post/6844903921563992077