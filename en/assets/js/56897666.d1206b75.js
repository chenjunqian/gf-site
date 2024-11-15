"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["39240"],{115673:function(n,e,o){o.r(e),o.d(e,{metadata:()=>i,contentTitle:()=>s,default:()=>u,assets:()=>c,toc:()=>t,frontMatter:()=>l});var i=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-UnionUnionAll","title":"ORM\u67E5\u8BE2-Union/UnionAll","description":"\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684ORM\u7EC4\u4EF6\u8FDB\u884CUnion\u548CUnionAll\u67E5\u8BE2\u64CD\u4F5C\u3002\u4F7F\u7528Union\u64CD\u4F5C\u7B26\u53EF\u4EE5\u5220\u9664\u91CD\u590D\u6570\u636E\uFF0C\u800CUnionAll\u64CD\u4F5C\u7B26\u5219\u4FDD\u7559\u6240\u6709\u6570\u636E\u3002\u901A\u8FC7\u94FE\u5F0F\u64CD\u4F5C\u6216\u8005\u65B9\u6CD5\u64CD\u4F5C\u53EF\u4EE5\u8F7B\u677E\u5B9E\u73B0\u8FD9\u4E24\u79CD\u67E5\u8BE2\u65B9\u5F0F\u3002\u6587\u7AE0\u8FD8\u4ECB\u7ECD\u4E86\u5982\u4F55\u5728MySQL\u4E2D\u8FDB\u884C\u7EC4\u5408\u67E5\u8BE2\uFF0C\u5E76\u63D0\u4F9B\u4E86\u8BE6\u7EC6\u7684\u4EE3\u7801\u793A\u4F8B\u3002","source":"@site/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-UnionUnionAll.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2","slug":"/docs/core/gdb-chaining-query-union","permalink":"/en/docs/core/gdb-chaining-query-union","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-UnionUnionAll.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":7,"frontMatter":{"slug":"/docs/core/gdb-chaining-query-union","title":"ORM\u67E5\u8BE2-Union/UnionAll","sidebar_position":7,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","ORM","Union","UnionAll","\u94FE\u5F0F\u64CD\u4F5C","\u65B9\u6CD5\u64CD\u4F5C","\u67E5\u8BE2\u4F18\u5316","MySQL","SQL"],"description":"\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684ORM\u7EC4\u4EF6\u8FDB\u884CUnion\u548CUnionAll\u67E5\u8BE2\u64CD\u4F5C\u3002\u4F7F\u7528Union\u64CD\u4F5C\u7B26\u53EF\u4EE5\u5220\u9664\u91CD\u590D\u6570\u636E\uFF0C\u800CUnionAll\u64CD\u4F5C\u7B26\u5219\u4FDD\u7559\u6240\u6709\u6570\u636E\u3002\u901A\u8FC7\u94FE\u5F0F\u64CD\u4F5C\u6216\u8005\u65B9\u6CD5\u64CD\u4F5C\u53EF\u4EE5\u8F7B\u677E\u5B9E\u73B0\u8FD9\u4E24\u79CD\u67E5\u8BE2\u65B9\u5F0F\u3002\u6587\u7AE0\u8FD8\u4ECB\u7ECD\u4E86\u5982\u4F55\u5728MySQL\u4E2D\u8FDB\u884C\u7EC4\u5408\u67E5\u8BE2\uFF0C\u5E76\u63D0\u4F9B\u4E86\u8BE6\u7EC6\u7684\u4EE3\u7801\u793A\u4F8B\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u67E5\u8BE2-\u5206\u7EC4\u6392\u5E8F\u8FC7\u6EE4","permalink":"/en/docs/core/gdb-chaining-query-group-order-having"},"next":{"title":"ORM\u67E5\u8BE2-\u5B50\u67E5\u8BE2\u7279\u6027","permalink":"/en/docs/core/gdb-chaining-query-sub-query"}}'),d=o("785893"),r=o("250065");let l={slug:"/docs/core/gdb-chaining-query-union",title:"ORM\u67E5\u8BE2-Union/UnionAll",sidebar_position:7,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","ORM","Union","UnionAll","\u94FE\u5F0F\u64CD\u4F5C","\u65B9\u6CD5\u64CD\u4F5C","\u67E5\u8BE2\u4F18\u5316","MySQL","SQL"],description:"\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684ORM\u7EC4\u4EF6\u8FDB\u884CUnion\u548CUnionAll\u67E5\u8BE2\u64CD\u4F5C\u3002\u4F7F\u7528Union\u64CD\u4F5C\u7B26\u53EF\u4EE5\u5220\u9664\u91CD\u590D\u6570\u636E\uFF0C\u800CUnionAll\u64CD\u4F5C\u7B26\u5219\u4FDD\u7559\u6240\u6709\u6570\u636E\u3002\u901A\u8FC7\u94FE\u5F0F\u64CD\u4F5C\u6216\u8005\u65B9\u6CD5\u64CD\u4F5C\u53EF\u4EE5\u8F7B\u677E\u5B9E\u73B0\u8FD9\u4E24\u79CD\u67E5\u8BE2\u65B9\u5F0F\u3002\u6587\u7AE0\u8FD8\u4ECB\u7ECD\u4E86\u5982\u4F55\u5728MySQL\u4E2D\u8FDB\u884C\u7EC4\u5408\u67E5\u8BE2\uFF0C\u5E76\u63D0\u4F9B\u4E86\u8BE6\u7EC6\u7684\u4EE3\u7801\u793A\u4F8B\u3002"},s=void 0,c={},t=[{value:"\u65B9\u6CD5\u5B9A\u4E49",id:"\u65B9\u6CD5\u5B9A\u4E49",level:2},{value:"<code>Union</code>",id:"union",level:2},{value:"<code>UnionAll</code>",id:"unionall",level:2}];function a(n){let e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.code,{children:"GoFrame ORM"}),"\xa0\u7EC4\u4EF6\u652F\u6301 ",(0,d.jsx)(e.code,{children:"Union/UnionAll"})," \u64CD\u4F5C\uFF0C ",(0,d.jsx)(e.code,{children:"Union/UnionAll"})," \u64CD\u4F5C\u7B26\u7528\u4E8E\u8FDE\u63A5\u4E24\u4E2A\u4EE5\u4E0A\u7684 ",(0,d.jsx)(e.code,{children:"SELECT"})," \u8BED\u53E5\u7684\u7ED3\u679C\u7EC4\u5408\u5230\u4E00\u4E2A\u7ED3\u679C\u96C6\u5408\u4E2D\uFF0C\u5173\u4E8E ",(0,d.jsx)(e.code,{children:"Union/UnionAll"})," \u7EC4\u5408\u67E5\u8BE2\u7684\u76F8\u5173\u4ECB\u7ECD\u53EF\u4EE5\u53C2\u8003MySQL\u7684\u5B98\u65B9\u6587\u6863\u4ECB\u7ECD ",(0,d.jsx)(e.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/union.html",children:"https://dev.mysql.com/doc/refman/8.0/en/union.html"})," \u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u94FE\u5F0F\u64CD\u4F5C\u6216\u8005\u65B9\u6CD5\u64CD\u4F5C\u6765\u5B9E\u73B0 ",(0,d.jsx)(e.code,{children:"Union/UnionAll"})," \u64CD\u4F5C\u3002"]}),"\n",(0,d.jsx)(e.h2,{id:"\u65B9\u6CD5\u5B9A\u4E49",children:"\u65B9\u6CD5\u5B9A\u4E49"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-go",children:'// Union does "(SELECT xxx FROM xxx) UNION (SELECT xxx FROM xxx) ..." statement.\nfunc (c *Core) Union(unions ...*Model) *Model\n\n// UnionAll does "(SELECT xxx FROM xxx) UNION ALL (SELECT xxx FROM xxx) ..." statement.\nfunc (c *Core) UnionAll(unions ...*Model) *Model\n'})}),"\n",(0,d.jsx)(e.h2,{id:"union",children:(0,d.jsx)(e.code,{children:"Union"})}),"\n",(0,d.jsxs)(e.p,{children:["\u4F7F\u7528 ",(0,d.jsx)(e.code,{children:"Union"})," \u64CD\u4F5C\u7B26\uFF0C\u591A\u4E2A ",(0,d.jsx)(e.code,{children:"SELECT"})," \u8BED\u53E5\u4F1A\u5220\u9664\u91CD\u590D\u7684\u6570\u636E\u3002"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-go",children:'// \u83B7\u53D6\u9ED8\u8BA4\u914D\u7F6E\u7684\u6570\u636E\u5E93\u5BF9\u8C61(\u914D\u7F6E\u540D\u79F0\u4E3A"default")\ndb := g.DB()\n\ndb.Union(\n    db.Model("user").Where("id", 1),\n    db.Model("user").Where("id", 2),\n    db.Model("user").WhereIn("id", g.Slice{1, 2, 3}),\n).OrderDesc("id").All()\n// (SELECT * FROM `user` WHERE `id`=1)\n// UNION\n// (SELECT * FROM `user` WHERE `id`=2)\n// UNION\n// (SELECT * FROM `user` WHERE `id` IN (1,2,3)\n// ORDER BY `id` DESC) ORDER BY `id` DESC\n'})}),"\n",(0,d.jsxs)(e.p,{children:["\u4E5F\u53EF\u4EE5\u901A\u8FC7 ",(0,d.jsx)(e.code,{children:"dao"})," \u94FE\u5F0F\u64CD\u4F5C\u5B9E\u73B0\uFF1A"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-go",children:"dao.User.Union(\n    dao.User.Where(dao.User.Columns.Id, 1),\n    dao.User.Where(dao.User.Columns.Id, 2),\n    dao.User.WhereIn(dao.User.Columns.Id, g.Slice{1, 2, 3}),\n).OrderDesc(dao.User.Columns.Id).All()\n// (SELECT * FROM `user` WHERE `id`=1)\n// UNION\n// (SELECT * FROM `user` WHERE `id`=2)\n// UNION\n// (SELECT * FROM `user` WHERE `id` IN (1,2,3)\n// ORDER BY `id` DESC) ORDER BY `id` DESC\n"})}),"\n",(0,d.jsx)(e.h2,{id:"unionall",children:(0,d.jsx)(e.code,{children:"UnionAll"})}),"\n",(0,d.jsxs)(e.p,{children:["\u4F7F\u7528 ",(0,d.jsx)(e.code,{children:"UnionAll"})," \u64CD\u4F5C\u7B26\uFF0C\u591A\u4E2A ",(0,d.jsx)(e.code,{children:"SELECT"})," \u8BED\u53E5\u4E0D\u4F1A\u5220\u9664\u91CD\u590D\u7684\u6570\u636E\u3002"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-go",children:'db.UnionAll(\n    db.Model("user").Where("id", 1),\n    db.Model("user").Where("id", 2),\n    db.Model(table).WhereIn("id", g.Slice{1, 2, 3}),\n).OrderDesc("id").All()\n// (SELECT * FROM `user` WHERE `id`=1)\n// UNION ALL\n// (SELECT * FROM `user` WHERE `id`=2)\n// UNION ALL\n// (SELECT * FROM `user` WHERE `id` IN (1,2,3)\n// ORDER BY `id` DESC) ORDER BY `id` DESC\n'})}),"\n",(0,d.jsxs)(e.p,{children:["\u4E5F\u53EF\u4EE5\u901A\u8FC7 ",(0,d.jsx)(e.code,{children:"dao"})," \u94FE\u5F0F\u64CD\u4F5C\u5B9E\u73B0\uFF1A"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-go",children:"dao.User.UnionAll(\n    dao.User.Where(dao.User.Columns.Id, 1),\n    dao.User.Where(dao.User.Columns.Id, 2),\n    dao.User.WhereIn(dao.User.Columns.Id, g.Slice{1, 2, 3}),\n).OrderDesc(dao.User.Columns.Id).All()\n// (SELECT * FROM `user` WHERE `id`=1)\n// UNION ALL\n// (SELECT * FROM `user` WHERE `id`=2)\n// UNION ALL\n// (SELECT * FROM `user` WHERE `id` IN (1,2,3)\n// ORDER BY `id` DESC) ORDER BY `id` DESC\n"})})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(a,{...n})}):a(n)}},250065:function(n,e,o){o.d(e,{Z:function(){return s},a:function(){return l}});var i=o(667294);let d={},r=i.createContext(d);function l(n){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:l(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);