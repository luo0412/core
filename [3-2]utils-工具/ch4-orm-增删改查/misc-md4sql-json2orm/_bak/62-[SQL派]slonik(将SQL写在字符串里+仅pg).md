# [SQL派]slonik(将SQL写在字符串里+仅pg)

- https://github.com/gajus/slonik

```js
connection.query(sql.unsafe`
  SELECT ${sql.identifier(['foo', 'a'])}
  FROM (
    VALUES
    (
      ${sql.join(
        [
          sql.join(['a1', 'b1', 'c1'], sql.fragment`, `),
          sql.join(['a2', 'b2', 'c2'], sql.fragment`, `)
        ],
        sql.fragment`), (`
      )}
    )
  ) foo(a, b, c)
  WHERE foo.b IN (${sql.join(['c1', 'a2'], sql.fragment`, `)})
`);
```

---

# 参考 @ref