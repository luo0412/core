# [设计]zod(先进+零依赖+解析不验证)

- @code https://github.com/colinhacks/zod
- @doc 
  - https://zod.dev/
  - https://zod.dev/README_ZH @old

```
零依赖
解析，不验证

===
目前在 Zod 中不支持 Date 或 bigint 字面
```

# plugins

- https://github.com/anatine/zod-plugins
- https://github.com/CarterGrimmeisen/zod-prisma

# Convert

> sql --> model --> api(swagger) --> type(ts) --> schema(zod) --> json-schema --> form

- https://github.com/StefanTerdell/zod-to-json-schema @todo
- https://github.com/StefanTerdell/json-schema-to-zod
- https://github.com/fabien0102/ts-to-zod @todo
- https://github.com/sachinraja/zod-to-ts
- https://github.com/lljj-x/vue-json-schema-form/tree/master/packages/lib/vue3/vue3-form-element


# Comparison

- Joi
  - https://github.com/hapijs/joi

```
不支持静态类型推理
```

- Yup

```
缺少方法: (partial, deepPartial)
缺少 promise 模式
缺少 function 模式
缺少联合和交叉模式
```

- io-ts

```
优先考虑功能编程的纯洁性，而不是开发者的经验
难以集成
依赖fp-ts函数式编程库解析结果和处理错误

缺少的方法:(pick, omit, partial, deepPartial, merge, extend)
缺少具有正确类型的非空数组（`[T, ...T[]]）。
缺少 promise 模式
缺少 function 模式

===
// io-ts
const A = t.type({
  foo: t.string,
});
const B = t.partial({
  bar: t.number,
});
const C = t.intersection([A, B]);
type C = t.TypeOf<typeof C>;

===
// zod
const C = z.object({
  foo: z.string(),
  bar: z.number().optional(),
});
type C = z.infer<typeof C>;
```

- Runtypes

```
// 优点
支持 branded 和 readonly 类型，而 Zod 不支持

===
缺少的方法:(deepPartial, merge)
缺少具有适当类型的非空数组（`[T, ...T[]]）。
缺少 promise 模式
缺少错误定制功能
```

- Ow

```
Ow 专注于函数输入验证, 使复杂的断言语句容易表达的库
支持更多的类型 @eg int32Array

===
但它不能让你解析未定型的数据
```

---

# 参考 @ref

- https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/
- https://www.npmtrends.com/ajv-vs-yup-vs-zod @diff
- https://blog.logrocket.com/comparing-schema-validation-libraries-zod-vs-yup/