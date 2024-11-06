"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[14803],{421878:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6cdb\u578b\u7c7b\u578b-gvar/\u6cdb\u578b\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528","title":"\u6cdb\u578b\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528","description":"\u57fa\u672c\u4f7f\u7528","source":"@site/versioned_docs/version-2.2.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6cdb\u578b\u7c7b\u578b-gvar/\u6cdb\u578b\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528.md","sourceDirName":"\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6cdb\u578b\u7c7b\u578b-gvar","slug":"/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6cdb\u578b\u7c7b\u578b-gvar/\u6cdb\u578b\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528","permalink":"/2.2.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6cdb\u578b\u7c7b\u578b-gvar/\u6cdb\u578b\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.2.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6cdb\u578b\u7c7b\u578b-gvar/\u6cdb\u578b\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528.md","tags":[],"version":"2.2.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"\u6cdb\u578b\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u6cdb\u578b\u7c7b\u578b-gvar","permalink":"/2.2.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6cdb\u578b\u7c7b\u578b-gvar/"},"next":{"title":"\u6cdb\u578b\u7c7b\u578b-\u65b9\u6cd5\u4ecb\u7ecd","permalink":"/2.2.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6cdb\u578b\u7c7b\u578b-gvar/\u6cdb\u578b\u7c7b\u578b-\u65b9\u6cd5\u4ecb\u7ecd"}}');var s=t(474848),a=t(28453);const i={title:"\u6cdb\u578b\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",sidebar_position:0,hide_title:!0},o=void 0,c={},l=[{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:3},{value:"<code>JSON</code> \u5e8f\u5217\u5316/\u53cd\u5e8f\u5217",id:"json-\u5e8f\u5217\u5316\u53cd\u5e8f\u5217",level:3}];function d(n){const e={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h3,{id:"\u57fa\u672c\u4f7f\u7528",children:"\u57fa\u672c\u4f7f\u7528"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "fmt"\n)\n\nfunc main() {\n    var v g.Var\n\n    v.Set("123")\n\n    fmt.Println(v.Val())\n\n    // \u57fa\u672c\u7c7b\u578b\u8f6c\u6362\n    fmt.Println(v.Int())\n    fmt.Println(v.Uint())\n    fmt.Println(v.Float64())\n\n    // slice\u8f6c\u6362\n    fmt.Println(v.Ints())\n    fmt.Println(v.Floats())\n    fmt.Println(v.Strings())\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:"123\n123\n123\n123\n[123]\n[123]\n[123]\n"})}),"\n",(0,s.jsxs)(e.h3,{id:"json-\u5e8f\u5217\u5316\u53cd\u5e8f\u5217",children:[(0,s.jsx)(e.code,{children:"JSON"})," \u5e8f\u5217\u5316/\u53cd\u5e8f\u5217"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"gvar.Var"})," \u5bb9\u5668\u5b9e\u73b0\u4e86\u6807\u51c6\u5e93 ",(0,s.jsx)(e.code,{children:"json"})," \u6570\u636e\u683c\u5f0f\u7684\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316\u63a5\u53e3\u3002"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"Marshal"})}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'    package main\n\n    import (\n        "encoding/json"\n        "fmt"\n        "github.com/gogf/gf/v2/frame/g"\n    )\n\n    func main() {\n        type Student struct {\n            Id     *g.Var\n            Name   *g.Var\n            Scores *g.Var\n        }\n        s := Student{\n            Id:     g.NewVar(1),\n            Name:   g.NewVar("john"),\n            Scores: g.NewVar([]int{100, 99, 98}),\n        }\n        b, _ := json.Marshal(s)\n        fmt.Println(string(b))\n    }\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'    {"Id":1,"Name":"john","Scores":[100,99,98]}\n'})}),"\n",(0,s.jsxs)(e.ol,{start:"2",children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"Unmarshal"})}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'    package main\n\n    import (\n        "encoding/json"\n        "fmt"\n        "github.com/gogf/gf/v2/frame/g"\n    )\n\n    func main() {\n        b := []byte(`{"Id":1,"Name":"john","Scores":[100,99,98]}`)\n        type Student struct {\n            Id     *g.Var\n            Name   *g.Var\n            Scores *g.Var\n        }\n        s := Student{}\n        json.Unmarshal(b, &s)\n        fmt.Println(s)\n    }\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"    {1 john [100,99,98]}\n"})})]})}function g(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>o});var r=t(296540);const s={},a=r.createContext(s);function i(n){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),r.createElement(a.Provider,{value:e},n.children)}}}]);