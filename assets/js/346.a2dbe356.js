(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{614:function(e,t,n){"use strict";n.r(t);var r=n(9),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"设计-wujie-iframe隔离沙箱-组件级微前端-状态保活缓解白屏"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设计-wujie-iframe隔离沙箱-组件级微前端-状态保活缓解白屏"}},[e._v("#")]),e._v(" [设计]wujie(iframe隔离沙箱+组件级微前端+状态保活缓解白屏)")]),e._v(" "),n("blockquote",[n("p",[e._v("@ps 先说好, 不要对iframe有偏见, "),n("a",{attrs:{href:"https://www.yuque.com/kuitos/gky7yw/gesexv",target:"_blank",rel:"noopener noreferrer"}},[e._v("Why Not Iframe"),n("OutboundLink")],1)])]),e._v(" "),n("ul",[n("li",[e._v("@code "),n("a",{attrs:{href:"https://github.com/Tencent/wujie",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/Tencent/wujie"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("@doc "),n("a",{attrs:{href:"https://wujie-micro.github.io/doc/guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wujie-micro.github.io/doc/guide/"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("@demo "),n("a",{attrs:{href:"https://wujie-micro.github.io/demo-main-vue/home",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wujie-micro.github.io/demo-main-vue/home"),n("OutboundLink")],1)])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// iframe\n隔离的太完美导致缺点也非常明显\n\n1) 刷新页面会导致iframe的url状态丢失\n2) 弹窗只能在iframe内部展示\n3) 白屏时间太长 ==> 应用保活来缓解\n")])])]),n("p",[n("img",{attrs:{src:"https://luo0412.oss-cn-hangzhou.aliyuncs.com/1696689547912-5MZcbSaCGN27-image.png",alt:""}})]),e._v(" "),n("h1",{attrs:{id:"限制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#限制"}},[e._v("#")]),e._v(" 限制")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("@issues "),n("a",{attrs:{href:"https://github.com/Tencent/wujie/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/Tencent/wujie/issues"),n("OutboundLink")],1)])]),e._v(" "),n("li",[n("p",[e._v("@doc "),n("a",{attrs:{href:"https://wujie-micro.github.io/doc/question/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wujie-micro.github.io/doc/question/"),n("OutboundLink")],1)])]),e._v(" "),n("li",[n("p",[e._v("子应用必须做cors 设置")])])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("@ps 问题不大, 技术选型前就考虑到了\n")])])]),n("ul",[n("li",[e._v("路由跳转API繁琐")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("@ps hash模式下需要记忆各种跳转API, 烦死...\n\n===\n路由API, 居然因为主子应用的跳转方向不同而各式各样, 这谁能记得住... \n\nwindow.microApp.router.push({name: 'my-app', path: '/page1'}) // 已优化\n\n在实践qiankun项目时, 我们子应用调用this.$tab.push({path: '/base/xxx/yyy'})\n其实绑定的是主应用的router.push方法, 这样形式上统一多了, 根本不需要记忆的\n")])])]),n("ul",[n("li",[e._v("面板位置偏移, 弹框居中等问题\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/Tencent/wujie/issues/499",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/Tencent/wujie/issues/499"),n("OutboundLink")],1)])])])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// 弹框偏移\n子应用padding-left菜单宽度\n")])])]),n("h1",{attrs:{id:"api设计"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#api设计"}},[e._v("#")]),e._v(" API设计")]),e._v(" "),n("ul",[n("li",[e._v("iframe 路由同步机制")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("iframe的session-history\n\n劫持iframe的history.pushState和history.replaceState\n")])])]),n("ul",[n("li",[n("code",[e._v("iframe 连接机制和 css 沙箱机制")]),e._v(" @nice")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("@ps micro-app 好像也抄这条路了\n\n子应用的实例instance在iframe内运行\ndom在主应用容器下的webcomponent内\n")])])]),n("p",[n("img",{attrs:{src:"https://luo0412.oss-cn-hangzhou.aliyuncs.com/1696694485198-nWrPzPK32ApT-image.png",alt:""}})]),e._v(" "),n("ul",[n("li",[e._v("无感知的降级处理 @nice")])]),e._v(" "),n("hr"),e._v(" "),n("h1",{attrs:{id:"参考-ref"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考-ref"}},[e._v("#")]),e._v(" 参考 @ref")]),e._v(" "),n("ul",[n("li",[e._v('"几时归去做个闲人"的wujie源码解读 @todo\n'),n("ul",[n("li",[n("a",{attrs:{href:"https://juejin.cn/user/448256473834829/posts",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://juejin.cn/user/448256473834829/posts"),n("OutboundLink")],1)])])])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://luo0412.oss-cn-hangzhou.aliyuncs.com/1705668837965-rRWYFYWr7tGC-image.png",alt:""}})]),e._v(" "),n("p",[n("img",{attrs:{src:"https://luo0412.oss-cn-hangzhou.aliyuncs.com/1705668868481-PmHxjBrcQKk5-image.png",alt:""}})]),e._v(" "),n("ul",[n("li",[e._v("极致的微前端方案_无界的源码剖析\n"),n("ul",[n("li",[e._v("@by "),n("a",{attrs:{href:"https://juejin.cn/user/2436173499477623/posts",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://juejin.cn/user/2436173499477623/posts"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("@doc "),n("a",{attrs:{href:"https://juejin.cn/post/7158777745806196743",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://juejin.cn/post/7158777745806196743"),n("OutboundLink")],1)])])])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("子应用的实例instance在iframe内运行，dom在主应用容器下的webcomponent内\n通过代理 iframe的document到webcomponent，可以实现两者的互联\n\n===\n路由同步机制\n\n===\nprops 注入机制\n\nwindow.parent 通信机制\n\n去中心化的通信机制\n")])])]),n("p",[n("img",{attrs:{src:"https://luo0412.oss-cn-hangzhou.aliyuncs.com/1688917633103-3kfs5DJDcW2S-image.png",alt:""}})]),e._v(" "),n("p",[n("img",{attrs:{src:"https://luo0412.oss-cn-hangzhou.aliyuncs.com/1688917637647-R72W6dBziRxe-image.png",alt:""}})]),e._v(" "),n("ul",[n("li",[n("p",[e._v("无界微前端是如何渲染子应用的？")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/618063377",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://zhuanlan.zhihu.com/p/618063377"),n("OutboundLink")],1)])])]),e._v(" "),n("li",[n("p",[e._v("wujie在第三方SDK开发中的应用实践")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://juejin.cn/post/7245558239332335671",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://juejin.cn/post/7245558239332335671"),n("OutboundLink")],1)])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);