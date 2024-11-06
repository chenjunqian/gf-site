"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[29847],{535358:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u9519\u8bef\u5904\u7406/\u9519\u8bef\u5904\u7406-\u9519\u8bef\u7801\u7279\u6027/\u9519\u8bef\u5904\u7406-\u9519\u8bef\u7801\u63a5\u53e3","title":"\u9519\u8bef\u5904\u7406-\u9519\u8bef\u7801\u63a5\u53e3","description":"\u57fa\u672c\u4ecb\u7ecd","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u9519\u8bef\u5904\u7406/\u9519\u8bef\u5904\u7406-\u9519\u8bef\u7801\u7279\u6027/\u9519\u8bef\u5904\u7406-\u9519\u8bef\u7801\u63a5\u53e3.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u9519\u8bef\u5904\u7406/\u9519\u8bef\u5904\u7406-\u9519\u8bef\u7801\u7279\u6027","slug":"/docs/core/gerror-code-interface","permalink":"/docs/core/gerror-code-interface","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u9519\u8bef\u5904\u7406/\u9519\u8bef\u5904\u7406-\u9519\u8bef\u7801\u7279\u6027/\u9519\u8bef\u5904\u7406-\u9519\u8bef\u7801\u63a5\u53e3.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730726699000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/core/gerror-code-interface","title":"\u9519\u8bef\u5904\u7406-\u9519\u8bef\u7801\u63a5\u53e3","sidebar_position":1,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u9519\u8bef\u5904\u7406-\u9519\u8bef\u7801\u4f7f\u7528","permalink":"/docs/core/gerror-code-example"},"next":{"title":"\u9519\u8bef\u5904\u7406-\u9519\u8bef\u7801\u6269\u5c55","permalink":"/docs/core/gerror-code-extension"}}');var o=r(474848),c=r(28453);const i={slug:"/docs/core/gerror-code-interface",title:"\u9519\u8bef\u5904\u7406-\u9519\u8bef\u7801\u63a5\u53e3",sidebar_position:1,hide_title:!0},s=void 0,d={},l=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u63a5\u53e3\u5b9a\u4e49",id:"\u63a5\u53e3\u5b9a\u4e49",level:2},{value:"\u9ed8\u8ba4\u5b9e\u73b0",id:"\u9ed8\u8ba4\u5b9e\u73b0",level:2}];function a(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,o.jsxs)(n.p,{children:["\u6846\u67b6\u63d0\u4f9b\u4e86\u9ed8\u8ba4\u7684\u9519\u8bef\u7801\u7ec4\u4ef6 ",(0,o.jsx)(n.code,{children:"gcode"}),"\uff0c\u9519\u8bef\u7801\u4f7f\u7528\u63a5\u53e3\u5316\u8bbe\u8ba1\uff0c\u4ee5\u5b9e\u73b0\u9ad8\u6269\u5c55\u6027\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"\u63a5\u53e3\u5b9a\u4e49",children:"\u63a5\u53e3\u5b9a\u4e49"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"// Code is universal error code interface definition.\ntype Code interface {\n    // Code returns the integer number of current error code.\n    Code() int\n\n    // Message returns the brief message for current error code.\n    Message() string\n\n    // Detail returns the detailed information of current error code,\n    // which is mainly designed as an extension field for error code.\n    Detail() interface{}\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u9ed8\u8ba4\u5b9e\u73b0",children:"\u9ed8\u8ba4\u5b9e\u73b0"}),"\n",(0,o.jsxs)(n.p,{children:["\u6846\u67b6\u63d0\u4f9b\u4e86\u9ed8\u8ba4\u5b9e\u73b0 ",(0,o.jsx)(n.code,{children:"gcode.Code"})," \u7684\u7ed3\u6784\u4f53\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"New/WithCode"})," \u65b9\u6cd5\u521b\u5efa\u9519\u8bef\u7801\uff1a"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u683c\u5f0f\uff1a"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"// New creates and returns an error code.\n// Note that it returns an interface object of Code.\nfunc New(code int, message string, detail interface{}) Code\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u793a\u4f8b\uff1a"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'func ExampleNew() {\n      c := gcode.New(1, "custom error", "detailed description")\n      fmt.Println(c.Code())\n      fmt.Println(c.Message())\n      fmt.Println(c.Detail())\n\n      // Output:\n      // 1\n      // custom error\n      // detailed description\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u5982\u679c\u5f00\u53d1\u8005\u89c9\u5f97\u6846\u67b6\u9ed8\u8ba4\u5b9e\u73b0 ",(0,o.jsx)(n.code,{children:"gcode.Code"})," \u7684\u7ed3\u6784\u4f53\u4e0d\u6ee1\u8db3\u9700\u6c42\uff0c\u53ef\u4ee5\u81ea\u884c\u5b9a\u4e49\uff0c\u53ea\u9700\u5b9e\u73b0 ",(0,o.jsx)(n.code,{children:"gcode.Code"})," \u5373\u53ef\u3002"]})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>s});var t=r(296540);const o={},c=t.createContext(o);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);