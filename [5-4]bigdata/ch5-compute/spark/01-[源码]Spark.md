# [源码]Spark

# 存储系统

- 存储体系基本架构
- 磁盘管理器 DiskBlockManager
- 磁盘存储 DiskStore
- 内存管理器 MemoryManager
- 统一内存管理器 UnifedMemoryManager
- 内存存储 MemoryStore
- 块管理器 BlockManger
- BlockManagerMaster 对 BlockManager 的管理
- BlockManagerMastrerEndpoint
- 和 BlockManagerSlaveEndpoint 详解
- block 传输服务上传下载



# 调度系统

- RDD 详解
- ResultStage/ShuffleMapStage 详解
- 面向 DAG 的调度器 DAGScheduler
- DAGScheduler 创建 Stage 过程
- DAGScheduler 提交 Task 作业流程
- 调度池 Pool 及调度算法
- 任务集合管理器 TaskSetManager
- 调度后端接口 LauncherBackend
- 任务结果获取器 TaskResultGetter
- 任务调度器 TaskScheduler
- TaskSchedulerIMPL 调度流程



# 计算引擎

- 计算引擎概述
- 内存管理与执行内存：ExecutionMemoryPool
- 详解
- 任务管理器：TaskMemoryManager 详解
- Task 详解：任务上下文
- IndexShuffleBlockResolver 详解
- 采用与估算：SizeTracker 的实现分析
- AppendOnlyMap 的实现分析
- 外部排序器：ExternalSorter 详解
- Shuffle 管理器
- map 端与 reduce 端的 shuffle 组合

# 参考