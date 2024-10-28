"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[87099],{768634:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var t=n(474848),i=n(28453);const o={title:"Session-Redis\u5b58\u50a8",sidebar_position:2},r=void 0,d={id:"WEB\u670d\u52a1\u5f00\u53d1/Session/Session-Redis\u5b58\u50a8",title:"Session-Redis\u5b58\u50a8",description:"Redis\u5b58\u50a8",source:"@site/versioned_docs/version-1.16.x/3-WEB\u670d\u52a1\u5f00\u53d1/5-Session/2-Session-Redis\u5b58\u50a8.md",sourceDirName:"3-WEB\u670d\u52a1\u5f00\u53d1/5-Session",slug:"/WEB\u670d\u52a1\u5f00\u53d1/Session/Session-Redis\u5b58\u50a8",permalink:"/gf-site/docs/1.16.x/WEB\u670d\u52a1\u5f00\u53d1/Session/Session-Redis\u5b58\u50a8",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/3-WEB\u670d\u52a1\u5f00\u53d1/5-Session/2-Session-Redis\u5b58\u50a8.md",tags:[],version:"1.16.x",sidebarPosition:2,frontMatter:{title:"Session-Redis\u5b58\u50a8",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Session-\u5185\u5b58\u5b58\u50a8",permalink:"/gf-site/docs/1.16.x/WEB\u670d\u52a1\u5f00\u53d1/Session/Session-\u5185\u5b58\u5b58\u50a8"},next:{title:"\u670d\u52a1\u914d\u7f6e",permalink:"/gf-site/docs/1.16.x/WEB\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u914d\u7f6e"}},c={},l=[{value:"Redis\u5b58\u50a8",id:"redis\u5b58\u50a8",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}];function h(e){const s={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"redis\u5b58\u50a8",children:"Redis\u5b58\u50a8"}),"\n",(0,t.jsxs)(s.p,{children:["\u6587\u4ef6\u5b58\u50a8\u7684\u65b9\u5f0f\u5728\u5355\u8282\u70b9\u7684\u573a\u666f\u4e0b\u975e\u5e38\u4e0d\u9519\uff0c\u4f46\u662f\u6d89\u53ca\u5230\u5bf9\u5e94\u7528\u8fdb\u884c\u591a\u8282\u70b9\u90e8\u7f72\u7684\u573a\u666f\u4e0b\uff0c\u5404\u4e2a\u8282\u70b9\u7684 ",(0,t.jsx)(s.code,{children:"Session"})," \u65e0\u6cd5\u5171\u4eab\uff0c\u56e0\u6b64\u9700\u8981\u5c06 ",(0,t.jsx)(s.code,{children:"Session"})," \u5b58\u50a8\u5355\u72ec\u5265\u79bb\u51fa\u6765\u7ba1\u7406\uff0c ",(0,t.jsx)(s.code,{children:"Redis"})," \u670d\u52a1\u5668\u662f\u6bd4\u8f83\u5e38\u89c1\u7684\u4e00\u4e2a\u9009\u62e9\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"gsession"})," \u7684 ",(0,t.jsx)(s.code,{children:"Redis"})," \u5b58\u50a8\u4f7f\u7528 ",(0,t.jsx)(s.code,{children:"StorageRedis"})," \u5bf9\u8c61\u5b9e\u73b0\uff0c\u4e0e\u6587\u4ef6\u5b58\u50a8\u6bd4\u8f83\u7c7b\u4f3c\uff0c\u4e3a\u4e86\u63d0\u9ad8\u6267\u884c\u6548\u7387\uff0c\u4e5f\u662f\u91c7\u7528\u4e86 ",(0,t.jsx)(s.code,{children:"\u5185\u5b58+Redis"})," \u7684\u65b9\u5f0f\u3002\u4e0e\u6587\u4ef6\u5b58\u50a8\u552f\u4e00\u4e0d\u540c\u7684\u662f\uff0c\u5728\u6bcf\u4e00\u6b21\u8bf7\u6c42\u4e2d\u5982\u679c\u9700\u8981\u5bf9 ",(0,t.jsx)(s.code,{children:"Session"})," \u8fdb\u884c\u64cd\u4f5c\u65f6\uff0c\u5c06\u4f1a\u4ece ",(0,t.jsx)(s.code,{children:"Redis"})," \u4e2d\u62c9\u53d6\u4e00\u6b21\u6700\u65b0\u7684 ",(0,t.jsx)(s.code,{children:"Session"})," \u6570\u636e\uff08\u800c\u6587\u4ef6\u5b58\u50a8\u53ea\u4f1a\u5728 ",(0,t.jsx)(s.code,{children:"Session"})," \u4e0d\u5b58\u5728\u65f6\u8bfb\u53d6\u4e00\u6b21\u6587\u4ef6\uff09\u3002"]}),"\n",(0,t.jsx)(s.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/gogf/gf/blob/master/.example/os/gsession/storage-redis/redis.go",children:"https://github.com/gogf/gf/blob/master/.example/os/gsession/storage-redis/redis.go"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",children:'package main\n\nimport (\n\t"github.com/gogf/gf/frame/g"\n\t"github.com/gogf/gf/net/ghttp"\n\t"github.com/gogf/gf/os/gsession"\n\t"github.com/gogf/gf/os/gtime"\n\t"time"\n)\n\nfunc main() {\n\ts := g.Server()\n\ts.SetConfigWithMap(g.Map{\n\t\t"SessionMaxAge":  time.Minute,\n\t\t"SessionStorage": gsession.NewStorageRedis(g.Redis()),\n\t})\n\ts.Group("/", func(group *ghttp.RouterGroup) {\n\t\tgroup.ALL("/set", func(r *ghttp.Request) {\n\t\t\tr.Session.Set("time", gtime.Timestamp())\n\t\t\tr.Response.Write("ok")\n\t\t})\n\t\tgroup.ALL("/get", func(r *ghttp.Request) {\n\t\t\tr.Response.Write(r.Session.Map())\n\t\t})\n\t\tgroup.ALL("/del", func(r *ghttp.Request) {\n\t\t\tr.Session.Clear()\n\t\t\tr.Response.Write("ok")\n\t\t})\n\t})\n\ts.SetPort(8199)\n\ts.Run()\n}\n\n'})}),"\n",(0,t.jsxs)(s.p,{children:["\u5728\u8be5\u5b9e\u4f8b\u4e2d\uff0c\u4e3a\u4e86\u65b9\u4fbf\u89c2\u5bdf\u8fc7\u671f\u5931\u6548\uff0c\u6211\u4eec\u5c06 ",(0,t.jsx)(s.code,{children:"Session"})," \u7684\u8fc7\u671f\u65f6\u95f4\u8bbe\u7f6e\u4e3a ",(0,t.jsx)(s.code,{children:"1\u5206\u949f"}),"\u3002\u6267\u884c\u540e\uff0c"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\u9996\u5148\uff0c\u8bbf\u95ee ",(0,t.jsx)(s.a,{href:"http://127.0.0.1:8199/set",children:"http://127.0.0.1:8199/set"})," \u8bbe\u7f6e\u4e00\u4e2a ",(0,t.jsx)(s.code,{children:"Session"})," \u53d8\u91cf\uff1b"]}),"\n",(0,t.jsxs)(s.li,{children:["\u968f\u540e\uff0c\u8bbf\u95ee ",(0,t.jsx)(s.a,{href:"http://127.0.0.1:8199/get",children:"http://127.0.0.1:8199/get"})," \u53ef\u4ee5\u770b\u5230\u8be5 ",(0,t.jsx)(s.code,{children:"Session"})," \u53d8\u91cf\u5df2\u7ecf\u8bbe\u7f6e\u5e76\u6210\u529f\u83b7\u53d6\uff1b"]}),"\n",(0,t.jsxs)(s.li,{children:["\u63a5\u7740\uff0c\u6211\u4eec\u505c\u6b62\u7a0b\u5e8f\uff0c\u5e76\u91cd\u65b0\u542f\u52a8\uff0c\u518d\u6b21\u8bbf\u95ee ",(0,t.jsx)(s.a,{href:"http://127.0.0.1:8199/get",children:"http://127.0.0.1:8199/get"}),"\uff0c\u53ef\u4ee5\u770b\u5230 ",(0,t.jsx)(s.code,{children:"Session"})," \u53d8\u91cf\u5df2\u7ecf\u4ece ",(0,t.jsx)(s.code,{children:"Redis"})," \u5b58\u50a8\u4e2d\u6062\u590d\uff1b\u5982\u679c\u6211\u4eec\u624b\u52a8\u4fee\u6539 ",(0,t.jsx)(s.code,{children:"Redis"})," \u4e2d\u7684\u5bf9\u5e94\u952e\u503c\u6570\u636e\uff0c\u9875\u9762\u5237\u65b0\u65f6\u4e5f\u4f1a\u8bfb\u53d6\u5230\u6700\u65b0\u7684\u503c\uff1b"]}),"\n",(0,t.jsxs)(s.li,{children:["\u7b49\u5f851\u5206\u949f\u540e\uff0c\u518d\u6b21\u8bbf\u95ee ",(0,t.jsx)(s.a,{href:"http://127.0.0.1:8199/get",children:"http://127.0.0.1:8199/get"})," \u53ef\u4ee5\u770b\u5230\u5df2\u7ecf\u65e0\u6cd5\u83b7\u53d6\u8be5 ",(0,t.jsx)(s.code,{children:"Session"}),"\uff0c\u56e0\u4e3a\u8be5 ",(0,t.jsx)(s.code,{children:"Session"})," \u5df2\u7ecf\u8fc7\u671f\uff1b"]}),"\n"]})]})}function g(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>d});var t=n(296540);const i={},o=t.createContext(i);function r(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);