# [源码]Nacos

- @code https://github.com/alibaba/nacos

# 核心

- 防止读写并发冲突CopyOnWrite设计思想
- 异步任务及内存队列有效提升系统并发
- 异步批量同步集群节点数据有效提升系统性能

# 解读

- 黄云斌-Nacos 源码分析
  - https://www.jianshu.com/c/a43af0cc4698
- Nacos 服务注册
  - https://doocs.gitee.io/source-code-hunter/#/docs/nacos/nacos-discovery
- wyp57801314-深入浅出高性能服务发现、配置框架 Nacos 系列
  - http://blog.51cto.com/2662087
- 从源码看Nacos的设计
  - https://blog.csdn.net/a21700790yan/article/details/103568908
- Spring Cloud Alibaba Nacos（源码篇）
  - https://zhuanlan.zhihu.com/p/70478036

# 参考

- 芋道源码
- Java架构师学习路线图(8.0)
  - https://www.processon.com/view/link/5cb6c8a4e4b059e209fbf369