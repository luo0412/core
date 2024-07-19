# [一代目]sequelize(JSON描述)

- https://github.com/sequelize/sequelize
- https://www.sequelize.com.cn/

```js
const { Op } = require("sequelize");
Post.findAll({
  where: {
    authorId: {
      [Op.eq]: 2
    }
  }
});
```