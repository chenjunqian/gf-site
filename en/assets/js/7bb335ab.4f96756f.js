"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[66016],{343007:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/UDP\u7ec4\u4ef6/UDP\u7ec4\u4ef6-\u5de5\u5177\u65b9\u6cd5","title":"UDP\u7ec4\u4ef6-\u5de5\u5177\u65b9\u6cd5","description":"gudp \u6a21\u5757\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5e38\u7528\u7684\u5de5\u5177\u65b9\u6cd5\u3002","source":"@site/versioned_docs/version-2.2.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/UDP\u7ec4\u4ef6/UDP\u7ec4\u4ef6-\u5de5\u5177\u65b9\u6cd5.md","sourceDirName":"\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/UDP\u7ec4\u4ef6","slug":"/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/UDP\u7ec4\u4ef6/UDP\u7ec4\u4ef6-\u5de5\u5177\u65b9\u6cd5","permalink":"/en/2.2.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/UDP\u7ec4\u4ef6/UDP\u7ec4\u4ef6-\u5de5\u5177\u65b9\u6cd5","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.2.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/UDP\u7ec4\u4ef6/UDP\u7ec4\u4ef6-\u5de5\u5177\u65b9\u6cd5.md","tags":[],"version":"2.2.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":1,"frontMatter":{"title":"UDP\u7ec4\u4ef6-\u5de5\u5177\u65b9\u6cd5","sidebar_position":1,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"UDP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61","permalink":"/en/2.2.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/UDP\u7ec4\u4ef6/UDP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61"},"next":{"title":"WebSocket","permalink":"/en/2.2.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/WebSocket"}}');var o=t(474848),d=t(28453);const i={title:"UDP\u7ec4\u4ef6-\u5de5\u5177\u65b9\u6cd5",sidebar_position:1,hide_title:!0},s=void 0,c={},a=[];function l(e){const n={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"gudp"})," \u6a21\u5757\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5e38\u7528\u7684\u5de5\u5177\u65b9\u6cd5\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/net/gudp"\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gudp",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gudp"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"func Checksum(buffer []byte) uint32\nfunc NewNetConn(raddr string, laddr ...string) (*net.UDPConn, error)\nfunc Send(addr string, data []byte, retry ...Retry) error\nfunc SendPkg(addr string, data []byte, retry ...Retry) error\nfunc SendPkgWithTimeout(addr string, data []byte, timeout time.Duration, retry ...Retry) error\nfunc SendRecv(addr string, data []byte, receive int, retry ...Retry) ([]byte, error)\nfunc SendRecvPkg(addr string, data []byte, retry ...Retry) ([]byte, error)\nfunc SendRecvPkgWithTimeout(addr string, data []byte, timeout time.Duration, retry ...Retry) ([]byte, error)\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"gudp"})," \u7684\u5de5\u5177\u76f8\u5bf9\u6bd4\u8f83\u7b80\u5355\u3002"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\u5176\u4e2d\uff0c ",(0,o.jsx)(n.code,{children:"NewNetConn"})," \u65b9\u6cd5\u7528\u4e8e\u521b\u5efa\u6807\u51c6\u5e93\u7684 ",(0,o.jsx)(n.code,{children:"net.UDPConn"})," \u901a\u4fe1\u5bf9\u8c61\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Send"})," \u4e0e ",(0,o.jsx)(n.code,{children:"SendRecv"})," \u7528\u4e8e\u6839\u636e\u7ed9\u5b9a\u7684 ",(0,o.jsx)(n.code,{children:"UDP Server"})," \u5730\u5740\u76f4\u63a5\u5730\u8fdb\u884c ",(0,o.jsx)(n.code,{children:"UDP"})," \u901a\u4fe1\uff0c\u6570\u636e\u5199\u5165\u53ca\u8bfb\u53d6\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"*Pkg"})," \u65b9\u6cd5\u7528\u4e8e\u7b80\u4fbf\u7684\u7b80\u5355\u5305\u534f\u8bae\u6570\u636e\u4f20\u8f93\u3002"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var r=t(296540);const o={},d=r.createContext(o);function i(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);