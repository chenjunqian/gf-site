"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[79320],{441171:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-JSON\u683c\u5f0f","title":"\u65e5\u5fd7\u7ec4\u4ef6-JSON\u683c\u5f0f","description":"glog \u5bf9\u65e5\u5fd7\u5206\u6790\u5de5\u5177\u975e\u5e38\u53cb\u597d\uff0c\u652f\u6301\u8f93\u51fa JSON \u683c\u5f0f\u7684\u65e5\u5fd7\u5185\u5bb9\uff0c\u4ee5\u4fbf\u4e8e\u540e\u671f\u5bf9\u65e5\u5fd7\u5185\u5bb9\u8fdb\u884c\u89e3\u6790\u5206\u6790\u3002","source":"@site/versioned_docs/version-2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-JSON\u683c\u5f0f.md","sourceDirName":"\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6","slug":"/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-JSON\u683c\u5f0f","permalink":"/en/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-JSON\u683c\u5f0f","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-JSON\u683c\u5f0f.md","tags":[],"version":"2.6.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":7,"frontMatter":{"title":"\u65e5\u5fd7\u7ec4\u4ef6-JSON\u683c\u5f0f","sidebar_position":7,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u65e5\u5fd7\u7ec4\u4ef6-Handler","permalink":"/en/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-Handler"},"next":{"title":"\u65e5\u5fd7\u7ec4\u4ef6-\u5f02\u6b65\u8f93\u51fa","permalink":"/en/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u5f02\u6b65\u8f93\u51fa"}}');var o=t(474848),c=t(28453);const i={title:"\u65e5\u5fd7\u7ec4\u4ef6-JSON\u683c\u5f0f",sidebar_position:7,hide_title:!0},r=void 0,d={},a=[{value:"\u4f7f\u7528 <code>map/struct</code> \u53c2\u6570",id:"\u4f7f\u7528-mapstruct-\u53c2\u6570",level:2},{value:"\u7ed3\u5408 <code>gjson.MustEncode</code>",id:"\u7ed3\u5408-gjsonmustencode",level:2}];function l(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"glog"})," \u5bf9\u65e5\u5fd7\u5206\u6790\u5de5\u5177\u975e\u5e38\u53cb\u597d\uff0c\u652f\u6301\u8f93\u51fa ",(0,o.jsx)(e.code,{children:"JSON"})," \u683c\u5f0f\u7684\u65e5\u5fd7\u5185\u5bb9\uff0c\u4ee5\u4fbf\u4e8e\u540e\u671f\u5bf9\u65e5\u5fd7\u5185\u5bb9\u8fdb\u884c\u89e3\u6790\u5206\u6790\u3002"]}),"\n",(0,o.jsxs)(e.h2,{id:"\u4f7f\u7528-mapstruct-\u53c2\u6570",children:["\u4f7f\u7528 ",(0,o.jsx)(e.code,{children:"map/struct"})," \u53c2\u6570"]}),"\n",(0,o.jsxs)(e.p,{children:["\u60f3\u8981\u652f\u6301 ",(0,o.jsx)(e.code,{children:"JSON"})," \u6570\u636e\u683c\u5f0f\u7684\u65e5\u5fd7\u8f93\u51fa\u975e\u5e38\u7b80\u5355\uff0c\u7ed9\u6253\u5370\u65b9\u6cd5\u63d0\u4f9b ",(0,o.jsx)(e.code,{children:"map"}),"/ ",(0,o.jsx)(e.code,{children:"struct"})," \u7c7b\u578b\u53c2\u6570\u5373\u53ef\u3002"]}),"\n",(0,o.jsx)(e.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n    ctx := context.TODO()\n    g.Log().Debug(ctx, g.Map{"uid": 100, "name": "john"})\n    type User struct {\n        Uid  int    `json:"uid"`\n        Name string `json:"name"`\n    }\n    g.Log().Debug(ctx, User{100, "john"})\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u7ed3\u679c\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-html",children:'2019-06-02 15:28:52.653 [DEBU] {"name":"john","uid":100}\n2019-06-02 15:28:52.653 [DEBU] {"uid":100,"name":"john"}\n'})}),"\n",(0,o.jsxs)(e.h2,{id:"\u7ed3\u5408-gjsonmustencode",children:["\u7ed3\u5408 ",(0,o.jsx)(e.code,{children:"gjson.MustEncode"})]}),"\n",(0,o.jsxs)(e.p,{children:["\u6b64\u5916\uff0c\u4e5f\u53ef\u4ee5\u7ed3\u5408 ",(0,o.jsx)(e.code,{children:"gjson.MustEncode\u6765"})," \u5b9e\u73b0 ",(0,o.jsx)(e.code,{children:"Json"})," \u5185\u5bb9\u8f93\u51fa\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/v2/encoding/gjson"\n    "github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n    ctx := context.TODO()\n    type User struct {\n        Uid  int    `json:"uid"`\n        Name string `json:"name"`\n    }\n    g.Log().Debugf(ctx, `user json: %s`, gjson.MustEncode(User{100, "john"}))\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u7ed3\u679c\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-html",children:'2022-04-25 18:09:45.029 [DEBU] user json: {"uid":100,"name":"john"}\n'})})]})}function u(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>r});var s=t(296540);const o={},c=s.createContext(o);function i(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);