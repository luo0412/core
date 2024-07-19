# [SQL派]drizzle-orm(首选+SQL-like+多种风格+支持serverless)

> prisma相当于hibernate, drizzle相当于mybatis

- @code https://github.com/drizzle-team/drizzle-orm

- @doc
    - https://orm.drizzle.team/
    - https://drizzle.zhcndoc.com/

```
目前支持的数据库有限, 仅PostgreSQL、MySQL、SQLite
```

```js
await db
  .select()
  .from(countries)
  .leftJoin(cities, eq(cities.countryId, countries.id))
  .where(eq(countries.id, 10))
```

```js
const result = await db.query.users.findMany({
  with: {
    posts: true
  },
});
```

```js
import { sql } from 'drizzle-orm' 
const id = 69;
await db.execute(sql`select * from ${usersTable} where ${usersTable.id} = ${id}`)
```

---

# 参考 @ref