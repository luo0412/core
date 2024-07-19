# [SQL派]kysely(type-safe)

- @code https://github.com/kysely-org/kysely
- @doc
    - https://kysely.dev/
    - https://kysely.dev/docs/examples/join/complex-join
    - https://kysely-org.github.io/kysely-apidoc/interfaces/Sql.html

```
Inspired by Knex
```

```js
import { sql } from 'kysely'

const id = 123
const snippet = sql<Person[]>`select * from person where id = ${id}`
```

```js
async function getPerson(
  id: number,
  withPetName: boolean,
  withPetSpecies: boolean
) {
  return await db
    .selectFrom('person')
    .selectAll('person')
    .$if(withPetName, (qb) =>
      qb
        .innerJoin('pet', 'pet.owner_id', 'person.id')
        .select('pet.name as pet_name')
    )
    .$if(withPetSpecies, (qb) =>
      qb
        .innerJoin('pet', 'pet.owner_id', 'person.id')
        .select('pet.species as pet_species')
    )
    .where('person.id', '=', id)
    .executeTakeFirst()
}
```

```js
import { sql } from 'kysely'

const persons = await db.selectFrom('person')
  .select(({ eb, selectFrom, or }) => [
    // Select a correlated subquery
    selectFrom('pet')
      .whereRef('person.id', '=', 'pet.owner_id')
      .select('pet.name')
      .orderBy('pet.name')
      .limit(1)
      .as('first_pet_name'),

    // Build and select an expression using
    // the expression builder
    or([
      eb('first_name', '=', 'Jennifer'),
      eb('first_name', '=', 'Arnold')
    ]).as('is_jennifer_or_arnold'),

    // Select a raw sql expression
    sql<string>`concat(first_name, ' ', last_name)`.as('full_name')
  ])
  .execute()
```

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1709288149291-jsHnepERY32r-image.png)

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1709288144109-fT5GNE5sdypH-image.png)


---

# 参考 @ref