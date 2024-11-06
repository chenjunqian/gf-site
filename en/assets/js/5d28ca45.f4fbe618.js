"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[43575],{195839:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"\u6a21\u5757\u5217\u8868/\u7f16\u7801\u89e3\u7801/gcharset -\u5b57\u7b26\u96c6\u8f6c\u6362","title":"gcharset (\u5b57\u7b26\u96c6\u8f6c\u6362)","description":"\u5f3a\u5927\u7684\u5b57\u7b26\u7f16\u7801\u8f6c\u6362\u6a21\u5757\u3002","source":"@site/versioned_docs/version-1.16.x/\u6a21\u5757\u5217\u8868/\u7f16\u7801\u89e3\u7801/gcharset -\u5b57\u7b26\u96c6\u8f6c\u6362.md","sourceDirName":"\u6a21\u5757\u5217\u8868/\u7f16\u7801\u89e3\u7801","slug":"/\u6a21\u5757\u5217\u8868/\u7f16\u7801\u89e3\u7801/gcharset -\u5b57\u7b26\u96c6\u8f6c\u6362","permalink":"/en/1.16.x/\u6a21\u5757\u5217\u8868/\u7f16\u7801\u89e3\u7801/gcharset -\u5b57\u7b26\u96c6\u8f6c\u6362","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u6a21\u5757\u5217\u8868/\u7f16\u7801\u89e3\u7801/gcharset -\u5b57\u7b26\u96c6\u8f6c\u6362.md","tags":[],"version":"1.16.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":11,"frontMatter":{"title":"gcharset (\u5b57\u7b26\u96c6\u8f6c\u6362)","sidebar_position":11,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"gtoml (TOML\u7f16\u89e3\u7801)","permalink":"/en/1.16.x/\u6a21\u5757\u5217\u8868/\u7f16\u7801\u89e3\u7801/gtoml -TOML\u7f16\u89e3\u7801"},"next":{"title":"gcompress (\u538b\u7f29/\u89e3\u538b)","permalink":"/en/1.16.x/\u6a21\u5757\u5217\u8868/\u7f16\u7801\u89e3\u7801/gcompress -\u538b\u7f29\u89e3\u538b"}}');var r=s(474848),c=s(28453);const i={title:"gcharset (\u5b57\u7b26\u96c6\u8f6c\u6362)",sidebar_position:11,hide_title:!0},o=void 0,d={},l=[];function a(e){const n={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u5f3a\u5927\u7684\u5b57\u7b26\u7f16\u7801\u8f6c\u6362\u6a21\u5757\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u652f\u6301\u7684\u5b57\u7b26\u96c6:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4e2d\u6587 : ",(0,r.jsx)(n.code,{children:"GBK/GB18030/GB2312/Big5"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u65e5\u6587 : ",(0,r.jsx)(n.code,{children:"EUCJP/ISO2022JP/ShiftJIS"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u97e9\u6587 : ",(0,r.jsx)(n.code,{children:"EUCKR"})]}),"\n",(0,r.jsxs)(n.li,{children:["Unicode : ",(0,r.jsx)(n.code,{children:"UTF-8/UTF-16/UTF-16BE/UTF-16LE"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u5176\u4ed6\u7f16\u7801 : ",(0,r.jsx)(n.code,{children:"macintosh/IBM*/Windows*/ISO-*"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/encoding/gcharset"\n\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://godoc.org/github.com/gogf/gf/encoding/gcharset",children:"https://godoc.org/github.com/gogf/gf/encoding/gcharset"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u4f7f\u7528\u793a\u4f8b"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/encoding/gcharset"\n)\n\nfunc main() {\n    src        := "~{;(<dR;:x>F#,6@WCN^O`GW!#"\n    srcCharset := "GB2312"\n    dstCharset := "UTF-8"\n    str, err := gcharset.Convert(dstCharset, srcCharset, src)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Println(str)\n}\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"\u82b1\u95f4\u4e00\u58f6\u9152\uff0c\u72ec\u914c\u65e0\u76f8\u4eb2\u3002\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var t=s(296540);const r={},c=t.createContext(r);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);