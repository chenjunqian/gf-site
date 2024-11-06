"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[61828],{742278:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>t,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u7ed3\u679c\u5904\u7406","title":"Redis-\u7ed3\u679c\u5904\u7406","description":"\u53ef\u4ee5\u770b\u5230\u901a\u8fc7\u5ba2\u6237\u7aef\u65b9\u6cd5 Do/Receive \u83b7\u53d6\u53ef\u4f9b\u65b9\u4fbf\u8f6c\u6362\u7684 gvar.Var \u901a\u7528\u53d8\u91cf\u7ed3\u679c\u3002\u901a\u8fc7 gvar.Var \u7684\u5f3a\u5927\u8f6c\u6362\u529f\u80fd\u53ef\u4ee5\u8f6c\u6362\u4e3a\u4efb\u610f\u7684\u6570\u636e\u7c7b\u578b\uff0c\u5982\u57fa\u672c\u6570\u636e\u7c7b\u578b Int, String, Strings\uff0c\u6216\u8005\u7ed3\u6784\u4f53 Struct \u7b49\u7b49\u3002","source":"@site/versioned_docs/version-2.2.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u7ed3\u679c\u5904\u7406.md","sourceDirName":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis","slug":"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u7ed3\u679c\u5904\u7406","permalink":"/2.2.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u7ed3\u679c\u5904\u7406","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.2.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u7ed3\u679c\u5904\u7406.md","tags":[],"version":"2.2.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":3,"frontMatter":{"title":"Redis-\u7ed3\u679c\u5904\u7406","sidebar_position":3,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"Redis-Conn\u5bf9\u8c61","permalink":"/2.2.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-Conn\u5bf9\u8c61"},"next":{"title":"Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1","permalink":"/2.2.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1"}}');var c=i(474848),s=i(28453);const t={title:"Redis-\u7ed3\u679c\u5904\u7406",sidebar_position:3,hide_title:!0},o=void 0,d={},a=[{value:"<code>Do</code> \u793a\u4f8b",id:"do-\u793a\u4f8b",level:3},{value:"<code>Receive</code> \u793a\u4f8b",id:"receive-\u793a\u4f8b",level:3},{value:"<code>HashSet</code> \u793a\u4f8b",id:"hashset-\u793a\u4f8b",level:3}];function l(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\u901a\u8fc7\u5ba2\u6237\u7aef\u65b9\u6cd5 ",(0,c.jsx)(n.code,{children:"Do/Receive"})," \u83b7\u53d6\u53ef\u4f9b\u65b9\u4fbf\u8f6c\u6362\u7684 ",(0,c.jsx)(n.code,{children:"gvar.Var"})," \u901a\u7528\u53d8\u91cf\u7ed3\u679c\u3002\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"gvar.Var"})," \u7684\u5f3a\u5927\u8f6c\u6362\u529f\u80fd\u53ef\u4ee5\u8f6c\u6362\u4e3a\u4efb\u610f\u7684\u6570\u636e\u7c7b\u578b\uff0c\u5982\u57fa\u672c\u6570\u636e\u7c7b\u578b ",(0,c.jsx)(n.code,{children:"Int"}),", ",(0,c.jsx)(n.code,{children:"String"}),", ",(0,c.jsx)(n.code,{children:"Strings"}),"\uff0c\u6216\u8005\u7ed3\u6784\u4f53 ",(0,c.jsx)(n.code,{children:"Struct"})," \u7b49\u7b49\u3002"]}),"\n",(0,c.jsxs)(n.h3,{id:"do-\u793a\u4f8b",children:[(0,c.jsx)(n.code,{children:"Do"})," \u793a\u4f8b"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n    )\n\n    conn, _ := g.Redis().Conn(ctx)\n    defer conn.Close(ctx)\n    conn.Do(ctx, "SET", "k", "v")\n    v, _ := conn.Do(ctx, "GET", "k")\n    fmt.Println(v.String())\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-v"})}),"\n",(0,c.jsxs)(n.h3,{id:"receive-\u793a\u4f8b",children:[(0,c.jsx)(n.code,{children:"Receive"})," \u793a\u4f8b"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n    )\n\n    conn, _ := g.Redis().Conn(ctx)\n    defer conn.Close(ctx)\n    _, err := conn.Do(ctx, "SUBSCRIBE", "channel")\n    if err != nil {\n        panic(err)\n    }\n    for {\n        reply, err := conn.Receive(ctx)\n        if err != nil {\n            panic(err)\n        }\n        fmt.Println(reply.Strings())\n    }\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7a0b\u5e8f\u5c06\u963b\u585e\u7b49\u5f85\u83b7\u53d6\u6570\u636e\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u53e6\u5916\u6253\u5f00\u4e00\u4e2a\u7ec8\u7aef\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"redis-cli"})," \u547d\u4ee4\u8fdb\u5165 ",(0,c.jsx)(n.code,{children:"Redis Server"}),"\uff0c\u53d1\u5e03\u4e00\u6761\u6d88\u606f\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ redis-cli\n127.0.0.1:6379> publish channel test\n(integer) 1\n127.0.0.1:6379>\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u968f\u540e\u7a0b\u5e8f\u7ec8\u7aef\u7acb\u5373\u6253\u5370\u51fa\u4ece ",(0,c.jsx)(n.code,{children:"Redis Server"})," \u83b7\u53d6\u7684\u6570\u636e\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"[message channel test]\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"hashset-\u793a\u4f8b",children:[(0,c.jsx)(n.code,{children:"HashSet"})," \u793a\u4f8b"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"HashSet"})," \u662f\u6211\u4eec\u6bd4\u8f83\u5e38\u7528\u7684 ",(0,c.jsx)(n.code,{children:"Redis"})," \u6570\u636e\u7ed3\u6784\uff0c\u6211\u4eec\u53ef\u4ee5\u975e\u5e38\u65b9\u4fbf\u5730\u5c06 ",(0,c.jsx)(n.code,{children:"Redis"})," \u4e2d\u7684 ",(0,c.jsx)(n.code,{children:"HashSet"})," \u83b7\u53d6\u5e76\u8f6c\u6362\u4e3a ",(0,c.jsx)(n.code,{children:"Golang Map"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/gvar"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n        err    error\n        result *gvar.Var\n        key    = "user"\n    )\n\n    _, err = g.Redis().Do(ctx,"HSET", key, "id", 10000)\n    if err != nil {\n        panic(err)\n    }\n    _, err = g.Redis().Do(ctx,"HSET", key, "name", "john")\n    if err != nil {\n        panic(err)\n    }\n    result, err = g.Redis().Do(ctx,"HGETALL", key)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Println(result.Map())\n}\n'})})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>o});var r=i(296540);const c={},s=r.createContext(c);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);