# [基础]从元素到表单(Element+Input+Select+Form)

# Element

- Button
- Tag
- Radio
- Checkbox

# Button

```js
// 功能扩展
loading按钮 + 防重复提交按钮
查询按钮(标记是否是最新搜索结果)
```

# Input-Number-Select

# Input

- TEXT
- NUMBER
- REGEX (CREDIT + IDCARD + ....)

- 理论上来说，这个输入框的显示是安装

# Switch -> Radio/Checkbox --> Select @diff

- Switch
- Radio/Checkbox -> Select(可以支持多选)
- 所以本质上来说，这是同一种组件
- 可以设定一个选项阈值(0 ~ +∞)，当小于阈值时显示为Radio/Checkbox

# Select

- AutoComplete
- Cascader

```js
// 论如何实现一个完美的Select组件 
// https://juejin.im/post/5b02b960f265da0b9e655e61
一个相对定位的Selection + 一个绝对定位的DropdownMenu
Selection与页面滚动
一般要模拟下拉框，保持浏览器的一致表现
不要忘记判断向上或向下拉伸
滑过显示大多时候可能比点击显示要贴心

// 功能扩展
多选下拉框
```

---

# 更多的输入

- dropdown
- upload 文件上传

    - createObjectURL <http://www.jq22.com/webqd2884>
    - FileReader <http://www.jq22.com/webqd2885>

- range/slider
- rate
- mentions
- star

```java
// 单向关注有效性，
不要因为开了多个页面多次关注而状态发生toggle
也就是说关注到的是 unstar -> star的这种状态
```

- 省市区联动

```js
// 实现
联动应该和内容分开
```

---

# Form

```js
// 表单功能扩展
输入格式化
dropdown等交互联动

// 使用serialize() serializeArray()

// LayUI 
封装了方法会返回表单字段,但也不是很好用
```

# Login 登录注册

- 登录

  - 复位这个按钮几乎帮不到用户
  - 用户不愿意填写表单 -> 逻辑分组 + 有意思的交互设计
  - demo https://profile.freepik.com/login
  - 输密码遮眼睛 <https://codepen.io/dsenneff/pen/QajVxO>

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/static/images/other/login-sample-23.png)

- 优化建议

  - 用户在输入手机号时，如果能以3 4 4的方式显示，用户看起来会轻松很多
  - 邮箱登陆注册时智能显示后缀
  - 账号或者密码错误
  - 滑动验证
  - 分步注册，减少注册心理负担


- 所有抛开产品本身谈登陆注册的行为都是耍流氓

```js
A产品竟然支持邮箱注册，邮箱注册这种方式主要是PC端时盛行的，现在手机号注册收验证码多方便，这种方式不好；
B产品竟然不能设置密码，每次登陆都要手机验证码，这万一手机没信号收不到验证码怎么办，这种方式不好；
C产品我用第三方登陆了，竟然还让我绑定手机号，这不是欺骗用户么，太不要脸了，这种方式不好；
```
  

# QuestionNaire 问卷调查

- 用户耐心是设计初衷
- 传统的问卷那种ABCD加滚动很难受
- 应该是加上绿色的透明悬浮选中层
- 注意问题逻辑分组
- 不要出现页面垂直滚动条，一页就放几道题目
- 选完当前页立刻跳转下一页，但也要支持用户翻页
- 用户可以不填完所有的题目，不要叫用户返回去重新填  

---

# 参考
