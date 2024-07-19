# [轮子]es-batis(nodejs版mybatis)

- https://github.com/herotangabc/es-batis

```js
const sql = sqlTemplate`<?xml version="1.0" encoding="UTF-8"?>
  <!DOCTYPE mapper PUBLIC
  "-//mybatis.org//DTD Mapper 3.0//EN"
  "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
  <mapper
  namespace="esbatis.test">

  <select id="selectOne"   >
      SELECT
          t1.bank_name,
          t1.id
      FROM
          bank AS t1
      <where>
        <if test="id != null">
          and t1.id = #{id}
        </if>
      </where>
      ORDER BY
          t1.updated
  </select>
  </mapper>
  `

let sqlResults = await sql.selectOne('esbatis.test.selectOne', { id: 1 })
```

---

# 参考 @ref