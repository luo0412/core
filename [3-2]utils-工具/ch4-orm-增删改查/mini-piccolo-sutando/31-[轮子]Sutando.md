# [轮子]Sutando

> @ps 出自日本漫画《JOJO 的奇妙冒险》中的替身（Stand）

- @code https://github.com/sutandojs/sutando
- @doc
  - https://sutando.org/zh_CN/guide/getting-started.html
  - https://sutando.org/zh_CN/guide/query-builder.html

```
深受 Laravel 框架的 ORM Eloquent 启发
```

```js
const users = await db.table('users')
  .join('contacts', 'users.id', '=', 'contacts.user_id')
  .join('orders', 'users.id', '=', 'orders.user_id')
  .select('users.*', 'contacts.phone', 'orders.price')
  .get();
```

---

# 参考 @ref