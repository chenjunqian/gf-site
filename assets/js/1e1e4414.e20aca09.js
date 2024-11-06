"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[62836],{208111:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u9519\u8bef\u5904\u7406/\u9519\u8bef\u5904\u7406-\u5176\u4ed6\u7279\u6027","title":"\u9519\u8bef\u5904\u7406-\u5176\u4ed6\u7279\u6027","description":"NewOption \u81ea\u5b9a\u4e49\u7684\u9519\u8bef\u521b\u5efa","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u9519\u8bef\u5904\u7406/\u9519\u8bef\u5904\u7406-\u5176\u4ed6\u7279\u6027.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u9519\u8bef\u5904\u7406","slug":"/docs/core/gerror-other","permalink":"/docs/core/gerror-other","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u9519\u8bef\u5904\u7406/\u9519\u8bef\u5904\u7406-\u5176\u4ed6\u7279\u6027.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730726699000,"sidebarPosition":4,"frontMatter":{"slug":"/docs/core/gerror-other","title":"\u9519\u8bef\u5904\u7406-\u5176\u4ed6\u7279\u6027","sidebar_position":4,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u9519\u8bef\u5904\u7406-\u9519\u8bef\u6bd4\u8f83","permalink":"/docs/core/gerror-comparison"},"next":{"title":"\u9519\u8bef\u5904\u7406-\u6700\u4f73\u5b9e\u8df5","permalink":"/docs/core/gerror-practice"}}');var n=t(474848),g=t(28453);const s={slug:"/docs/core/gerror-other",title:"\u9519\u8bef\u5904\u7406-\u5176\u4ed6\u7279\u6027",sidebar_position:4,hide_title:!0},i=void 0,d={},c=[{value:"<code>NewOption</code> \u81ea\u5b9a\u4e49\u7684\u9519\u8bef\u521b\u5efa",id:"newoption-\u81ea\u5b9a\u4e49\u7684\u9519\u8bef\u521b\u5efa",level:2},{value:"<code>fmt</code> \u683c\u5f0f\u5316",id:"fmt-\u683c\u5f0f\u5316",level:2},{value:"\u65e5\u5fd7\u8f93\u51fa\u652f\u6301",id:"\u65e5\u5fd7\u8f93\u51fa\u652f\u6301",level:2},{value:"\u5806\u6808\u6253\u5370\u6a21\u5f0f",id:"\u5806\u6808\u6253\u5370\u6a21\u5f0f",level:2}];function a(e){const o={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,g.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.h2,{id:"newoption-\u81ea\u5b9a\u4e49\u7684\u9519\u8bef\u521b\u5efa",children:[(0,n.jsx)(o.code,{children:"NewOption"})," \u81ea\u5b9a\u4e49\u7684\u9519\u8bef\u521b\u5efa"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"\u8bf4\u660e\uff1a\u7528\u4e8e\u81ea\u5b9a\u4e49\u914d\u7f6e\u7684\u9519\u8bef\u5bf9\u8c61\u521b\u5efa\u3002"}),"\n",(0,n.jsx)(o.li,{children:"\u683c\u5f0f\uff1a"}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-go",children:"NewOption(option Option) error\n"})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"\u793a\u4f8b\uff1a"}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-go",children:'func ExampleNewOption() {\n       err := gerror.NewOption(gerror.Option{\n          Text: "this feature is disabled in this storage",\n          Code: gcode.CodeNotSupported,\n      })\n}\n'})}),"\n",(0,n.jsxs)(o.h2,{id:"fmt-\u683c\u5f0f\u5316",children:[(0,n.jsx)(o.code,{children:"fmt"})," \u683c\u5f0f\u5316"]}),"\n",(0,n.jsxs)(o.p,{children:["\u901a\u8fc7\u4ee5\u4e0a\u793a\u4f8b\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0c\u901a\u8fc7 ",(0,n.jsx)(o.code,{children:"%+v"})," \u7684\u6253\u5370\u683c\u5f0f\u53ef\u4ee5\u6253\u5370\u51fa\u5b8c\u6574\u7684\u5806\u6808\u4fe1\u606f\uff0c\u5f53\u7136 ",(0,n.jsx)(o.code,{children:"gerror.Error"})," \u5bf9\u8c61\u652f\u6301\u591a\u79cdfmt\u683c\u5f0f\uff1a"]}),"\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"\u683c\u5f0f\u7b26"}),(0,n.jsx)(o.th,{children:"\u8f93\u51fa\u5185\u5bb9"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsxs)(o.td,{children:[(0,n.jsx)(o.code,{children:"%v"}),", ",(0,n.jsx)(o.code,{children:"%s"})]}),(0,n.jsxs)(o.td,{children:["\u6253\u5370\u6240\u6709\u7684\u5c42\u7ea7\u9519\u8bef\u4fe1\u606f\uff0c\u6784\u6210\u5b8c\u6210\u7684\u5b57\u7b26\u4e32\u8fd4\u56de\uff0c\u591a\u4e2a\u5c42\u7ea7\u4f7f\u7528 ",(0,n.jsx)(o.code,{children:":"})," \u62fc\u63a5\u3002"]})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsxs)(o.td,{children:[(0,n.jsx)(o.code,{children:"%-v"}),", ",(0,n.jsx)(o.code,{children:"%-s"})]}),(0,n.jsx)(o.td,{children:"\u6253\u5370\u5f53\u524d\u5c42\u7ea7\u7684\u9519\u8bef\u4fe1\u606f\uff0c\u8fd4\u56de\u5b57\u7b26\u4e32\u3002"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:(0,n.jsx)(o.code,{children:"%+s"})}),(0,n.jsx)(o.td,{children:"\u6253\u5370\u5b8c\u6574\u7684\u5806\u6808\u4fe1\u606f\u5217\u8868\u3002"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:(0,n.jsx)(o.code,{children:"%+v"})}),(0,n.jsxs)(o.td,{children:["\u6253\u5370\u6240\u6709\u7684\u5c42\u7ea7\u9519\u8bef\u4fe1\u606f\u5b57\u7b26\u4e32\uff0c\u4ee5\u53ca\u5b8c\u6574\u7684\u5806\u6808\u4fe1\u606f\uff0c\u7b49\u540c\u4e8e ",(0,n.jsx)(o.code,{children:"%s\\n%+s"}),"\u3002"]})]})]})]}),"\n",(0,n.jsx)(o.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-go",children:'package main\n\nimport (\n    "errors"\n    "fmt"\n    "github.com/gogf/gf/v2/errors/gerror"\n)\n\nfunc main() {\n    var err error\n    err = errors.New("sql error")\n    err = gerror.Wrap(err, "adding failed")\n    err = gerror.Wrap(err, "api calling failed")\n    fmt.Printf(" %%s: %s\\n", err)\n    fmt.Printf("%%-s: %-s\\n", err)\n    fmt.Println("%+s: ")\n    fmt.Printf("%+s\\n", err)\n}\n\n// Output:\n//  %s: api calling failed: adding failed: sql error\n// %-s: api calling failed\n// %+s:\n// 1. api calling failed\n//     1).  main.main\n//         /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/.example/other/test.go:14\n// 2. adding failed\n//     1).  main.main\n//         /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/.example/other/test.go:13\n// 3. sql error\n'})}),"\n",(0,n.jsx)(o.h2,{id:"\u65e5\u5fd7\u8f93\u51fa\u652f\u6301",children:"\u65e5\u5fd7\u8f93\u51fa\u652f\u6301"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"glog"})," \u65e5\u5fd7\u7ba1\u7406\u6a21\u5757\u5929\u7136\u652f\u6301\u5bf9 ",(0,n.jsx)(o.code,{children:"gerror"})," \u9519\u8bef\u5806\u6808\u6253\u5370\u652f\u6301\uff0c\u8fd9\u79cd\u652f\u6301\u4e0d\u662f\u5f3a\u8026\u5408\u6027\u7684\uff0c\u800c\u662f\u901a\u8fc7 ",(0,n.jsx)(o.code,{children:"fmt"})," \u683c\u5f0f\u5316\u6253\u5370\u63a5\u53e3\u652f\u6301\u7684\u3002"]}),"\n",(0,n.jsx)(o.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-go",children:'package main\n\nimport (\n    "errors"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/errors/gerror"\n)\n\nfunc main() {\n    var err error\n    err = errors.New("sql error")\n    err = gerror.Wrap(err, "adding failed")\n    err = gerror.Wrap(err, "api calling failed")\n    g.Log().Printf("%+v", err)\n}\n\n// Output:\n// 2020-10-17 15:22:26.793 api calling failed: adding failed: sql error\n// 1. api calling failed\n//     1).  main.main\n//         /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/.example/other/test.go:14\n// 2. adding failed\n//     1).  main.main\n//         /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/.example/other/test.go:13\n// 3. sql error\n'})}),"\n",(0,n.jsx)(o.h2,{id:"\u5806\u6808\u6253\u5370\u6a21\u5f0f",children:"\u5806\u6808\u6253\u5370\u6a21\u5f0f"}),"\n",(0,n.jsxs)(o.p,{children:["\u8be5\u7279\u6027\u4ece\u6846\u67b6 ",(0,n.jsx)(o.code,{children:"v2.6.0"})," \u7248\u672c\u5f00\u59cb\u63d0\u4f9b\u3002"]}),"\n",(0,n.jsxs)(o.p,{children:["\u9519\u8bef\u7ec4\u4ef6\u5728\u6253\u5370\u5806\u6808\u4fe1\u606f\u65f6\u652f\u6301\u901a\u8fc7\u73af\u5883\u53d8\u91cf( ",(0,n.jsx)(o.code,{children:"GF_GERROR_STACK_MODE"}),")\u6216\u8005\u547d\u4ee4\u884c\u542f\u52a8\u53c2\u6570( ",(0,n.jsx)(o.code,{children:"gf.gerror.stack.mode"}),")\u6307\u5b9a\u5806\u6808\u6253\u5370\u4fe1\u606f\u6a21\u5f0f\uff1a"]}),"\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"\u5806\u6808\u6a21\u5f0f"}),(0,n.jsx)(o.th,{children:"\u662f\u5426\u9ed8\u8ba4"}),(0,n.jsx)(o.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:(0,n.jsx)(o.code,{children:"brief"})}),(0,n.jsx)(o.td,{children:"\u662f"}),(0,n.jsxs)(o.td,{children:[(0,n.jsx)(o.strong,{children:"\u7b80\u7565\u6a21\u5f0f"}),"\u3002\u9519\u8bef\u5806\u6808\u6253\u5370\u65f6\uff0c\u4e0d\u4f1a\u6253\u5370\u6846\u67b6\u76f8\u5173\u7684\u5806\u6808\u3002"]})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:(0,n.jsx)(o.code,{children:"detail"})}),(0,n.jsx)(o.td,{}),(0,n.jsxs)(o.td,{children:[(0,n.jsx)(o.strong,{children:"\u8be6\u60c5\u6a21\u5f0f"}),"\u3002\u9519\u8bef\u5806\u6808\u6253\u5370\u65f6\uff0c\u4f1a\u6253\u5370\u5b8c\u6574\u7684\u6846\u67b6\u7ec4\u4ef6\u4ee3\u7801\u8c03\u7528\u94fe\u8def\u3002"]})]})]})]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsxs)(o.strong,{children:["\u5728\u8be6\u60c5\u6a21\u5f0f( ",(0,n.jsx)(o.code,{children:"detail"}),")\u4e0b\uff0c\u5c06\u4f1a\u6253\u5370\u9519\u8bef\u5bf9\u8c61\u4e2d\u5b8c\u6574\u7684\u6846\u67b6\u5806\u6808\u4fe1\u606f\u3002"]})," \u53ef\u4ee5\u770b\u5230\uff0c\u5927\u90e8\u5206\u6846\u67b6\u5806\u6808\u4fe1\u606f\u5176\u5b9e\u662f\u6ca1\u6709\u592a\u5927\u610f\u4e49\u7684\uff0c\u4f5c\u4e3a\u5f00\u53d1\u8005\uff0c\u66f4\u591a\u5173\u5fc3\u7684\u81ea\u8eab\u4ee3\u7801\u5c42\u9762\u7684\u5806\u6808\u4fe1\u606f\u3002"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-html",children:'2022-10-08 21:07:00.751 [ERRO] {328d1204e2191c179a09086890c857b8} request done, cost: 3 ms, code: -1, message: "", detail: <nil>, error: GetParams failed: {ResourceId:tdxxxx-a2c378bd Component: Version:0}: rpc error: code = NotFound desc = cluster.khaos.tencent.com "tdxxxx-a2c378bd" not found\n1. GetParams failed: {ResourceId:tdxxxx-a2c378bd Component: Version:0}\n   1).  github.com/khaos/eros/app/khaos-oss/internal/logic/params.(*sParams).doGetParamsJson\n        /root/workspace/khaos/eros/app/khaos-oss/internal/logic/params/params.go:66\n   2).  github.com/khaos/eros/app/khaos-oss/internal/logic/params.(*sParams).GetParams\n        /root/workspace/khaos/eros/app/khaos-oss/internal/logic/params/params.go:36\n   3).  github.com/khaos/eros/app/khaos-oss/internal/controller.(*cParams).GetOne\n        /root/workspace/khaos/eros/app/khaos-oss/internal/controller/params.go:21\n   4).  github.com/gogf/gf/v2/net/ghttp.(*middleware).callHandlerFunc.func1\n        /root/go/pkg/mod/github.com/gogf/gf/v2@v2.1.4/net/ghttp/ghttp_request_middleware.go:152\n   5).  github.com/gogf/gf/v2/net/ghttp.niceCallFunc\n        /root/go/pkg/mod/github.com/gogf/gf/v2@v2.1.4/net/ghttp/ghttp_func.go:55\n   6).  github.com/gogf/gf/v2/net/ghttp.(*middleware).callHandlerFunc\n        /root/go/pkg/mod/github.com/gogf/gf/v2@v2.1.4/net/ghttp/ghttp_request_middleware.go:129\n   7).  github.com/gogf/gf/v2/net/ghttp.(*middleware).Next.func1\n        /root/go/pkg/mod/github.com/gogf/gf/v2@v2.1.4/net/ghttp/ghttp_request_middleware.go:75\n   8).  github.com/gogf/gf/v2/util/gutil.TryCatch\n        /root/go/pkg/mod/github.com/gogf/gf/v2@v2.1.4/util/gutil/gutil.go:56\n   9).  github.com/gogf/gf/v2/net/ghttp.(*middleware).Next\n        /root/go/pkg/mod/github.com/gogf/gf/v2@v2.1.4/net/ghttp/ghttp_request_middleware.go:49\n   10). github.com/khaos/eros/app/khaos-oss/internal/logic/middleware.(*sMiddleware).CheckLimit\n        /root/workspace/khaos/eros/app/khaos-oss/internal/logic/middleware/middleware.go:27\n   11). github.com/gogf/gf/v2/net/ghttp.(*middleware).Next.func1.5\n        /root/go/pkg/mod/github.com/gogf/gf/v2@v2.1.4/net/ghttp/ghttp_request_middleware.go:96\n   12). github.com/gogf/gf/v2/net/ghttp.niceCallFunc\n        /root/go/pkg/mod/github.com/gogf/gf/v2@v2.1.4/net/ghttp/ghttp_func.go:55\n   13). github.com/gogf/gf/v2/net/ghttp.(*middleware).Next.func1\n        /root/go/pkg/mod/github.com/gogf/gf/v2@v2.1.4/net/ghttp/ghttp_request_middleware.go:95\n   14). github.com/gogf/gf/v2/util/gutil.TryCatch\n        /root/go/pkg/mod/github.com/gogf/gf/v2@v2.1.4/util/gutil/gutil.go:56\n   15). github.com/gogf/gf/v2/net/ghttp.(*middleware).Next\n        /root/go/pkg/mod/github.com/gogf/gf/v2@v2.1.4/net/ghttp/ghttp_request_middleware.go:49\n   16). github.com/khaos/eros/utility/server.MiddlewareCommonResponse\n        /root/workspace/khaos/eros/utility/server/server_common.go:14\n   17). github.com/gogf/gf/v2/net/ghttp.(*middleware).Next.func1.5\n        /root/go/pkg/mod/github.com/gogf/gf/v2@v2.1.4/net/ghttp/ghttp_request_middleware.go:96\n   18). github.com/gogf/gf/v2/net/ghttp.niceCallFunc\n        /root/go/pkg/mod/github.com/gogf/gf/v2@v2.1.4/net/ghttp/ghttp_func.go:55\n   19). github.com/gogf/gf/v2/net/ghttp.(*middleware).Next.func1\n        /root/go/pkg/mod/github.com/gogf/gf/v2@v2.1.4/net/ghttp/ghttp_request_middleware.go:95\n   20). github.com/gogf/gf/v2/util/gutil.TryCatch\n        /root/go/pkg/mod/github.com/gogf/gf/v2@v2.1.4/util/gutil/gutil.go:56\n   21). github.com/gogf/gf/v2/net/ghttp.(*middleware).Next\n        /root/go/pkg/mod/github.com/gogf/gf/v2@v2.1.4/net/ghttp/ghttp_request_middleware.go:49\n   22). github.com/khaos/eros/utility/server.MiddlewareLogging\n        /root/workspace/khaos/eros/utility/server/server.go:46\n   23). github.com/gogf/gf/v2/net/ghttp.(*middleware).Next.func1.5\n        /root/go/pkg/mod/github.com/gogf/gf/v2@v2.1.4/net/ghttp/ghttp_request_middleware.go:96\n   24). github.com/gogf/gf/v2/net/ghttp.niceCallFunc\n        /root/go/pkg/mod/github.com/gogf/gf/v2@v2.1.4/net/ghttp/ghttp_func.go:55\n   25). github.com/gogf/gf/v2/net/ghttp.(*middleware).Next.func1\n        /root/go/pkg/mod/github.com/gogf/gf/v2@v2.1.4/net/ghttp/ghttp_request_middleware.go:95\n   26). github.com/gogf/gf/v2/util/gutil.TryCatch\n        /root/go/pkg/mod/github.com/gogf/gf/v2@v2.1.4/util/gutil/gutil.go:56\n   27). github.com/gogf/gf/v2/net/ghttp.(*middleware).Next\n        /root/go/pkg/mod/github.com/gogf/gf/v2@v2.1.4/net/ghttp/ghttp_request_middleware.go:49\n   28). github.com/gogf/gf/v2/net/ghttp.MiddlewareCORS\n        /root/go/pkg/mod/github.com/gogf/gf/v2@v2.1.4/net/ghttp/ghttp_middleware_cors.go:12\n   29). github.com/gogf/gf/v2/net/ghttp.(*middleware).Next.func1.5\n        /root/go/pkg/mod/github.com/gogf/gf/v2@v2.1.4/net/ghttp/ghttp_request_middleware.go:96\n   30). github.com/gogf/gf/v2/net/ghttp.niceCallFunc\n        /root/go/pkg/mod/github.com/gogf/gf/v2@v2.1.4/net/ghttp/ghttp_func.go:55\n2. rpc error: code = NotFound desc = cluster.khaos.tencent.com "tdxxxx-a2c378bd" not found\n'})}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsxs)(o.strong,{children:["\u5728\u7b80\u7565\u6a21\u5f0f( ",(0,n.jsx)(o.code,{children:"brief"}),")\u4e0b\uff0c\u5806\u6808\u4fe1\u606f\u4e2d\u5c06\u4e0d\u4f1a\u6253\u5370\u6846\u67b6\u7684\u5806\u6808\u4fe1\u606f"]}),"\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-html",children:'2022-10-08 21:07:00.751 [ERRO] {328d1204e2191c179a09086890c857b8} request done, cost: 3 ms, code: -1, message: "", detail: <nil>, error: GetParams failed: {ResourceId:tdxxxx-a2c378bd Component: Version:0}: rpc error: code = NotFound desc = cluster.khaos.tencent.com "tdxxxx-a2c378bd" not found\n1. GetParams failed: {ResourceId:tdxxxx-a2c378bd Component: Version:0}\n   1).  github.com/khaos/eros/app/khaos-oss/internal/logic/params.(*sParams).doGetParamsJson\n        /root/workspace/khaos/eros/app/khaos-oss/internal/logic/params/params.go:66\n   2).  github.com/khaos/eros/app/khaos-oss/internal/logic/params.(*sParams).GetParams\n        /root/workspace/khaos/eros/app/khaos-oss/internal/logic/params/params.go:36\n   3).  github.com/khaos/eros/app/khaos-oss/internal/controller.(*cParams).GetOne\n        /root/workspace/khaos/eros/app/khaos-oss/internal/controller/params.go:21\n2. rpc error: code = NotFound desc = cluster.khaos.tencent.com "tdxxxx-a2c378bd" not found\n'})})]})}function l(e={}){const{wrapper:o}={...(0,g.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>s,x:()=>i});var r=t(296540);const n={},g=r.createContext(n);function s(e){const o=r.useContext(g);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(g.Provider,{value:o},e.children)}}}]);