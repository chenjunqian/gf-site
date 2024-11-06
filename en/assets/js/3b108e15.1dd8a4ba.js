"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[87452],{491038:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>s,metadata:()=>d,toc:()=>o});const d=JSON.parse('{"id":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4e0a\u4e0b\u6587\u53d8\u91cf","title":"ORM\u4e0a\u4e0b\u6587\u53d8\u91cf","description":"ORM \u652f\u6301\u4f20\u9012\u81ea\u5b9a\u4e49\u7684 context \u4e0a\u4e0b\u6587\u53d8\u91cf\uff0c\u7528\u4e8e\u5f02\u6b65 IO \u63a7\u5236\u3001\u4e0a\u4e0b\u6587\u4fe1\u606f\u4f20\u9012\uff08\u7279\u522b\u662f\u94fe\u8def\u8ddf\u8e2a\u4fe1\u606f\u7684\u4f20\u9012\uff09\u3001\u4ee5\u53ca\u5d4c\u5957\u4e8b\u52a1\u652f\u6301\u3002","source":"@site/versioned_docs/version-1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4e0a\u4e0b\u6587\u53d8\u91cf.md","sourceDirName":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM","slug":"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4e0a\u4e0b\u6587\u53d8\u91cf","permalink":"/en/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4e0a\u4e0b\u6587\u53d8\u91cf","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4e0a\u4e0b\u6587\u53d8\u91cf.md","tags":[],"version":"1.16.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":9,"frontMatter":{"title":"ORM\u4e0a\u4e0b\u6587\u53d8\u91cf","sidebar_position":9,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u63a5\u53e3\u5f00\u53d1-\u56de\u8c03\u5904\u7406","permalink":"/en/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u63a5\u53e3\u5f00\u53d1/ORM\u63a5\u53e3\u5f00\u53d1-\u56de\u8c03\u5904\u7406"},"next":{"title":"NoSQL Redis","permalink":"/en/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/"}}');var r=c(474848),t=c(28453);const s={title:"ORM\u4e0a\u4e0b\u6587\u53d8\u91cf",sidebar_position:9,hide_title:!0},i=void 0,l={},o=[{value:"\u793a\u4f8b1\uff0c\u8bf7\u6c42\u8d85\u65f6\u63a7\u5236",id:"\u793a\u4f8b1\u8bf7\u6c42\u8d85\u65f6\u63a7\u5236",level:2},{value:"\u793a\u4f8b2\uff0c\u94fe\u8def\u8ddf\u8e2a\u4fe1\u606f",id:"\u793a\u4f8b2\u94fe\u8def\u8ddf\u8e2a\u4fe1\u606f",level:2},{value:"\u793a\u4f8b3\uff0c\u6a21\u578b\u4e0a\u4e0b\u6587\u64cd\u4f5c",id:"\u793a\u4f8b3\u6a21\u578b\u4e0a\u4e0b\u6587\u64cd\u4f5c",level:2},{value:"\u793a\u4f8b4\uff0c\u5d4c\u5957\u4e8b\u52a1\u652f\u6301",id:"\u793a\u4f8b4\u5d4c\u5957\u4e8b\u52a1\u652f\u6301",level:2}];function x(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ORM"})," \u652f\u6301\u4f20\u9012\u81ea\u5b9a\u4e49\u7684 ",(0,r.jsx)(n.code,{children:"context"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\uff0c\u7528\u4e8e\u5f02\u6b65 ",(0,r.jsx)(n.code,{children:"IO"})," \u63a7\u5236\u3001\u4e0a\u4e0b\u6587\u4fe1\u606f\u4f20\u9012\uff08\u7279\u522b\u662f\u94fe\u8def\u8ddf\u8e2a\u4fe1\u606f\u7684\u4f20\u9012\uff09\u3001\u4ee5\u53ca\u5d4c\u5957\u4e8b\u52a1\u652f\u6301\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"Ctx"})," \u65b9\u6cd5\u4f20\u9012\u81ea\u5b9a\u4e49\u7684\u4e0a\u4e0b\u6587\u53d8\u91cf\u7ed9 ",(0,r.jsx)(n.code,{children:"ORM"})," \u5bf9\u8c61\uff0c ",(0,r.jsx)(n.code,{children:"Ctx"})," \u65b9\u6cd5\u5176\u5b9e\u662f\u4e00\u4e2a\u94fe\u5f0f\u64cd\u4f5c\u65b9\u6cd5\uff0c\u8be5\u4e0a\u4e0b\u6587\u4f20\u9012\u8fdb\u53bb\u540e\u4ec5\u5bf9\u5f53\u524d ",(0,r.jsx)(n.code,{children:"DB"})," \u63a5\u53e3\u5bf9\u8c61\u6709\u6548\uff0c\u65b9\u6cd5\u5b9a\u4e49\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func Ctx(ctx context.Context) DB\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b1\u8bf7\u6c42\u8d85\u65f6\u63a7\u5236",children:"\u793a\u4f8b1\uff0c\u8bf7\u6c42\u8d85\u65f6\u63a7\u5236"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u901a\u8fc7\u4e0a\u4e0b\u6587\u53d8\u91cf\u63a7\u5236\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\u7684\u793a\u4f8b\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'ctx, cancel := context.WithTimeout(context.Background(), time.Second)\ndefer cancel()\n_, err := db.Ctx(ctx).Query("SELECT SLEEP(10)")\nfmt.Println(err)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u8be5\u793a\u4f8b\u4e2d\u6267\u884c\u4f1a ",(0,r.jsx)(n.code,{children:"sleep 10"})," \u79d2\u4e2d\uff0c\u56e0\u6b64\u5fc5\u5b9a\u4f1a\u5f15\u53d1\u8bf7\u6c42\u7684\u8d85\u65f6\u3002\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"context deadline exceeded, SELECT SLEEP(10)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b2\u94fe\u8def\u8ddf\u8e2a\u4fe1\u606f",children:"\u793a\u4f8b2\uff0c\u94fe\u8def\u8ddf\u8e2a\u4fe1\u606f"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0a\u4e0b\u6587\u53d8\u91cf\u4e5f\u53ef\u4ee5\u4f20\u9012\u94fe\u8def\u8ddf\u8e2a\u4fe1\u606f\uff0c\u5e76\u4e14\u53ef\u4ee5\u548c\u65e5\u5fd7\u7ec4\u4ef6\u7ed3\u5408\uff0c\u5c06\u94fe\u8def\u4fe1\u606f\u6253\u5370\u5230\u65e5\u5fd7\u4e2d\uff08\u4ec5\u5f53 ",(0,r.jsx)(n.code,{children:"ORM"})," \u65e5\u5fd7\u5f00\u542f\u65f6\uff09\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u793a\u4f8b\u3002"}),"\n",(0,r.jsx)(n.p,{children:"1\u3001\u6570\u636e\u5e93\u914d\u7f6e\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'[database]\n    [database.logger]\n        Path    = "/tmp/log/gf-app/sql"\n        Level   = "all"\n        Stdout  = true\n        CtxKeys = ["Trace-Id"]\n    [database.default]\n        link   = "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n        debug  = true\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7\u65e5\u5fd7\u7ec4\u4ef6\u7684 ",(0,r.jsx)(n.code,{children:"CtxKeys"})," \u914d\u7f6e\u6765\u6307\u5b9a\u9700\u8981\u6253\u5370\u5230\u65e5\u5fd7\u4e2d\u7684\u4e0a\u4e0b\u6587\u4fe1\u606f\u4e2d\u7684\u53d8\u91cf\u540d\u79f0\uff0c\u56e0\u6b64\u5f53 ",(0,r.jsx)(n.code,{children:"context"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\u4e2d\u5b58\u5728\u952e\u540d\u4e3a ",(0,r.jsx)(n.code,{children:"Trace-Id"})," \u7684\u53d8\u91cf\u65f6\uff0c\u5c06\u4f1a\u88ab\u81ea\u52a8\u6253\u5370\u5230\u65e5\u5fd7\u4e2d\u3002\u5173\u4e8e\u65e5\u5fd7\u7ec4\u4ef6\u7684\u4e0a\u4e0b\u6587\u7279\u6027\u4ecb\u7ecd\u5177\u4f53\u8bf7\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"/en/1.16.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E6%97%A5%E5%BF%97%E7%BB%84%E4%BB%B6/%E6%97%A5%E5%BF%97%E7%BB%84%E4%BB%B6-%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7/%E6%97%A5%E5%BF%97%E7%BB%84%E4%BB%B6-Context%E4%B8%8A%E4%B8%8B%E6%96%87",children:"\u65e5\u5fd7\u7ec4\u4ef6-Context\u4e0a\u4e0b\u6587"})," \u7ae0\u8282\u3002\u540c\u65f6\uff0c\u4ec5\u5f53\u6570\u636e\u5e93\u914d\u7f6e\u7684 ",(0,r.jsx)(n.code,{children:"debug"})," \u6253\u5f00\u65f6\u624d\u4f1a\u8bb0\u5f55\u5b8c\u6574\u7684 ",(0,r.jsx)(n.code,{children:"SQL"})," \u6267\u884c\u65e5\u5fd7\uff0c\u56e0\u6b64\u8fd9\u91cc\u914d\u7f6e\u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"debug=true"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ORM"})," \u7ec4\u4ef6\u540c\u65f6\u652f\u6301 ",(0,r.jsx)(n.code,{children:"goframe"})," \u6846\u67b6\u7684 ",(0,r.jsx)(n.code,{children:"logger"})," \u7ec4\u4ef6 ",(0,r.jsx)(n.code,{children:"CtxKeys"})," \u7279\u6027\uff08\u81ea\u5b9a\u4e49\u94fe\u8def\u4fe1\u606f\u4f20\u9012\uff09\uff0c\u540c\u65f6\u4e5f\u652f\u6301\u6807\u51c6\u7684 ",(0,r.jsx)(n.code,{children:"OpenTelemetry"})," \u94fe\u8def\u8ddf\u8e2a\u4fe1\u606f\u4f20\u9012\uff0c\u5177\u4f53\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,r.jsx)(n.a,{href:"/en/1.16.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E9%93%BE%E8%B7%AF%E8%B7%9F%E8%B8%AA/",children:"\u94fe\u8def\u8ddf\u8e2a"})]}),"\n",(0,r.jsxs)(n.p,{children:["2\u3001 ",(0,r.jsx)(n.code,{children:"Golang"})," \u4ee3\u7801\u793a\u4f8b"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "github.com/gogf/gf/frame/g"\n)\n\nfunc main() {\n    ctx := context.WithValue(context.Background(), "Trace-Id", "123456789")\n    _, err := g.DB().Ctx(ctx).Query("SELECT 1")\n    if err != nil {\n        panic(err)\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e3a\u7b80\u5316\u793a\u4f8b\uff0c\u6211\u4eec\u8fd9\u91cc\u624b\u52a8\u6784\u9020\u4e86\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"ctx"})," \u53d8\u91cf\uff0c\u5e76\u5b58\u653e\u4e86\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"Trace-Id"})," \u7684\u952e\u503c\u5bf9\uff0c\u952e\u503c\u4e3a ",(0,r.jsx)(n.code,{children:"123456789"}),"\u3002\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u4e3a\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"2020-12-28 23:43:03.055 [DEBU] {Trace-Id: 123456789} [  3 ms] [default] SELECT 1\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b3\u6a21\u578b\u4e0a\u4e0b\u6587\u64cd\u4f5c",children:"\u793a\u4f8b3\uff0c\u6a21\u578b\u4e0a\u4e0b\u6587\u64cd\u4f5c"}),"\n",(0,r.jsxs)(n.p,{children:["\u6a21\u578b\u5bf9\u8c61\u4e5f\u652f\u6301\u4e0a\u4e0b\u6587\u53d8\u91cf\u7684\u4f20\u9012\uff0c\u540c\u6837\u4e5f\u662f\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"Ctx"})," \u65b9\u6cd5\u3002\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff0c\u6211\u4eec\u5c06\u793a\u4f8b2\u7684\u4f8b\u5b50\u901a\u8fc7\u6a21\u578b\u64cd\u4f5c\u8c03\u6574\u4e00\u4e0b\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "github.com/gogf/gf/frame/g"\n)\n\nfunc main() {\n    ctx := context.WithValue(context.Background(), "Trace-Id", "123456789")\n    _, err := g.DB().Model("user").Ctx(ctx).All()\n    if err != nil {\n        panic(err)\n    }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u4e3a\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"2020-12-28 23:46:56.349 [DEBU] {Trace-Id: 123456789} [  5 ms] [default] SHOW FULL COLUMNS FROM `user`\n2020-12-28 23:46:56.354 [DEBU] {Trace-Id: 123456789} [  5 ms] [default] SELECT * FROM `user`\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,r.jsx)(n.code,{children:"SHOW FULL COLUMNS FROM `user` "})," \u4e3a ",(0,r.jsx)(n.code,{children:"ORM"})," \u7ec4\u4ef6\u7684\u6570\u636e\u8868\u5b57\u6bb5\u83b7\u53d6\u67e5\u8be2\uff0c\u6bcf\u4e2a\u8868\u5728\u6267\u884c\u64cd\u4f5c\u4e4b\u524d\u4ec5\u4f1a\u67e5\u8be2\u4e00\u6b21\u5e76\u7f13\u5b58\u7ed3\u679c\u5230\u5185\u5b58\u4e2d\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b4\u5d4c\u5957\u4e8b\u52a1\u652f\u6301",children:"\u793a\u4f8b4\uff0c\u5d4c\u5957\u4e8b\u52a1\u652f\u6301"}),"\n",(0,r.jsxs)(n.p,{children:["\u5d4c\u5957\u4e8b\u52a1\u7684\u652f\u6301\u4f9d\u8d56 ",(0,r.jsx)(n.code,{children:"Context"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\u7684\u5c42\u7ea7\u4f20\u9012\uff0c\u5177\u4f53\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,r.jsx)(n.a,{href:"/en/1.16.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E4%BA%8B%E5%8A%A1%E5%A4%84%E7%90%86",children:"ORM\u4e8b\u52a1\u5904\u7406"})]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},28453:(e,n,c)=>{c.d(n,{R:()=>s,x:()=>i});var d=c(296540);const r={},t=d.createContext(r);function s(e){const n=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);