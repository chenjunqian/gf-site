"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[98446],{249410:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u94fe\u5f0f\u64cd\u4f5c","title":"HTTPClient-\u94fe\u5f0f\u64cd\u4f5c","description":"\u94fe\u5f0f\u64cd\u4f5c","source":"@site/versioned_docs/version-1.16.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u94fe\u5f0f\u64cd\u4f5c.md","sourceDirName":"WEB\u670d\u52a1\u5f00\u53d1/HTTPClient","slug":"/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u94fe\u5f0f\u64cd\u4f5c","permalink":"/1.16.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u94fe\u5f0f\u64cd\u4f5c","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u94fe\u5f0f\u64cd\u4f5c.md","tags":[],"version":"1.16.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"HTTPClient-\u94fe\u5f0f\u64cd\u4f5c","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"HTTPClient","permalink":"/1.16.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/"},"next":{"title":"HTTPClient-\u57fa\u672c\u4f7f\u7528","permalink":"/1.16.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u57fa\u672c\u4f7f\u7528"}}');var c=t(474848),l=t(28453);const s={title:"HTTPClient-\u94fe\u5f0f\u64cd\u4f5c",sidebar_position:0,hide_title:!0},r=void 0,o={},d=[{value:"\u94fe\u5f0f\u64cd\u4f5c",id:"\u94fe\u5f0f\u64cd\u4f5c",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u793a\u4f8b1\uff0c\u8bf7\u6c42\u8d85\u65f6\u63a7\u5236",id:"\u793a\u4f8b1\u8bf7\u6c42\u8d85\u65f6\u63a7\u5236",level:3},{value:"\u793a\u4f8b2\uff0c\u81ea\u5b9a\u4e49 <code>Cookie</code>",id:"\u793a\u4f8b2\u81ea\u5b9a\u4e49-cookie",level:3},{value:"\u793a\u4f8b3\uff0c\u81ea\u5b9a\u4e49 <code>Header</code>",id:"\u793a\u4f8b3\u81ea\u5b9a\u4e49-header",level:3},{value:"\u793a\u4f8b4\uff0c\u63d0\u4ea4 <code>Json</code> \u8bf7\u6c42",id:"\u793a\u4f8b4\u63d0\u4ea4-json-\u8bf7\u6c42",level:3},{value:"\u793a\u4f8b5\uff0c\u63d0\u4ea4 <code>Xml</code> \u8bf7\u6c42",id:"\u793a\u4f8b5\u63d0\u4ea4-xml-\u8bf7\u6c42",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"\u94fe\u5f0f\u64cd\u4f5c",children:"\u94fe\u5f0f\u64cd\u4f5c"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u7684\u5ba2\u6237\u7aef\u652f\u6301\u4fbf\u6377\u7684\u94fe\u5f0f\u64cd\u4f5c\uff0c\u5e38\u7528\u65b9\u6cd5\u5982\u4e0b\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:"func (c *Client) Ctx(ctx context.Context) *Client\nfunc (c *Client) Timeout(t time.Duration) *Client\nfunc (c *Client) Cookie(m map[string]string) *Client\nfunc (c *Client) Header(m map[string]string) *Client\nfunc (c *Client) HeaderRaw(headers string) *Client\nfunc (c *Client) ContentType(contentType string) *Client\nfunc (c *Client) ContentJson() *Client\nfunc (c *Client) ContentXml() *Client\nfunc (c *Client) BasicAuth(user, pass string) *Client\nfunc (c *Client) Retry(retryCount int, retryInterval time.Duration) *Client\nfunc (c *Client) Prefix(prefix string) *Client\nfunc (c *Client) Proxy(proxyURL string) *Client\nfunc (c *Client) RedirectLimit(redirectLimit int) *Client\nfunc (c *Client) Dump(dump ...bool) *Client\nfunc (c *Client) Use(handlers ...HandlerFunc) *Client\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u7b80\u8981\u8bf4\u660e\uff1a"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Timeout"})," \u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u5f53\u524d\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctx"})," \u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u5f53\u524d\u8bf7\u6c42\u7684\u4e0a\u4e0b\u6587\u5bf9\u8c61 ",(0,c.jsx)(n.code,{children:"context.Context"}),"\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Cookie"})," \u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u5f53\u524d\u8bf7\u6c42\u7684\u81ea\u5b9a\u4e49 ",(0,c.jsx)(n.code,{children:"Cookie"})," \u4fe1\u606f\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Header*"})," \u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u5f53\u524d\u8bf7\u6c42\u7684\u81ea\u5b9a\u4e49 ",(0,c.jsx)(n.code,{children:"Header"})," \u4fe1\u606f\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Content*"})," \u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u5f53\u524d\u8bf7\u6c42\u7684 ",(0,c.jsx)(n.code,{children:"Content-Type"})," \u4fe1\u606f\uff0c\u5e76\u4e14\u652f\u6301\u6839\u636e\u8be5\u4fe1\u606f\u81ea\u52a8\u68c0\u67e5\u63d0\u4ea4\u53c2\u6570\u5e76\u81ea\u52a8\u7f16\u7801\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"BasicAuth"})," \u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e ",(0,c.jsx)(n.code,{children:"HTTP Basic Auth"})," \u6821\u9a8c\u4fe1\u606f\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Retry"})," \u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u8bf7\u6c42\u5931\u8d25\u65f6\u91cd\u8fde\u6b21\u6570\u548c\u91cd\u8fde\u95f4\u9694\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Proxy"})," \u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6ehttp\u8bbf\u95ee\u4ee3\u7406\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"RedirectLimit"})," \u65b9\u6cd5\u7528\u4e8e\u9650\u5236\u91cd\u5b9a\u5411\u8df3\u8f6c\u6b21\u6570\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,c.jsx)(n.h3,{id:"\u793a\u4f8b1\u8bf7\u6c42\u8d85\u65f6\u63a7\u5236",children:"\u793a\u4f8b1\uff0c\u8bf7\u6c42\u8d85\u65f6\u63a7\u5236"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'g.Client().Timeout(3*time.Second).GetContent("http://user.svc/v1/user/info/1")\n\n'})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'g.Client().Timeout(10*time.Second).PostContent("http://order.svc/v1/order/create", g.Map{\n    "uid"         : 1,\n    "sku_id"      : 10000,\n    "amount"      : 19.99,\n    "create_time" : "2020-03-26 12:00:00",\n})\n\n'})}),"\n",(0,c.jsxs)(n.h3,{id:"\u793a\u4f8b2\u81ea\u5b9a\u4e49-cookie",children:["\u793a\u4f8b2\uff0c\u81ea\u5b9a\u4e49 ",(0,c.jsx)(n.code,{children:"Cookie"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'g.Client().Cookie("sessionid", "MNV5432PIY76").GetContent("http://user.svc/v1/user/info/1")\n\n'})}),"\n",(0,c.jsxs)(n.h3,{id:"\u793a\u4f8b3\u81ea\u5b9a\u4e49-header",children:["\u793a\u4f8b3\uff0c\u81ea\u5b9a\u4e49 ",(0,c.jsx)(n.code,{children:"Header"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'g.Client().Header("Trace-Id", "XVF654RT98UJNMN641V06Y").GetContent("http://user.svc/v1/user/info/1")\n\n'})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'g.Client().HeaderRaw(`\nReferer: https://goframe.org/\nUser-Agent: MyTesyClient\n`).GetContent("http://user.svc/v1/user/info")\n\n'})}),"\n",(0,c.jsxs)(n.h3,{id:"\u793a\u4f8b4\u63d0\u4ea4-json-\u8bf7\u6c42",children:["\u793a\u4f8b4\uff0c\u63d0\u4ea4 ",(0,c.jsx)(n.code,{children:"Json"})," \u8bf7\u6c42"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'g.Client().ContentJson().PostContent("http://order.svc/v1/order/create", g.Map{\n    "uid"         : 1,\n    "sku_id"      : 10000,\n    "amount"      : 19.99,\n    "create_time" : "2020-03-26 12:00:00",\n})\n\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u8be5\u8bf7\u6c42\u5c06\u4f1a\u5c06 ",(0,c.jsx)(n.code,{children:"Content-Type"})," \u8bbe\u7f6e\u4e3a ",(0,c.jsx)(n.code,{children:"application/json"}),"\uff0c\u5e76\u4e14\u5c06\u63d0\u4ea4\u53c2\u6570\u81ea\u52a8\u7f16\u7801\u4e3a ",(0,c.jsx)(n.code,{children:"Json"}),":"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{"uid":1,"sku_id":10000,"amount":19.99,"create_time":"2020-03-26 12:00:00"}\n\n'})}),"\n",(0,c.jsxs)(n.h3,{id:"\u793a\u4f8b5\u63d0\u4ea4-xml-\u8bf7\u6c42",children:["\u793a\u4f8b5\uff0c\u63d0\u4ea4 ",(0,c.jsx)(n.code,{children:"Xml"})," \u8bf7\u6c42"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'g.Client().ContentXml().PostContent("http://order.svc/v1/order/create", g.Map{\n    "uid"         : 1,\n    "sku_id"      : 10000,\n    "amount"      : 19.99,\n    "create_time" : "2020-03-26 12:00:00",\n})\n\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u8be5\u8bf7\u6c42\u5c06\u4f1a\u5c06 ",(0,c.jsx)(n.code,{children:"Content-Type"})," \u8bbe\u7f6e\u4e3a ",(0,c.jsx)(n.code,{children:"application/xml"}),"\uff0c\u5e76\u4e14\u5c06\u63d0\u4ea4\u53c2\u6570\u81ea\u52a8\u7f16\u7801\u4e3a ",(0,c.jsx)(n.code,{children:"Xml"}),":"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-xml",children:"<doc><amount>19.99</amount><create_time>2020-03-26 12:00:00</create_time><sku_id>10000</sku_id><uid>1</uid></doc>\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(296540);const c={},l=i.createContext(c);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);