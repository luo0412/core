# [源码]Spring Data Redis

- @code https://github.com/spring-projects/spring-data-redis

# 文章

- 徐靖峰-Spring Data Redis解析
  - https://www.cnkirito.moe/spring-data-redis-1/
  - https://www.cnkirito.moe/spring-data-redis-2/


```
// RedisTemplate

redis之所以被冠以银弹，万金油的称号
甚至实现了一部分中间件队列的功能，其内置的 channel 机制
可以用于实现分布式的队列和广播

===
// 序列化
keySerializer 和 valueSerializer

StringRedisSerializer

实现 Kryo 序列化
```

- 李乾坤-spring redis 源码分析 @nice
  - https://qiankunli.github.io/2019/05/09/spring_jedis_source.html

```java
RedisTemplate 和ValueOperations、ListOperation 互相持有对方的引用， 
RedisTemplate 作为用户操作的入口对象， 
ValueOperations、ListOperation 等负责分担五种数据类型的 操作

spring-data-redis 只是将jedis 作为 redis 访问的工具之一，并没有严格绑定

===
ScriptingCommands
```