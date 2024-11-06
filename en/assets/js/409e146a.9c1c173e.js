"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[77901],{275262:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>i,contentTitle:()=>g,default:()=>a,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u4efb\u52a1-gcron/\u5b9a\u65f6\u4efb\u52a1-\u65e5\u5fd7\u7ba1\u7406","title":"\u5b9a\u65f6\u4efb\u52a1-\u65e5\u5fd7\u7ba1\u7406","description":"gcron \u652f\u6301\u65e5\u5fd7\u529f\u80fd\uff0c\u5e76\u53ef\u8bbe\u7f6e\u65e5\u5fd7\u8f93\u51fa\u7684\u6587\u4ef6\u4ee5\u53ca\u7ea7\u522b\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4ec5\u4f1a\u8f93\u51fa LEVELWARN | LEVELERRO | LEVELCRIT \u9519\u8bef\u7ea7\u522b\u7684\u65e5\u5fd7\uff08\u5305\u62ec\u5b9a\u65f6\u4efb\u52a1\u8fd0\u884c\u5f02\u5e38\u65e5\u5fd7\uff09\uff0c\u8fd0\u884c\u65e5\u5fd7\u4ee5 LEVELDEBUG \u7684\u7ea7\u522b\u8fdb\u884c\u8bb0\u5f55\uff0c\u56e0\u6b64\u9ed8\u8ba4\u4e0d\u4f1a\u8bb0\u5f55\u3002 gcron \u7ec4\u4ef6\u4f7f\u7528\u4e86 goframe \u6846\u67b6\u7edf\u4e00\u7684\u65e5\u5fd7\u7ec4\u4ef6\uff0c\u56e0\u6b64\u53ef\u4ee5\u590d\u7528\u65e5\u5fd7\u7ec4\u4ef6\u7684\u6240\u6709\u7279\u6027\u3002\u76f8\u5173\u65b9\u6cd5\uff1a","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u4efb\u52a1-gcron/\u5b9a\u65f6\u4efb\u52a1-\u65e5\u5fd7\u7ba1\u7406.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u4efb\u52a1-gcron","slug":"/docs/components/os-gcron-logging","permalink":"/en/docs/components/os-gcron-logging","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u4efb\u52a1-gcron/\u5b9a\u65f6\u4efb\u52a1-\u65e5\u5fd7\u7ba1\u7406.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730726699000,"sidebarPosition":2,"frontMatter":{"slug":"/docs/components/os-gcron-logging","title":"\u5b9a\u65f6\u4efb\u52a1-\u65e5\u5fd7\u7ba1\u7406","sidebar_position":2,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u5b9a\u65f6\u4efb\u52a1-\u57fa\u672c\u4f7f\u7528","permalink":"/en/docs/components/os-gcron-example"},"next":{"title":"\u5b9a\u65f6\u4efb\u52a1-gcron\u4e0egtimer","permalink":"/en/docs/components/os-gcron-differ-with-gtimer"}}');var c=o(474848),r=o(28453);const s={slug:"/docs/components/os-gcron-logging",title:"\u5b9a\u65f6\u4efb\u52a1-\u65e5\u5fd7\u7ba1\u7406",sidebar_position:2,hide_title:!0},g=void 0,i={},d=[];function l(n){const e={a:"a",admonition:"admonition",code:"code",img:"img",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"gcron"})," \u652f\u6301\u65e5\u5fd7\u529f\u80fd\uff0c\u5e76\u53ef\u8bbe\u7f6e\u65e5\u5fd7\u8f93\u51fa\u7684\u6587\u4ef6\u4ee5\u53ca\u7ea7\u522b\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4ec5\u4f1a\u8f93\u51fa ",(0,c.jsx)(e.code,{children:"LEVEL_WARN | LEVEL_ERRO | LEVEL_CRIT"})," \u9519\u8bef\u7ea7\u522b\u7684\u65e5\u5fd7\uff08\u5305\u62ec\u5b9a\u65f6\u4efb\u52a1\u8fd0\u884c\u5f02\u5e38\u65e5\u5fd7\uff09\uff0c\u8fd0\u884c\u65e5\u5fd7\u4ee5 ",(0,c.jsx)(e.code,{children:"LEVEL_DEBUG"})," \u7684\u7ea7\u522b\u8fdb\u884c\u8bb0\u5f55\uff0c\u56e0\u6b64\u9ed8\u8ba4\u4e0d\u4f1a\u8bb0\u5f55\u3002 ",(0,c.jsx)(e.code,{children:"gcron"})," \u7ec4\u4ef6\u4f7f\u7528\u4e86 ",(0,c.jsx)(e.code,{children:"goframe"})," \u6846\u67b6\u7edf\u4e00\u7684\u65e5\u5fd7\u7ec4\u4ef6\uff0c\u56e0\u6b64\u53ef\u4ee5\u590d\u7528\u65e5\u5fd7\u7ec4\u4ef6\u7684\u6240\u6709\u7279\u6027\u3002\u76f8\u5173\u65b9\u6cd5\uff1a"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-go",children:"func SetLogger(logger glog.ILogger)\nfunc GetLogger() glog.ILogger\n"})}),"\n",(0,c.jsx)(e.admonition,{type:"tip",children:(0,c.jsxs)(e.p,{children:["\u65e5\u5fd7\u7ec4\u4ef6\u7279\u6027\u8bf7\u53c2\u8003 ",(0,c.jsx)(e.a,{href:"/en/docs/core/glog",children:"\u65e5\u5fd7\u7ec4\u4ef6"})," \u7ae0\u8282\u3002"]})}),"\n",(0,c.jsx)(e.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gcron"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/glog"\n    "time"\n)\n\nfunc main() {\n    var (\n        err    error\n        ctx    = gctx.New()\n        logger = glog.New()\n    )\n    logger.SetLevel(glog.LEVEL_ALL)\n    gcron.SetLogger(logger)\n    _, err = gcron.Add(ctx, "* * * * * ?", func(ctx context.Context) {\n        g.Log().Info(ctx, "test")\n    })\n    if err != nil {\n        panic(err)\n    }\n    time.Sleep(3 * time.Second)\n}\n'})}),"\n",(0,c.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{src:o(83792).A+"",width:"2126",height:"418"})})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(l,{...n})}):l(n)}},83792:(n,e,o)=>{o.d(e,{A:()=>t});const t=o.p+"assets/images/673cee2f61375b3979a03c30934fd8d8-8341cbf2382ef0237be8c41f7135e798.png"},28453:(n,e,o)=>{o.d(e,{R:()=>s,x:()=>g});var t=o(296540);const c={},r=t.createContext(c);function s(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function g(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:s(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);