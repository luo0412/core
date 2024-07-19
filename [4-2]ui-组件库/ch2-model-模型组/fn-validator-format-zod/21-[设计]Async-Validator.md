# [设计]Async-Validator

- @by https://github.com/yiminghe
- @code https://github.com/yiminghe/async-validator

---

# 构建工具

- pikapkg
  - @code https://github.com/pikapkg/pack

# 项目结构

```
rule/*
validator/*

index.js
messages.js
util.js
```

---

# 核心解读

# 工具类


- isNativeStringType
- isEmptyValue
- isEmptyObject
- complementError
- convertFieldsError
- flattenObjArr
- format
- deepMerge

```js
export function deepMerge(target, source) {
  if (source) {
    for (const s in source) {
      if (source.hasOwnProperty(s)) {
        const value = source[s];
        if (typeof value === 'object' && typeof target[s] === 'object') {
          target[s] = {
            ...target[s],
            ...value,
          };
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}
```

- asyncParallelArray
- asyncParallelArray
- asyncMap

---

# 参考 @ref