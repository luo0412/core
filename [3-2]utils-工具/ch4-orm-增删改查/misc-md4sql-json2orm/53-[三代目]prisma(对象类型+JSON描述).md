# [三代目]prisma(对象类型+JSON描述)

- @code https://github.com/prisma/prisma
- @doc
    - https://prisma.yoga/ @zh
    - https://prisma.yoga/concepts/components/prisma-client/crud
    - https://www.prisma.io/

```js
const user = await prisma.user.create({
  data: {
    email: 'elsa@prisma.io',
    name: 'Elsa Prisma',
  },
})

const createMany = await prisma.user.createMany({
  data: [
    { name: 'Bob', email: 'bob@prisma.io' },
    { name: 'Bobo', email: 'bob@prisma.io' }, // 唯一键重复!
    { name: 'Yewande', email: 'yewande@prisma.io' },
    { name: 'Angelique', email: 'angelique@prisma.io' },
  ],
  skipDuplicates: true, // 跳过 'Bobo'
})

const user = await prisma.user.findFirst({
  where: {
    id: 9,
  },
})

const users = await prisma.user.findMany({
  where: {
    OR: [
      {
        name: {
          startsWith: 'E',
        },
      },
      {
        AND: {
          profileViews: {
            gt: 0,
          },
          role: {
            equals: 'ADMIN',
          },
        },
      },
    ],
  },
})

const user = await prisma.user.findUnique({
  where: {
    email: 'emma@prisma.io',
  },
  select: {
    email: true,
    name: true,
  },
})

const user = await prisma.user.findUnique({
  where: {
    email: 'emma@prisma.io',
  },
  select: {
    email: true,
    posts: {
      select: {
        likes: true,
      },
    },
  },
})
```

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1647255304722.png)