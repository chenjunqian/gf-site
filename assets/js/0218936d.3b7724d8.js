"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[38872],{209049:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u63a5\u53e3\u5f00\u53d1/ORM\u63a5\u53e3\u5f00\u53d1","title":"ORM\u63a5\u53e3\u5f00\u53d1","description":"gdb \u6a21\u5757\u4f7f\u7528\u4e86\u975e\u5e38\u7075\u6d3b\u4e14\u6269\u5c55\u6027\u5f3a\u7684\u63a5\u53e3\u8bbe\u8ba1\uff0c\u63a5\u53e3\u8bbe\u8ba1\u5141\u8bb8\u5f00\u53d1\u8005\u53ef\u4ee5\u975e\u5e38\u65b9\u4fbf\u5730\u81ea\u5b9a\u4e49\u5b9e\u73b0\u548c\u66ff\u6362\u63a5\u53e3\u5b9a\u4e49\u4e2d\u7684\u4efb\u4f55\u65b9\u6cd5\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u63a5\u53e3\u5f00\u53d1/ORM\u63a5\u53e3\u5f00\u53d1.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u63a5\u53e3\u5f00\u53d1","slug":"/docs/core/gdb-interface","permalink":"/docs/core/gdb-interface","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u63a5\u53e3\u5f00\u53d1/ORM\u63a5\u53e3\u5f00\u53d1.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730810002000,"sidebarPosition":8,"frontMatter":{"slug":"/docs/core/gdb-interface","title":"ORM\u63a5\u53e3\u5f00\u53d1","sidebar_position":8,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"ORM\u9ad8\u7ea7\u7279\u6027-\u81ea\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362","permalink":"/docs/core/gdb-senior-custom-type-converting"},"next":{"title":"ORM\u63a5\u53e3\u5f00\u53d1-\u56de\u8c03\u5904\u7406","permalink":"/docs/core/gdb-interface-callback"}}');var c=r(474848),s=r(28453),i=r(103514);const o={slug:"/docs/core/gdb-interface",title:"ORM\u63a5\u53e3\u5f00\u53d1",sidebar_position:8,hide_title:!0},d=void 0,l={},a=[{value:"<code>DB</code> \u63a5\u53e3",id:"db-\u63a5\u53e3",level:2},{value:"<code>DB</code> \u63a5\u53e3\u5173\u7cfb",id:"db-\u63a5\u53e3\u5173\u7cfb",level:2},{value:"<code>Driver</code> \u63a5\u53e3",id:"driver-\u63a5\u53e3",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"gdb"})," \u6a21\u5757\u4f7f\u7528\u4e86\u975e\u5e38\u7075\u6d3b\u4e14\u6269\u5c55\u6027\u5f3a\u7684\u63a5\u53e3\u8bbe\u8ba1\uff0c\u63a5\u53e3\u8bbe\u8ba1\u5141\u8bb8\u5f00\u53d1\u8005\u53ef\u4ee5\u975e\u5e38\u65b9\u4fbf\u5730\u81ea\u5b9a\u4e49\u5b9e\u73b0\u548c\u66ff\u6362\u63a5\u53e3\u5b9a\u4e49\u4e2d\u7684\u4efb\u4f55\u65b9\u6cd5\u3002"]}),"\n",(0,c.jsxs)(n.h2,{id:"db-\u63a5\u53e3",children:[(0,c.jsx)(n.code,{children:"DB"})," \u63a5\u53e3"]}),"\n",(0,c.jsxs)(n.p,{children:["\u63a5\u53e3\u6587\u6863\uff1a ",(0,c.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb#DB",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb#DB"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"DB"})," \u63a5\u53e3\u662f\u6570\u636e\u5e93\u64cd\u4f5c\u7684\u6838\u5fc3\u63a5\u53e3\uff0c\u4e5f\u662f\u6211\u4eec\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"ORM"})," \u64cd\u4f5c\u6570\u636e\u5e93\u65f6\u6700\u5e38\u7528\u7684\u63a5\u53e3\uff0c\u8fd9\u91cc\u4e3b\u8981\u5bf9\u63a5\u53e3\u7684\u51e0\u4e2a\u91cd\u8981\u65b9\u6cd5\u505a\u8bf4\u660e\uff1a"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Open"})," \u65b9\u6cd5\u7528\u4e8e\u521b\u5efa\u7279\u5b9a\u7684\u6570\u636e\u5e93\u8fde\u63a5\u5bf9\u8c61\uff0c\u8fd4\u56de\u7684\u662f\u6807\u51c6\u5e93\u7684 ",(0,c.jsx)(n.code,{children:"*sql.DB"})," \u901a\u7528\u6570\u636e\u5e93\u5bf9\u8c61\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Do*"})," \u7cfb\u5217\u65b9\u6cd5\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570 ",(0,c.jsx)(n.code,{children:"link"})," \u4e3a ",(0,c.jsx)(n.code,{children:"Link"})," \u63a5\u53e3\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u5728 ",(0,c.jsx)(n.code,{children:"master-slave"})," \u6a21\u5f0f\u4e0b\u53ef\u80fd\u662f\u4e00\u4e2a\u4e3b\u8282\u70b9\u5bf9\u8c61\uff0c\u4e5f\u53ef\u80fd\u662f\u4ece\u8282\u70b9\u5bf9\u8c61\uff0c\u56e0\u6b64\u5982\u679c\u5728\u7ee7\u627f\u7684\u9a71\u52a8\u5bf9\u8c61\u5b9e\u73b0\u4e2d\u4f7f\u7528\u8be5 ",(0,c.jsx)(n.code,{children:"link"})," \u53c2\u6570\u65f6\uff0c\u6ce8\u610f\u5f53\u524d\u7684\u8fd0\u884c\u6a21\u5f0f\u3002 ",(0,c.jsx)(n.code,{children:"slave"})," \u8282\u70b9\u5728\u5927\u90e8\u5206\u7684\u6570\u636e\u5e93\u4e3b\u4ece\u6a21\u5f0f\u4e2d\u5f80\u5f80\u662f\u4e0d\u53ef\u5199\u7684\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"HandleSqlBeforeCommit"})," \u65b9\u6cd5\u5c06\u4f1a\u5728\u6bcf\u4e00\u6761 ",(0,c.jsx)(n.code,{children:"SQL"})," \u63d0\u4ea4\u7ed9\u6570\u636e\u5e93\u670d\u52a1\u7aef\u6267\u884c\u65f6\u88ab\u8c03\u7528\u505a\u4e00\u4e9b\u63d0\u4ea4\u524d\u7684\u56de\u8c03\u5904\u7406\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"\u5176\u4ed6\u63a5\u53e3\u65b9\u6cd5\u8be6\u89c1\u63a5\u53e3\u6587\u6863\u6216\u8005\u6e90\u7801\u6587\u4ef6\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.h2,{id:"db-\u63a5\u53e3\u5173\u7cfb",children:[(0,c.jsx)(n.code,{children:"DB"})," \u63a5\u53e3\u5173\u7cfb"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:r(358331).A+"",width:"2432",height:"1866"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"GoFrame ORM Relations"})}),"\n",(0,c.jsxs)(n.h2,{id:"driver-\u63a5\u53e3",children:[(0,c.jsx)(n.code,{children:"Driver"})," \u63a5\u53e3"]}),"\n",(0,c.jsxs)(n.p,{children:["\u63a5\u53e3\u6587\u6863\uff1a ",(0,c.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb#Driver",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb#Driver"})]}),"\n",(0,c.jsx)(n.p,{children:"\u5f00\u53d1\u8005\u81ea\u5b9a\u4e49\u7684\u9a71\u52a8\u9700\u8981\u5b9e\u73b0\u4ee5\u4e0b\u63a5\u53e3\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:"// Driver is the interface for integrating sql drivers into package gdb.\ntype Driver interface {\n    // New creates and returns a database object for specified database server.\n    New(core *Core, node *ConfigNode) (DB, error)\n}\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5176\u4e2d\u7684 ",(0,c.jsx)(n.code,{children:"New"})," \u65b9\u6cd5\u7528\u4e8e\u6839\u636e ",(0,c.jsx)(n.code,{children:"Core"})," \u6570\u636e\u5e93\u57fa\u7840\u5bf9\u8c61\u4ee5\u53ca ",(0,c.jsx)(n.code,{children:"ConfigNode"})," \u914d\u7f6e\u5bf9\u8c61\u521b\u5efa\u9a71\u52a8\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u64cd\u4f5c\u5bf9\u8c61\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8fd4\u56de\u7684\u6570\u636e\u5e93\u5bf9\u8c61\u9700\u8981\u5b9e\u73b0 ",(0,c.jsx)(n.code,{children:"DB"})," \u63a5\u53e3\u3002\u800c\u6570\u636e\u5e93\u57fa\u7840\u5bf9\u8c61 ",(0,c.jsx)(n.code,{children:"Core"})," \u5df2\u7ecf\u5b9e\u73b0\u4e86 ",(0,c.jsx)(n.code,{children:"DB"})," \u63a5\u53e3\uff0c\u56e0\u6b64\u5f00\u53d1\u8005\u53ea\u9700\u8981\u201d\u7ee7\u627f\u201d ",(0,c.jsx)(n.code,{children:"Core"})," \u5bf9\u8c61\uff0c\u7136\u540e\u6839\u636e\u9700\u8981\u8986\u76d6\u5bf9\u5e94\u7684\u63a5\u53e3\u5b9e\u73b0\u65b9\u6cd5\u5373\u53ef\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n","\n",(0,c.jsx)(i.A,{})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},103514:(e,n,r)=>{r.d(n,{A:()=>j});r(296540);var t=r(634164),c=r(944718),s=r(328774),i=r(853465),o=r(316654),d=r(721312),l=r(751107);const a={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var h=r(474848);function u(e){let{href:n,children:r}=e;return(0,h.jsx)(s.A,{href:n,className:(0,t.A)("card padding--lg",a.cardContainer),children:r})}function g(e){let{href:n,icon:r,title:c,description:s}=e;return(0,h.jsxs)(u,{href:n,children:[(0,h.jsxs)(l.A,{as:"h2",className:(0,t.A)("text--truncate",a.cardTitle),title:c,children:[r," ",c]}),s&&(0,h.jsx)("p",{className:(0,t.A)("text--truncate",a.cardDescription),title:s,children:s})]})}function f(e){let{item:n}=e;const r=(0,c.Nr)(n),t=function(){const{selectMessage:e}=(0,i.W)();return n=>e(n,(0,d.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return r?(0,h.jsx)(g,{href:r,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??t(n.items.length)}):null}function p(e){let{item:n}=e;const r=(0,o.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",t=(0,c.cC)(n.docId??void 0);return(0,h.jsx)(g,{href:n.href,icon:r,title:n.label,description:n.description??t?.description})}function m(e){let{item:n}=e;switch(n.type){case"link":return(0,h.jsx)(p,{item:n});case"category":return(0,h.jsx)(f,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function x(e){let{className:n}=e;const r=(0,c.$S)();return(0,h.jsx)(j,{items:r.items,className:n})}function j(e){const{items:n,className:r}=e;if(!n)return(0,h.jsx)(x,{...e});const s=(0,c.d1)(n);return(0,h.jsx)("section",{className:(0,t.A)("row",r),children:s.map(((e,n)=>(0,h.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,h.jsx)(m,{item:e})},n)))})}},853465:(e,n,r)=>{r.d(n,{W:()=>l});var t=r(296540),c=r(144586);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((n=>e.includes(n)))}const o={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,c.A)();return(0,t.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:i(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),o}}),[e])}function l(){const e=d();return{selectMessage:(n,r)=>function(e,n,r){const t=e.split("|");if(1===t.length)return t[0];t.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${t.length}: ${e}`);const c=r.select(n),s=r.pluralForms.indexOf(c);return t[Math.min(s,t.length-1)]}(r,n,e)}}},358331:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/1f5e48cc947e21dbed2745f69254935a-891c603c932080da42159aa53d0f4e68.png"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(296540);const c={},s=t.createContext(c);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);