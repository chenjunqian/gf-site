"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[38976],{138039:(E,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>l,frontMatter:()=>B,metadata:()=>i,toc:()=>d});var t=n(474848),o=n(28453);const B={title:"ORM\u6700\u4f73\u5b9e\u8df5",sidebar_position:10},s=void 0,i={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u6700\u4f73\u5b9e\u8df5/ORM\u6700\u4f73\u5b9e\u8df5",title:"ORM\u6700\u4f73\u5b9e\u8df5",description:"\u57fa\u672c\u4ecb\u7ecd",source:"@site/versioned_docs/version-2.5.x/2-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/10-ORM\u6700\u4f73\u5b9e\u8df5/10-ORM\u6700\u4f73\u5b9e\u8df5.md",sourceDirName:"2-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/10-ORM\u6700\u4f73\u5b9e\u8df5",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u6700\u4f73\u5b9e\u8df5/",permalink:"/gf-site/docs/2.5.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u6700\u4f73\u5b9e\u8df5/",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/2-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/10-ORM\u6700\u4f73\u5b9e\u8df5/10-ORM\u6700\u4f73\u5b9e\u8df5.md",tags:[],version:"2.5.x",sidebarPosition:10,frontMatter:{title:"ORM\u6700\u4f73\u5b9e\u8df5",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"ORM\u4e0a\u4e0b\u6587\u53d8\u91cf",permalink:"/gf-site/docs/2.5.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4e0a\u4e0b\u6587\u53d8\u91cf"},next:{title:"\u5229\u7528\u6307\u9488\u5c5e\u6027\u548cdo\u5bf9\u8c61\u5b9e\u73b0\u7075\u6d3b\u7684\u4fee\u6539\u63a5\u53e3",permalink:"/gf-site/docs/2.5.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u6700\u4f73\u5b9e\u8df5/\u5229\u7528\u6307\u9488\u5c5e\u6027\u548cdo\u5bf9\u8c61\u5b9e\u73b0\u7075\u6d3b\u7684\u4fee\u6539\u63a5\u53e3"}},r={},d=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function c(E){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.R)(),...E.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,t.jsxs)(e.p,{children:["\u6570\u636e\u5e93\u64cd\u4f5c\u5f80\u5f80\u662f\u4e1a\u52a1\u9879\u76ee\u4e2d\u6700\u590d\u6742\u7684\u90e8\u5206\uff0c ",(0,t.jsx)(e.code,{children:"GoFrame"})," \u7684\u6570\u636e\u5e93\u7ec4\u4ef6\u5176\u5b9e\u63d0\u4f9b\u4e86\u975e\u5e38\u5f3a\u5927\u548c\u7075\u6d3b\u7684\u64cd\u4f5c\u65b9\u5f0f\uff0c\u6211\u4eec\u5728\u8fd9\u91cc\u63d0\u4f9b\u4e86\u4e00\u4e9b\u6700\u4f73\u5b9e\u8df5\u7684\u6848\u4f8b\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u8003\u5b66\u4e60\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"output/goframe-v2.5-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5/%E5%88%A9%E7%94%A8%E6%8C%87%E9%92%88%E5%B1%9E%E6%80%A7%E5%92%8Cdo%E5%AF%B9%E8%B1%A1%E5%AE%9E%E7%8E%B0%E7%81%B5%E6%B4%BB%E7%9A%84%E4%BF%AE%E6%94%B9%E6%8E%A5%E5%8F%A3",children:"\u5229\u7528\u6307\u9488\u5c5e\u6027\u548cdo\u5bf9\u8c61\u5b9e\u73b0\u7075\u6d3b\u7684\u4fee\u6539\u63a5\u53e3"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"output/goframe-v2.5-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5/%E5%A4%8D%E6%9D%82%E7%B1%BB%E5%9E%8B%E5%B0%BD%E9%87%8F%E4%BD%BF%E7%94%A8json%E5%AD%98%E5%82%A8%EF%BC%8C%E4%BE%BF%E4%BA%8EScan%E5%88%B0%E5%AF%B9%E8%B1%A1%E6%97%B6%E8%87%AA%E5%8A%A8%E5%8C%96%E8%BD%AC%E6%8D%A2%EF%BC%8C%E9%81%BF%E5%85%8D%E8%87%AA%E5%AE%9A%E4%B9%89%E8%A7%A3%E6%9E%90",children:"\u590d\u6742\u7c7b\u578b\u5c3d\u91cf\u4f7f\u7528json\u5b58\u50a8\uff0c\u4fbf\u4e8eScan\u5230\u5bf9\u8c61\u65f6\u81ea\u52a8\u5316\u8f6c\u6362\uff0c\u907f\u514d\u81ea\u5b9a\u4e49\u89e3\u6790"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"output/goframe-v2.5-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5/%E6%9F%A5%E8%AF%A2%E6%97%B6%E9%81%BF%E5%85%8D%E8%BF%94%E5%9B%9E%E5%AF%B9%E8%B1%A1%E5%88%9D%E5%A7%8B%E5%8C%96%E5%8F%8Asql.ErrNoRows%E5%88%A4%E6%96%AD",children:"\u67e5\u8be2\u65f6\u907f\u514d\u8fd4\u56de\u5bf9\u8c61\u521d\u59cb\u5316\u53casql.ErrNoRows\u5224\u65ad"})}),"\n"]})]})}function l(E={}){const{wrapper:e}={...(0,o.R)(),...E.components};return e?(0,t.jsx)(e,{...E,children:(0,t.jsx)(c,{...E})}):c(E)}},28453:(E,e,n)=>{n.d(e,{R:()=>s,x:()=>i});var t=n(296540);const o={},B=t.createContext(o);function s(E){const e=t.useContext(B);return t.useMemo((function(){return"function"==typeof E?E(e):{...e,...E}}),[e,E])}function i(E){let e;return e=E.disableParentContext?"function"==typeof E.components?E.components(o):E.components||o:s(E.components),t.createElement(B.Provider,{value:e},E.children)}}}]);