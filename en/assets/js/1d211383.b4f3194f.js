"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[25988],{28247:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>x,frontMatter:()=>c,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406/ORM\u4e8b\u52a1\u5904\u7406-\u95ed\u5305\u64cd\u4f5c","title":"ORM\u4e8b\u52a1\u5904\u7406-\u95ed\u5305\u64cd\u4f5c","description":"\u4e00\u3001\u75db\u70b9\u63cf\u8ff0","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406/ORM\u4e8b\u52a1\u5904\u7406-\u95ed\u5305\u64cd\u4f5c.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406","slug":"/docs/core/gdb-transaction-closure","permalink":"/en/docs/core/gdb-transaction-closure","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406/ORM\u4e8b\u52a1\u5904\u7406-\u95ed\u5305\u64cd\u4f5c.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730726699000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/core/gdb-transaction-closure","title":"ORM\u4e8b\u52a1\u5904\u7406-\u95ed\u5305\u64cd\u4f5c","sidebar_position":1,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"ORM\u4e8b\u52a1\u5904\u7406-\u5e38\u89c4\u64cd\u4f5c","permalink":"/en/docs/core/gdb-transaction-basic"},"next":{"title":"ORM\u4e8b\u52a1\u5904\u7406-\u5d4c\u5957\u4e8b\u52a1","permalink":"/en/docs/core/gdb-transaction-nested"}}');var s=t(474848),o=t(28453);const c={slug:"/docs/core/gdb-transaction-closure",title:"ORM\u4e8b\u52a1\u5904\u7406-\u95ed\u5305\u64cd\u4f5c",sidebar_position:1,hide_title:!0},i=void 0,d={},l=[{value:"\u4e00\u3001\u75db\u70b9\u63cf\u8ff0",id:"\u4e00\u75db\u70b9\u63cf\u8ff0",level:2},{value:"\u4e8c\u3001\u95ed\u5305\u64cd\u4f5c",id:"\u4e8c\u95ed\u5305\u64cd\u4f5c",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u4e00\u75db\u70b9\u63cf\u8ff0",children:"\u4e00\u3001\u75db\u70b9\u63cf\u8ff0"}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\uff0c\u901a\u8fc7\u5e38\u89c4\u7684\u4e8b\u52a1\u65b9\u6cd5\u6765\u7ba1\u7406\u4e8b\u52a1\u6709\u4e00\u4e9b\u95ee\u9898\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u5197\u4f59\u4ee3\u7801\u8f83\u591a"}),"\u3002\u4ee3\u7801\u4e2d\u5b58\u5728\u5f88\u591a\u91cd\u590d\u6027\u7684 ",(0,s.jsx)(n.code,{children:"tx.Commit/Rollback"})," \u64cd\u4f5c\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u64cd\u4f5c\u98ce\u9669\u8f83\u5927"}),"\u3002\u975e\u5e38\u5bb9\u6613\u9057\u5fd8\u6267\u884c ",(0,s.jsx)(n.code,{children:"tx.Commit/Rollback"})," \u64cd\u4f5c\uff0c\u6216\u8005\u7531\u4e8e\u4ee3\u7801\u903b\u8f91\u5224\u65ad ",(0,s.jsx)(n.code,{children:"BUG"}),"\uff0c\u5f15\u53d1\u4e8b\u52a1\u64cd\u4f5c\u672a\u6b63\u5e38\u5173\u95ed\u3002\u5728\u81ea\u884c\u7ba1\u7406\u4e8b\u52a1\u64cd\u4f5c\u7684\u60c5\u51b5\u4e0b\uff0c\u5927\u90e8\u5206\u7a0b\u5e8f\u5458\u90fd\u4f1a\u8e29\u5230\u8fd9\u4e2a\u5751\u3002\u4f5c\u8005\u5df2\u7ecf\u89c1\u8fc7\u4e86\u5f88\u591a\u8d77\u7531\u4e8e\u4e8b\u52a1\u672a\u6b63\u5e38\u5173\u95ed\u5f15\u53d1\u7684\u73b0\u7f51\u4e8b\u6545\u3002\u6211\u73b0\u5728\u7279\u610f\u8fc7\u6765\u66f4\u65b0\u8fd9\u6bb5\u63cf\u8ff0\uff082023-08-09\uff09\uff0c\u4e5f\u662f\u56e0\u4e3a\u4e00\u4e2a\u670b\u53cb\u7531\u4e8e\u81ea\u884c\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"tx.Commit/Rollback"})," \u7ba1\u7406\u4e8b\u52a1\u64cd\u4f5c\uff0c\u7ec6\u8282\u672a\u5904\u7406\u597d\uff0c\u5f15\u53d1\u4e86\u73b0\u7f51\u4e8b\u6545\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u5d4c\u5957\u4e8b\u52a1\u5b9e\u73b0\u590d\u6742"}),"\u3002\u5047\u5982\u4e1a\u52a1\u903b\u8f91\u4e2d\u5b58\u5728\u591a\u5c42\u7ea7\u7684\u4e8b\u52a1\u5904\u7406\uff08\u5d4c\u5957\u4e8b\u52a1\uff09\uff0c\u9700\u8981\u8003\u8651\u5982\u4f55\u52a0\u4e2a ",(0,s.jsx)(n.code,{children:"tx"})," \u5bf9\u8c61\u5f80\u4e0b\u4f20\u9012\uff0c\u5904\u7406\u8d77\u6765\u66f4\u52a0\u7e41\u7410\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4e8c\u95ed\u5305\u64cd\u4f5c",children:"\u4e8c\u3001\u95ed\u5305\u64cd\u4f5c"}),"\n",(0,s.jsxs)(n.p,{children:["\u56e0\u6b64\u4e3a\u65b9\u4fbf\u5b89\u5168\u6267\u884c\u4e8b\u52a1\u64cd\u4f5c\uff0c ",(0,s.jsx)(n.code,{children:"ORM"})," \u7ec4\u4ef6\u540c\u6837\u63d0\u4f9b\u4e86\u4e8b\u52a1\u7684\u95ed\u5305\u64cd\u4f5c\uff0c\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"Transaction"})," \u65b9\u6cd5\u5b9e\u73b0\uff0c\u8be5\u65b9\u6cd5\u5b9a\u4e49\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"func (db DB) Transaction(ctx context.Context, f func(ctx context.Context, tx TX) error) (err error)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53\u7ed9\u5b9a\u7684\u95ed\u5305\u65b9\u6cd5\u8fd4\u56de\u7684 ",(0,s.jsx)(n.code,{children:"error"})," \u4e3a ",(0,s.jsx)(n.code,{children:"nil"})," \u65f6\uff0c\u90a3\u4e48\u95ed\u5305\u6267\u884c\u7ed3\u675f\u540e\u5f53\u524d\u4e8b\u52a1\u81ea\u52a8\u6267\u884c ",(0,s.jsx)(n.code,{children:"Commit"})," \u63d0\u4ea4\u64cd\u4f5c\uff1b\u5426\u5219\u81ea\u52a8\u6267\u884c ",(0,s.jsx)(n.code,{children:"Rollback"})," \u56de\u6eda\u64cd\u4f5c\u3002\u95ed\u5305\u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"context.Context"})," \u53c2\u6570\u4e3a ",(0,s.jsx)(n.code,{children:"goframe v1.16"})," \u7248\u672c\u540e\u65b0\u589e\u7684\u4e0a\u4e0b\u6587\u53d8\u91cf\uff0c\u4e3b\u8981\u7528\u4e8e\u94fe\u8def\u8ddf\u8e2a\u4f20\u9012\u4ee5\u53ca\u5d4c\u5957\u4e8b\u52a1\u7ba1\u7406\u3002\u7531\u4e8e\u4e0a\u4e0b\u6587\u53d8\u91cf\u662f\u5d4c\u5957\u4e8b\u52a1\u7ba1\u7406\u7684\u91cd\u8981\u53c2\u6570\uff0c\u56e0\u6b64\u4e0a\u4e0b\u6587\u53d8\u91cf\u901a\u8fc7\u663e\u793a\u7684\u53c2\u6570\u4f20\u9012\u5b9a\u4e49\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["\u5982\u679c\u95ed\u5305\u5185\u90e8\u64cd\u4f5c\u4ea7\u751f ",(0,s.jsx)(n.code,{children:"panic"})," \u4e2d\u65ad\uff0c\u8be5\u4e8b\u52a1\u4e5f\u5c06\u81ea\u52a8\u8fdb\u884c\u56de\u6eda\uff0c\u4ee5\u4fdd\u8bc1\u64cd\u4f5c\u5b89\u5168\u3002"]})}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'g.DB().Transaction(context.TODO(), func(ctx context.Context, tx gdb.TX) error {\n    // user\n    result, err := tx.Ctx(ctx).Insert("user", g.Map{\n        "passport": "john",\n        "password": "12345678",\n        "nickname": "JohnGuo",\n    })\n    if err != nil {\n        return err\n    }\n    // user_detail\n    id, err := result.LastInsertId()\n    if err != nil {\n        return err\n    }\n    _, err = tx.Ctx(ctx).Insert("user_detail", g.Map{\n        "uid":       id,\n        "site":      "https://johng.cn",\n        "true_name": "GuoQiang",\n    })\n    if err != nil {\n        return err\n    }\n    return nil\n})\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u8fc7\u95ed\u5305\u64cd\u4f5c\u7684\u65b9\u5f0f\u53ef\u4ee5\u5f88\u7b80\u4fbf\u5730\u5b9e\u73b0\u5d4c\u5957\u4e8b\u52a1\uff0c\u4e14\u5bf9\u4e0a\u5c42\u4e1a\u52a1\u5f00\u53d1\u540c\u5b66\u6765\u8bf4\u65e0\u611f\u77e5\uff0c\u5177\u4f53\u53ef\u4ee5\u7ee7\u7eed\u9605\u8bfb\u7ae0\u8282\uff1a ",(0,s.jsx)(n.a,{href:"/en/docs/core/gdb-transaction-nested",children:"ORM\u4e8b\u52a1\u5904\u7406-\u5d4c\u5957\u4e8b\u52a1"})]})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var r=t(296540);const s={},o=r.createContext(s);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);