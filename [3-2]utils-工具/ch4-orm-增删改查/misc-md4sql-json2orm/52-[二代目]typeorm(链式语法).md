# [二代目]typeorm(链式语法)

> @todo

- @code
    - https://github.com/typeorm/typeorm/tree/master/src
    - https://github.com/typeorm/typeorm
- @doc 
    - https://typeorm.io/
    - https://typeorm.io/#/relational-query-builder    

```js
const user = await createQueryBuilder("user")
    .innerJoinAndSelect(
        "user.photos",
        "photo",
        "photo.isRemoved = :isRemoved",
        { isRemoved: false },
    )
    .where("user.name = :name", { name: "Timber" })
    .getOne()

const photos = await AppDataSource.getRepository(Photo)
    .createQueryBuilder("photo") // first argument is an alias. Alias is what you are selecting - photos. You must specify it.
    .innerJoinAndSelect("photo.metadata", "metadata")
    .leftJoinAndSelect("photo.albums", "album")
    .where("photo.isPublished = true")
    .andWhere("(photo.name = :photoName OR photo.name = :bearName)")
    .orderBy("photo.id", "DESC")
    .skip(5)
    .take(10)
    .setParameters({ photoName: "My", bearName: "Mishka" })
    .getMany()
```



![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1647255239267.png)
    
   