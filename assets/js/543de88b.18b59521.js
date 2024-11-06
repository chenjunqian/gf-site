"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[54008],{544524:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"WEB\u670d\u52a1\u5f00\u53d1/\u5206\u9875\u7ba1\u7406/\u5206\u9875\u7ba1\u7406-URL\u6a21\u677f","title":"\u5206\u9875\u7ba1\u7406-URL\u6a21\u677f","description":"gpage \u652f\u6301\u81ea\u5b9a\u4e49 URL \u6a21\u677f\uff0c\u5728\u6a21\u677f\u4e2d\u53ef\u4ee5\u4f7f\u7528 {.page} \u5185\u7f6e\u53d8\u91cf\u66ff\u6362\u9875\u7801\u7684\u5185\u5bb9\uff0c\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff1a","source":"@site/versioned_docs/version-2.6.x/WEB\u670d\u52a1\u5f00\u53d1/\u5206\u9875\u7ba1\u7406/\u5206\u9875\u7ba1\u7406-URL\u6a21\u677f.md","sourceDirName":"WEB\u670d\u52a1\u5f00\u53d1/\u5206\u9875\u7ba1\u7406","slug":"/WEB\u670d\u52a1\u5f00\u53d1/\u5206\u9875\u7ba1\u7406/\u5206\u9875\u7ba1\u7406-URL\u6a21\u677f","permalink":"/2.6.x/WEB\u670d\u52a1\u5f00\u53d1/\u5206\u9875\u7ba1\u7406/\u5206\u9875\u7ba1\u7406-URL\u6a21\u677f","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/WEB\u670d\u52a1\u5f00\u53d1/\u5206\u9875\u7ba1\u7406/\u5206\u9875\u7ba1\u7406-URL\u6a21\u677f.md","tags":[],"version":"2.6.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":3,"frontMatter":{"title":"\u5206\u9875\u7ba1\u7406-URL\u6a21\u677f","sidebar_position":3,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u5206\u9875\u7ba1\u7406-Ajax\u5206\u9875","permalink":"/2.6.x/WEB\u670d\u52a1\u5f00\u53d1/\u5206\u9875\u7ba1\u7406/\u5206\u9875\u7ba1\u7406-Ajax\u5206\u9875"},"next":{"title":"\u5206\u9875\u7ba1\u7406-\u81ea\u5b9a\u4e49\u5206\u9875","permalink":"/2.6.x/WEB\u670d\u52a1\u5f00\u53d1/\u5206\u9875\u7ba1\u7406/\u5206\u9875\u7ba1\u7406-\u81ea\u5b9a\u4e49\u5206\u9875"}}');var s=t(474848),o=t(28453);const a={title:"\u5206\u9875\u7ba1\u7406-URL\u6a21\u677f",sidebar_position:3,hide_title:!0},r=void 0,d={},p=[];function c(e){const n={code:"code",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"gpage"})," \u652f\u6301\u81ea\u5b9a\u4e49 ",(0,s.jsx)(n.code,{children:"URL"})," \u6a21\u677f\uff0c\u5728\u6a21\u677f\u4e2d\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"{.page}"})," \u5185\u7f6e\u53d8\u91cf\u66ff\u6362\u9875\u7801\u7684\u5185\u5bb9\uff0c\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/os/gview"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/page/template/{page}.html", func(r *ghttp.Request) {\n        page := r.GetPage(100, 10)\n        page.UrlTemplate = "/order/list/{.page}.html"\n        buffer, _ := gview.ParseContent(`\n        <html>\n            <head>\n                <style>\n                    a,span {padding:8px; font-size:16px;}\n                    div{margin:5px 5px 20px 5px}\n                </style>\n            </head>\n            <body>\n                <div>{{.page1}}</div>\n                <div>{{.page2}}</div>\n                <div>{{.page3}}</div>\n                <div>{{.page4}}</div>\n            </body>\n        </html>\n        `, g.Map{\n            "page1": page.GetContent(1),\n            "page2": page.GetContent(2),\n            "page3": page.GetContent(3),\n            "page4": page.GetContent(4),\n        })\n        r.Response.Write(buffer)\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"UrlTemplate"})," \u5c5e\u6027\u8bbe\u7f6e ",(0,s.jsx)(n.code,{children:"URL"})," \u6a21\u677f\uff0c\u6267\u884c\u540e\uff0c\u7ed3\u679c\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(162963).A+"",width:"660",height:"230"})})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},162963:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/717c81d2c736bdf23dddefea57040a1b-ba3cd994a145bf97246f07323673b7d2.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(296540);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);