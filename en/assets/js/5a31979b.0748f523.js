"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[6916],{487737:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>a,frontMatter:()=>d,metadata:()=>c,toc:()=>o});const c=JSON.parse('{"id":"docs/\u6846\u67b6\u8bbe\u8ba1/\u5de5\u7a0b\u5f00\u53d1\u8bbe\u8ba1/\u7ed3\u6784\u5316\u7f16\u7a0b\u8bbe\u8ba1","title":"\u7ed3\u6784\u5316\u7f16\u7a0b\u8bbe\u8ba1","description":"\u4e00\u3001\u57fa\u672c\u4ecb\u7ecd","source":"@site/docs/docs/\u6846\u67b6\u8bbe\u8ba1/\u5de5\u7a0b\u5f00\u53d1\u8bbe\u8ba1/\u7ed3\u6784\u5316\u7f16\u7a0b\u8bbe\u8ba1.md","sourceDirName":"docs/\u6846\u67b6\u8bbe\u8ba1/\u5de5\u7a0b\u5f00\u53d1\u8bbe\u8ba1","slug":"/docs/design/project-struct-parameter","permalink":"/en/docs/design/project-struct-parameter","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6846\u67b6\u8bbe\u8ba1/\u5de5\u7a0b\u5f00\u53d1\u8bbe\u8ba1/\u7ed3\u6784\u5316\u7f16\u7a0b\u8bbe\u8ba1.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730726699000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/design/project-struct-parameter","title":"\u7ed3\u6784\u5316\u7f16\u7a0b\u8bbe\u8ba1","sidebar_position":3,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"DAO-\u5de5\u7a0b\u75db\u70b9\u53ca\u6539\u8fdb","permalink":"/en/docs/design/project-dao-improvement"},"next":{"title":"\u6570\u636e\u6a21\u578b\u4e0e\u4e1a\u52a1\u6a21\u578b","permalink":"/en/docs/design/project-models"}}');var i=s(474848),r=s(28453);const d={slug:"/docs/design/project-struct-parameter",title:"\u7ed3\u6784\u5316\u7f16\u7a0b\u8bbe\u8ba1",sidebar_position:3,hide_title:!0},l=void 0,t={},o=[{value:"\u4e00\u3001\u57fa\u672c\u4ecb\u7ecd",id:"\u4e00\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"1\u3001 <code>controller</code> \u975e\u7ed3\u6784\u5316\u75db\u70b9",id:"1-controller-\u975e\u7ed3\u6784\u5316\u75db\u70b9",level:3},{value:"2\u3001 <code>service</code> \u975e\u7ed3\u6784\u5316\u75db\u70b9",id:"2-service-\u975e\u7ed3\u6784\u5316\u75db\u70b9",level:3},{value:"\u4e8c\u3001\u7ed3\u6784\u5316\u7f16\u7a0b",id:"\u4e8c\u7ed3\u6784\u5316\u7f16\u7a0b",level:2},{value:"1\u3001 <code>controller</code> \u7ed3\u6784\u5316\u6539\u8fdb",id:"1-controller-\u7ed3\u6784\u5316\u6539\u8fdb",level:3},{value:"2\u3001 <code>service</code> \u7ed3\u6784\u5316\u6539\u8fdb",id:"2-service-\u7ed3\u6784\u5316\u6539\u8fdb",level:3},{value:"\u4e09\u3001\u6ce8\u610f\u4e8b\u9879",id:"\u4e09\u6ce8\u610f\u4e8b\u9879",level:2}];function h(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u4e00\u57fa\u672c\u4ecb\u7ecd",children:"\u4e00\u3001\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,i.jsx)(n.p,{children:"\u7ed3\u6784\u5316\u7f16\u7a0b\uff0c\u7b80\u5355\u6765\u7406\u89e3\uff0c\u5c31\u662f\u901a\u8fc7\u5b9a\u4e49\u7ed3\u6784\u4f53\u4f20\u9012\u548c\u8fd4\u56de\u53c2\u6570\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4eec\u5efa\u8bae\u5728\u5fc5\u8981\u7684\u573a\u666f\u4e0b\u4f7f\u7528\u7ed3\u6784\u5316\u5b9a\u4e49\u6765\u7ba1\u7406\u8f93\u5165/\u8f93\u51fa\uff0c\u5c24\u5176\u662f\u5728 ",(0,i.jsx)(n.code,{children:"controller"})," \u548c ",(0,i.jsx)(n.code,{children:"service"})," \u4e24\u5c42\u7684\u4ee3\u7801\u8bbe\u8ba1\u4e2d\u3002"]}),"\n",(0,i.jsxs)(n.h3,{id:"1-controller-\u975e\u7ed3\u6784\u5316\u75db\u70b9",children:["1\u3001 ",(0,i.jsx)(n.code,{children:"controller"})," \u975e\u7ed3\u6784\u5316\u75db\u70b9"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(470931).A+"",width:"2320",height:"1296"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u96be\u4ee5\u786e\u5b9a\u63a5\u53e3\u8f93\u5165/\u8f93\u51fa\u6570\u636e\u7ed3\u6784\uff0c\u5927\u591a\u6570\u7684\u573a\u666f\u662f\u5728\u4ee3\u7801\u4e2d\u786c\u7f16\u7801\u53c2\u6570\u63a5\u6536\u540d\u79f0\uff0c\u6613\u628a\u540d\u79f0\u5199\u9519\u9020\u6210\u4e0d\u53ef\u9884\u6599\u7684\u95ee\u9898"}),"\n",(0,i.jsxs)(n.li,{children:["\u63a5\u53e3\u53c2\u6570\u5f80\u5f80\u53ea\u5b9a\u4e49\u4e00\u4e2a ",(0,i.jsx)(n.code,{children:"HttpRequest/HttpContext"})," \u5bf9\u8c61\u6307\u9488\uff0c\u6267\u884c\u7ed3\u679c\u76f4\u63a5\u5199\u5165\u5230\u5bf9\u8c61\uff0c\u96be\u4ee5\u786e\u5b9a\u63a5\u53e3\u662f\u5426\u6210\u529f/\u5931\u8d25"]}),"\n",(0,i.jsx)(n.li,{children:"\u53c2\u6570\u63a5\u6536\u3001\u6821\u9a8c\u3001\u8f6c\u6362\u5904\u7406\u5de5\u4f5c\u7e41\u7410"}),"\n",(0,i.jsx)(n.li,{children:"\u63a5\u53e3\u6587\u6863\u751f\u6210\u4ee5\u53ca\u7ef4\u62a4\u6781\u4e3a\u56f0\u96be"}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"2-service-\u975e\u7ed3\u6784\u5316\u75db\u70b9",children:["2\u3001 ",(0,i.jsx)(n.code,{children:"service"})," \u975e\u7ed3\u6784\u5316\u75db\u70b9"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(755186).A+"",width:"2874",height:"1406"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5f53\u65b9\u6cd5\u53c2\u6570\u8f83\u591a\u7684\u65f6\uff0c\u5b9a\u4e49\u4e11\u964b\uff0c\u4f7f\u7528\u522b\u626d"}),"\n",(0,i.jsx)(n.li,{children:"\u5f53\u65b9\u6cd5\u53c2\u6570\u6570\u91cf\u3001\u7c7b\u578b\u4e0d\u592a\u786e\u5b9a\u65f6\uff0c\u4efb\u610f\u7684\u53c2\u6570\u53d8\u5316\u90fd\u662f\u975e\u517c\u5bb9\u7684(\u4f8b\u5982\u65b0\u589e\u53c2\u6570)\uff0c\u4f1a\u5f15\u8d77\u8f83\u9ad8\u7684\u4fee\u6539\u6210\u672c"}),"\n",(0,i.jsx)(n.li,{children:"\u65b9\u6cd5\u53c2\u6570\u6ce8\u91ca\u4e0d\u7b80\u4fbf\uff0c\u4ee5\u81f3\u4e8e\u7edd\u5927\u90e8\u5206\u4e1a\u52a1\u9879\u76ee\u90fd\u4e0d\u4f1a\u6709\u65b9\u6cd5\u53c2\u6570\u6ce8\u91ca"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4e8c\u7ed3\u6784\u5316\u7f16\u7a0b",children:"\u4e8c\u3001\u7ed3\u6784\u5316\u7f16\u7a0b"}),"\n",(0,i.jsxs)(n.h3,{id:"1-controller-\u7ed3\u6784\u5316\u6539\u8fdb",children:["1\u3001 ",(0,i.jsx)(n.code,{children:"controller"})," \u7ed3\u6784\u5316\u6539\u8fdb"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u7ed3\u6784\u5316\u4f18\u70b9\uff1a"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u901a\u8fc7\u7ed3\u6784\u5316\u7ba1\u7406\u63a5\u53e3\u8f93\u5165/\u8f93\u51fa\u53c2\u6570\uff0c\u53c2\u6570\u63a5\u6536\u4e0d\u518d\u9700\u8981\u786c\u7f16\u7801\u53c2\u6570\u540d\u79f0\uff0c\u964d\u4f4e\u7ef4\u62a4\u6210\u672c\uff0c\u907f\u514d\u53c2\u6570\u540d\u79f0\u786c\u7f16\u7801\u9519\u8bef\u95ee\u9898"}),"\n",(0,i.jsx)(n.li,{children:"\u53ef\u4ee5\u505a\u5230\u81ea\u52a8\u5316\u7684\u53c2\u6570\u63a5\u6536\u3001\u8f6c\u6362\u3001\u6821\u9a8c\uff0c\u63d0\u9ad8\u751f\u4ea7\u529b"}),"\n",(0,i.jsx)(n.li,{children:"\u53ef\u4ee5\u89c4\u8303\u5316\u63a5\u53e3\u7f16\u5199"}),"\n",(0,i.jsxs)(n.li,{children:["\u4f7f\u5f97\u63a5\u53e3\u7ba1\u7406\u80fd\u591f\u50cf\u666e\u901a\u7684\u51fd\u6570\u7ba1\u7406\u90a3\u4e48\u65b9\u4fbf\uff0c\u901a\u8fc7\u8fd4\u56de ",(0,i.jsx)(n.code,{children:"error"})," \u6765\u5224\u65ad\u63a5\u53e3\u5904\u7406\u7ed3\u679c\uff0c\u5e76\u53ef\u4ee5\u89c4\u8303\u5316\u7edf\u4e00\u9519\u8bef\u673a\u5236"]}),"\n",(0,i.jsx)(n.li,{children:"\u4f7f\u5f97\u81ea\u52a8\u5316\u7684\u63a5\u53e3\u6587\u6863\u751f\u6210\u53d8\u4e3a\u4e86\u53ef\u80fd\uff0c\u5e76\u4fdd\u969c\u4e86\u63a5\u53e3\u7ed3\u6784\u5b9a\u4e49\u548c\u63a5\u53e3\u6587\u6863\u540c\u6b65\u7ef4\u62a4"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u7ed3\u6784\u5316\u793a\u4f8b\uff1a"})}),"\n",(0,i.jsx)(n.p,{children:"\u7ed3\u6784\u5b9a\u4e49\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(198652).A+"",width:"2308",height:"682"})}),"\n",(0,i.jsx)(n.p,{children:"\u65b9\u6cd5\u4f7f\u7528\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(198238).A+"",width:"2304",height:"842"})}),"\n",(0,i.jsxs)(n.h3,{id:"2-service-\u7ed3\u6784\u5316\u6539\u8fdb",children:["2\u3001 ",(0,i.jsx)(n.code,{children:"service"})," \u7ed3\u6784\u5316\u6539\u8fdb"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u7ed3\u6784\u5316\u4f18\u70b9\uff1a"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5f53\u65b9\u6cd5\u53c2\u6570\u8f83\u591a\u7684\u65f6\uff0c\u901a\u8fc7\u7ed3\u6784\u4f53\u4f18\u96c5\u7ba1\u7406\u53c2\u6570"}),"\n",(0,i.jsx)(n.li,{children:"\u5f53\u65b9\u6cd5\u53c2\u6570\u6570\u91cf\u3001\u7c7b\u578b\u4e0d\u592a\u786e\u5b9a\u65f6\uff0c\u53c2\u6570\u7684\u589e\u52a0\u5bf9\u65b9\u6cd5\u8c03\u7528\u6765\u8bf4\u90fd\u662f\u517c\u5bb9\u6027\u7684"}),"\n",(0,i.jsx)(n.li,{children:"\u5bf9\u7ed3\u6784\u4f53\u5c5e\u6027\u7684\u6ce8\u91ca\u63cf\u8ff0\u66f4\u52a0\u4fbf\u6377\uff0c\u63d0\u9ad8\u4ee3\u7801\u7ef4\u62a4\u8d28\u91cf"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u7ed3\u6784\u5316\u793a\u4f8b\uff1a"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(719294).A+"",width:"2892",height:"1192"})}),"\n",(0,i.jsx)(n.h2,{id:"\u4e09\u6ce8\u610f\u4e8b\u9879",children:"\u4e09\u3001\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"service"})," \u5c42\u7684\u65b9\u6cd5\u5728\u4f7f\u7528\u7ed3\u6784\u5316\u7ba1\u7406\u8f93\u5165/\u8f93\u51fa\u53c2\u6570\u65f6\uff0c\u7ed3\u6784\u4f53\u4e2d\u4efb\u610f\u53c2\u6570\u90fd\u5c06\u4f1a\u88ab\u770b\u505a\u975e\u5fc5\u9700\u53c2\u6570\u3002\u56e0\u6b64\u9700\u8981\u6839\u636e\u4e1a\u52a1\u573a\u666f\u5408\u7406\u8bc4\u4f30\u53ef\u884c\u6027\u3002"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},719294:(e,n,s)=>{s.d(n,{A:()=>c});const c=s.p+"assets/images/37a0eecf7f1c45bf99bdd98ec205eea0-08141c2116457e137d5407c72083517c.png"},198652:(e,n,s)=>{s.d(n,{A:()=>c});const c=s.p+"assets/images/686ee75e775a1076387154615c40e868-0ce0b414b8e6af9faf601a2587b95163.png"},198238:(e,n,s)=>{s.d(n,{A:()=>c});const c=s.p+"assets/images/6f0cd9333bb1c514a1047c0e17024997-89e3663c08e34a6df466ec4303cb66a9.png"},470931:(e,n,s)=>{s.d(n,{A:()=>c});const c=s.p+"assets/images/e76d9687eb2d840494ce98a644e05d95-0c853f11bd81600cbbe87d12d11c2601.png"},755186:(e,n,s)=>{s.d(n,{A:()=>c});const c=s.p+"assets/images/f8434f1243e4d9dace23021f0f2132a4-b965af8c5551a60cdda003b58292d54a.png"},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>l});var c=s(296540);const i={},r=c.createContext(i);function d(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);