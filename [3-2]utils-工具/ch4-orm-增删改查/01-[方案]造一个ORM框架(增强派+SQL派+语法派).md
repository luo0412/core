# [方案]造一个ORM框架(增强派+SQL派+语法派)

> @todo

- 增强派

```
常见手段包括 链式语法、注解 等等

但大多使用字符串一通乱拼SQL，很少能做到type safe 
```

- SQL派

```
复杂查询倾向于直接写SQL, 而不是使用框架提供的语法 @eg Mybatis

一般都会提供链式语法用于简单查询 @eg MybatisPlus
```

- JSON派

```
形成一套JSON描述规范来进行增删改查

动态部分一般也需要链式语法 @eg prisma
```


- 语法派

```
得益于改编程语言的先进语法 @eg C#、kotlin
代码可以直接写SQL @eg ktorm
```