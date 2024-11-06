"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[30989],{905188:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u51fd\u6570/\u6a21\u677f\u51fd\u6570-\u81ea\u5b9a\u4e49\u51fd\u6570","title":"\u6a21\u677f\u51fd\u6570-\u81ea\u5b9a\u4e49\u51fd\u6570","description":"\u57fa\u672c\u4ecb\u7ecd","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u51fd\u6570/\u6a21\u677f\u51fd\u6570-\u81ea\u5b9a\u4e49\u51fd\u6570.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u51fd\u6570","slug":"/docs/core/gview-funcs-custom","permalink":"/en/docs/core/gview-funcs-custom","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u51fd\u6570/\u6a21\u677f\u51fd\u6570-\u81ea\u5b9a\u4e49\u51fd\u6570.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730726699000,"sidebarPosition":2,"frontMatter":{"slug":"/docs/core/gview-funcs-custom","title":"\u6a21\u677f\u51fd\u6570-\u81ea\u5b9a\u4e49\u51fd\u6570","sidebar_position":2,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u6a21\u677f\u51fd\u6570-\u5185\u7f6e\u51fd\u6570","permalink":"/en/docs/core/gview-funcs-builtin"},"next":{"title":"\u6570\u636e\u5e93ORM\ud83d\udd25","permalink":"/en/docs/core/gdb"}}');var i=t(474848),r=t(28453);const s={slug:"/docs/core/gview-funcs-custom",title:"\u6a21\u677f\u51fd\u6570-\u81ea\u5b9a\u4e49\u51fd\u6570",sidebar_position:2,hide_title:!0},c=void 0,l={},d=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}];function a(n){const e={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,i.jsx)(e.p,{children:"\u5f00\u53d1\u8005\u53ef\u4ee5\u81ea\u5b9a\u4e49\u6a21\u677f\u51fd\u6570\uff0c\u5168\u5c40\u7ed1\u5b9a\u6a21\u677f\u51fd\u6570\u5230\u6307\u5b9a\u7684\u89c6\u56fe\u5bf9\u8c61\u4e2d\u3002"}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsx)(e.p,{children:"\u4e5f\u53ef\u4ee5\u5c06\u81ea\u5b9a\u4e49\u7684\u5bf9\u8c61\u8d4b\u503c\u7ed9\u6a21\u677f\uff0c\u968f\u540e\u901a\u8fc7\u5bf9\u8c61\u6765\u8c03\u7528\u5176\u5c01\u88c5\u7684\u65b9\u6cd5\u3002"})}),"\n",(0,i.jsx)(e.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/gogf/gf/v2/frame/g"\n)\n\n// \u7528\u4e8e\u6d4b\u8bd5\u7684\u5e26\u53c2\u6570\u7684\u5185\u7f6e\u51fd\u6570\nfunc funcHello(name string) string {\n    return fmt.Sprintf(`Hello %s`, name)\n}\n\nfunc main() {\n    // \u7ed1\u5b9a\u5168\u5c40\u7684\u6a21\u677f\u51fd\u6570\n    g.View().BindFunc("hello", funcHello)\n\n    // \u666e\u901a\u65b9\u5f0f\u4f20\u53c2\n    parsed1, err := g.View().ParseContent(context.TODO(), `{{hello "GoFrame"}}`, nil)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Println(string(parsed1))\n\n    // \u901a\u8fc7\u7ba1\u9053\u4f20\u53c2\n    parsed2, err := g.View().ParseContent(context.TODO(), `{{"GoFrame" | hello}}`, nil)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Println(string(parsed2))\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Hello GoFrame\nHello GoFrame\n"})})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>c});var o=t(296540);const i={},r=o.createContext(i);function s(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);