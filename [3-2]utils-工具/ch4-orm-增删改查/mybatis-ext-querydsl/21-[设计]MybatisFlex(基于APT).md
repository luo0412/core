# [设计]MybatisFlex(基于APT)

- https://github.com/mybatis-flex/mybatis-flex
- https://mybatis-flex.com/zh/intro/comparison.html

```java
QueryWrapper query = QueryWrapper.create()
        .where(EMPLOYEE.LAST_NAME.like(searchWord)) //条件为null时自动忽略
        .and(EMPLOYEE.GENDER.eq(1))
        .and(EMPLOYEE.AGE.gt(24));
List<Employee> employees = employeeMapper.selectListByQuery(query);
```

```java
QueryWrapper query = QueryWrapper.create()
    .select().from(ACCOUNT)
    .leftJoin(ARTICLE).on(ACCOUNT.ID.eq(ARTICLE.ACCOUNT_ID))
    .where(ACCOUNT.AGE.ge(10));

List<Account> accounts = mapper.selectListByQuery(query);
```

---

# 参考 @ref