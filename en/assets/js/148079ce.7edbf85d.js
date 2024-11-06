"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[53728],{324311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u65f6\u95f4\u7ba1\u7406-gtime/\u65f6\u95f4\u7ba1\u7406-gtime","title":"\u65f6\u95f4\u7ba1\u7406-gtime","description":"\u57fa\u672c\u4ecb\u7ecd","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u65f6\u95f4\u7ba1\u7406-gtime/\u65f6\u95f4\u7ba1\u7406-gtime.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u65f6\u95f4\u7ba1\u7406-gtime","slug":"/docs/components/os-gtime","permalink":"/en/docs/components/os-gtime","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u65f6\u95f4\u7ba1\u7406-gtime/\u65f6\u95f4\u7ba1\u7406-gtime.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730810002000,"sidebarPosition":6,"frontMatter":{"slug":"/docs/components/os-gtime","title":"\u65f6\u95f4\u7ba1\u7406-gtime","sidebar_position":6,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u65e5\u5fd7\u7ba1\u7406-glog","permalink":"/en/docs/components/os-glog"},"next":{"title":"\u65f6\u95f4\u7ba1\u7406-\u65f6\u95f4\u683c\u5f0f","permalink":"/en/docs/components/os-gtime-format"}}');var s=n(474848),r=n(28453),i=n(103514);const c={slug:"/docs/components/os-gtime",title:"\u65f6\u95f4\u7ba1\u7406-gtime",sidebar_position:6,hide_title:!0},l=void 0,a={},d=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,s.jsxs)(t.p,{children:["\u901a\u7528\u65f6\u95f4\u7ba1\u7406\u6a21\u5757\uff0c\u5c01\u88c5\u4e86\u5e38\u7528\u7684\u65f6\u95f4/\u65e5\u671f\u76f8\u5173\u7684\u65b9\u6cd5\uff0c\u4f5c\u4e3a\u6807\u51c6\u5e93 ",(0,s.jsx)(t.code,{children:"time"})," \u7684\u529f\u80fd\u6027\u6269\u5c55\uff0c\u63d0\u4f9b\u4e86\u66f4\u591a\u7684\u529f\u80fd\u7279\u6027\u3002\u652f\u6301\u81ea\u5b9a\u4e49\u7684\u65e5\u671f\u683c\u5f0f\u5316\u8bed\u6cd5\uff0c\u683c\u5f0f\u5316\u8bed\u6cd5\u7075\u611f\u6765\u6e90\u4e8e ",(0,s.jsx)(t.code,{children:"PHP"})," \u7684 ",(0,s.jsx)(t.code,{children:"date"})," \u51fd\u6570\u8bed\u6cd5 ( ",(0,s.jsx)(t.a,{href:"http://php.net/manual/zh/function.date.php",children:"http://php.net/manual/zh/function.date.php"})," )\u3002"]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"gtime"})," \u7684\u65f6\u95f4\u683c\u5f0f\u8bed\u6cd5\u5bf9\u4e8e\u719f\u6089 ",(0,s.jsx)(t.code,{children:"PHP"})," \u7684\u5f00\u53d1\u8005\u6765\u8bf4\u975e\u5e38\u53cb\u597d\u3002"]})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/os/gtime"\n'})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gtime",children:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gtime"})}),"\n",(0,s.jsx)(t.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n","\n",(0,s.jsx)(i.A,{})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},103514:(e,t,n)=>{n.d(t,{A:()=>j});n(296540);var o=n(634164),s=n(944718),r=n(328774),i=n(853465),c=n(316654),l=n(721312),a=n(751107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(474848);function m(e){let{href:t,children:n}=e;return(0,u.jsx)(r.A,{href:t,className:(0,o.A)("card padding--lg",d.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:s,description:r}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(a.A,{as:"h2",className:(0,o.A)("text--truncate",d.cardTitle),title:s,children:[n," ",s]}),r&&(0,u.jsx)("p",{className:(0,o.A)("text--truncate",d.cardDescription),title:r,children:r})]})}function p(e){let{item:t}=e;const n=(0,s.Nr)(t),o=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??o(t.items.length)}):null}function g(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,s.cC)(t.docId??void 0);return(0,u.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(g,{item:t});case"category":return(0,u.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.$S)();return(0,u.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const r=(0,s.d1)(t);return(0,u.jsx)("section",{className:(0,o.A)("row",n),children:r.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(f,{item:e})},t)))})}},853465:(e,t,n)=>{n.d(t,{W:()=>a});var o=n(296540),s=n(144586);const r=["zero","one","two","few","many","other"];function i(e){return r.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,o.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const o=e.split("|");if(1===o.length)return o[0];o.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${o.length}: ${e}`);const s=n.select(t),r=n.pluralForms.indexOf(s);return o[Math.min(r,o.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var o=n(296540);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);