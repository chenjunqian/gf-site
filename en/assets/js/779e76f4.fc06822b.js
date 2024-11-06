"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[76922],{249099:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u53d8\u91cf","title":"\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u53d8\u91cf","description":"\u5185\u7f6e\u53d8\u91cf","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u53d8\u91cf.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce","slug":"/docs/core/gview-variable","permalink":"/en/docs/core/gview-variable","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u53d8\u91cf.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730726699000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/core/gview-variable","title":"\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u53d8\u91cf","sidebar_position":3,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u6807\u7b7e","permalink":"/en/docs/core/gview-tags"},"next":{"title":"\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u5e03\u5c40","permalink":"/en/docs/core/gview-layout"}}');var s=t(474848),o=t(28453);const i={slug:"/docs/core/gview-variable",title:"\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u53d8\u91cf",sidebar_position:3,hide_title:!0},c=void 0,a={},l=[{value:"\u5185\u7f6e\u53d8\u91cf",id:"\u5185\u7f6e\u53d8\u91cf",level:2},{value:"\u53d8\u91cf\u5bf9\u8c61",id:"\u53d8\u91cf\u5bf9\u8c61",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u5185\u7f6e\u53d8\u91cf",children:"\u5185\u7f6e\u53d8\u91cf"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"WebServer"})," \u5185\u7f6e\u53d8\u91cf\u8bf7\u53c2\u8003 ",(0,s.jsx)(n.a,{href:"/en/docs/web/response-template",children:"\u6570\u636e\u8fd4\u56de-\u6a21\u677f\u89e3\u6790"})," \u7ae0\u8282\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u53d8\u91cf\u5bf9\u8c61",children:"\u53d8\u91cf\u5bf9\u8c61"}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u53ef\u4ee5\u5728\u6a21\u677f\u4e2d\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u5bf9\u8c61\uff0c\u5e76\u53ef\u5728\u6a21\u677f\u4e2d\u8bbf\u95ee\u5bf9\u8c61\u7684\u5c5e\u6027\u53ca\u8c03\u7528\u5176\u65b9\u6cd5\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "github.com/gogf/gf/v2/frame/g"\n)\n\ntype T struct {\n    Name string\n}\n\nfunc (t *T) Hello(name string) string {\n    return "Hello " + name\n}\n\nfunc (t *T) Test() string {\n    return "This is test"\n}\n\nfunc main() {\n    t := &T{"John"}\n    v := g.View()\n    content := `{{.t.Hello "there"}}, my name\'s {{.t.Name}}. {{.t.Test}}.`\n    if r, err := v.ParseContent(context.TODO(), content, g.Map{"t": t}); err != nil {\n        g.Dump(err)\n    } else {\n        g.Dump(r)\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u4e2d\uff0c\u8d4b\u503c\u7ed9\u6a21\u677f\u7684\u53d8\u91cf\u65e2\u53ef\u4ee5\u662f ",(0,s.jsx)(n.code,{children:"\u5bf9\u8c61\u6307\u9488"})," \u4e5f\u53ef\u4ee5\u662f ",(0,s.jsx)(n.code,{children:"\u5bf9\u8c61\u53d8\u91cf"}),"\u3002\u4f46\u662f\u6ce8\u610f\u5b9a\u4e49\u7684\u5bf9\u8c61\u65b9\u6cd5\uff0c\u5982\u679c\u4e3a\u5bf9\u8c61\u6307\u9488\u90a3\u4e48\u53ea\u80fd\u8c03\u7528\u65b9\u6cd5\u63a5\u6536\u5668\u4e3a\u5bf9\u8c61\u6307\u9488\u7684\u65b9\u6cd5\uff1b\u5982\u679c\u4e3a\u5bf9\u8c61\u53d8\u91cf\uff0c\u90a3\u4e48\u53ea\u80fd\u8c03\u7528\u65b9\u6cd5\u63a5\u6536\u5668\u4e3a\u5bf9\u8c61\u7684\u65b9\u6cd5\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Hello there, my name's John. This is test.\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(296540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);