"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[48333],{556955:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>t});const i=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406-gproc/\u8fdb\u7a0b\u7ba1\u7406-\u4fe1\u53f7\u76d1\u542c","title":"\u8fdb\u7a0b\u7ba1\u7406-\u4fe1\u53f7\u76d1\u542c","description":"\u57fa\u672c\u4ecb\u7ecd","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406-gproc/\u8fdb\u7a0b\u7ba1\u7406-\u4fe1\u53f7\u76d1\u542c.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406-gproc","slug":"/docs/components/os-gproc-signal","permalink":"/en/docs/components/os-gproc-signal","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406-gproc/\u8fdb\u7a0b\u7ba1\u7406-\u4fe1\u53f7\u76d1\u542c.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730726699000,"sidebarPosition":2,"frontMatter":{"slug":"/docs/components/os-gproc-signal","title":"\u8fdb\u7a0b\u7ba1\u7406-\u4fe1\u53f7\u76d1\u542c","sidebar_position":2,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u8fdb\u7a0b\u7ba1\u7406-\u8fdb\u7a0b\u901a\u4fe1","permalink":"/en/docs/components/os-gproc-communication-between-processes"},"next":{"title":"\u8fdb\u7a0b\u7ba1\u7406-\u94fe\u8def\u8ddf\u8e2a","permalink":"/en/docs/components/os-gproc-tracing"}}');var o=e(474848),r=e(28453);const l={slug:"/docs/components/os-gproc-signal",title:"\u8fdb\u7a0b\u7ba1\u7406-\u4fe1\u53f7\u76d1\u542c",sidebar_position:2,hide_title:!0},c=void 0,d={},t=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u793a\u4f8b1\uff0c\u4f7f\u7528\u6807\u51c6\u5e93\u4fe1\u53f7\u76d1\u542c",id:"\u793a\u4f8b1\u4f7f\u7528\u6807\u51c6\u5e93\u4fe1\u53f7\u76d1\u542c",level:2},{value:"\u793a\u4f8b2\uff0c\u4f7f\u7528 <code>gproc</code> \u4fe1\u53f7\u76d1\u542c",id:"\u793a\u4f8b2\u4f7f\u7528-gproc-\u4fe1\u53f7\u76d1\u542c",level:2}];function a(n){const s={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"gproc"})," \u7ec4\u4ef6\u63d0\u4f9b\u4e86\u7edf\u4e00\u7684\u4fe1\u53f7\u76d1\u542c\u548c\u56de\u8c03\u5904\u7406\u529f\u80fd\uff0c\u76ee\u7684\u662f\u89e3\u51b3\u5728\u7a0b\u5e8f\u4e2d\u591a\u4e2a\u4e0d\u540c\u7ec4\u4ef6\u5197\u4f59\u7684\u4fe1\u53f7\u5904\u7406\u903b\u8f91\uff0c\u4ee5\u53ca\u63a5\u6536\u9000\u51fa\u4fe1\u53f7\u540e\u65e0\u6cd5\u5e73\u6ed1\u6790\u6784\u7684\u75db\u70b9\u3002\u5728\u6ca1\u6709\u7edf\u4e00\u9000\u51fa\u4fe1\u53f7\u76d1\u542c\u7684\u7ec4\u4ef6\u4e0b\uff0c\u5f53\u591a\u4e2a\u7ec4\u4ef6\u901a\u8fc7 ",(0,o.jsx)(s.code,{children:"goroutine"})," \u5f02\u6b65\u76d1\u542c\u4fe1\u53f7\uff0c\u4e3b ",(0,o.jsx)(s.code,{children:"goroutine"})," \u63a5\u6536\u5230\u9000\u51fa\u4fe1\u53f7\u5f80\u5f80\u4f1a\u76f4\u63a5\u9000\u51fa\uff0c\u6216\u8005\u7b49\u5f85\u4e00\u6bb5\u65e0\u6cd5\u9884\u6d4b\u7684\u65f6\u95f4\u9000\u51fa\uff0c\u9020\u6210\u7a0b\u5e8f\u5176\u5b9e\u65e0\u6cd5\u5e73\u6ed1\u9000\u51fa\uff0c\u53ef\u80fd\u5f15\u8d77\u4e00\u4e9b\u4e0d\u53ef\u9884\u6599\u7684\u95ee\u9898\u3002 ",(0,o.jsx)(s.code,{children:"gproc"})," \u901a\u8fc7\u7edf\u4e00\u7684\u4fe1\u53f7\u6ce8\u518c\u548c\u56de\u8c03\u5904\u7406\uff0c\u4f7f\u5f97\u5404\u4e2a\u7ec4\u4ef6\u80fd\u591f\u6709\u6548\u5730\u63a5\u6536\u5230\u9000\u51fa\u4fe1\u53f7\u5e76\u505a\u76f8\u5e94\u6790\u6784\u5904\u7406\uff0c\u4f7f\u5f97\u7a0b\u5e8f\u7684\u4fe1\u53f7\u5904\u7406\u903b\u8f91\u66f4\u52a0\u4e25\u8c28\u3002"]}),"\n",(0,o.jsx)(s.p,{children:"\u76f8\u5173\u65b9\u6cd5\uff1a"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-go",children:"// AddSigHandler adds custom signal handler for custom one or more signals.\nfunc AddSigHandler(handler SigHandler, signals ...os.Signal)\n\n// AddSigHandlerShutdown adds custom signal handler for shutdown signals:\n// syscall.SIGINT,\n// syscall.SIGQUIT,\n// syscall.SIGKILL,\n// syscall.SIGTERM,\n// syscall.SIGABRT.\nfunc AddSigHandlerShutdown(handler ...SigHandler)\n\n// Listen blocks and does signal listening and handling.\nfunc Listen()\n"})}),"\n",(0,o.jsx)(s.p,{children:"\u7b80\u8981\u4ecb\u7ecd\uff1a"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"AddSigHanlder"})," \u65b9\u6cd5\u7528\u4e8e\u6dfb\u52a0\u5bf9\u6307\u5b9a\u4fe1\u53f7\u7684\u76d1\u542c\u548c\u5bf9\u5e94\u56de\u8c03\u51fd\u6570\u6ce8\u518c\u3002"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"AddSigHandlerShutdown"})," \u65b9\u6cd5\u7528\u4e8e\u6dfb\u52a0\u5bf9\u5e38\u89c1\u8fdb\u7a0b\u9000\u51fa\u4fe1\u53f7\u7684\u76d1\u542c\u548c\u5bf9\u5e94\u56de\u8c03\u51fd\u6570\u6ce8\u518c\uff0c\u53ef\u4ee5\u6ce8\u518c\u591a\u4e2a ",(0,o.jsx)(s.code,{children:"SigHandler"}),"\u3002"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"Listen"})," \u65b9\u6cd5\u7528\u4e8e\u963b\u585e\u76d1\u542c\u4fe1\u53f7\u5e76\u81ea\u52a8\u6267\u884c\u56de\u8c03\u51fd\u6570\u8c03\u7528\u3002"]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"\u6211\u4eec\u6765\u770b\u4e24\u4e2a\u793a\u4f8b\u3002"}),"\n",(0,o.jsx)(s.h2,{id:"\u793a\u4f8b1\u4f7f\u7528\u6807\u51c6\u5e93\u4fe1\u53f7\u76d1\u542c",children:"\u793a\u4f8b1\uff0c\u4f7f\u7528\u6807\u51c6\u5e93\u4fe1\u53f7\u76d1\u542c"}),"\n",(0,o.jsx)(s.p,{children:"\u4f7f\u7528\u6807\u51c6\u5e93\u4fe1\u53f7\u76d1\u542c\u673a\u5236\u7684\u5e38\u89c1\u4ee3\u7801\u903b\u8f91\u5982\u4e0b\uff1a"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "os"\n    "os/signal"\n    "syscall"\n    "time"\n)\n\nfunc signalHandlerForMQ() {\n    var (\n        sig          os.Signal\n        receivedChan = make(chan os.Signal)\n    )\n    signal.Notify(\n        receivedChan,\n        syscall.SIGINT,\n        syscall.SIGQUIT,\n        syscall.SIGKILL,\n        syscall.SIGTERM,\n        syscall.SIGABRT,\n    )\n    for {\n        sig = <-receivedChan\n        fmt.Println("MQ is shutting down due to signal:", sig.String())\n        time.Sleep(time.Second)\n        fmt.Println("MQ is shut down smoothly")\n        return\n    }\n}\n\nfunc main() {\n    fmt.Println("Process start, pid:", os.Getpid())\n    go signalHandlerForMQ()\n\n    var (\n        sig          os.Signal\n        receivedChan = make(chan os.Signal)\n    )\n    signal.Notify(\n        receivedChan,\n        syscall.SIGINT,\n        syscall.SIGQUIT,\n        syscall.SIGKILL,\n        syscall.SIGTERM,\n        syscall.SIGABRT,\n    )\n    for {\n        sig = <-receivedChan\n        fmt.Println("MainProcess is shutting down due to signal:", sig.String())\n        return\n    }\n}\n'})}),"\n",(0,o.jsxs)(s.p,{children:["\u6211\u4eec\u901a\u8fc7 ",(0,o.jsx)(s.code,{children:"go run"})," \u547d\u4ee4\u6765\u6267\u884c\u4e00\u4e0b\uff0c\u968f\u540e\u901a\u8fc7 ",(0,o.jsx)(s.code,{children:"Ctrl+C"})," \u5feb\u6377\u952e\u9000\u51fa\uff08 ",(0,o.jsx)(s.code,{children:"Mac"})," \u7528\u6237\u901a\u8fc7 ",(0,o.jsx)(s.code,{children:"Command+C"}),"\uff09\u3002"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"$ go run signal_handler.go\nProcess start, pid: 21928\n^CMainProcess is shutting down due to signal: interrupt\nMQ is shutting down due to signal: interrupt\n"})}),"\n",(0,o.jsxs)(s.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u597d\u53ef\u60dc\uff0c\u90a3\u4e2a ",(0,o.jsx)(s.code,{children:"MQ"})," \u7684 ",(0,o.jsx)(s.code,{children:"goroutine"})," \u8fd8\u6ca1\u5b8c\u5168\u9000\u51fa\u8fdb\u7a0b\u5373\u88ab\u5f3a\u884c\u5173\u95ed\u3002"]}),"\n",(0,o.jsxs)(s.h2,{id:"\u793a\u4f8b2\u4f7f\u7528-gproc-\u4fe1\u53f7\u76d1\u542c",children:["\u793a\u4f8b2\uff0c\u4f7f\u7528 ",(0,o.jsx)(s.code,{children:"gproc"})," \u4fe1\u53f7\u76d1\u542c"]}),"\n",(0,o.jsxs)(s.p,{children:["\u4f7f\u7528 ",(0,o.jsx)(s.code,{children:"gproc"})," \u7ec4\u4ef6\u6539\u8fdb\u540e\u7684\u4fe1\u53f7\u76d1\u542c\u673a\u5236\u5982\u4e0b\uff1a"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/os/gproc"\n    "os"\n    "time"\n)\n\nfunc signalHandlerForMQ(sig os.Signal) {\n    fmt.Println("MQ is shutting down due to signal:", sig.String())\n    time.Sleep(time.Second)\n    fmt.Println("MQ is shut down smoothly")\n}\n\nfunc signalHandlerForMain(sig os.Signal) {\n    fmt.Println("MainProcess is shutting down due to signal:", sig.String())\n}\n\nfunc main() {\n    fmt.Println("Process start, pid:", os.Getpid())\n    gproc.AddSigHandlerShutdown(\n        signalHandlerForMQ,\n        signalHandlerForMain,\n    )\n    gproc.Listen()\n}\n'})}),"\n",(0,o.jsxs)(s.p,{children:["\u6211\u4eec\u901a\u8fc7 ",(0,o.jsx)(s.code,{children:"go run"})," \u547d\u4ee4\u6765\u6267\u884c\u4e00\u4e0b\uff0c\u968f\u540e\u901a\u8fc7 ",(0,o.jsx)(s.code,{children:"Ctrl+C"})," \u5feb\u6377\u952e\u9000\u51fa\uff08 ",(0,o.jsx)(s.code,{children:"Mac"})," \u7528\u6237\u901a\u8fc7 ",(0,o.jsx)(s.code,{children:"Command+C"}),"\uff09\u3002"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"$ go run signal_handler_gproc.go\nProcess start, pid: 22876\n^CMQ is shutting down due to signal: interrupt\nMainProcess is shutting down due to signal: interrupt\nMQ is shut down smoothly\n"})}),"\n",(0,o.jsx)(s.p,{children:"\u770b\u5230\u5dee\u522b\u4e86\u5427\uff01\u6240\u6709\u7684\u4fe1\u53f7\u76d1\u542c\u51fd\u6570\u90fd\u6b63\u5e38\u7ed3\u675f\u540e\uff0c\u968f\u540e\u8fdb\u7a0b\u5e73\u6ed1\u9000\u51fa\u3002"})]})}function g(n={}){const{wrapper:s}={...(0,r.R)(),...n.components};return s?(0,o.jsx)(s,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},28453:(n,s,e)=>{e.d(s,{R:()=>l,x:()=>c});var i=e(296540);const o={},r=i.createContext(o);function l(n){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function c(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:l(n.components),i.createElement(r.Provider,{value:s},n.children)}}}]);