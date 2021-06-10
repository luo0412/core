# [设计]spring-webflux

> @todo

# 文章

- 一颗懒能-Spring Webflux 源码解析 ->>
  - @by https://www.jianshu.com/u/289a85fa547c
  - @doc https://www.jianshu.com/nb/18514645

---

# 参考

- 芋道源码-webflux
- 压测对比: Spring WebFlux VS. Spring MVC
  - @doc https://zhuanlan.zhihu.com/p/172010354
  - @code https://github.com/vioao/webflux-performance

```
如果是 IO 密集型的应用，使用 WebFlux 和使用 MVC 对于吞吐量的影响不大
但是 使用了 WebFlux 的应用，其整体响应时间更短，启动的线程数更少，使用的内存资源更少

延迟越大， WebFlux 的优势越明显
```

