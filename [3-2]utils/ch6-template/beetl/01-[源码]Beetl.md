# [源码]Beetl

- @code https://gitee.com/xiandafu/beetl
- @doc http://ibeetl.com/

# 文章

- Beetl模板语言的秘密:性能篇
  - @by https://www.jianshu.com/u/aae66f560de0
  - @doc 
    - https://www.jianshu.com/p/a908ae6dc8e2
    - https://blog.csdn.net/xiandafu/article/details/51458791

```java
1) 如何输出一个整型变量

// bad
char result[] = new char[value.length];
System.arraycopy(value, 0, result, 0, value.length);
return result;

简单的一个int输出，除了基本的算法代码外，
居然有俩次字符串的分配，还有一次数组copy??

// good
if (i == Integer.MIN_VALUE) {
    bw.writeString("-2147483648");
    return;
}

int size = (i < 0) ? stringSize(-i) + 1 : stringSize(i);
char[] buf = bw.getLocalBuffer().getCharBuffer(); // 得到跟当前线程有关的一个char[]
getChars(i, size, buf);
bw.writeNumberChars(buf, size);

===
// 2) 语言如何存取变量
数组的存放元素的速度是Map的10倍

使用一个一维数组来保存变量
模板越复杂，Beetl性能越高

===
3) 日期格式化的小改动，性能大变化

java自带的SimpleDateFormat，这是一个重量级对象
--> 使用ThreadLocal来缓存

===
4) IO 优化
Beetl模板不仅仅缓存了静态文本
而且提前将这些静态文本转化为字节流
节省转码时间

存在Context.staticTextArray数组

===
5) 不起眼的for循环优化
Beetl在语法解析阶段就能分析到for语句里是否包含有break，continue等指令

===
6) 再强调一次的char[] 优化
参考ContextLocalBuffer.java

===
7) 反射调用性能增强
FastRuntimeEngine
    
将反射调用转为为直接调用    
Objec ret = User$name.call(obj);
```

---

# 参考