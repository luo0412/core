# [SQL派]pgtyped(将SQL写在TS里+仅pg)

- https://github.com/adelsz/pgtyped
- https://pgtyped.dev/docs/sql-file

```js
import { sql } from '@pgtyped/runtime';
import { IGetUsersWithCommentsQuery } from './sample.types';

const getUsersWithComments = sql<IGetUsersWithCommentsQuery>`
  SELECT u.* FROM users u
  INNER JOIN book_comments bc ON u.id = bc.user_id
  GROUP BY u.id
  HAVING count(bc.id) > $minCommentCount;`;

const result = await getUsersWithComments.run({ minCommentCount: 12 }, client);
```

```sql
/* @name FindBookById */
SELECT * FROM books WHERE id = :bookId;
```

```js
const books = await findBookById.run(
    {
      bookId: 5,
    },
    client,
  );
```

---

# 参考 @ref