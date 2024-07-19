# [beetlsql]从beetlsql偷学markdownParser

> @todo

- @code 
  - https://gitee.com/xiandafu/beetlsql
  - https://gitee.com/luo0412/beetlsql-v3.1.1/tree/master/sql-core/src/main/java/org/beetl/sql/core/loader

# MarkdownParser

- 判断是否在代码块内 --> inBody(随着解析过程变动)

```java
protected void skipComment() throws IOException{
  boolean findComment = false ;
  while(true){
    String line = nextLine();
    if(status==END){
      return ;
    }
    line = line.trim();
    if(!findComment&&line.length()==0){
      continue ;
    }
    if(!inBody&&line.startsWith("*")){
      //注释符号
      findComment = true;
      continue;
    }else {
      String s = line.trim();
      if(s.length()==0){
        continue;
      }
      else if(s.startsWith("```")||s.startsWith("~~~")){
        //忽略以code block开头的符号
        inBody = true;
        continue;
      }else{
        //注释结束
        return ;
      }
      
    }
  }
}
```

- 忽略以code block开头的符号

```java
String s = str.trim();
if(s.startsWith("```")||s.startsWith("~~~")){
  continue;
}
```