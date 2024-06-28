# README

> 人菜是因为吃了太多酸菜鱼
> 
> 闷骚是因为吃了太多黄焖鸡

源码分析笔记(生命有限, 源码无穷)

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1683559953944-cFiN6jph73bJ-image.png)

# 模块目录

- 【希言自然】编程语言 @building
- 【莫向外求】操作系统 @building
- 【不忘沟壑】数据库 @eg Hikaricp
- 【大开大合】计算机网络 @eg dubbo
- 【当仁不让】区块链 @building
- 【化零为整】DevOps @eg slidev
- 【气冲斗牛】工具库 @eg Mybatis、beetlsql
- 【精益求精】Web框架 @eg spring mvc
- 【见微知著】微服务 @eg nacos
- 【云蒸霞蔚】云原生 @building
- 【破而后立】UI应用 @eg redux
- 【气象万千】UI组件 @eg vxe-table
- 【循序渐进】脚手架 @eg webpack
- 【条分缕析】数据分析 @eg DataV、D3
- 【恒河沙数】大数据 @eg Spark
- 【大智若愚】人工智能 @building

# 参考来源 @ref

- HowToStartOpenSource
  - @code https://github.com/eryajf/HowToStartOpenSource
  - @doc https://eryajf.github.io/HowToStartOpenSource/

```
GitHub开源项目维护协作指南
```

- 开源指北 @nice
  - @code 
    - https://gitee.com/gitee-community/opensource-guide
    - https://github.com/LibreOffice
    - https://github.com/videolan/vlc
    - https://github.com/brave/brave-browser
  - @doc 
    - https://gitee.com/opensource-guide/
    - https://dl.acm.org/sigs
    - https://www.kicad.org/

```
认识开源
使用开源
参与开源
治理开源

===
// 知名
操作系统：Linux, Android, Brave(网络浏览器)
多媒体: LibreOffice, VLC Media Player, GIMP(图像编辑), Shotcut(视频编辑), Audacity(音频编辑), KiCad
数据库：MySQL，MongoDB，Redis
网络: Thunderbird(电子邮件), FileZilla(FTP)
安全：KeePass
容器：Apache，Nginx
编辑器：Vim，Emacs，Atom，VSCode
版本管理：SVN，Git，Fossil??
虚拟化软件：Docker，Kubernetes
大数据平台：Hadoop，ElasticSearch，HBase

// 搜索项目
cats stars:>1000
vue topics:>=5
node followers:>=10000
location:china followers:>5000
topic:algorithm

===
// 开源基金会

// 开源许可证

// 开源项目转闭源
LGPL、GPL、MPL 这类许可证禁止开源软件转为闭源软件
BSD、MIT、Apache 这类许可证允许开源软件转为闭源软件

===
// 学术
ACM（国际计算机协会）
AMC SIGACT

CCF（中国计算机协会）

===
// Pull Request
Fork
New pull request

// 严格的版本号规范
Alpha
Beta
Release

// 开源项目治理架构 @todo
BDFL(仁慈的终身独裁者) @eg Linux
Meritocracy（精英制）@eg Apache
Liberal Contribution（自由贡献） @eg Node.js

// 本职工作和开源项目

// 开源项目的商业化 @todo
Vue
```

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1646264949761.png)

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1646264971505.png)

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1646264983753.png)

- gitee-GVP项目
  - https://gitee.com/gvp
  - https://gitee.com/gvp/enterprise-app
  - https://gitee.com/gvp/build-web-system
  - https://gitee.com/gvp/web-app-develop

```
企业应用

===
// 筛选Java+Python+JavaScript语言的项目
$('.project-labels .label').each(function(item) { 
  if (!['Python', 'Java', 'JavaScript'].includes($(this).text())) { 
    $(this).parents('.project-card').remove() 
  } 
})
```  

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1658199000508-rfWGmXzrznxG-image.png)

- coderead @ad
  - http://www.coderead.cn/

```
Netty
Dubbo
Mybatis
SpringMVC
```  

- learn-x-by-doing-y
  - https://aquadzn.github.io/learn-x-by-doing-y

- build-your-own-x
  - https://github.com/danistefanovic/build-your-own-x

- aosabook
  - http://aosabook.org/en/index.html
  - http://aosabook.org/en/pypy.html
  - http://aosabook.org/en/sqlalchemy.html
  - http://aosabook.org/en/zeromq.html
  - http://aosabook.org/en/nginx.html

- processon-绘图
  - https://www.processon.com/popular?criterion=%E6%BA%90%E7%A0%81

- trackawesomelist @nice
  - https://www.trackawesomelist.com/

```
Track Awesome List
```

- 开源中国-年度开源项目 
  - https://www.oschina.net/project/top_cn_2021

- `开源选型` @nice
  - @doc
    - https://open.mizhousoft.com/artifact/list.action?cid=1
    - https://open.mizhousoft.com/artifact/list.action?cid=8&fid=722&p=2
    - https://open.mizhousoft.com/artifact/list.action?cid=3&fid=505
    - https://open.mizhousoft.com/artifact/list.action?cid=3&fid=506
  - @code 
    - https://github.com/josdejong/jsoneditor
    - https://github.com/Saul-Mirone/milkdown
    - https://github.com/jspreadsheet/ce
  - @demo https://milkdown.dev/online-demo

```
[0-6]
seaweedfs @todo

[0-9]
bucket4j
acme4j

crypto-js
crypto-es

===
[3-2]
guava

jackson
fastjson

jodconverter

[3-3]
springboot

===
[4-2]
ant-design
element-plus
vant
vux

lodash
ahooks

clipboard.js

dayjs
date-fns
fullcalendar
tui.calendar

anji-plus-captcha

swiper
viewerjs

video.js
xgplayer
video-react
nplayer
cropperjs
react-zmage
rrweb @todo

quill
wangEditor
jsoneditor
mavonEditor
milkdown @todo
vditor
bytemd

pdf.js
react-pdf

markdown-it
slidev

PPTist
sheetjs
x-spreadsheet
Luckysheet
ce @todo

nprogress
highlight.js
js-cookie

[4-3]
axios

jquery
animate.css
react-spring

Sortable
react-beautiful-dnd
react-dnd
Vue.Draggable
moveable

element-resize-detector

driver.js @todo

[4-5]
webpack
vite


[4-6]
taro

[4-7]
echarts
echarts-for-weixin
Chart.js
mermaid

[4-8]
d3
three.js
react-three-fiber

Leaflet
openlayers
cesium
maptalks.js
```

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1646265681788.png)

- `github趋势` @nice
  - https://github.com/trending/java?since=monthly
  - https://github.com/trending/go?since=monthly
  - https://github.com/trending/javascript?since=monthly
  - https://github.com/trending/typescript?since=monthly
  - https://github.com/trending/vue?since=monthly
  - https://github.com/trending/python?since=monthly

- `HelloGitHub` @nice
  - @code https://github.com/521xueweihan/HelloGitHub
  - @doc https://hellogithub.com/

- `逛逛GitHub` @nice
  - https://juejin.cn/user/1442202996186093/posts

- `GitHub-Chinese-Top-Charts` @nice
  - https://github.com/kon9chunkit/GitHub-Chinese-Top-Charts 


- 知名公司-开源导航 @old
  - https://www.oschina.net/company
  - https://www.oschina.net/project/xiaomi
  - https://github.com/MiCode

```
// 小米
openfalcon
小米便签 @old
``` 

- `apache基金会` @nice
  - https://github.com/apache
  - https://projects.apache.org/projects.html
  - https://apache.org/

- `CNCF` @nice
  - https://github.com/cncf
  - https://www.cncf.io/projects/

- eclipse基金会
  - https://github.com/eclipse  
  - https://github.com/eclipse-theia

- mozilla基金会
  - https://github.com/mozilla

- 开放原子开源基金会
  - https://github.com/OpenAtomFoundation 

- linux基金会
  - https://github.com/torvalds/linux

- red-hat机构
  - https://github.com/redhat-developer
  - https://developers.redhat.com/

- openstack组织
  - https://opendev.org/openstack
  - https://github.com/openstack
 
- dromara社区
  - https://gitee.com/dromara

- `大厂-源码` @nice
  - https://github.com/amzn
  - https://github.com/facebook
  - https://github.com/twitter
  - https://github.com/google
  - https://github.com/apple
  - https://github.com/Microsoft
  - https://github.com/oracle
  - https://github.com/ebay
  - https://github.com/uber
  - https://github.com/netflix
  - https://github.com/ibm
  - https://github.com/cisco
  - https://github.com/CiscoDevNet
  - https://github.com/linkedin
  - https://github.com/canonical
  - https://github.com/SAMSUNG
  - https://github.com/airbnb
  - https://github.com/yahoo
  - https://github.com/huawei
  - https://github.com/alibaba @nice
  - https://github.com/alibaba?q=&type=all&language=java&sort=stargazers
  - https://github.com/alibaba?q=&type=all&language=javascript&sort=stargazers
  - https://github.com/alibaba?q=&type=all&language=typescript&sort=stargazers
  - https://github.com/alibaba?q=&type=all&language=python&sort=stargazers
  - https://github.com/alibaba?q=&type=all&language=go&sort=stargazers
  - https://github.com/alipay @nice
  - https://github.com/sofastack @nice
  - https://github.com/ElemeFE
  - https://github.com/Eleme
  - https://github.com/tencent @nice
  - https://github.com/AlloyTeam
  - https://github.com/baidu
  - https://github.com/ecomfe
  - https://github.com/fex-team
  - https://github.com/baidufe
  - https://github.com/CHINA-JD
  - https://github.com/meituan @nice
  - https://github.com/meituan-dianping
  - https://github.com/dianping
  - https://github.com/didi
  - https://github.com/DDFE
  - https://github.com/xiaomi
  - https://github.com/netease
  - https://github.com/Bilibili @nice
  - https://github.com/bytedance @nice
  - https://github.com/DouyinFE
  - https://github.com/Kwai
  - https://github.com/KwaiAppTeam
  - https://github.com/ctripcorp
  - https://github.com/qunarcorp
  - https://github.com/Qihoo360
  - https://github.com/weibocom
  - https://github.com/58code
  - https://github.com/douban
  - https://github.com/Nike-Inc
  - https://github.com/Medium
  - https://github.com/vipshop
  - https://github.com/dangdangdotcom
  - https://github.com/iqiyi
  - https://github.com/sohutv 
  - https://github.com/youzan @nice
  - https://github.com/tal-tech
  - https://github.com/yuque

```
// 阿里

===
// 字节

===
// 腾讯

===
// 语雀
文档相关的开源项目
富文本编辑器??
```

- `云厂商-源码` @nice
  - https://github.com/aws
  - https://github.com/azure
  - https://github.com/aliyun @nice
  - https://github.com/huaweicloud
  - https://github.com/tencentyun
  - https://github.com/qiniu

```
// 阿里云

===
// 华为云
```

- 拉勾教育-专栏 @nice
  - 有很多源码解析的专栏
  - https://kaiwu.lagou.com/

- 掘金小册
  - https://juejin.cn/course
  - https://juejin.cn/book/7031893648145186824

- `芋道源码` @nice
  - 分布式框架源码
  - https://www.iocoder.cn/

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1647268425702.png)

- `source-code-hunter` @nice
  - https://doocs.gitee.io/source-code-hunter

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1647268405746.png)

- `徐靖峰-个人博客` @nice
  - https://www.cnkirito.moe/

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1647268383543.png)

- `冰河技术` @nice
  - https://blog.csdn.net/l1028386804

- `小傅哥-程序员编码指南` @nice
  - https://github.com/fuzhengwei/CodeGuide/wiki

- Java技术驿站
  - http://cmsblogs.com/

- 黄忆华-博客 @nice @old
  - https://github.com/code4craft
  - https://github.com/code4craft/tiny-spring
  - https://my.oschina.net/flashsword

- `李乾坤-博客` @nice
  - https://qiankunli.github.io/

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1647268340444.png)

- 源码笔记
  - https://juejin.cn/user/2893570337168663/posts
  - https://github.com/yuanmabiji/Java-SourceCode-Blogs

- `杨亚洲-源码仓库` @nice
  - nginx+redis+mongodb源码
  - https://github.com/y123456yz
  - https://www.zhihu.com/people/yang-ya-zhou-42
  - https://www.zhihu.com/question/26766601/answer/1979670299
  - https://github.com/y123456yz/reading-and-annotate-mongodb-3.6

- pyloque/码洞 @nice
  - https://github.com/pyloque
  - https://mp.weixin.qq.com/s/3Cy7dZordk6NbxYCBFSOeg
  - https://github.com/pyloque/httpkids
  - https://github.com/pyloque/ormkids
  - https://github.com/pyloque/rpckids
  - https://github.com/pyloque/iockids

- codefollower
  - https://github.com/codefollower/My-Blog/issues
  - https://github.com/codefollower/OpenJDK-Research

- 咖啡拿铁
  - https://juejin.cn/user/3421335914033032/posts
  - https://github.com/javagrowing/JGrowing

- 彤哥读源码
  - https://juejin.cn/user/3175045310201735/posts

- 辜飞俊的博客
  - go语言解读
  - https://www.gufeijun.com/

- one-day-one-npm-lib
  - https://github.com/Haixiang6123/one-day-one-npm-lib

- `黄子毅-前端精读周刊` @nice
  - https://github.com/dt-fe/weekly

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1647268456129.png)

- `若川视野` @nice
  - https://lxchuan12.gitee.io/

- segmentfault @nice
  - 经常找到前端源码的讨论
  - https://segmentfault.com/

- PingCAP-博客
  - https://pingcap.com/blog-cn/