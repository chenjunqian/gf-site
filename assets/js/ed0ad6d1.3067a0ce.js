"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[87746],{646342:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>t});var c=n(474848),s=n(28453);const i={title:"\u5bf9\u8c61\u590d\u7528-gpool",sidebar_position:8},l=void 0,r={id:"\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u5bf9\u8c61\u590d\u7528-gpool/\u5bf9\u8c61\u590d\u7528-gpool",title:"\u5bf9\u8c61\u590d\u7528-gpool",description:"\u57fa\u672c\u4ecb\u7ecd",source:"@site/versioned_docs/version-2.6.x/3-\u7ec4\u4ef6\u5217\u8868/0-\u6570\u636e\u7ed3\u6784/8-\u5bf9\u8c61\u590d\u7528-gpool/8-\u5bf9\u8c61\u590d\u7528-gpool.md",sourceDirName:"3-\u7ec4\u4ef6\u5217\u8868/0-\u6570\u636e\u7ed3\u6784/8-\u5bf9\u8c61\u590d\u7528-gpool",slug:"/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u5bf9\u8c61\u590d\u7528-gpool/",permalink:"/gf-site/docs/2.6.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u5bf9\u8c61\u590d\u7528-gpool/",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/3-\u7ec4\u4ef6\u5217\u8868/0-\u6570\u636e\u7ed3\u6784/8-\u5bf9\u8c61\u590d\u7528-gpool/8-\u5bf9\u8c61\u590d\u7528-gpool.md",tags:[],version:"2.6.x",sidebarPosition:8,frontMatter:{title:"\u5bf9\u8c61\u590d\u7528-gpool",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\u6811\u5f62\u7c7b\u578b-\u65b9\u6cd5\u4ecb\u7ecd",permalink:"/gf-site/docs/2.6.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7c7b\u578b-gtree/\u6811\u5f62\u7c7b\u578b-\u65b9\u6cd5\u4ecb\u7ecd"},next:{title:"\u5bf9\u8c61\u590d\u7528-\u57fa\u672c\u4f7f\u7528",permalink:"/gf-site/docs/2.6.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u5bf9\u8c61\u590d\u7528-gpool/\u5bf9\u8c61\u590d\u7528-\u57fa\u672c\u4f7f\u7528"}},d={},t=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"<code>gpool</code> \u4e0e <code>sync.Pool</code>",id:"gpool-\u4e0e-syncpool",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function h(e){const o={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,c.jsxs)(o.p,{children:["\u5bf9\u8c61\u590d\u7528\u6c60\uff08\u5e76\u53d1\u5b89\u5168\uff09\u3002\u5c06\u5bf9\u8c61\u8fdb\u884c\u7f13\u5b58\u590d\u7528\uff0c\u652f\u6301 ",(0,c.jsx)(o.code,{children:"\u8fc7\u671f\u65f6\u95f4"}),"\u3001 ",(0,c.jsx)(o.code,{children:"\u521b\u5efa\u65b9\u6cd5"})," \u53ca ",(0,c.jsx)(o.code,{children:"\u9500\u6bc1\u65b9\u6cd5"})," \u5b9a\u4e49\u3002"]}),"\n",(0,c.jsxs)(o.p,{children:[(0,c.jsx)(o.strong,{children:"\u4f7f\u7528\u573a\u666f"}),"\uff1a"]}),"\n",(0,c.jsx)(o.p,{children:"\u4efb\u4f55\u9700\u8981\u652f\u6301\u5b9a\u65f6\u8fc7\u671f\u7684\u5bf9\u8c61\u590d\u7528\u573a\u666f\u3002"}),"\n",(0,c.jsxs)(o.p,{children:[(0,c.jsx)(o.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,c.jsx)(o.pre,{children:(0,c.jsx)(o.code,{children:'import "github.com/gogf/gf/v2/container/gpool"\n'})}),"\n",(0,c.jsxs)(o.p,{children:[(0,c.jsx)(o.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,c.jsx)(o.p,{children:(0,c.jsx)(o.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/container/gpool",children:"https://pkg.go.dev/github.com/gogf/gf/v2/container/gpool"})}),"\n",(0,c.jsx)(o.p,{children:"\u9700\u8981\u6ce8\u610f\u4e24\u70b9\uff1a"}),"\n",(0,c.jsxs)(o.ol,{children:["\n",(0,c.jsxs)(o.li,{children:[(0,c.jsx)(o.code,{children:"New"})," \u65b9\u6cd5\u7684\u8fc7\u671f\u65f6\u95f4\u7c7b\u578b\u4e3a ",(0,c.jsx)(o.code,{children:"time.Duration"}),"\u3002"]}),"\n",(0,c.jsxs)(o.li,{children:["\u5bf9\u8c61 ",(0,c.jsx)(o.code,{children:"\u521b\u5efa\u65b9\u6cd5"}),"( ",(0,c.jsx)(o.code,{children:"newFunc NewFunc"}),")\u8fd4\u56de\u503c\u5305\u542b\u4e00\u4e2a ",(0,c.jsx)(o.code,{children:"error"})," \u8fd4\u56de\uff0c\u5f53\u5bf9\u8c61\u521b\u5efa\u5931\u8d25\u65f6\u53ef\u7531\u8be5\u8fd4\u56de\u503c\u53cd\u9988\u539f\u56e0\u3002"]}),"\n",(0,c.jsxs)(o.li,{children:["\u5bf9\u8c61 ",(0,c.jsx)(o.code,{children:"\u9500\u6bc1\u65b9\u6cd5"}),"( ",(0,c.jsx)(o.code,{children:"expireFunc...ExpireFunc"}),")\u4e3a\u53ef\u9009\u53c2\u6570\uff0c\u7528\u4ee5\u5f53\u5bf9\u8c61\u8d85\u65f6/\u6c60\u5173\u95ed\u65f6\uff0c\u81ea\u52a8\u8c03\u7528\u81ea\u5b9a\u4e49\u7684\u65b9\u6cd5\u9500\u6bc1\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(o.h2,{id:"gpool-\u4e0e-syncpool",children:[(0,c.jsx)(o.code,{children:"gpool"})," \u4e0e ",(0,c.jsx)(o.code,{children:"sync.Pool"})]}),"\n",(0,c.jsxs)(o.p,{children:[(0,c.jsx)(o.code,{children:"gpool"})," \u4e0e ",(0,c.jsx)(o.code,{children:"sync.Pool"})," \u90fd\u53ef\u4ee5\u8fbe\u5230\u5bf9\u8c61\u590d\u7528\u7684\u4f5c\u7528\uff0c\u4f46\u662f\u4e24\u8005\u7684\u8bbe\u8ba1\u521d\u8877\u548c\u4f7f\u7528\u573a\u666f\u4e0d\u592a\u4e00\u6837\u3002"]}),"\n",(0,c.jsxs)(o.p,{children:[(0,c.jsx)(o.code,{children:"sync.Pool"})," \u7684\u5bf9\u8c61\u751f\u547d\u5468\u671f\u4e0d\u652f\u6301\u81ea\u5b9a\u4e49\u8fc7\u671f\u65f6\u95f4\uff0c\u7a76\u5176\u539f\u56e0\uff0c ",(0,c.jsx)(o.code,{children:"sync.Pool"})," \u5e76\u4e0d\u662f\u4e00\u4e2a ",(0,c.jsx)(o.code,{children:"Cache"}),"\uff1b ",(0,c.jsx)(o.code,{children:"sync.Pool"})," \u8bbe\u8ba1\u521d\u8877\u662f\u4e3a\u4e86\u7f13\u89e3GC ",(0,c.jsx)(o.code,{children:"\u538b\u529b"}),"\uff0c ",(0,c.jsx)(o.code,{children:"sync.Pool"})," \u4e2d\u7684\u5bf9\u8c61\u4f1a\u5728 ",(0,c.jsx)(o.code,{children:"GC"})," \u5f00\u59cb\u524d\u5168\u90e8\u6e05\u9664\uff1b\u5e76\u4e14 ",(0,c.jsx)(o.code,{children:"sync.Pool"})," \u4e0d\u652f\u6301\u5bf9\u8c61\u521b\u5efa\u65b9\u6cd5\u53ca\u9500\u6bc1\u65b9\u6cd5\u3002"]}),"\n",(0,c.jsx)(o.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n",(0,c.jsxs)(o.ul,{children:["\n",(0,c.jsx)(o.li,{children:(0,c.jsx)(o.a,{href:"output/goframe-v2.6-md/%E7%BB%84%E4%BB%B6%E5%88%97%E8%A1%A8/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E5%AF%B9%E8%B1%A1%E5%A4%8D%E7%94%A8-gpool/%E5%AF%B9%E8%B1%A1%E5%A4%8D%E7%94%A8-%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",children:"\u5bf9\u8c61\u590d\u7528-\u57fa\u672c\u4f7f\u7528"})}),"\n"]})]})}function p(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,c.jsx)(o,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>l,x:()=>r});var c=n(296540);const s={},i=c.createContext(s);function l(e){const o=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),c.createElement(i.Provider,{value:o},e.children)}}}]);