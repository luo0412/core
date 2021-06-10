# 风格指南(符号+命名)

- 书写习惯
- 目录层级
- 项目命名
- 文件命名
- 常用符号

# 书写习惯

- 用空格比逗号好 
- 用换行比句号好(几乎不使用句号) 
- `不用[xxx](http://)`隐藏链接(除非太长) --> 网址本身也是一种信息
- 不分h1-h6, 让工具自行分析结构 --> @eg toc
- 用分隔线/大波浪适时地划分逻辑内容
- 代码段不加语言类型, 用来记录碎片形式的笔记
- `@xxx`形式的内容，如果不是下文中指定的常用注解符号, 尽量用代码块包裹, 免得内容解析时出错
- `每篇文章最好有至少一张图片` --> 有利于记忆(类似地标)
- 图片尽量本地, 减少引用第三方来源, 但对应的需要标出来源
- 读书笔记, 只记录`感触最深`的地方 --> 可以先抄个目录来迈出第一步

# 目录层级

- 最多9个chapter
- 最多5个topic

```js
// 层级上尽可能保持扁平, 点2下就应该找到那篇文章
[0]collection 
    ch9-chapter 
        topic5 
            _appendix1

// appendix如下: 
// private --> 私人内容, 不方便公开的
cmpt, case, tag --> 组件/案例/示例/标签
record, idea/faq, todo --> 按照时间轴记录
// notnow/old, offcut, halfway --> 不推荐的/过时内容, “战略放弃”
// code --> 代码片段
// spec --> 标准规范
// minor --> 少数派 

===
思维导图因为编辑更新比较耗时
所以我用现在的笔记法代替了它

有意识地划分成N块是为了暗示初学者可穷尽
但事实上并非如此

appendix, 应该是补充内容(建议仅1个)
即使删除也不应当影响主干的完整叙述
```

# 项目命名

```java
// 词语顺序
0) 项目前缀 ->>

1) 项目内容
项目类型(tpl/demo) 
+ 业务定位(admin/mall/blog/door/portal)
+ 应用场景(pc/h5/minapp/ie10) 

2) 底层技术
底层环境(jdk8)
+ 构建工具(webpack) 

3) 特色标识
基础框架(ssm/ssh/springboot2) 
+ 特色技术(beetl/hikaricp) 
+ 项目名称/作者/来源标记

4) 时间版本
版本(v3.4.2)
+ 时间(20191208)
```



# 项目前缀

- 已使用

```js
night --> 不公开的私人项目

// 桂影斑驳, 不灭的纹理
laurel: 月桂 --> python学习
tattoo: 纹身 --> python自研框架

// 冰雪消融, 裸露出自然的肌肤
natural --> javascript学习
melt --> javascript自研框架

// 喜欢那年夏天和风吹拂脸庞的感觉
summer --> java学习
zephyr: 和风; 微风 --> java自研框架

// 就像一个人无法遏制对曙光的热爱
crush --> golang学习
aurora: 极光; 曙光; 曙光女神 --> golang自研框架

// 因为爱过你, 所以持续痛苦
agony: (精神或肉体的) 极度痛苦, 谐音“爱过你” --> algorithm学习
linger: 继续存留; 缓慢消失; 流连; 花很长时间做(某事); 持续看(或思考) --> algorithm模型

// 俯瞰世界之大, 回首芸芸众生
onism: 世界如此之大,自己能游历的地方却如此之小 --> hobby
sonder: 过客感，恍然意识到生命中的芸芸过客都有自己波澜壮阔的一生 --> hobby

// 珍重两种感觉, 一种是醍醐灌顶, 一种是似曾相识 
kindle: 点亮思维 --> thought
dejavu: 似曾经历过的感觉 --> thought
```

- 备选

```js
cosy: 温暖舒适
rosy: 美好的, 乐观的

wabi
sabi

wow
flipped/flip: 怦然心动

vesper: 薄暮，晚祷; 金星
sprout
```

- 次选

```js
wing
crystal
olly: 笑翠鸟 || olly olly oxen free 孩童游戏里的一句口语 ≈ oh yeah
somnus: 罂粟
glance
taxol: 紫杉醇
abyss: 深渊
halo: (绘画等中环绕圣人头上的) 光环，光轮
```

- 被占用 @maybe 

```js     
kilig: 
    塔加拉族语, 形容那种喜欢一个人喜欢得好像胃里正有成千上万只蝴蝶翩翩，
    一张嘴就要全部飞出来一样的醉醺醺、麻酥酥感

vanilla: 香草冰淇淋
echo
vert: 森林中的草木，绿色;
meteor: 流星
oreo: 奥利奥
iris: 难以表达的要溢出胸腔的满满的喜欢
```

# 项目类型

- `demo`/course/samples --> 偏语法或学习
- `tpl`/template --> 可复用/业务封装
- `cmpt`/component --> 组件
- `diff`/benchwork --> 比较/性能对比
- `diy` --> 自己魔改
- `mini` --> 仿制的轮子
- `analysis`/code --> 源码分析
- `algo`/algorithm --> 算法
- `arch`/architecture --> 架构


# 章节类型

- core/basics 核心/基础
- utils/components 工具
- web/service 主体
- devops 工程化
- platform 集大成者
- perf 极尽精华
- arch 终极一跃
- code/interview 末章回顾

# 文件命名

```js
01-[类型]xxxx(突出点/重难点/代表技术/作者)-201809@nice.md

// 类型 @todo
基础 Basics
高级 Advanced
提纲 Summary
工具 Utils
书摘 Note
思考 Thinking
问题 Question
实践 Practice
模板 Template
生态 Ecology
方案 Solution

===
@ps 实践性质文章默认是不加类型前缀的
```

---

# 常用符号

- 通用符号

```js
: 瞎jb解释一波
!!!! = @attention
???? = @doubt 存在质疑
($) = @pay/@paid 收费
(*) = @ignore 可省略/可忽略

=== 段内分隔,3个足矣

---xyz---> 因果逻辑,长度随心,方向随意
==> 推导/强逻辑
->> = @see 其他地方已经写过了
<--xyz--> 存在对立关系 = @vs

// ↓↓↓ 以下内容
```

- 标记注册(不常用的已经注释掉)

```js
// 1) 前缀名词或其他
@code 源码
@doc 文档
@wiki
@ref 引用/参考
@bak 备份
@sum 总结
@steps 步骤

// @tutorial 教程
// @team
// @mvn

@isbn
@by 作者或者相关的人
@from --> @from?? 表示不确定来源或作者的

// @intro 介绍
// @home 主页
@org 官方
// @api 接口服务
// @service
// @ui 界面
@dl 下载地址
// @skillmap
// @roadmap

@issue
@date
@repo
@pf/@proof 证明

@os 内心独白
@ps 补充备注
@eg 举例
@etc 诸如此类
// @balabala 
@like 和什么类似

// 2) 后缀名词 
@faq
@demo 案例
// @misc 杂项
@ithink 个人观点
// @soul 
@main 主要内容
@dict 词霸
@summary 
@diff
@vs 竞品
@wip 半成品
@sub 替补内容
@other 其他不太重要的内容

===
// 关联逻辑??
@but
@and 
@or

===
// 后缀形容词 
@nice
@old 信息过时
@get 已获得    
@closed 闭源/关闭
@deprecated 不推荐/已过时
@local 本地资源
@yun 云资源

@attention 需要注意
@tip
// @thinking 保持判断
@notnow 暂不处理
@notok
@doubt 质疑
@todo 
@ignore 
@digest 需要理解消化

// @wrong 
@minor 占少数派
@empty 言之无物
// @chinese 国内技术
@zh 中文版/中文的
@ad 可能存在广告内容
@kpi (疑似)KPI项目
@fun 有意思
@simple 简单/简明
@easy 容易
@messy 混乱/尚未整理
@rough 粗糙的
@useful
@esp

// @creative
// @translated 译文(非原文)
// @cantrun 项目无法运行(阅读)
// @complex

// @slow 慢速
// @proxy 需要代理

@nil/@null/@none 失效/找不到资源
@building 建设中
@archived
@lazy 不活跃
// @purchased
@fix 已修复
@ugly 内容丑陋/令人厌恶的

===
// 动词
@call sb. 就是at, 但是@符号被征用了
@thx 感谢

===
// 常用品牌
@mdn
@w3c

// @ruanyf 
// @liaoxf
// @funtl

// @juejin
// @imooc

// @runoob
// @bilibili

// @reilly
// @github
// @gitee

// @bootcdn
// @lanhu
```

- JavaDoc参考

```java
@see
// @link
// @author
@since
@throws

{@literal <Integer>}
(@literal <Integer>) 
```