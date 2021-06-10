# [源码]HashMap+HashSet

# HashMap的工作原理

- 基于 hashing 原理
- 找到 bucket 位置来储存值对象
- HashMap 使用链表来解决碰撞问题，当发生碰撞了，对象将会储存在链表的下一个节点中

# HashMap-hash方法

- 拉链法
- JDK8实现

```java
static final int hash(Object key) {
    int h;
    // key.hashCode()：返回散列值也就是hashcode
    // ^ ：按位异或
    // >>>:无符号右移，忽略符号位，空位都以0补齐
    return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
}
```

- JDK7实现

```java
static int hash(int h) {
    // This function ensures that hashCodes that differ only by
    // constant multiples at each bit position have a bounded
    // number of collisions (approximately 8 at default load factor).

    h ^= (h >>> 20) ^ (h >>> 12);
    return h ^ (h >>> 7) ^ (h >>> 4);
}
```

# HashMap-Jdk7实现 @diff


---

# HashSet

借助HashMap


---

# 参考