"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["72554"],{671829:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>c,default:()=>m,assets:()=>a,toc:()=>u,frontMatter:()=>s});var r=JSON.parse('{"id":"community/\u793E\u533A\u4EA4\u6D41/\u793E\u533A\u4EA4\u6D41","title":"\u793E\u533A\u4EA4\u6D41","description":"","source":"@site/docs/community/\u793E\u533A\u4EA4\u6D41/\u793E\u533A\u4EA4\u6D41.md","sourceDirName":"community/\u793E\u533A\u4EA4\u6D41","slug":"/share","permalink":"/en/share","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/community/\u793E\u533A\u4EA4\u6D41/\u793E\u533A\u4EA4\u6D41.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732026362000,"sidebarPosition":0,"frontMatter":{"slug":"/share","title":"\u793E\u533A\u4EA4\u6D41","sidebar_position":0,"hide_title":true},"sidebar":"communitySidebar","next":{"title":"\u6280\u672F\u4EA4\u6D41\u7FA4","permalink":"/en/share/group"}}'),i=n("785893"),o=n("250065"),l=n("203105");let s={slug:"/share",title:"\u793E\u533A\u4EA4\u6D41",sidebar_position:0,hide_title:!0},c=void 0,a={},u=[];function d(e){return(0,i.jsx)(l.Z,{})}function m(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},203105:function(e,t,n){n.d(t,{Z:()=>j});var r=n("785893");n("667294");var i=n("467026"),o=n("698404"),l=n("531183"),s=n("633876"),c=n("266026"),a=n("434751"),u=n("58608");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:n}=e;return(0,r.jsx)(l.Z,{href:t,className:(0,i.Z)("card padding--lg",d.cardContainer),children:n})}function f(e){let{href:t,icon:n,title:o,description:l}=e;return(0,r.jsxs)(m,{href:t,children:[(0,r.jsxs)(u.Z,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:o,children:[n," ",o]}),l&&(0,r.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:l,children:l})]})}function p(e){let{item:t}=e,n=(0,o.LM)(t),i=function(){let{selectMessage:e}=(0,s.c)();return t=>e(t,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,r.jsx)(f,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??i(t.items.length)}):null}function h(e){let{item:t}=e,n=(0,c.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",i=(0,o.xz)(t.docId??void 0);return(0,r.jsx)(f,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,r.jsx)(h,{item:t});case"category":return(0,r.jsx)(p,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,n=(0,o.jA)();return(0,r.jsx)(j,{items:n.items,className:t})}function j(e){let{items:t,className:n}=e;if(!t)return(0,r.jsx)(x,{...e});let l=(0,o.MN)(t);return(0,r.jsx)("section",{className:(0,i.Z)("row",n),children:l.map((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(g,{item:e})},t))})}},633876:function(e,t,n){n.d(t,{c:function(){return c}});var r=n(667294),i=n(49931);let o=["zero","one","two","few","many","other"];function l(e){return o.filter(t=>e.includes(t))}let s={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function c(){let e=function(){let{i18n:{currentLocale:e}}=(0,i.Z)();return(0,r.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),s}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let i=n.select(t);return r[Math.min(n.pluralForms.indexOf(i),r.length-1)]})(n,t,e)}}},250065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return l}});var r=n(667294);let i={},o=r.createContext(i);function l(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);