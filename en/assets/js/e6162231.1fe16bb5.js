"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[53875],{843033:(n,o,e)=>{e.r(o),e.d(o,{assets:()=>r,contentTitle:()=>p,default:()=>m,frontMatter:()=>c,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"\u6838\u5fc3\u7ec4\u4ef6/\u7c7b\u578b\u8f6c\u6362/\u7c7b\u578b\u8f6c\u6362-\u6027\u80fd\u6d4b\u8bd5","title":"\u7c7b\u578b\u8f6c\u6362-\u6027\u80fd\u6d4b\u8bd5","description":"\u57fa\u672c\u7c7b\u578b\u8f6c\u6362\u6027\u80fd\u57fa\u51c6\u6d4b\u8bd5\uff1a","source":"@site/versioned_docs/version-2.5.x/\u6838\u5fc3\u7ec4\u4ef6/\u7c7b\u578b\u8f6c\u6362/\u7c7b\u578b\u8f6c\u6362-\u6027\u80fd\u6d4b\u8bd5.md","sourceDirName":"\u6838\u5fc3\u7ec4\u4ef6/\u7c7b\u578b\u8f6c\u6362","slug":"/\u6838\u5fc3\u7ec4\u4ef6/\u7c7b\u578b\u8f6c\u6362/\u7c7b\u578b\u8f6c\u6362-\u6027\u80fd\u6d4b\u8bd5","permalink":"/en/2.5.x/\u6838\u5fc3\u7ec4\u4ef6/\u7c7b\u578b\u8f6c\u6362/\u7c7b\u578b\u8f6c\u6362-\u6027\u80fd\u6d4b\u8bd5","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/\u6838\u5fc3\u7ec4\u4ef6/\u7c7b\u578b\u8f6c\u6362/\u7c7b\u578b\u8f6c\u6362-\u6027\u80fd\u6d4b\u8bd5.md","tags":[],"version":"2.5.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":6,"frontMatter":{"title":"\u7c7b\u578b\u8f6c\u6362-\u6027\u80fd\u6d4b\u8bd5","sidebar_position":6,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u7c7b\u578b\u8f6c\u6362-UnmarshalValue","permalink":"/en/2.5.x/\u6838\u5fc3\u7ec4\u4ef6/\u7c7b\u578b\u8f6c\u6362/\u7c7b\u578b\u8f6c\u6362-UnmarshalValue"},"next":{"title":"\u7f13\u5b58\u7ba1\u7406","permalink":"/en/2.5.x/\u6838\u5fc3\u7ec4\u4ef6/\u7f13\u5b58\u7ba1\u7406/"}}');var s=e(474848),a=e(28453);const c={title:"\u7c7b\u578b\u8f6c\u6362-\u6027\u80fd\u6d4b\u8bd5",sidebar_position:6,hide_title:!0},p=void 0,r={},l=[];function i(n){const o={code:"code",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{children:"\u57fa\u672c\u7c7b\u578b\u8f6c\u6362\u6027\u80fd\u57fa\u51c6\u6d4b\u8bd5\uff1a"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:'john@john-B85M:~/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/util/gconv$ go test *.go -bench=".*" -benchmem\ngoos: linux\ngoarch: amd64\nBenchmarkString-4               20000000                71.8 ns/op            24 B/op          2 allocs/op\nBenchmarkInt-4                  100000000               22.2 ns/op             8 B/op          1 allocs/op\nBenchmarkInt8-4                 100000000               24.5 ns/op             8 B/op          1 allocs/op\nBenchmarkInt16-4                50000000                23.8 ns/op             8 B/op          1 allocs/op\nBenchmarkInt32-4                100000000               24.1 ns/op             8 B/op          1 allocs/op\nBenchmarkInt64-4                100000000               21.7 ns/op             8 B/op          1 allocs/op\nBenchmarkUint-4                 100000000               22.2 ns/op             8 B/op          1 allocs/op\nBenchmarkUint8-4                50000000                25.6 ns/op             8 B/op          1 allocs/op\nBenchmarkUint16-4               50000000                32.1 ns/op             8 B/op          1 allocs/op\nBenchmarkUint32-4               50000000                27.7 ns/op             8 B/op          1 allocs/op\nBenchmarkUint64-4               50000000                28.1 ns/op             8 B/op          1 allocs/op\nBenchmarkFloat32-4              10000000               155 ns/op              24 B/op          2 allocs/op\nBenchmarkFloat64-4              10000000               177 ns/op              24 B/op          2 allocs/op\nBenchmarkTime-4                  5000000               240 ns/op              72 B/op          4 allocs/op\nBenchmarkTimeDuration-4         50000000                26.2 ns/op             8 B/op          1 allocs/op\nBenchmarkBytes-4                10000000               149 ns/op             128 B/op          3 allocs/op\nBenchmarkStrings-4              10000000               223 ns/op              40 B/op          3 allocs/op\nBenchmarkInts-4                 20000000                55.0 ns/op            16 B/op          2 allocs/op\nBenchmarkFloats-4               10000000               186 ns/op              32 B/op          3 allocs/op\nBenchmarkInterfaces-4           20000000                66.6 ns/op            24 B/op          2 allocs/op\nPASS\nok      command-line-arguments  35.356s\n'})})]})}function m(n={}){const{wrapper:o}={...(0,a.R)(),...n.components};return o?(0,s.jsx)(o,{...n,children:(0,s.jsx)(i,{...n})}):i(n)}},28453:(n,o,e)=>{e.d(o,{R:()=>c,x:()=>p});var t=e(296540);const s={},a=t.createContext(s);function c(n){const o=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(o):{...o,...n}}),[o,n])}function p(n){let o;return o=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),t.createElement(a.Provider,{value:o},n.children)}}}]);