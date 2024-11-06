"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[53803],{351644:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>c,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u8c03\u8bd5\u4fe1\u606f","title":"\u65e5\u5fd7\u7ec4\u4ef6-\u8c03\u8bd5\u4fe1\u606f","description":"Debug/Debugf \u662f\u975e\u5e38\u6709\u7528\u7684\u51e0\u4e2a\u65b9\u6cd5\uff0c\u7528\u4e8e\u8c03\u8bd5\u4fe1\u606f\u7684\u8bb0\u5f55\uff0c\u5e38\u7528\u4e8e\u5f00\u53d1/\u6d4b\u8bd5\u73af\u5883\u4e2d\uff0c\u5f53\u5e94\u7528\u4e0a\u7ebf\u4e4b\u540e\u53ef\u4ee5\u65b9\u4fbf\u5730\u4f7f\u7528 SetDebug \u6216\u8005\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u5f00\u542f/\u5173\u95ed\u3002","source":"@site/versioned_docs/version-2.3.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u8c03\u8bd5\u4fe1\u606f.md","sourceDirName":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6","slug":"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u8c03\u8bd5\u4fe1\u606f","permalink":"/2.3.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u8c03\u8bd5\u4fe1\u606f","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u8c03\u8bd5\u4fe1\u606f.md","tags":[],"version":"2.3.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":10,"frontMatter":{"title":"\u65e5\u5fd7\u7ec4\u4ef6-\u8c03\u8bd5\u4fe1\u606f","sidebar_position":10,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u65e5\u5fd7\u7ec4\u4ef6-\u5806\u6808\u6253\u5370","permalink":"/2.3.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u5806\u6808\u6253\u5370"},"next":{"title":"\u65e5\u5fd7\u7ec4\u4ef6-Writer\u63a5\u53e3","permalink":"/2.3.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-Writer\u63a5\u53e3"}}');var i=t(474848),s=t(28453);const c={title:"\u65e5\u5fd7\u7ec4\u4ef6-\u8c03\u8bd5\u4fe1\u606f",sidebar_position:10,hide_title:!0},r=void 0,l={},d=[];function a(e){const n={blockquote:"blockquote",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Debug/Debugf"})," \u662f\u975e\u5e38\u6709\u7528\u7684\u51e0\u4e2a\u65b9\u6cd5\uff0c\u7528\u4e8e\u8c03\u8bd5\u4fe1\u606f\u7684\u8bb0\u5f55\uff0c\u5e38\u7528\u4e8e\u5f00\u53d1/\u6d4b\u8bd5\u73af\u5883\u4e2d\uff0c\u5f53\u5e94\u7528\u4e0a\u7ebf\u4e4b\u540e\u53ef\u4ee5\u65b9\u4fbf\u5730\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"SetDebug"})," \u6216\u8005\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u5f00\u542f/\u5173\u95ed\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "time"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gtime"\n    "github.com/gogf/gf/v2/os/gtimer"\n)\n\nfunc main() {\n    ctx := context.TODO()\n    gtimer.SetTimeout(ctx, 3*time.Second, func(ctx context.Context) {\n        g.Log().SetDebug(false)\n    })\n    for {\n        g.Log().Debug(ctx, gtime.Datetime())\n        g.Log().Info(ctx, gtime.Datetime())\n        time.Sleep(time.Second)\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u8be5\u793a\u4f8b\u4e2d\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"glog.Debug"})," \u65b9\u6cd5\u8f93\u51fa\u8c03\u8bd5\u4fe1\u606f\uff0c3\u79d2\u540e\u5173\u95ed\u8c03\u8bd5\u4fe1\u606f\u7684\u8f93\u51fa\u3002\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\uff0c\u53ef\u4ee5\u770b\u5230\u53ea\u8f93\u51fa\u4e863\u6761\u65e5\u5fd7\u4fe1\u606f\uff0c\u540e\u7eed\u7684\u8c03\u8bd5\u65e5\u5fd7\u4fe1\u606f\u7531\u4e8e\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"SetDebug"})," \u65b9\u6cd5\u5173\u95ed\u540e\uff0c\u4fbf\u4e0d\u518d\u8f93\u51fa\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"2022-01-05 15:59:05.674 [DEBU] 2022-01-05 15:59:05\n2022-01-05 15:59:05.675 [INFO] 2022-01-05 15:59:05\n2022-01-05 15:59:06.684 [DEBU] 2022-01-05 15:59:06\n2022-01-05 15:59:06.684 [INFO] 2022-01-05 15:59:06\n2022-01-05 15:59:07.692 [DEBU] 2022-01-05 15:59:07\n2022-01-05 15:59:07.692 [INFO] 2022-01-05 15:59:07\n2022-01-05 15:59:08.708 [INFO] 2022-01-05 15:59:08\n2022-01-05 15:59:09.717 [INFO] 2022-01-05 15:59:09\n2022-01-05 15:59:10.728 [INFO] 2022-01-05 15:59:10\n2022-01-05 15:59:11.733 [INFO] 2022-01-05 15:59:11\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u8fd8\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u884c\u53c2\u6570\u6216\u8005\u7cfb\u7edf\u73af\u5883\u53d8\u91cf\u53c2\u6570\u7684\u65b9\u5f0f\u5173\u95ed\u6389\u8c03\u8bd5\u4fe1\u606f\u3002"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4fee\u6539\u547d\u4ee4\u884c\u542f\u52a8\u53c2\u6570 - ",(0,i.jsx)(n.code,{children:"gf.glog.debug=false"}),"\uff1b"]}),"\n",(0,i.jsxs)(n.li,{children:["\u4fee\u6539\u6307\u5b9a\u7684\u73af\u5883\u53d8\u91cf - ",(0,i.jsx)(n.code,{children:"GF_GLOG_DEBUG=false"}),"\uff1b"]}),"\n"]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var o=t(296540);const i={},s=o.createContext(i);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);