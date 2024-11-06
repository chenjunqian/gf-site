"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[52994],{859460:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de","title":"\u6570\u636e\u8fd4\u56de","description":"\u57fa\u672c\u4ecb\u7ecd","source":"@site/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de.md","sourceDirName":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de","slug":"/docs/web/response","permalink":"/docs/web/response","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730810002000,"sidebarPosition":4,"frontMatter":{"slug":"/docs/web/response","title":"\u6570\u636e\u8fd4\u56de","sidebar_position":4,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u8bf7\u6c42\u8f93\u5165-\u6587\u4ef6\u4e0a\u4f20","permalink":"/docs/web/request-file-uploading"},"next":{"title":"\u6570\u636e\u8fd4\u56de-\u7f13\u51b2\u63a7\u5236","permalink":"/docs/web/response-buffering"}}');var s=t(474848),i=t(28453),o=t(103514);const c={slug:"/docs/web/response",title:"\u6570\u636e\u8fd4\u56de",sidebar_position:4,hide_title:!0},l=void 0,a={},d=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"HTTP Server"})," \u7684\u6570\u636e\u8fd4\u56de\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"ghttp.Response"})," \u5bf9\u8c61\u5b9e\u73b0\uff0c ",(0,s.jsx)(n.code,{children:"ghttp.Response"})," \u5bf9\u8c61\u5b9e\u73b0\u4e86\u6807\u51c6\u5e93\u7684 ",(0,s.jsx)(n.code,{children:"http.ResponseWriter"})," \u63a5\u53e3\u3002\u6570\u636e\u8f93\u51fa\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"Write*"})," \u76f8\u5173\u65b9\u6cd5\u5b9e\u73b0\uff0c\u5e76\u4e14\u6570\u636e\u8f93\u51fa\u91c7\u7528\u4e86 ",(0,s.jsx)(n.code,{children:"Buffer"})," \u673a\u5236\uff0c\u56e0\u6b64\u6570\u636e\u7684\u5904\u7406\u6548\u7387\u6bd4\u8f83\u9ad8\u3002\u4efb\u4f55\u65f6\u5019\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"OutputBuffer"})," \u65b9\u6cd5\u8f93\u51fa\u7f13\u51b2\u533a\u6570\u636e\u5230\u5ba2\u6237\u7aef\uff0c\u5e76\u6e05\u7a7a\u7f13\u51b2\u533a\u6570\u636e\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5e38\u7528\u65b9\u6cd5\uff1a\u66f4\u8be6\u7ec6\u7684\u63a5\u53e3\u5217\u8868\u8bf7\u53c2\u8003 ",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#Response",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#Response"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"func (r *Response) Write(content ...interface{})\nfunc (r *Response) WriteExit(content ...interface{})\nfunc (r *Response) WriteJson(content interface{}) error\nfunc (r *Response) WriteJsonExit(content interface{}) error\nfunc (r *Response) WriteJsonP(content interface{}) error\nfunc (r *Response) WriteJsonPExit(content interface{}) error\nfunc (r *Response) WriteOver(content ...interface{})\nfunc (r *Response) WriteOverExit(content ...interface{})\nfunc (r *Response) WriteStatus(status int, content ...interface{})\nfunc (r *Response) WriteStatusExit(status int, content ...interface{})\nfunc (r *Response) WriteTpl(tpl string, params ...gview.Params) error\nfunc (r *Response) WriteTplContent(content string, params ...gview.Params) error\nfunc (r *Response) WriteTplDefault(params ...gview.Params) error\nfunc (r *Response) WriteXml(content interface{}, rootTag ...string) error\nfunc (r *Response) WriteXmlExit(content interface{}, rootTag ...string) error\nfunc (r *Response) Writef(format string, params ...interface{})\nfunc (r *Response) WritefExit(format string, params ...interface{})\nfunc (r *Response) Writefln(format string, params ...interface{})\nfunc (r *Response) WriteflnExit(format string, params ...interface{})\nfunc (r *Response) Writeln(content ...interface{})\nfunc (r *Response) WritelnExit(content ...interface{})\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7b80\u8981\u8bf4\u660e:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Write*"})," \u65b9\u6cd5\u7528\u4e8e\u5f80\u8fd4\u56de\u7684\u6570\u636e\u7f13\u51b2\u533a\u8ffd\u52a0\u5199\u5165\u6570\u636e\uff0c\u53c2\u6570\u53ef\u4e3a\u4efb\u610f\u7684\u6570\u636e\u683c\u5f0f\uff0c\u5185\u90e8\u901a\u8fc7\u65ad\u8a00\u5bf9\u53c2\u6570\u505a\u81ea\u52a8\u5206\u6790\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Write*Exit"})," \u65b9\u6cd5\u7528\u4e8e\u5f80\u8fd4\u56de\u7684\u6570\u636e\u7f13\u51b2\u533a\u8ffd\u52a0\u5199\u5165\u6570\u636e\u540e\u9000\u51fa\u5f53\u524d\u6267\u884c\u7684 ",(0,s.jsx)(n.code,{children:"HTTP Handler"})," \u65b9\u6cd5\uff0c\u53ef\u7528\u4e8e\u66ff\u4ee3 ",(0,s.jsx)(n.code,{children:"return"})," \u8fd4\u56de\u65b9\u6cd5\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WriteOver*"})," \u65b9\u6cd5\u7528\u4e8e\u8986\u76d6\u7f13\u51b2\u533a\u5199\u5165\uff0c\u539f\u6709\u7f13\u51b2\u533a\u7684\u6570\u636e\u5c06\u4f1a\u88ab\u8986\u76d6\u4e3a\u65b0\u5199\u5165\u7684\u6570\u636e\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WriteStatus*"})," \u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u5f53\u524d\u8bf7\u6c42\u6267\u884c\u8fd4\u56de\u7684\u72b6\u6001\u7801\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WriteJson*"}),"/ ",(0,s.jsx)(n.code,{children:"WriteXml"})," \u65b9\u6cd5\u7528\u4e8e\u7279\u5b9a\u6570\u636e\u683c\u5f0f\u7684\u8f93\u51fa\uff0c\u8fd9\u662f\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u7684\u7b80\u4fbf\u65b9\u6cd5\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WriteTpl*"})," \u65b9\u6cd5\u7528\u4e8e\u6a21\u677f\u8f93\u51fa\uff0c\u89e3\u6790\u5e76\u8f93\u51fa\u6a21\u677f\u6587\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u89e3\u6790\u5e76\u8f93\u51fa\u7ed9\u5b9a\u7684\u6a21\u677f\u5185\u5bb9\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u5176\u4ed6\u65b9\u6cd5\u8be6\u89c1\u63a5\u53e3\u6587\u6863\uff1b"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6b64\u5916\uff0c\u9700\u8981\u63d0\u4e00\u4e0b\uff0c ",(0,s.jsx)(n.code,{children:"Header"})," \u7684\u64cd\u4f5c\u53ef\u4ee5\u901a\u8fc7\u6807\u51c6\u5e93\u7684\u65b9\u6cd5\u6765\u5b9e\u73b0\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Response.Header().Set("Content-Type", "text/plain; charset=utf-8")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n","\n",(0,s.jsx)(o.A,{})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},103514:(e,n,t)=>{t.d(n,{A:()=>j});t(296540);var r=t(634164),s=t(944718),i=t(328774),o=t(853465),c=t(316654),l=t(721312),a=t(751107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=t(474848);function p(e){let{href:n,children:t}=e;return(0,u.jsx)(i.A,{href:n,className:(0,r.A)("card padding--lg",d.cardContainer),children:t})}function f(e){let{href:n,icon:t,title:s,description:i}=e;return(0,u.jsxs)(p,{href:n,children:[(0,u.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:s,children:[t," ",s]}),i&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:i,children:i})]})}function h(e){let{item:n}=e;const t=(0,s.Nr)(n),r=function(){const{selectMessage:e}=(0,o.W)();return n=>e(n,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,u.jsx)(f,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??r(n.items.length)}):null}function m(e){let{item:n}=e;const t=(0,c.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(n.docId??void 0);return(0,u.jsx)(f,{href:n.href,icon:t,title:n.label,description:n.description??r?.description})}function x(e){let{item:n}=e;switch(n.type){case"link":return(0,u.jsx)(m,{item:n});case"category":return(0,u.jsx)(h,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function g(e){let{className:n}=e;const t=(0,s.$S)();return(0,u.jsx)(j,{items:t.items,className:n})}function j(e){const{items:n,className:t}=e;if(!n)return(0,u.jsx)(g,{...e});const i=(0,s.d1)(n);return(0,u.jsx)("section",{className:(0,r.A)("row",t),children:i.map(((e,n)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(x,{item:e})},n)))})}},853465:(e,n,t)=>{t.d(n,{W:()=>a});var r=t(296540),s=t(144586);const i=["zero","one","two","few","many","other"];function o(e){return i.filter((n=>e.includes(n)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:o(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(n,t)=>function(e,n,t){const r=e.split("|");if(1===r.length)return r[0];r.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=t.select(n),i=t.pluralForms.indexOf(s);return r[Math.min(i,r.length-1)]}(t,n,e)}}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(296540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);