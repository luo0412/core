# [轮子]sql-generator(子查询嵌套+递归)

- https://github.com/liyupi/sql-generator
- https://github.com/liyupi/sql-generator/blob/master/src/generator/index.ts  
  
```json
{
    "main": "select (a / b - 1) from (@查整体(date = 今天)) a, (@查整体(date = 昨天)) b",
    "查整体": "@查年级() union @查1班() union @查2班() where date = #{date}",
    "查年级": "@查汇总_性别汇总() union @查汇总_性别分组() union @查汇总_爱好汇总() union @查汇总_爱好分组() union @查汇总_电脑类别汇总() union @查汇总_电脑类别分组()",
    "查汇总_性别汇总": "@查除电脑关联表()",
    "查汇总_性别分组": "@查除电脑关联表() group by 性别",
    "查汇总_爱好汇总": "@查除电脑关联表()",
    "查汇总_爱好分组": "@查除电脑关联表() where 爱好 in (xx) group by 爱好",
    "查汇总_电脑类别汇总": "@查除三连和学习表()",
    "查汇总_电脑类别分组": "@查除三连和学习表() group by 电脑类别",
    "查1班": "@查1班_性别汇总() union @查1班_性别分组() union @查1班_爱好汇总() union @查1班_爱好分组() union @查1班_电脑类别汇总() union @查汇总_电脑类别分组()",
    "查1班_性别汇总": "@查除电脑关联表() where 1班",
    "查1班_性别分组": "@查除电脑关联表() where 1班 group by 性别",
    "查1班_爱好汇总": "@查除电脑关联表() where 1班",
    "查1班_爱好分组": "@查除电脑关联表() where 1班 and 爱好 in (xx) group by 爱好",
    "查1班_电脑类别汇总": "@查除三连和学习表() where 1班",
    "查1班_电脑类别分组": "@查除三连和学习表() where 1班 group by 电脑类别",
    "查2班": "@查2班_性别汇总() union @查2班_性别分组() union @查2班_电脑类别汇总() union @查2班_电脑类别分组()",
    "查2班_性别汇总": "@查除电脑关联表() where 2班",
    "查2班_性别分组": "@查除电脑关联表() where 2班 group by 性别",
    "查2班_电脑类别汇总": "@查除三连和学习表() where 2班",
    "查2班_电脑类别分组": "@查除三连和学习表() where 2班 group by 电脑类别",
    "查所有关联表": "@查信息表() left join (@查三连表()) left join (@查学习表()) left join (@查电脑表()) left join (@查全校信息())",
    "查除电脑关联表": "@查信息表() left join (@查三连表()) left join (@查学习表()) left join (@查全校信息())",
    "查除三连和学习表": "@查信息表() left join (@查电脑表()) left join (@查全校信息())",
    "查信息表": "select 字段 from 信息表 where 年级 = 1",
    "查三连表": "select 字段 from 三连表 where 年级 = 1",
    "查学习表": "select 字段 from 学习表 where 年级 = 1",
    "查电脑表": "select 字段 from 电脑表 where 年级 = 1",
    "查全校信息": "select 字段 from 信息表"
}
```

---

# 参考 @ref