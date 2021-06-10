# [源码]Leaf

- @doc https://github.com/Meituan-Dianping/Leaf

# 文章

- 美团Leaf 源码阅读
  - https://juejin.im/entry/6844903800046616590

```
// leaf-core
号段模式和snowflake模式
```

- 美团Leaf源码——号段模式源码解析
  - https://blog.csdn.net/bskfnvjtlyzmv867/article/details/90175306

- 美团分布式ID生成框架Leaf源码分析及优化改进
  - https://segmentfault.com/a/1190000022603817

```
1位的符号位+41位时间戳+10位workID+12位序列号

最大41位时间差+10位的workID+12位序列化
```