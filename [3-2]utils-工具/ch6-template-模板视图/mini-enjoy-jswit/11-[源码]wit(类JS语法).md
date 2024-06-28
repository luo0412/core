# [源码]wit(类JS语法)

- Gradle构建
- @code 
	- https://github.com/febit/wit
	- https://github.com/febit/wit/tree/master/wit-core/src/main/java/org/febit/wit
	- https://gitee.com/zqq90/webit-generator

- @demo https://github.com/febit/wit-mvc-demo/blob/master/common-templates/templates/books.wit

```html
<% 
var books;
var basePath;
%>


<h1>basePath</h1>
basePath = ${basePath}

<h1>Request Header</h1>
<%
	var header = request.header;
	for(name : request.headerNames) {
%>
<p>${name}: ${request.header[name]}</p>
<%  } %>


<% if(books){ %>
<h1>Books</h1>
<table>
	<tr>
		<td>序号</td>
		<td>书名</td>
		<td>作者</td>
		<td>出版时间</td>
		<td>定价</td>
	</tr>
	<% for(book : books){ %>
	<tr>
		<td>${book.id}</td>
		<td>${book.title}</td>
		<td>${book.author}</td>
		<td>${formatDate(book.publication)}</td>
		<td>${book.price}</td>
	</tr>
	<% } %>
</table>
<% } %>
```