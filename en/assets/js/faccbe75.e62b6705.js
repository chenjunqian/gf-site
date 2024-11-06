"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[10057],{365854:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>g,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u5668-gtimer/\u5b9a\u65f6\u5668-\u57fa\u672c\u4f7f\u7528","title":"\u5b9a\u65f6\u5668-\u57fa\u672c\u4f7f\u7528","description":"\u57fa\u672c\u793a\u4f8b","source":"@site/versioned_docs/version-2.1.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u5668-gtimer/\u5b9a\u65f6\u5668-\u57fa\u672c\u4f7f\u7528.md","sourceDirName":"\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u5668-gtimer","slug":"/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u5668-gtimer/\u5b9a\u65f6\u5668-\u57fa\u672c\u4f7f\u7528","permalink":"/en/2.1.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u5668-gtimer/\u5b9a\u65f6\u5668-\u57fa\u672c\u4f7f\u7528","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.1.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u5668-gtimer/\u5b9a\u65f6\u5668-\u57fa\u672c\u4f7f\u7528.md","tags":[],"version":"2.1.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"\u5b9a\u65f6\u5668-\u57fa\u672c\u4f7f\u7528","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u5b9a\u65f6\u5668-gtimer","permalink":"/en/2.1.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u5668-gtimer/"},"next":{"title":"\u5b9a\u65f6\u5668-\u6027\u80fd\u6d4b\u8bd5","permalink":"/en/2.1.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u5668-gtimer/\u5b9a\u65f6\u5668-\u6027\u80fd\u6d4b\u8bd5"}}');var o=t(474848),c=t(28453);const r={title:"\u5b9a\u65f6\u5668-\u57fa\u672c\u4f7f\u7528",sidebar_position:0,hide_title:!0},g=void 0,s={},l=[{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",level:2},{value:"\u5355\u4f8b\u4efb\u52a1",id:"\u5355\u4f8b\u4efb\u52a1",level:2},{value:"\u5ef6\u8fdf\u4efb\u52a1",id:"\u5ef6\u8fdf\u4efb\u52a1",level:2},{value:"<code>SetTimeout</code> \u4e0e <code>SetInterval</code>",id:"settimeout-\u4e0e-setinterval",level:2},{value:"<code>Exit</code> \u9000\u51fa",id:"exit-\u9000\u51fa",level:2}];function d(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"\u57fa\u672c\u793a\u4f8b",children:"\u57fa\u672c\u793a\u4f8b"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gtime"\n    "github.com/gogf/gf/v2/os/gtimer"\n    "time"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n        now = time.Now()\n    )\n    gtimer.AddTimes(ctx, time.Second, 10, func(ctx context.Context) {\n        fmt.Println(gtime.Now(), time.Duration(time.Now().UnixNano()-now.UnixNano()))\n        now = time.Now()\n    })\n\n    select {}\n}\n\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-html",children:"2021-05-27 13:28:19 1.004516s\n2021-05-27 13:28:20 997.262ms\n2021-05-27 13:28:21 999.972ms\n2021-05-27 13:28:22 1.00112s\n2021-05-27 13:28:23 998.773ms\n2021-05-27 13:28:24 999.957ms\n2021-05-27 13:28:25 1.002468s\n2021-05-27 13:28:26 997.468ms\n2021-05-27 13:28:27 999.981ms\n2021-05-27 13:28:28 1.002504s\n"})}),"\n",(0,o.jsx)(e.h2,{id:"\u5355\u4f8b\u4efb\u52a1",children:"\u5355\u4f8b\u4efb\u52a1"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/glog"\n    "github.com/gogf/gf/v2/os/gtimer"\n    "time"\n)\n\nfunc main() {\n    var (\n        ctx      = gctx.New()\n        interval = time.Second\n    )\n\n    gtimer.AddSingleton(ctx, interval, func(ctx context.Context) {\n        glog.Print(ctx, "doing")\n        time.Sleep(5 * time.Second)\n    })\n\n    select {}\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-html",children:"2021-11-14 11:50:42.192 {189cwi9mo40cfp73guzhugo100tnuedg} doing\n2021-11-14 11:50:48.190 {189cwi9mo40cfp73guzhugo100tnuedg} doing\n2021-11-14 11:50:54.192 {189cwi9mo40cfp73guzhugo100tnuedg} doing\n2021-11-14 11:51:00.189 {189cwi9mo40cfp73guzhugo100tnuedg} doing\n...\n"})}),"\n",(0,o.jsx)(e.h2,{id:"\u5ef6\u8fdf\u4efb\u52a1",children:"\u5ef6\u8fdf\u4efb\u52a1"}),"\n",(0,o.jsxs)(e.p,{children:["\u5ef6\u8fdf\u4efb\u52a1\u662f\u6307\u5728\u6307\u5b9a\u65f6\u95f4\u540e\u751f\u6548\u7684\u5b9a\u65f6\u4efb\u52a1\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,o.jsx)(e.code,{children:"DelayAdd*"})," \u76f8\u5173\u65b9\u6cd5\u5b9e\u73b0\u5ef6\u8fdf\u4efb\u52a1\u7684\u521b\u5efa\u3002"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gtime"\n    "github.com/gogf/gf/v2/os/gtimer"\n    "time"\n)\n\nfunc main() {\n    var (\n        ctx      = gctx.New()\n        delay    = time.Second\n        interval = time.Second\n    )\n    fmt.Println("Start:", gtime.Now())\n    gtimer.DelayAdd(\n        ctx,\n        delay,\n        interval,\n        func(ctx context.Context) {\n            fmt.Println("Running:", gtime.Now())\n        },\n    )\n    select {}\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"Start: 2021-05-27 13:26:02\nRunning: 2021-05-27 13:26:04\nRunning: 2021-05-27 13:26:05\nRunning: 2021-05-27 13:26:06\nRunning: 2021-05-27 13:26:07\nRunning: 2021-05-27 13:26:08\nRunning: 2021-05-27 13:26:09\nRunning: 2021-05-27 13:26:10\nRunning: 2021-05-27 13:26:11\n...\n"})}),"\n",(0,o.jsxs)(e.h2,{id:"settimeout-\u4e0e-setinterval",children:[(0,o.jsx)(e.code,{children:"SetTimeout"})," \u4e0e ",(0,o.jsx)(e.code,{children:"SetInterval"})]}),"\n",(0,o.jsxs)(e.p,{children:["\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u6765\u6e90\u4e8e ",(0,o.jsx)(e.code,{children:"Javascript"})," \u5e38\u7528\u5b9a\u65f6\u65b9\u6cd5\u3002\u5176\u4e2d ",(0,o.jsx)(e.code,{children:"SetTimeout"})," \u7528\u4e8e\u521b\u5efa\u53ea\u6267\u884c\u4e00\u6b21\u7684\u5b9a\u65f6\u4efb\u52a1\uff0c\u4e0d\u8fc7\u53ef\u4ee5\u901a\u8fc7\u9012\u5f52\u8c03\u7528 ",(0,o.jsx)(e.code,{children:"SetTimeout"})," \u6765\u5b9e\u73b0\u65e0\u9650\u95f4\u9694\u6267\u884c\u3002 ",(0,o.jsx)(e.code,{children:"SetIterval"})," \u7528\u4e8e\u521b\u5efa\u95f4\u9694\u6267\u884c\u4e0d\u9000\u51fa\u7684\u5b9a\u65f6\u4efb\u52a1\u3002"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gtime"\n    "github.com/gogf/gf/v2/os/gtimer"\n    "time"\n)\n\nfunc main() {\n    var (\n        ctx      = gctx.New()\n        timeout  = time.Second\n        interval = time.Second\n    )\n    gtimer.SetTimeout(ctx, timeout, func(ctx context.Context) {\n        fmt.Println("SetTimeout:", gtime.Now())\n    })\n    gtimer.SetInterval(ctx, interval, func(ctx context.Context) {\n        fmt.Println("SetInterval:", gtime.Now())\n    })\n    select {}\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"SetInterval: 2021-05-27 13:20:50\nSetTimeout: 2021-05-27 13:20:50\nSetInterval: 2021-05-27 13:20:51\nSetInterval: 2021-05-27 13:20:52\nSetInterval: 2021-05-27 13:20:53\nSetInterval: 2021-05-27 13:20:54\nSetInterval: 2021-05-27 13:20:55\nSetInterval: 2021-05-27 13:20:56\nSetInterval: 2021-05-27 13:20:57\nSetInterval: 2021-05-27 13:20:58\n...\n"})}),"\n",(0,o.jsxs)(e.h2,{id:"exit-\u9000\u51fa",children:[(0,o.jsx)(e.code,{children:"Exit"})," \u9000\u51fa"]}),"\n",(0,o.jsxs)(e.p,{children:["\u6211\u4eec\u53ef\u4ee5\u5728\u5b9a\u65f6\u4efb\u52a1\u4e2d\u901a\u8fc7 ",(0,o.jsx)(e.code,{children:"Exit"})," \u65b9\u6cd5\u5f3a\u5236\u9000\u51fa\u5b9a\u65f6\u4efb\u52a1\u7684\u7ee7\u7eed\u6267\u884c\uff0c\u8be5\u5b9a\u65f6\u4efb\u52a1\u5c06\u4f1a\u88ab\u4ece\u5b9a\u65f6\u5668\u4e2d\u79fb\u9664\u3002"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gtime"\n    "github.com/gogf/gf/v2/os/gtimer"\n    "time"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n    )\n    gtimer.SetInterval(ctx, time.Second, func(ctx context.Context) {\n        fmt.Println("exit:", gtime.Now())\n        gtimer.Exit()\n    })\n    select {}\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"exit: 2021-05-27 13:31:24\n"})})]})}function m(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>g});var i=t(296540);const o={},c=i.createContext(o);function r(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function g(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);