# [方案]基于AntDesign二次封装组件库(pro-components+Amiya)

> @todo

# 组件库

- `pro-components` @nice @org

- `Amiya` @nice
  - https://viewweiwu.gitee.io/amiya/components/table/extra-config
  - https://github.com/viewweiwu/amiya

```
民间版 pro-components
```


# 组件库 @sub

- antdp
  - https://github.com/antdpro/antdp
  - https://antdpro.github.io/antdp/component/edit-table

```
简化 antd 5.x + 的部分使用
```

- td-antd
  - @code https://github.com/yulongcs/td-antd
  - @bak https://github.com/luo0412/td-antd
  
![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1696951746902-bdZ33xy7a7M5-image.png)


- raetable
  - https://github.com/mmdctjj/raetable

- @nbfe/components
  - https://github.com/shuoshubao/components
  - https://shuoshubao.github.io/components#/

- sula @old
  - https://github.com/umijs/sula
  - https://docs.sula.vercel.app/template/query-table

```
前端中后台插件化配置框架
```

- antd-plus-ui
  - https://github.com/feihu1024/antd-plus-ui

```
一个基于 antd4.24.10 的二次封装组件库
```

- ant-design-pro
  - https://github.com/aomi-react/ant-design-pro

- ant-design-plus @old
  - https://github.com/alitajs/ant-design-plus


- art-antd-react
  - https://github.com/Kehao33/art-antd-react

```
旨在配置化的思想操作 antd 组件
```

- frc-ui-pro
  - https://github.com/chenhui996/frc-ui-pro




# 命名规则

- https://github.com/ant-design/ant-design/wiki/API-Naming-rules

# 参考 @ref

- 来也科技技术团队|基于 antd 定制易维护的组件库
    - https://zhuanlan.zhihu.com/p/558548281

```
dumi文档

编写脚本进行 antd 文档到 dumi 文档的转换
使用 monorepo 管理图标库和组件库

===
Yarn Workspace 负责依赖管理
Lerna 负责版本管理
```

```
├── lerna.json                        // lerna 配置文件
└── packages                          // 子项目目录
    ├── components                    // 组件库
    │   ├── docs
    │   │   └── index.md             // 组件库文档入口
    │   ├── src
    │       ├── button
    │       │   ├── demos            // demo 代码块
    │       │   ├── index.md         // 组件文档入口
    │       │   ├── index.less       // 组件样式
    │       │   └── index.tsx        // 组件(HoC)
    │       ├── index.ts              // 组件库总入口
    │       └── styles
    │           ├── custom.less       // antd 样式变量覆盖
    │           └── index.less        // 样式总入口
    │   ├── .fatherrc.ts              // 组件库打包配置
    │   └── .umirc.ts                 // 组件库文档打包配置
    ├── icons                          // 图标库
    └── icons-svg                      // SVG 基础库
```


![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1690013420157-fDeJz8tDwps4-image.png)  

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1690013515133-De56fJ6rJWxt-image.png)


- 基于react的组件库主题设计方案
  - https://mp.weixin.qq.com/s/AUkLSsfIMgy1Uw09MRtkyw