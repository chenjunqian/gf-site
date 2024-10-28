"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[91661],{157035:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>x,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var i=d(474848),s=d(28453);const r={title:"Redis-\u914d\u7f6e\u7ba1\u7406",sidebar_position:0},t=void 0,c={id:"\u6838\u5fc3\u7ec4\u4ef6/NoSQL Redis/Redis-\u914d\u7f6e\u7ba1\u7406",title:"Redis-\u914d\u7f6e\u7ba1\u7406",description:"gf \u6846\u67b6\u652f\u6301\u4e24\u79cd\u65b9\u5f0f\u6765\u7ba1\u7406 redis \u914d\u7f6e\u548c\u83b7\u53d6 redis \u5bf9\u8c61\uff0c\u4e00\u79cd\u662f\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6+\u5355\u4f8b\u5bf9\u8c61\u7684\u65b9\u5f0f\uff1b\u4e00\u79cd\u662f\u6a21\u5757\u5316\u901a\u8fc7\u914d\u7f6e\u7ba1\u7406\u65b9\u6cd5\u53ca\u5bf9\u8c61\u521b\u5efa\u65b9\u6cd5\u3002",source:"@site/versioned_docs/version-1.14.x/1-\u6838\u5fc3\u7ec4\u4ef6/11-NoSQL Redis/0-Redis-\u914d\u7f6e\u7ba1\u7406.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6/11-NoSQL Redis",slug:"/\u6838\u5fc3\u7ec4\u4ef6/NoSQL Redis/Redis-\u914d\u7f6e\u7ba1\u7406",permalink:"/gf-site/docs/1.14.x/\u6838\u5fc3\u7ec4\u4ef6/NoSQL Redis/Redis-\u914d\u7f6e\u7ba1\u7406",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.14.x/1-\u6838\u5fc3\u7ec4\u4ef6/11-NoSQL Redis/0-Redis-\u914d\u7f6e\u7ba1\u7406.md",tags:[],version:"1.14.x",sidebarPosition:0,frontMatter:{title:"Redis-\u914d\u7f6e\u7ba1\u7406",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"NoSQL Redis",permalink:"/gf-site/docs/1.14.x/\u6838\u5fc3\u7ec4\u4ef6/NoSQL Redis/"},next:{title:"Redis-\u57fa\u672c\u4f7f\u7528",permalink:"/gf-site/docs/1.14.x/\u6838\u5fc3\u7ec4\u4ef6/NoSQL Redis/Redis-\u57fa\u672c\u4f7f\u7528"}},l={},o=[{value:"\u914d\u7f6e\u6587\u4ef6\uff08\u63a8\u8350\uff09",id:"\u914d\u7f6e\u6587\u4ef6\u63a8\u8350",level:3},{value:"\u914d\u7f6e\u65b9\u6cd5\uff08\u9ad8\u7ea7\uff09",id:"\u914d\u7f6e\u65b9\u6cd5\u9ad8\u7ea7",level:3}];function h(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"gf"})," \u6846\u67b6\u652f\u6301\u4e24\u79cd\u65b9\u5f0f\u6765\u7ba1\u7406 ",(0,i.jsx)(n.code,{children:"redis"})," \u914d\u7f6e\u548c\u83b7\u53d6 ",(0,i.jsx)(n.code,{children:"redis"})," \u5bf9\u8c61\uff0c\u4e00\u79cd\u662f\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6+\u5355\u4f8b\u5bf9\u8c61\u7684\u65b9\u5f0f\uff1b\u4e00\u79cd\u662f\u6a21\u5757\u5316\u901a\u8fc7\u914d\u7f6e\u7ba1\u7406\u65b9\u6cd5\u53ca\u5bf9\u8c61\u521b\u5efa\u65b9\u6cd5\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u914d\u7f6e\u6587\u4ef6\u63a8\u8350",children:"\u914d\u7f6e\u6587\u4ef6\uff08\u63a8\u8350\uff09"}),"\n",(0,i.jsxs)(n.p,{children:["\u7edd\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u63a8\u8350\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"g.Redis"})," \u5355\u4f8b\u65b9\u5f0f\u6765\u64cd\u4f5credis\u3002\u56e0\u6b64\u540c\u6837\u63a8\u8350\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u6765\u7ba1\u7406Redis\u914d\u7f6e\uff0c\u5728 ",(0,i.jsx)(n.code,{children:"config.toml"})," \u4e2d\u7684\u914d\u7f6e\u793a\u4f8b\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'# Redis\u6570\u636e\u5e93\u914d\u7f6e\n[redis]\n    default = "127.0.0.1:6379,0"\n    cache   = "127.0.0.1:6379,1,123456?idleTimeout=600"\n\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5176\u4e2d\uff0cRedis\u7684\u914d\u7f6e\u683c\u5f0f\u4e3a\uff1a ",(0,i.jsx)(n.code,{children:"host:port[,db,pass?maxIdle=x&maxActive=x&idleTimeout=x&maxConnLifetime=x]"})]}),"\n",(0,i.jsx)(n.p,{children:"\u5404\u914d\u7f6e\u9879\u8bf4\u660e\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u914d\u7f6e\u9879\u540d\u79f0"}),(0,i.jsx)(n.th,{children:"\u662f\u5426\u5fc5\u987b"}),(0,i.jsx)(n.th,{children:"\u9ed8\u8ba4\u503c"}),(0,i.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"host"}),(0,i.jsx)(n.td,{children:"\u662f"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"\u5730\u5740"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"port"}),(0,i.jsx)(n.td,{children:"\u662f"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"\u7aef\u53e3"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"db"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"\u6570\u636e\u5e93"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"pass"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"\u6388\u6743\u5bc6\u7801"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxIdle"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"10"}),(0,i.jsx)(n.td,{children:"\u5141\u8bb8\u95f2\u7f6e\u7684\u8fde\u63a5\u6570(0\u8868\u793a\u4e0d\u9650\u5236)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxActive"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"100"}),(0,i.jsx)(n.td,{children:"\u6700\u5927\u8fde\u63a5\u6570\u91cf\u9650\u5236(0\u8868\u793a\u4e0d\u9650\u5236)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"idleTimeout"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"10"}),(0,i.jsx)(n.td,{children:"\u8fde\u63a5\u6700\u5927\u7a7a\u95f2\u65f6\u95f4(\u5355\u4f4d\u79d2,\u4e0d\u5141\u8bb8\u8bbe\u7f6e\u4e3a0)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxConnLifetime"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"30"}),(0,i.jsx)(n.td,{children:"\u8fde\u63a5\u6700\u957f\u5b58\u6d3b\u65f6\u95f4(\u5355\u4f4d\u79d2,\u4e0d\u5141\u8bb8\u8bbe\u7f6e\u4e3a0)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tls"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"\u662f\u5426\u4f7f\u7528TLS\u8ba4\u8bc1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"skipVerify"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"\u901a\u8fc7TLS\u8fde\u63a5\u65f6\uff0c\u662f\u5426\u7981\u7528\u670d\u52a1\u5668\u540d\u79f0\u9a8c\u8bc1"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/frame/g"\n    "github.com/gogf/gf/util/gconv"\n)\n\nfunc main() {\n    g.Redis().DoVar("SET", "k", "v")\n    v, _ := g.Redis().DoVar("GET", "k")\n    fmt.Println(v.String())\n}\n\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5176\u4e2d\u7684 ",(0,i.jsx)(n.code,{children:"default"})," \u548c ",(0,i.jsx)(n.code,{children:"cache"})," \u5206\u522b\u8868\u793a\u914d\u7f6e\u5206\u7ec4\u540d\u79f0\uff0c\u6211\u4eec\u5728\u7a0b\u5e8f\u4e2d\u53ef\u4ee5\u901a\u8fc7\u8be5\u540d\u79f0\u83b7\u53d6\u5bf9\u5e94\u914d\u7f6e\u7684 ",(0,i.jsx)(n.code,{children:"redis"})," \u5355\u4f8b\u5bf9\u8c61\u3002\u4e0d\u4f20\u9012\u5206\u7ec4\u540d\u79f0\u65f6\uff0c\u9ed8\u8ba4\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"redis.default"})," \u914d\u7f6e\u5206\u7ec4\u9879)\u6765\u83b7\u53d6\u5bf9\u5e94\u914d\u7f6e\u7684 ",(0,i.jsx)(n.code,{children:"redis"})," \u5ba2\u6237\u7aef\u5355\u4f8b\u5bf9\u8c61\u3002 \u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"v\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u914d\u7f6e\u65b9\u6cd5\u9ad8\u7ea7",children:"\u914d\u7f6e\u65b9\u6cd5\uff08\u9ad8\u7ea7\uff09"}),"\n",(0,i.jsxs)(n.p,{children:["\u7531\u4e8e ",(0,i.jsx)(n.code,{children:"gf"})," \u662f\u6a21\u5757\u5316\u7684\u6846\u67b6\uff0c\u9664\u4e86\u53ef\u4ee5\u901a\u8fc7\u8026\u5408\u4e14\u4fbf\u6377\u7684 ",(0,i.jsx)(n.code,{children:"g"})," \u6a21\u5757\u6765\u81ea\u52a8\u89e3\u6790\u914d\u7f6e\u6587\u4ef6\u5e76\u83b7\u5f97\u5355\u4f8b\u5bf9\u8c61\u4e4b\u5916\uff0c\u4e5f\u652f\u6301\u6709\u80fd\u529b\u7684\u5f00\u53d1\u8005\u6a21\u5757\u5316\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"gredis"})," \u5305\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"gredis"})," \u63d0\u4f9b\u4e86\u5168\u5c40\u7684\u5206\u7ec4\u914d\u7f6e\u529f\u80fd\uff0c\u76f8\u5173\u914d\u7f6e\u7ba1\u7406\u65b9\u6cd5\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func SetConfig(config Config, name ...string)\nfunc GetConfig(name ...string) (config Config, ok bool)\nfunc RemoveConfig(name ...string)\nfunc ClearConfig()\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,i.jsx)(n.code,{children:"name"})," \u53c2\u6570\u4e3a\u5206\u7ec4\u540d\u79f0\uff0c\u5373\u4e3a\u901a\u8fc7\u5206\u7ec4\u6765\u5bf9\u914d\u7f6e\u5bf9\u8c61\u8fdb\u884c\u7ba1\u7406\uff0c\u6211\u4eec\u53ef\u4ee5\u4e3a\u4e0d\u540c\u7684\u914d\u7f6e\u5bf9\u8c61\u8bbe\u7f6e\u4e0d\u540c\u7684\u5206\u7ec4\u540d\u79f0\uff0c\u968f\u540e\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"Instance"})," \u5355\u4f8b\u65b9\u6cd5\u83b7\u53d6 ",(0,i.jsx)(n.code,{children:"redis"})," \u5ba2\u6237\u7aef\u64cd\u4f5c\u5bf9\u8c61\u5355\u4f8b\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func Instance(name ...string) *Redis\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/database/gredis"\n\t"github.com/gogf/gf/util/gconv"\n)\n\nvar (\n\tconfig = gredis.Config{\n\t\tHost : "127.0.0.1",\n\t\tPort : 6379,\n\t\tDb   : 1,\n\t}\n)\n\nfunc main() {\n\tgroup := "test"\n\tgredis.SetConfig(config, group)\n\n\tredis := gredis.Instance(group)\n\tdefer redis.Close()\n\n\t_, err := redis.Do("SET", "k", "v")\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\tr, err := redis.Do("GET", "k")\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(gconv.String(r))\n}\n\n'})})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>t,x:()=>c});var i=d(296540);const s={},r=i.createContext(s);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);