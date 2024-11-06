"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[96663],{602207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/\u9ad8\u7ea7\u7279\u6027","title":"\u9ad8\u7ea7\u7279\u6027","description":"","source":"@site/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/\u9ad8\u7ea7\u7279\u6027.md","sourceDirName":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027","slug":"/docs/web/senior","permalink":"/docs/web/senior","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/\u9ad8\u7ea7\u7279\u6027.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730810002000,"sidebarPosition":11,"frontMatter":{"slug":"/docs/web/senior","title":"\u9ad8\u7ea7\u7279\u6027","sidebar_position":11,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u5206\u9875\u7ba1\u7406-\u81ea\u5b9a\u4e49\u5206\u9875","permalink":"/docs/web/paging-customization"},"next":{"title":"\u9759\u6001\u6587\u4ef6\u670d\u52a1","permalink":"/docs/web/senior-static-server"}}');var s=n(474848),o=n(28453),i=n(103514);const c={slug:"/docs/web/senior",title:"\u9ad8\u7ea7\u7279\u6027",sidebar_position:11,hide_title:!0},l=void 0,a={},u=[];function d(e){return(0,s.jsx)(i.A,{})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d()}},103514:(e,t,n)=>{n.d(t,{A:()=>b});n(296540);var r=n(634164),s=n(944718),o=n(328774),i=n(853465),c=n(316654),l=n(721312),a=n(751107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(474848);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(o.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function f(e){let{href:t,icon:n,title:s,description:o}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:s,children:[n," ",s]}),o&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:o,children:o})]})}function p(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(f,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(h,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.$S)();return(0,d.jsx)(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const o=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:o.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},853465:(e,t,n)=>{n.d(t,{W:()=>a});var r=n(296540),s=n(144586);const o=["zero","one","two","few","many","other"];function i(e){return o.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),o=n.pluralForms.indexOf(s);return r[Math.min(o,r.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(296540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);