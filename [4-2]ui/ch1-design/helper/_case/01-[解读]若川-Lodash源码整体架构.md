# [解读]若川-Lodash源码整体架构

- 学习 lodash 源码整体架构，打造属于自己的函数式编程类库 @nice @digest
  - @by https://github.com/lxchuan12/blog
  - @blog https://lxchuan12.gitee.io/
  - @doc https://segmentfault.com/a/1190000020350442

---

# 惰性求值

- 性能好

```js
// good
var result = _.chain([1, 2, 3, 4, 5])
.map(el => {
    console.log(el); // 1, 2, 3
    return el + 1;
})
.take(3)
.value();

===
// bad
var result = [1, 2, 3, 4, 5].map(el => el + 1).slice(0, 3);
```

# runInContext

- runInContext

```js
var runInContext = (function runInContext(context) {
    // 浏览器中处理context为window
    // ...
    function lodash(value) {}{
        // ...
        return new LodashWrapper(value);
    }
    // ...
    return lodash;
});
```

- LodashWrapper和LazyWrapper

```js
function LodashWrapper(value, chainAll) {
    this.__wrapped__ = value;
    this.__actions__ = [];
    this.__chain__ = !!chainAll;
    this.__index__ = 0;
    this.__values__ = undefined;
}
```

# baseCreate 原型继承

# mixin

---

# 常用函数

- 添加到prototype的方法

```js
// "constructor"
["drop", "dropRight", "take", "takeRight", "filter", "map", "takeWhile", "head", "last", "initial", "tail", "compact", "find", "findLast", "invokeMap", "reject", "slice", "takeRightWhile", "toArray", "clone", "reverse", "value"]
```

- isObject

```js
function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
}
```

---

# 参考

- lazy.js 惰性求值实现分析
  - https://zhuanlan.zhihu.com/p/24138694