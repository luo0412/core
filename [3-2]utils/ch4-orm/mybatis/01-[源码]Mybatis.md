# [源码]Mybatis

- @code https://github.com/mybatis/mybatis-3

---

# Mybatis-核心

- Mybatis架构
- Mybatis与Spring的集成
- MyBatis-设计模式

# Mybatis-文章

- 田小波-Mybatis源码分析 @nice
  - https://www.tianxiaobo.com/tags/MyBatis/

- `pdai-MyBatis详解` @nice ->>
  - @doc 
    - https://www.pdai.tech/md/framework/orm-mybatis/mybatis-y-arch.html
    - https://blog.csdn.net/luanlouis

- `tuguangquan-mybatis` @nice
  - mybatis源码中文注释
  - @code https://github.com/tuguangquan/mybatis



---

# 参考

- 为什么建议框架源码学习从Mybatis开始 @simple
  - @by https://juejin.im/user/5a9d483d6fb9a028d2076fdc/posts
  - 麻雀虽小, 五脏俱全, 且比Spring轻多了
  - mybatis可以说`将装饰器模式，动态代理用到了极致`
  - @doc https://juejin.im/entry/5ecdbe69518825432d4c9ef8

```java
Configuration --> 类似Spring的容器概念

MappedStatement 映射器 --> 类似Spring的BeanDefinition
一个模板对应一个MappedStatement

// 解析
1) xml --> XMLConfigBuilder
2) annotation --> MapperAnnotationBuilder

SqlSession: SQL模板 + 传参 --> 从数据库获取数据

SqlSession是门面接口, 内部工作委托Executor

// Mapper
代理机制

MapperProxyFactory --> 创建代理

// 缓存

MyBatis一级缓存的生命周期和SqlSession一致

二级缓存

// 插件

```