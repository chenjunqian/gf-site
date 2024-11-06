"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[9435],{465659:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-Hook\u7279\u6027","title":"ORM\u94fe\u5f0f\u64cd\u4f5c-Hook\u7279\u6027","description":"Hook \u7279\u6027\u5141\u8bb8\u6211\u4eec\u5bf9\u7279\u6027\u7684 Model \u7ed1\u5b9a CURD \u94a9\u5b50\u5904\u7406\u3002","source":"@site/versioned_docs/version-2.3.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-Hook\u7279\u6027.md","sourceDirName":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9","slug":"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-Hook\u7279\u6027","permalink":"/2.3.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-Hook\u7279\u6027","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-Hook\u7279\u6027.md","tags":[],"version":"2.3.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":13,"frontMatter":{"title":"ORM\u94fe\u5f0f\u64cd\u4f5c-Hook\u7279\u6027","sidebar_position":13,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u5e93\u5207\u6362","permalink":"/2.3.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u5e93\u5207\u6362"},"next":{"title":"ORM\u94fe\u5f0f\u64cd\u4f5c-Handler\u7279\u6027","permalink":"/2.3.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-Handler\u7279\u6027"}}');var r=o(474848),s=o(28453);const c={title:"ORM\u94fe\u5f0f\u64cd\u4f5c-Hook\u7279\u6027",sidebar_position:13,hide_title:!0},l=void 0,i={},d=[{value:"\u76f8\u5173\u5b9a\u4e49",id:"\u76f8\u5173\u5b9a\u4e49",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}];function a(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Hook"})," \u7279\u6027\u5141\u8bb8\u6211\u4eec\u5bf9\u7279\u6027\u7684 ",(0,r.jsx)(n.code,{children:"Model"})," \u7ed1\u5b9a ",(0,r.jsx)(n.code,{children:"CURD"})," \u94a9\u5b50\u5904\u7406\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u76f8\u5173\u5b9a\u4e49",children:"\u76f8\u5173\u5b9a\u4e49"}),"\n",(0,r.jsxs)(n.p,{children:["\u76f8\u5173 ",(0,r.jsx)(n.code,{children:"Hook"})," \u51fd\u6570\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"type (\n    HookFuncSelect func(ctx context.Context, in *HookSelectInput) (result Result, err error)\n    HookFuncInsert func(ctx context.Context, in *HookInsertInput) (result sql.Result, err error)\n    HookFuncUpdate func(ctx context.Context, in *HookUpdateInput) (result sql.Result, err error)\n    HookFuncDelete func(ctx context.Context, in *HookDeleteInput) (result sql.Result, err error)\n)\n\n// HookHandler manages all supported hook functions for Model.\ntype HookHandler struct {\n    Select HookFuncSelect\n    Insert HookFuncInsert\n    Update HookFuncUpdate\n    Delete HookFuncDelete\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Hook"})," \u6ce8\u518c\u65b9\u6cd5\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"// Hook sets the hook functions for current model.\nfunc (m *Model) Hook(hook HookHandler) *Model\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,r.jsxs)(n.p,{children:["\u67e5\u8be2 ",(0,r.jsx)(n.code,{children:"birth_day"})," \u5b57\u6bb5\u65f6\uff0c\u540c\u65f6\u8ba1\u7b97\u51fa\u5f53\u524d\u7528\u6237\u7684\u5e74\u9f84\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// Hook function definition.\nvar hook = gdb.HookHandler{\n    Select: func(ctx context.Context, in *gdb.HookSelectInput) (result gdb.Result, err error) {\n        result, err = in.Next(ctx)\n        if err != nil {\n            return\n        }\n        for i, record := range result {\n            if !record["birth_day"].IsEmpty() {\n                age := gtime.Now().Sub(record["birth_day"].GTime()).Hours() / 24 / 365\n                record["age"] = gvar.New(age)\n            }\n            result[i] = record\n        }\n        return\n    },\n}\n// It registers hook function, creates and returns a new `model`.\nmodel := g.Model("user").Hook(hook)\n\n// The hook function takes effect on each ORM operation when using the `model`.\nall, err := model.Where("status", "online").OrderAsc(`id`).All()\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>l});var t=o(296540);const r={},s=t.createContext(r);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);