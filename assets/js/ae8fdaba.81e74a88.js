"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[97501],{692731:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>c,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"quick/\u5feb\u901f\u5f00\u59cb/\u4e2d\u95f4\u4ef6\u521d\u8bd5\u7528","title":"\u4e2d\u95f4\u4ef6\u521d\u8bd5\u7528","description":"\u4e3a\u4e86\u89e3\u51b3\u4e0a\u4e00\u7ae0\u8282\u9057\u7559\u7684\u7591\u95ee\uff1a\u5982\u4f55\u6355\u83b7\u8fd4\u56de\u7684\u9519\u8bef\u5bf9\u8c61\u5e76\u4f5c\u81ea\u5b9a\u4e49\u7684\u9519\u8bef\u5904\u7406\u3002","source":"@site/docs/quick/\u5feb\u901f\u5f00\u59cb/\u4e2d\u95f4\u4ef6\u521d\u8bd5\u7528.md","sourceDirName":"quick/\u5feb\u901f\u5f00\u59cb","slug":"/quick/middleware","permalink":"/quick/middleware","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/quick/\u5feb\u901f\u5f00\u59cb/\u4e2d\u95f4\u4ef6\u521d\u8bd5\u7528.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730816494000,"sidebarPosition":6,"frontMatter":{"slug":"/quick/middleware","title":"\u4e2d\u95f4\u4ef6\u521d\u8bd5\u7528","hide_title":true,"sidebar_position":6},"sidebar":"quickSidebar","previous":{"title":"\u4f7f\u7528\u89c4\u8303\u8def\u7531","permalink":"/quick/strict-router"},"next":{"title":"\u7edf\u4e00\u8fd4\u56de\u7ed3\u6784","permalink":"/quick/common-response"}}');var i=r(474848),s=r(28453);const c={slug:"/quick/middleware",title:"\u4e2d\u95f4\u4ef6\u521d\u8bd5\u7528",hide_title:!0,sidebar_position:6},d=void 0,l={},o=[{value:"\u4e2d\u95f4\u4ef6\u4ecb\u7ecd",id:"\u4e2d\u95f4\u4ef6\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528\u4e2d\u95f4\u4ef6",id:"\u4f7f\u7528\u4e2d\u95f4\u4ef6",level:2},{value:"\u6267\u884c\u7ed3\u679c",id:"\u6267\u884c\u7ed3\u679c",level:2},{value:"\u5b66\u4e60\u603b\u7ed3",id:"\u5b66\u4e60\u603b\u7ed3",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["\u4e3a\u4e86\u89e3\u51b3\u4e0a\u4e00\u7ae0\u8282\u9057\u7559\u7684\u7591\u95ee\uff1a\u5982\u4f55\u6355\u83b7\u8fd4\u56de\u7684\u9519\u8bef\u5bf9\u8c61\u5e76\u4f5c\u81ea\u5b9a\u4e49\u7684\u9519\u8bef\u5904\u7406\u3002\n\u5728\u672c\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u4f1a\u5148\u7b80\u5355\u4ecb\u7ecd",(0,i.jsx)(n.code,{children:"Web Server"}),"\u7684\u4e2d\u95f4\u4ef6\u7279\u6027\uff0c\u518d\u56de\u7b54\u8fd9\u4e2a\u7591\u95ee\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4e2d\u95f4\u4ef6\u4ecb\u7ecd",children:"\u4e2d\u95f4\u4ef6\u4ecb\u7ecd"}),"\n",(0,i.jsxs)(n.p,{children:["\u4e2d\u95f4\u4ef6\u662f\u4e00\u79cd\u62e6\u622a\u5668\u8bbe\u8ba1\uff0c\u5728",(0,i.jsx)(n.code,{children:"Web Server"}),"\u4e2d\u53ef\u4ee5\u62e6\u622a\u8bf7\u6c42\u548c\u8fd4\u56de\u7ed3\u679c\uff0c\u5e76\u5728\u5176\u524d\u540e\u8fdb\u884c\u81ea\u5b9a\u4e49\u5904\u7406\u903b\u8f91\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4e2d\u95f4\u4ef6\u7684\u5b9a\u4e49\u548c\u666e\u901a\u7684\u8def\u7531\u56de\u8c03\u51fd\u6570\u4e00\u6837\uff0c\u4f46\u662f\u53ef\u4ee5\u5728 ",(0,i.jsx)(n.code,{children:"Request"})," \u53c2\u6570\u4e2d\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"Middleware"})," \u5c5e\u6027\u5bf9\u8c61\u6765\u63a7\u5236\u8bf7\u6c42\u6d41\u7a0b\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4e2d\u95f4\u4ef6\u7684\u7c7b\u578b\u5206\u4e3a\u4e24\u79cd\uff1a",(0,i.jsx)(n.strong,{children:"\u524d\u7f6e\u4e2d\u95f4\u4ef6"}),"\u548c",(0,i.jsx)(n.strong,{children:"\u540e\u7f6e\u4e2d\u95f4\u4ef6"}),"\u3002\u524d\u7f6e\u5373\u5728\u8def\u7531\u670d\u52a1\u51fd\u6570\u8c03\u7528\u4e4b\u524d\u8c03\u7528\uff0c\u540e\u7f6e\u5373\u5728\u5176\u540e\u8c03\u7528\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func Middleware(r *ghttp.Request) {\n    // \u524d\u7f6e\u4e2d\u95f4\u4ef6\u5904\u7406\u903b\u8f91 \n    r.Middleware.Next()\n    // \u540e\u7f6e\u4e2d\u95f4\u4ef6\u5904\u7406\u903b\u8f91\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u4e2d\u95f4\u4ef6\u4e2d\u6267\u884c\u5b8c\u6210\u5904\u7406\u903b\u8f91\u540e\uff0c\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"r.Middleware.Next()"})," \u65b9\u6cd5\u8fdb\u4e00\u6b65\u6267\u884c\u4e0b\u4e00\u4e2a\u6d41\u7a0b\uff1b\n\u5982\u679c\u8fd9\u4e2a\u65f6\u5019\u76f4\u63a5\u9000\u51fa\u4e0d\u8c03\u7528 ",(0,i.jsx)(n.code,{children:"r.Middleware.Next()"})," \u65b9\u6cd5\u7684\u8bdd\uff0c\u5c06\u4f1a\u9000\u51fa\u540e\u7eed\u7684\u6267\u884c\u6d41\u7a0b\uff08\u4f8b\u5982\u53ef\u4ee5\u7528\u4e8e\u8bf7\u6c42\u7684\u9274\u6743\u5904\u7406\uff09\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4f7f\u7528\u4e2d\u95f4\u4ef6",children:"\u4f7f\u7528\u4e2d\u95f4\u4ef6"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u4f7f\u7528\u4e2d\u95f4\u4ef6\u5bf9\u4e0a\u4e00\u7ae0\u8282\u7684\u7a0b\u5e8f\u8fdb\u884c\u7b80\u5355\u7684\u6539\u9020\uff0c\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\ntype HelloReq struct {\n    g.Meta `path:"/" method:"get"`\n    Name   string `v:"required" dc:"\u59d3\u540d"`\n    Age    int    `v:"required" dc:"\u5e74\u9f84"`\n}\ntype HelloRes struct{}\n\ntype Hello struct{}\n\nfunc (Hello) Say(ctx context.Context, req *HelloReq) (res *HelloRes, err error) {\n    r := g.RequestFromCtx(ctx)\n    r.Response.Writef(\n        "Hello %s! Your Age is %d",\n        req.Name,\n        req.Age,\n    )\n    return\n}\n\nfunc ErrorHandler(r *ghttp.Request) {\n    // \u6267\u884c\u8def\u7531\u56de\u8c03\u51fd\u6570\n    r.Middleware.Next()\n    // \u5224\u65ad\u662f\u5426\u4ea7\u751f\u9519\u8bef\n    if err := r.GetError(); err != nil {\n        r.Response.Write("error occurs: ", err.Error())\n        return\n    }\n}\n\nfunc main() {\n    s := g.Server()\n    s.Group("/", func(group *ghttp.RouterGroup) {\n        group.Middleware(ErrorHandler)\n        group.Bind(\n            new(Hello),\n        )\n    })\n    s.SetPort(8000)\n    s.Run()\n}\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6211\u4eec\u5b9a\u4e49\u4e86\u4e00\u4e2a\u9519\u8bef\u5904\u7406\u7684\u4e2d\u95f4\u4ef6",(0,i.jsx)(n.code,{children:"ErrorHandler"}),"\uff0c\u5728\u8be5\u4e2d\u95f4\u4ef6\u4e2d\u6211\u4eec\u5148\u901a\u8fc7",(0,i.jsx)(n.code,{children:"r.Middleware.Next()"}),"\u6267\u884c\u8def\u7531\u51fd\u6570\u6d41\u7a0b\uff0c\n\u968f\u540e\u901a\u8fc7",(0,i.jsx)(n.code,{children:"r.GetError()"}),"\u83b7\u53d6\u8def\u7531\u56de\u8c03\u51fd\u6570\u662f\u5426\u6709\u9519\u8bef\u4ea7\u751f\u3002\u5982\u679c\u4ea7\u751f\u9519\u8bef\uff0c\u90a3\u4e48\u76f4\u63a5\u8f93\u51fa\u9519\u8bef\u4fe1\u606f\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5728\u8def\u7531\u6ce8\u518c\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7",(0,i.jsx)(n.code,{children:"group.Middleware(ErrorHandler)"}),"\u7ed9\u8be5\u5206\u7ec4\u8def\u7531\u4e0b\u7684\u6240\u6709\u6ce8\u518c\u7684\u8def\u7531\uff0c\u90fd\u7ed1\u5b9a\u4e86\u9519\u8bef\u5904\u7406\u7684\u4e2d\u95f4\u4ef6\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6267\u884c\u7ed3\u679c",children:"\u6267\u884c\u7ed3\u679c"}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd0\u884c\u540e\uff0c\u6211\u4eec\u8bbf\u95ee ",(0,i.jsx)(n.a,{href:"http://127.0.0.1:8000/?name=john&age=18",children:"http://127.0.0.1:8000/?name=john&age=18"})," \u53ef\u4ee5\u770b\u5230\uff0c\u9875\u9762\u8f93\u51fa\u7ed3\u679c\u7b26\u5408\u9884\u671f\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img.png",src:r(149465).A+"",width:"1024",height:"226"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4eec\u5c1d\u8bd5\u4e00\u4e0b\u9519\u8bef\u7684\u53c2\u6570\u8bf7\u6c42 ",(0,i.jsx)(n.a,{href:"http://127.0.0.1:8000/",children:"http://127.0.0.1:8000/"})," \u53ef\u4ee5\u770b\u5230\uff0c\u9875\u9762\u8f93\u51fa\u7ed3\u679c\u4e5f\u7b26\u5408\u9884\u671f\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img_4.png",src:r(595668).A+"",width:"786",height:"230"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5b66\u4e60\u603b\u7ed3",children:"\u5b66\u4e60\u603b\u7ed3"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u4f7f\u7528\u4e2d\u95f4\u4ef6\u5bf9\u8bf7\u6c42\u9519\u8bef\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u5904\u7406\uff0c\u5e76\u6355\u83b7\u6821\u9a8c\u9519\u8bef\u8fd4\u56de\u81ea\u5b9a\u4e49\u7684\u9519\u8bef\u4fe1\u606f\u3002\n\u53ef\u4ee5\u770b\u5230\uff0c\u4e2d\u95f4\u4ef6\u7684\u529f\u80fd\u975e\u5e38\u7075\u6d3b\u4e14\u5f3a\u5927\uff0c\u5f53\u7136\u4e0d\u4ec5\u4ec5\u5c40\u9650\u4e8e\u5904\u7406\u6821\u9a8c\u9519\u8bef\u8fd9\u79cd\u5c0f\u573a\u666f\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u8bd5\u60f3\u4e00\u4e0b\uff0c\u5047\u5982\u6211\u4eec\u7684\u9879\u76ee\u4e2d\u6709\u5f88\u591a\u63a5\u53e3\uff0c\u901a\u5e38\u8fd9\u4e9b\u63a5\u53e3\u7684\u8f93\u51fa\u683c\u5f0f\u90fd\u662f\u56fa\u5b9a\u7684\uff0c\u4f8b\u5982\u90fd\u662f",(0,i.jsx)(n.code,{children:"json"}),"\u683c\u5f0f\u3002\n\u90a3\u4e48\u80fd\u5426\u76f4\u63a5\u901a\u8fc7\u4e2d\u95f4\u4ef6\u7684\u65b9\u5f0f\uff0c\u7edf\u4e00\u8fd4\u56de\u7684\u6570\u636e\u7ed3\u6784\u5462\uff1f\u7b54\u6848\u5f53\u7136\u662f\u80af\u5b9a\u7684\uff0c\u6211\u4eec\u5c06\u5728\u4e0b\u4e00\u7ae0\u8282\u4ecb\u7ecd\u3002"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},149465:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/img-0c2fc34c17e9ca5ab24ca490b332cc85.png"},595668:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/img_4-c5e48f95cc3ef344f366af9225b6078d.png"},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>d});var t=r(296540);const i={},s=t.createContext(i);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);