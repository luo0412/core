# [antd]为什么Ant Design的Table不支持min-width(表格列宽自适应)

- https://github.com/ant-design/ant-design/issues/8981
- https://github.com/ant-design/ant-design/issues/20885

---

# 参考 @ref

- ant-design-vue的table组件如何自适应列宽？@coll  
    - https://blog.csdn.net/weixin_48280939/article/details/121946502
    - https://blog.csdn.net/qiao_qiao_happy/article/details/115560550 @nice
    - https://juejin.cn/post/7156041642632298509
    - https://juejin.cn/post/7068937960296546334
    - https://www.jb51.net/article/198351.htm
    - https://segmentfault.com/q/1010000042270055
    - https://www.cnblogs.com/huangxiaoxue/p/12034326.html

```js
// 使用canvas画布来实现对字符串的测量

// 定义一个 Map 接收每列的长度值
let widthMap = new Map()
// columns 为动态表格的表头数组 data为展示数据的数组 
//作用是遍历所有数据拿到长度，记下每一列的宽度
data.forEach(target => {
  for(let key in target) {
    if(target.hasOwnProperty(key)) {
      let keyWidth = getTextWidth(target[key])
      // 字段有值就放入数组
        widthMap.has(key) ? widthMap.set(key,widthMap.get(key).concat(keyWidth)) : widthMap.set(key,[].concat(keyWidth ? keyWidth : [] ))
    }
  }
})

  // 计算平均值,保证列宽尽量保持均衡
for(let [mapKey] of widthMap) {
  let valueArr = widthMap.get(mapKey)
  let len = valueArr.length
  let value = valueArr.reduce((acc, cur) => acc + 1/cur,0)
  widthMap.set(mapKey, len/value)
}

//遍历表头，拿到对应表头的宽度与对应表头下内容比对，取最大值作为列宽，这样可以确保表头不换行。35为表头title左右的padding + border
columns.map((item)=>{
  // title，dataIndex为 ant design Table对应参数
  let textWidth = getTextWidth(item.title) 
  if(widthMap.get(item.dataIndex) < textWidth) {
    widthMap.set(item.dataIndex, textWidth)
  }
  return item.width = Math.ceil(widthMap.get(item.dataIndex)) + 35
})

最后组件为
<Table 
  columns={columns}
  dataSource={data}
  bordered
  rowKey={record => record.id}
/>


===
// 用元素模拟计算
function getTextWidth(str) {
  let width = 0;
  let html = document.createElement('span');
  html.innerText = str;
  html.className = 'getTextWidth';
  document.querySelector('body').appendChild(html);
  width = document.querySelector('.getTextWidth').offsetWidth;
  document.querySelector('.getTextWidth').remove();
  return width;
}
column = [
  {
    title: '姓名',
    dataIndex: 'name',
    align: 'center',
    key: '1'
  },
{
    title: '年龄',
    dataIndex: 'age',
    align: 'center',
    key: '2'
  },
]

function calculateColumnWidth(column,valArr) {
  column.map(v1=>{
    const arr = valArr.map(v2=> {return v2[v1.dataIndex]})
    // 把表头push进去对比
    arr.push(v1.title)
    v1.width = Math.max.apply(Math, arr.map(v2=> {return getTextWidth(v2)})) + 20 //20模拟padding
  })
}
calculateColumnWidth(column,valArr)

===
{
      title: '任务名称',
      dataIndex: 'title',
      ellipsis: true,
      align: 'center'
    customCell: column => {
      return {
        style: {
          'min-width': "100px",
          "white-space": "nowrap",
          overflow: "hidden",
          display: "inline-block",
          "text-overflow": "ellipsis"
        }
      };
    }
},

{
  title: "考勤机名称",
  dataIndex: "modeName",
  align: "left",
  customHeaderCell: column => {
    return {
      style: {
          'min-width': "100px",
        "white-space": "nowrap",
        overflow: "hidden",
        display: "inline-block",
        "text-overflow": "ellipsis"
      }
    };
  }
},

```

- 使用React版antd的表格table设置宽度width不生效，无法横向滚动，固定列有白色空隙
  - https://juejin.cn/post/7075458320177299469

```less
.ant-table-body {
    overflow-x: auto; // 让table能横向滚动
  }
  .ant-table-tbody {
    .qid_column {
      word-break: break-all;
      width: 280px; // 固定列宽度
    }
    .ant-table-fixed-columns-in-body {
      width: 280px; // 固定左列容器的宽度始终为上述固定列宽度，避免数量多少时出现白色垂直空隙
    }
    .lang_column {
      min-width: 200px;
      word-break: break-all;
    }
  }
```

- Ant-design-vue 对比Element-plus的优缺点及不同之处
  - https://blog.csdn.net/qq_43225508/article/details/131302004

```
min-width属性可以使table组件在适应小屏幕表头不换行的同时
在切换到大屏幕的时候table组件的每一列还可以均匀分布
```

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1703507334486-3nnTfZN3GSyw-image.png)