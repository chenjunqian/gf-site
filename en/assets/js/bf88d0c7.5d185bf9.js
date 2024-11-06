"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[65525],{62618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ba1\u7406/\u6570\u636e\u7ba1\u7406","title":"\u6570\u636e\u7ba1\u7406","description":"","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ba1\u7406/\u6570\u636e\u7ba1\u7406.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ba1\u7406","slug":"/docs/components/database","permalink":"/en/docs/components/database","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ba1\u7406/\u6570\u636e\u7ba1\u7406.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730810002000,"sidebarPosition":4,"frontMatter":{"slug":"/docs/components/database","title":"\u6570\u636e\u7ba1\u7406","sidebar_position":4,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u538b\u7f29/\u89e3\u538b-gcompress","permalink":"/en/docs/components/encoding-gcompress"},"next":{"title":"\u6570\u636e\u5e93ORM-gdb","permalink":"/en/docs/components/database-gdb"}}');var s=n(474848),o=n(28453),c=n(103514);const i={slug:"/docs/components/database",title:"\u6570\u636e\u7ba1\u7406",sidebar_position:4,hide_title:!0},a=void 0,l={},d=[];function u(e){return(0,s.jsx)(c.A,{})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u()}},103514:(e,t,n)=>{n.d(t,{A:()=>b});n(296540);var r=n(634164),s=n(944718),o=n(328774),c=n(853465),i=n(316654),a=n(721312),l=n(751107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(474848);function m(e){let{href:t,children:n}=e;return(0,u.jsx)(o.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:s,description:o}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:s,children:[n," ",s]}),o&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:o,children:o})]})}function f(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,c.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,i.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(h,{item:t});case"category":return(0,u.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.$S)();return(0,u.jsx)(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const o=(0,s.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:o.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}},853465:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(296540),s=n(144586);const o=["zero","one","two","few","many","other"];function c(e){return o.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function l(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),o=n.pluralForms.indexOf(s);return r[Math.min(o,r.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(296540);const s={},o=r.createContext(s);function c(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);