"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["56996"],{180552:function(e,n,r){r.r(n),r.d(n,{metadata:()=>o,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>a,frontMatter:()=>s});var o=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-\u5E38\u7528\u67E5\u8BE2\u65B9\u6CD5","title":"ORM\u67E5\u8BE2-\u5E38\u7528\u67E5\u8BE2\u65B9\u6CD5","description":"\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684\u4E94\u4E2A\u5E38\u7528\u6570\u636E\u67E5\u8BE2\u65B9\u6CD5\uFF1AAll\u3001One\u3001Array\u3001Value\u548CCount\u3002\u8FD9\u4E9B\u65B9\u6CD5\u5141\u8BB8\u60A8\u8F7B\u677E\u5730\u4ECE\u6570\u636E\u5E93\u4E2D\u83B7\u53D6\u591A\u6761\u6216\u5355\u6761\u8BB0\u5F55\uFF0C\u5E76\u652F\u6301\u6761\u4EF6\u53C2\u6570\u7684\u76F4\u63A5\u8F93\u5165\u3002\u901A\u8FC7\u793A\u4F8B\u4EE3\u7801\uFF0C\u60A8\u5C06\u5B66\u4E60\u5982\u4F55\u5728GoFrame\u4E2D\u6709\u6548\u5730\u8FDB\u884C\u6570\u636E\u5E93\u64CD\u4F5C\u3002","source":"@site/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-\u5E38\u7528\u67E5\u8BE2\u65B9\u6CD5.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2","slug":"/docs/core/gdb-chaining-query-all-one-array-value-count","permalink":"/en/docs/core/gdb-chaining-query-all-one-array-value-count","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-\u5E38\u7528\u67E5\u8BE2\u65B9\u6CD5.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731648031000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/core/gdb-chaining-query-all-one-array-value-count","title":"ORM\u67E5\u8BE2-\u5E38\u7528\u67E5\u8BE2\u65B9\u6CD5","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","ORM","\u6570\u636E\u67E5\u8BE2","All\u65B9\u6CD5","One\u65B9\u6CD5","Array\u65B9\u6CD5","Value\u65B9\u6CD5","Count\u65B9\u6CD5","CountColumn\u65B9\u6CD5"],"description":"\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684\u4E94\u4E2A\u5E38\u7528\u6570\u636E\u67E5\u8BE2\u65B9\u6CD5\uFF1AAll\u3001One\u3001Array\u3001Value\u548CCount\u3002\u8FD9\u4E9B\u65B9\u6CD5\u5141\u8BB8\u60A8\u8F7B\u677E\u5730\u4ECE\u6570\u636E\u5E93\u4E2D\u83B7\u53D6\u591A\u6761\u6216\u5355\u6761\u8BB0\u5F55\uFF0C\u5E76\u652F\u6301\u6761\u4EF6\u53C2\u6570\u7684\u76F4\u63A5\u8F93\u5165\u3002\u901A\u8FC7\u793A\u4F8B\u4EE3\u7801\uFF0C\u60A8\u5C06\u5B66\u4E60\u5982\u4F55\u5728GoFrame\u4E2D\u6709\u6548\u5730\u8FDB\u884C\u6570\u636E\u5E93\u64CD\u4F5C\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u67E5\u8BE2-Where\u6761\u4EF6","permalink":"/en/docs/core/gdb-chaining-query-where"},"next":{"title":"ORM\u67E5\u8BE2-AllAndCount","permalink":"/en/docs/core/gdb-chaining-query-all-and-count"}}'),l=r("785893"),t=r("250065");let s={slug:"/docs/core/gdb-chaining-query-all-one-array-value-count",title:"ORM\u67E5\u8BE2-\u5E38\u7528\u67E5\u8BE2\u65B9\u6CD5",sidebar_position:1,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","ORM","\u6570\u636E\u67E5\u8BE2","All\u65B9\u6CD5","One\u65B9\u6CD5","Array\u65B9\u6CD5","Value\u65B9\u6CD5","Count\u65B9\u6CD5","CountColumn\u65B9\u6CD5"],description:"\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684\u4E94\u4E2A\u5E38\u7528\u6570\u636E\u67E5\u8BE2\u65B9\u6CD5\uFF1AAll\u3001One\u3001Array\u3001Value\u548CCount\u3002\u8FD9\u4E9B\u65B9\u6CD5\u5141\u8BB8\u60A8\u8F7B\u677E\u5730\u4ECE\u6570\u636E\u5E93\u4E2D\u83B7\u53D6\u591A\u6761\u6216\u5355\u6761\u8BB0\u5F55\uFF0C\u5E76\u652F\u6301\u6761\u4EF6\u53C2\u6570\u7684\u76F4\u63A5\u8F93\u5165\u3002\u901A\u8FC7\u793A\u4F8B\u4EE3\u7801\uFF0C\u60A8\u5C06\u5B66\u4E60\u5982\u4F55\u5728GoFrame\u4E2D\u6709\u6548\u5730\u8FDB\u884C\u6570\u636E\u5E93\u64CD\u4F5C\u3002"},i=void 0,c={},a=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,l.jsx)(n.p,{children:"\u6570\u636E\u67E5\u8BE2\u6BD4\u8F83\u5E38\u7528\u7684\u51E0\u4E2A\u65B9\u6CD5\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"func (m *Model) All(where ...interface{} (Result, error)\nfunc (m *Model) One(where ...interface{}) (Record, error)\nfunc (m *Model) Array(fieldsAndWhere ...interface{}) ([]Value, error)\nfunc (m *Model) Value(fieldsAndWhere ...interface{}) (Value, error)\nfunc (m *Model) Count(where ...interface{}) (int, error)\nfunc (m *Model) CountColumn(column string) (int, error)\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u7B80\u8981\u8BF4\u660E\uFF1A"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"All"})," \u7528\u4E8E\u67E5\u8BE2\u5E76\u8FD4\u56DE\u591A\u6761\u8BB0\u5F55\u7684\u5217\u8868/\u6570\u7EC4\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"One"})," \u7528\u4E8E\u67E5\u8BE2\u5E76\u8FD4\u56DE\u5355\u6761\u8BB0\u5F55\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Array"})," \u7528\u4E8E\u67E5\u8BE2\u6307\u5B9A\u5B57\u6BB5\u5217\u7684\u6570\u636E\uFF0C\u8FD4\u56DE\u6570\u7EC4\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Value"})," \u7528\u4E8E\u67E5\u8BE2\u5E76\u8FD4\u56DE\u4E00\u4E2A\u5B57\u6BB5\u503C\uFF0C\u5F80\u5F80\u9700\u8981\u7ED3\u5408 ",(0,l.jsx)(n.code,{children:"Fields"})," \u65B9\u6CD5\u4F7F\u7528\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Count"})," \u7528\u4E8E\u67E5\u8BE2\u5E76\u8FD4\u56DE\u8BB0\u5F55\u6570\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u6B64\u5916\uFF0C\u4E5F\u53EF\u4EE5\u770B\u5F97\u5230\u8FD9\u56DB\u4E2A\u65B9\u6CD5\u5B9A\u4E49\u4E2D\u4E5F\u652F\u6301\u6761\u4EF6\u53C2\u6570\u7684\u76F4\u63A5\u8F93\u5165\uFF0C\u53C2\u6570\u7C7B\u578B\u4E0E ",(0,l.jsx)(n.code,{children:"Where"})," \u65B9\u6CD5\u4E00\u81F4\u3002\u4F46\u9700\u8981\u6CE8\u610F\uFF0C\u5176\u4E2D ",(0,l.jsx)(n.code,{children:"Array"})," \u548C ",(0,l.jsx)(n.code,{children:"Value"})," \u65B9\u6CD5\u7684\u53C2\u6570\u4E2D\u81F3\u5C11\u5E94\u8BE5\u8F93\u5165\u5B57\u6BB5\u53C2\u6570\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'// SELECT * FROM `user` WHERE `score`>60\nModel("user").Where("score>?", 60).All()\n\n// SELECT * FROM `user` WHERE `score`>60 LIMIT 1\nModel("user").Where("score>?", 60).One()\n\n// SELECT `name` FROM `user` WHERE `score`>60\nModel("user").Fields("name").Where("score>?", 60).Array()\n\n// SELECT `name` FROM `user` WHERE `uid`=1 LIMIT 1\nModel("user").Fields("name").Where("uid", 1).Value()\n\n// SELECT COUNT(1) FROM `user` WHERE `status` IN(1,2,3)\nModel("user").Where("status", g.Slice{1,2,3}).Count()\n'})})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return s}});var o=r(667294);let l={},t=o.createContext(l);function s(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);