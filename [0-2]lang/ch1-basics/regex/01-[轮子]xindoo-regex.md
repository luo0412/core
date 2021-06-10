# [轮子]xindooregex 

- Java实现的正则表达式引擎
- NFA
- @by https://github.com/xindoo
- @blog https://zxs.io/
- @code https://github.com/xindoo/regex

# 正则引擎的几种分类

- @doc https://zxs.io/article/1798
- 分类

```
1) DFA(更高效) --> GNU awk，GNU egrep和Tcl

2) NFA(功能多) --> Perl、Java、.Net、PHP、Python、Ruby
POSIX NFA(变种) --> mawk
```

- 实现差异

```
语法
匹配内容
零宽断言(环视) 功能
捕获功能
性能
```

# NFA和DFA混合引擎