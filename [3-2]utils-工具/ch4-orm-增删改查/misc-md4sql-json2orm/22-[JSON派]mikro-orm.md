# [JSON派]mikro-orm

- https://mikro-orm.io
- https://mikro-orm.io/docs/query-builder

```js
const qb = em.createQueryBuilder(BookTag, 't');
qb.select(['b.uuid', 'b.*', 't.*'], true)
  .join('t.books', 'b')
  .where({ 'b.title': 'test 123' })
  .limit(2, 1);
```

```js
@Entity()
@Filter({ name: 'expensive', cond: { price: { $gt: 1000 } } })
@Filter({ name: 'long', cond: { 'length(text)': { $gt: 10000 } } })
@Filter({ name: 'hasAuthor', cond: { author: { $ne: null } }, default: true })
@Filter({ name: 'writtenBy', cond: args => ({ author: { name: args.name } }) })
export class Book {
  // ...
}

const books1 = await orm.em.find(Book, {}, {
  filters: ['long', 'expensive'],
});
const books2 = await orm.em.find(Book, {}, {
  filters: { hasAuthor: false, long: true, writtenBy: { name: 'God' } },
});
```

---

# 参考 @ref