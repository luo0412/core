# [源码]Javassist

- @code https://github.com/jboss-javassist/javassist

---

# 文章

- javassist使用与源码解析
  - https://blog.csdn.net/long243416336/article/details/50328609

```java
字节码操作类库
class文件的二进制文件

===
ClassPool对象

ClassPool就是CtClass对象的哈希表
以类名称作为键值

当父ClassPool没找到这个类文件时，子ClassPool才会在它的类搜索路径下寻找这个类文件

类似ClassLoader的双亲委派原则
```

---

# 参考 @ref