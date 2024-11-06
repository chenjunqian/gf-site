"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[85239],{638144:(o,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>p,metadata:()=>t,toc:()=>r});const t=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u5b89\u5168\u7c7b\u578b-gtype/\u5b89\u5168\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5","title":"\u5b89\u5168\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5","description":"\u57fa\u51c6\u6d4b\u8bd5\u7ed3\u679c\u5982\u4e0b\uff1a","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u5b89\u5168\u7c7b\u578b-gtype/\u5b89\u5168\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u5b89\u5168\u7c7b\u578b-gtype","slug":"/docs/components/container-gtype-benchmark","permalink":"/docs/components/container-gtype-benchmark","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u5b89\u5168\u7c7b\u578b-gtype/\u5b89\u5168\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730726699000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/components/container-gtype-benchmark","title":"\u5b89\u5168\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5","sidebar_position":1,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u5b89\u5168\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528","permalink":"/docs/components/container-gtype-example"},"next":{"title":"\u961f\u5217\u7c7b\u578b-gqueue","permalink":"/docs/components/container-gqueue"}}');var c=e(474848),s=e(28453);const p={slug:"/docs/components/container-gtype-benchmark",title:"\u5b89\u5168\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5",sidebar_position:1,hide_title:!0},a=void 0,l={},r=[];function i(o){const n={code:"code",p:"p",pre:"pre",...(0,s.R)(),...o.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"\u57fa\u51c6\u6d4b\u8bd5\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:'john@john-B85M:~/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/container/gtype$ go test -bench=".*"  -benchmem\ngoos: linux\ngoarch: amd64\npkg: github.com/gogf/gf/v2/container/gtype\nBenchmarkInt_Set-4            300000000           5.87 ns/op        0 B/op        0 allocs/op\nBenchmarkInt_Val-4            2000000000          0.46 ns/op        0 B/op        0 allocs/op\nBenchmarkInt_Add-4            300000000           5.86 ns/op        0 B/op        0 allocs/op\nBenchmarkInt32_Set-4          300000000           5.87 ns/op        0 B/op        0 allocs/op\nBenchmarkInt32_Val-4          2000000000          0.47 ns/op        0 B/op        0 allocs/op\nBenchmarkInt32_Add-4          300000000           5.85 ns/op        0 B/op        0 allocs/op\nBenchmarkInt64_Set-4          300000000           5.88 ns/op        0 B/op        0 allocs/op\nBenchmarkInt64_Val-4          2000000000          0.46 ns/op        0 B/op        0 allocs/op\nBenchmarkInt64_Add-4          300000000           5.88 ns/op        0 B/op        0 allocs/op\nBenchmarkUint_Set-4           300000000           5.88 ns/op        0 B/op        0 allocs/op\nBenchmarkUint_Val-4           2000000000          0.46 ns/op        0 B/op        0 allocs/op\nBenchmarkUint_Add-4           300000000           5.87 ns/op        0 B/op        0 allocs/op\nBenchmarkUint32_Set-4         300000000           5.86 ns/op        0 B/op        0 allocs/op\nBenchmarkUint32_Val-4         2000000000          0.50 ns/op        0 B/op        0 allocs/op\nBenchmarkUint32_Add-4         200000000           5.86 ns/op        0 B/op        0 allocs/op\nBenchmarkUint64_Set-4         300000000           5.86 ns/op        0 B/op        0 allocs/op\nBenchmarkUint64_Val-4         2000000000          0.47 ns/op        0 B/op        0 allocs/op\nBenchmarkUint64_Add-4         300000000           5.85 ns/op        0 B/op        0 allocs/op\nBenchmarkBool_Set-4           300000000           5.85 ns/op        0 B/op        0 allocs/op\nBenchmarkBool_Val-4           2000000000          0.46 ns/op        0 B/op        0 allocs/op\nBenchmarkString_Set-4         20000000            90.1 ns/op       23 B/op        1 allocs/op\nBenchmarkString_Val-4         2000000000          1.58 ns/op        0 B/op        0 allocs/op\nBenchmarkBytes_Set-4          20000000            76.2 ns/op       35 B/op        2 allocs/op\nBenchmarkBytes_Val-4          2000000000          1.58 ns/op        0 B/op        0 allocs/op\nBenchmarkInterface_Set-4      50000000            30.7 ns/op        8 B/op        0 allocs/op\nBenchmarkInterface_Val-4      2000000000          0.74 ns/op        0 B/op        0 allocs/op\nBenchmarkAtomicValue_Store-4  50000000            27.3 ns/op        8 B/op        0 allocs/op\nBenchmarkAtomicValue_Load-4   2000000000          0.73 ns/op        0 B/op        0 allocs/op\nPASS\nok   github.com/gogf/gf/v2/container/gtype 49.454s\n'})})]})}function m(o={}){const{wrapper:n}={...(0,s.R)(),...o.components};return n?(0,c.jsx)(n,{...o,children:(0,c.jsx)(i,{...o})}):i(o)}},28453:(o,n,e)=>{e.d(n,{R:()=>p,x:()=>a});var t=e(296540);const c={},s=t.createContext(c);function p(o){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof o?o(n):{...n,...o}}),[n,o])}function a(o){let n;return n=o.disableParentContext?"function"==typeof o.components?o.components(c):o.components||c:p(o.components),t.createElement(s.Provider,{value:n},o.children)}}}]);