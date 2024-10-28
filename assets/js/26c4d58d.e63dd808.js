"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[81815],{986982:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=t(474848),o=t(28453);const s={title:"Redis-Conn\u5bf9\u8c61",sidebar_position:2},c=void 0,r={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-Conn\u5bf9\u8c61",title:"Redis-Conn\u5bf9\u8c61",description:"\u4f7f\u7528 Do \u65b9\u6cd5\u5df2\u7ecf\u80fd\u591f\u6ee1\u8db3\u7edd\u5927\u90e8\u5206\u7684\u573a\u666f\u9700\u8981\uff0c\u5982\u679c\u9700\u8981\u66f4\u590d\u6742\u7684 Redis \u64cd\u4f5c\uff08\u4f8b\u5982\u8ba2\u9605\u53d1\u5e03\uff09\uff0c\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 Conn \u65b9\u6cd5\u4ece\u8fde\u63a5\u6c60\u4e2d\u83b7\u53d6\u4e00\u4e2a\u8fde\u63a5\u5bf9\u8c61\uff0c\u968f\u540e\u4f7f\u7528\u8be5\u8fde\u63a5\u5bf9\u8c61\u8fdb\u884c\u64cd\u4f5c\u3002\u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8be5\u8fde\u63a5\u5bf9\u8c61\u4e0d\u518d\u4f7f\u7528\u65f6\uff0c\u5e94\u5f53\u663e\u5f0f\u8c03\u7528 Close \u65b9\u6cd5\u8fdb\u884c\u5173\u95ed\uff08\u4e22\u56de\u8fde\u63a5\u6c60\uff09\u3002",source:"@site/versioned_docs/version-2.1.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/12-NoSQL Redis/2-Redis-Conn\u5bf9\u8c61.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/12-NoSQL Redis",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-Conn\u5bf9\u8c61",permalink:"/gf-site/docs/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-Conn\u5bf9\u8c61",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.1.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/12-NoSQL Redis/2-Redis-Conn\u5bf9\u8c61.md",tags:[],version:"2.1.x",sidebarPosition:2,frontMatter:{title:"Redis-Conn\u5bf9\u8c61",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Redis-\u57fa\u672c\u4f7f\u7528",permalink:"/gf-site/docs/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u57fa\u672c\u4f7f\u7528"},next:{title:"Redis-\u7ed3\u679c\u5904\u7406",permalink:"/gf-site/docs/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u7ed3\u679c\u5904\u7406"}},d={},l=[{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2},{value:"\u8ba2\u9605/\u53d1\u5e03",id:"\u8ba2\u9605\u53d1\u5e03",level:2}];function x(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"Do"})," \u65b9\u6cd5\u5df2\u7ecf\u80fd\u591f\u6ee1\u8db3\u7edd\u5927\u90e8\u5206\u7684\u573a\u666f\u9700\u8981\uff0c\u5982\u679c\u9700\u8981\u66f4\u590d\u6742\u7684 ",(0,i.jsx)(e.code,{children:"Redis"})," \u64cd\u4f5c\uff08\u4f8b\u5982\u8ba2\u9605\u53d1\u5e03\uff09\uff0c\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"Conn"})," \u65b9\u6cd5\u4ece\u8fde\u63a5\u6c60\u4e2d\u83b7\u53d6\u4e00\u4e2a\u8fde\u63a5\u5bf9\u8c61\uff0c\u968f\u540e\u4f7f\u7528\u8be5\u8fde\u63a5\u5bf9\u8c61\u8fdb\u884c\u64cd\u4f5c\u3002\u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8be5\u8fde\u63a5\u5bf9\u8c61\u4e0d\u518d\u4f7f\u7528\u65f6\uff0c\u5e94\u5f53\u663e\u5f0f\u8c03\u7528 ",(0,i.jsx)(e.code,{children:"Close"})," \u65b9\u6cd5\u8fdb\u884c\u5173\u95ed\uff08\u4e22\u56de\u8fde\u63a5\u6c60\uff09\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u7531\u4e8e\u8be5 ",(0,i.jsx)(e.code,{children:"Conn"})," \u662f\u4e2a\u8fde\u63a5\u5bf9\u8c61\uff0c\u6ce8\u610f\u8be5\u5bf9\u8c61\u5b58\u5728\u8fde\u63a5\u8d85\u65f6\u7684\u9650\u5236\uff0c\u8d85\u65f6\u548c\u670d\u52a1\u7aef\u914d\u7f6e\u6709\u5173\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u57fa\u672c\u4f7f\u7528",children:"\u57fa\u672c\u4f7f\u7528"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gctx"\n\t"github.com/gogf/gf/v2/util/gconv"\n)\n\nfunc main() {\n\tvar (\n\t\tctx = gctx.New()\n\t)\n\tconn, _ := g.Redis().Conn(ctx)\n\tdefer conn.Close(ctx)\n\tconn.Do(ctx, "SET", "k", "v")\n\tv, _ := conn.Do(ctx,"GET", "k")\n\tfmt.Println(gconv.String(v))\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"v\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u8ba2\u9605\u53d1\u5e03",children:"\u8ba2\u9605/\u53d1\u5e03"}),"\n",(0,i.jsxs)(e.p,{children:["\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"Redis"})," \u7684 ",(0,i.jsx)(e.code,{children:"SUBSCRIBE/PUBLISH"})," \u547d\u4ee4\u5b9e\u73b0\u8ba2\u9605/\u53d1\u5e03\u6a21\u5f0f\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gctx"\n\t"github.com/gogf/gf/v2/util/gconv"\n)\n\nfunc main() {\n\tvar (\n\t\tctx = gctx.New()\n\t)\n\tconn, _ := g.Redis().Conn(ctx)\n\tdefer conn.Close(ctx)\n\t_, err := conn.Do(ctx, "SUBSCRIBE", "channel")\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfor {\n\t\treply, err := conn.Receive(ctx)\n\t\tif err != nil {\n\t\t\tpanic(err)\n\t\t}\n\t\tfmt.Println(gconv.Strings(reply))\n\t}\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7a0b\u5e8f\u5c06\u963b\u585e\u7b49\u5f85\u83b7\u53d6\u6570\u636e\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u53e6\u5916\u6253\u5f00\u4e00\u4e2a\u7ec8\u7aef\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"redis-cli"})," \u547d\u4ee4\u8fdb\u5165 ",(0,i.jsx)(e.code,{children:"Redis Server"}),"\uff0c\u53d1\u5e03\u4e00\u6761\u6d88\u606f\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"$ redis-cli\n127.0.0.1:6379> publish channel test\n(integer) 1\n127.0.0.1:6379>\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u968f\u540e\u7a0b\u5e8f\u7ec8\u7aef\u7acb\u5373\u6253\u5370\u51fa\u4ece ",(0,i.jsx)(e.code,{children:"Redis Server"})," \u83b7\u53d6\u7684\u6570\u636e\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"[message channel test]\n"})})]})}function g(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(x,{...n})}):x(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>r});var i=t(296540);const o={},s=i.createContext(o);function c(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:c(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);