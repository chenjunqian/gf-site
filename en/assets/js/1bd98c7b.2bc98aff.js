"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[87727],{61691:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>t,metadata:()=>s,toc:()=>a});var c=r(74848),o=r(28453);const t={title:"\u811a\u624b\u67b6\u6a21\u5757",sidebar_position:2,hide_title:!0},l=void 0,s={id:"\u5fae\u670d\u52a1\u5f00\u53d1/\u811a\u624b\u67b6\u6a21\u5757",title:"\u811a\u624b\u67b6\u6a21\u5757",description:"GoFrame \u6846\u67b6\u5305\u542b\u591a\u4e2a\u5fae\u670d\u52a1\u7ec4\u4ef6\uff0c\u5e76\u63d0\u4f9b\u4e86\u6613\u7528\u7684 GRPC \u811a\u624b\u67b6\u6a21\u5757\u548c\u5de5\u5177\u3002\u811a\u624b\u67b6\u7531 grpcx \u793e\u533a\u5305\u5b9e\u73b0\uff1a https://github.com/gogf/gf/tree/master/contrib/rpc/grpcx \u5305\u542b\u591a\u4e2a\u6a21\u5757\u3002",source:"@site/docs/6-\u5fae\u670d\u52a1\u5f00\u53d1/2-\u811a\u624b\u67b6\u6a21\u5757.md",sourceDirName:"6-\u5fae\u670d\u52a1\u5f00\u53d1",slug:"/\u5fae\u670d\u52a1\u5f00\u53d1/\u811a\u624b\u67b6\u6a21\u5757",permalink:"/gf-site/en/docs/\u5fae\u670d\u52a1\u5f00\u53d1/\u811a\u624b\u67b6\u6a21\u5757",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/6-\u5fae\u670d\u52a1\u5f00\u53d1/2-\u811a\u624b\u67b6\u6a21\u5757.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730215846e3,sidebarPosition:2,frontMatter:{title:"\u811a\u624b\u67b6\u6a21\u5757",sidebar_position:2,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"\u5de5\u7a0b\u7ba1\u7406",permalink:"/gf-site/en/docs/\u5fae\u670d\u52a1\u5f00\u53d1/\u5de5\u7a0b\u7ba1\u7406"},next:{title:"\u670d\u52a1\u7aef\u914d\u7f6e",permalink:"/gf-site/en/docs/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u7aef\u914d\u7f6e"}},d={},a=[{value:"\u670d\u52a1\u7aef- <code>Server</code>",id:"\u670d\u52a1\u7aef--server",level:2},{value:"\u5ba2\u6237\u7aef- <code>Client</code>",id:"\u5ba2\u6237\u7aef--client",level:2},{value:"\u4e0a\u4e0b\u6587- <code>Ctx</code>",id:"\u4e0a\u4e0b\u6587--ctx",level:2},{value:"\u8d1f\u8f7d\u5747\u8861- <code>Balancer</code>",id:"\u8d1f\u8f7d\u5747\u8861--balancer",level:2},{value:"\u6ce8\u518c\u53d1\u73b0- <code>Resolver</code>",id:"\u6ce8\u518c\u53d1\u73b0--resolver",level:2}];function i(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u5305\u542b\u591a\u4e2a\u5fae\u670d\u52a1\u7ec4\u4ef6\uff0c\u5e76\u63d0\u4f9b\u4e86\u6613\u7528\u7684 ",(0,c.jsx)(n.code,{children:"GRPC"})," \u811a\u624b\u67b6\u6a21\u5757\u548c\u5de5\u5177\u3002\u811a\u624b\u67b6\u7531 ",(0,c.jsx)(n.code,{children:"grpcx"})," \u793e\u533a\u5305\u5b9e\u73b0\uff1a ",(0,c.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/rpc/grpcx",children:"https://github.com/gogf/gf/tree/master/contrib/rpc/grpcx"})," \u5305\u542b\u591a\u4e2a\u6a21\u5757\u3002"]}),"\n",(0,c.jsxs)(n.h2,{id:"\u670d\u52a1\u7aef--server",children:["\u670d\u52a1\u7aef- ",(0,c.jsx)(n.code,{children:"Server"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u670d\u52a1\u7aef\u7531 ",(0,c.jsx)(n.code,{children:"grpcx.Server"})," \u6a21\u5757\u7ef4\u62a4\uff0c\u7528\u4e8e\u5b9e\u73b0\u670d\u52a1\u7aef\u5bf9\u8c61\u7684\u521b\u5efa\u4e0e\u7ef4\u62a4\u3002\u4f7f\u7528\u793a\u4f8b\uff1a ",(0,c.jsx)(n.a,{href:"https://github.com/gogf/gf/blob/master/example/rpc/grpcx/basic/server/main.go",children:"https://github.com/gogf/gf/blob/master/example/rpc/grpcx/basic/server/main.go"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u670d\u52a1\u7aef\u7684\u521b\u5efa\u5f80\u5f80\u7ed3\u5408\u914d\u7f6e\u6587\u4ef6\u4e00\u8d77\u4f7f\u7528\uff0c\u5173\u4e8e\u670d\u52a1\u7aef\u914d\u7f6e\u6587\u4ef6\u7684\u4ecb\u7ecd\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,c.jsx)(n.a,{href:"/docs/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/%E6%9C%8D%E5%8A%A1%E7%AB%AF%E9%85%8D%E7%BD%AE",children:"\u670d\u52a1\u7aef\u914d\u7f6e"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/contrib/rpc/grpcx/v2"\n    "github.com/gogf/gf/example/rpc/grpcx/basic/controller"\n)\n\nfunc main() {\n    s := grpcx.Server.New()\n    controller.Register(s)\n    s.Run()\n}\n'})}),"\n",(0,c.jsxs)(n.h2,{id:"\u5ba2\u6237\u7aef--client",children:["\u5ba2\u6237\u7aef- ",(0,c.jsx)(n.code,{children:"Client"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u5ba2\u6237\u7aef\u7531 ",(0,c.jsx)(n.code,{children:"grpcx.Client"})," \u6a21\u5757\u7ef4\u62a4\uff0c\u7528\u4e8e\u5b9e\u73b0\u5ba2\u6237\u7aef\u5bf9\u8c61\u7684\u521b\u5efa\u4e0e\u7ef4\u62a4\u3002\u4f7f\u7528\u793a\u4f8b\uff1a ",(0,c.jsx)(n.a,{href:"https://github.com/gogf/gf/blob/master/example/rpc/grpcx/basic/client/main.go",children:"https://github.com/gogf/gf/blob/master/example/rpc/grpcx/basic/client/main.go"})]}),"\n",(0,c.jsx)(n.p,{children:"\u5927\u90e8\u5206\u573a\u666f\u4e0b\uff0c\u670d\u52a1\u95f4\u7684\u8bbf\u95ee\u4f7f\u7528\u7684\u662f\u670d\u52a1\u540d\u79f0\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/contrib/rpc/grpcx/v2"\n    "github.com/gogf/gf/example/rpc/grpcx/basic/protobuf"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx    = gctx.New()\n        conn   = grpcx.Client.MustNewGrpcClientConn("demo")\n        client = protobuf.NewGreeterClient(conn)\n    )\n    res, err := client.SayHello(ctx, &protobuf.HelloRequest{Name: "World"})\n    if err != nil {\n        g.Log().Error(ctx, err)\n        return\n    }\n    g.Log().Debug(ctx, "Response:", res.Message)\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u5e38\u89c1\u95ee\u9898"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:["\u662f\u5426\u9700\u8981\u4fdd\u5b58\u590d\u7528\u521b\u5efa\u7684 ",(0,c.jsx)(n.code,{children:"Client"})," \u5bf9\u8c61\uff1f"]})}),"\n",(0,c.jsxs)(n.p,{children:["\u6bcf\u4e00\u4e2a ",(0,c.jsx)(n.code,{children:"grpc Client"})," \u5bf9\u8c61\u5b9e\u9645\u4e0a\u5bf9\u5e94\u7684\u662f\u5bf9\u4e00\u4e2a\u76ee\u6807\u670d\u52a1\u7684\u8bbf\u95ee\uff0c\u8be5\u5bf9\u8c61\u5e94\u8be5\u4fdd\u5b58\u4e0b\u6765\u590d\u7528\uff0c\u800c\u4e0d\u662f\u6bcf\u4e00\u6b21\u90fd\u65b0\u5efa ",(0,c.jsx)(n.code,{children:"Client"})," \u5bf9\u8c61\uff0c\u8fd9\u6837\u53ef\u4ee5\u63d0\u9ad8\u6548\u7387\u3001\u964d\u4f4e\u8d44\u6e90\u4f7f\u7528\u3001\u4f7f\u7528\u65b9\u5f0f\u5bf9 ",(0,c.jsx)(n.code,{children:"GC"})," \u53cb\u597d\u3002"]}),"\n",(0,c.jsxs)(n.h2,{id:"\u4e0a\u4e0b\u6587--ctx",children:["\u4e0a\u4e0b\u6587- ",(0,c.jsx)(n.code,{children:"Ctx"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u4e0b\u6587\u7531 ",(0,c.jsx)(n.code,{children:"grpcx.Ctx"})," \u6a21\u5757\u7ef4\u62a4\uff0c\u7528\u4e8e\u5b9e\u73b0\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u7aef\u4e4b\u95f4\u3001\u670d\u52a1\u4e0e\u670d\u52a1\u4e4b\u95f4\u7684\u81ea\u5b9a\u4e49\u6570\u636e\u4f20\u9012\u3002\u5305\u542b\u4ee5\u4e0b\u5e38\u7528\u65b9\u6cd5\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:"func (c Ctx) NewIncoming(ctx context.Context, data ...g.Map) context.Context\nfunc (c Ctx) NewOutgoing(ctx context.Context, data ...g.Map) context.Context\nfunc (c Ctx) IncomingToOutgoing(ctx context.Context, keys ...string) context.Context\nfunc (c Ctx) IncomingMap(ctx context.Context) *gmap.Map\nfunc (c Ctx) OutgoingMap(ctx context.Context) *gmap.Map\nfunc (c Ctx) SetIncoming(ctx context.Context, data g.Map) context.Context\nfunc (c Ctx) SetOutgoing(ctx context.Context, data g.Map) context.Context\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5176\u4e2d\u7684 ",(0,c.jsx)(n.code,{children:"Outgoing"})," \u7528\u5728\u5ba2\u6237\u7aef\uff0c\u8868\u793a\u5c06\u8981\u4f20\u9012\u7ed9\u670d\u52a1\u7aef\u7684\u81ea\u5b9a\u4e49\u6570\u636e\uff0c\u4e00\u822c\u662f\u7531 ",(0,c.jsx)(n.code,{children:"Key-Value"})," \u952e\u503c\u5bf9\u7ec4\u6210\u7684 ",(0,c.jsx)(n.code,{children:"Map"})," \u6570\u636e\u683c\u5f0f\uff1b ",(0,c.jsx)(n.code,{children:"Incoming"})," \u4f7f\u7528\u5728\u670d\u52a1\u7aef\uff0c\u8868\u793a\u670d\u52a1\u7aef\u63a5\u6536\u5230\u7684\u5ba2\u6237\u7aef\u63d0\u4ea4\u6570\u636e\u3002\u5176\u4e2d\u6846\u67b6\u76f8\u5173\u7684\u4e00\u4e9b\u5185\u5d4c\u4fe1\u606f\u4e5f\u5199\u5165\u5230 ",(0,c.jsx)(n.code,{children:"Incoming"})," \u952e\u503c\u5bf9\u4e2d\uff0c\u4f8b\u5982\uff0c\u94fe\u8def\u8ddf\u8e2a\u4fe1\u606f\u3001\u5ba2\u6237\u7aef\u7248\u672c\u4fe1\u606f\u7b49\u3002\u4f7f\u7528\u793a\u4f8b\uff1a"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"server.go"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/contrib/rpc/grpcx/v2"\n    "github.com/gogf/gf/example/rpc/grpcx/ctx/controller"\n)\n\nfunc main() {\n    s := grpcx.Server.New()\n    controller.Register(s)\n    s.Run()\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"controller.go"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'package controller\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/contrib/rpc/grpcx/v2"\n    "github.com/gogf/gf/example/rpc/grpcx/ctx/protobuf"\n    "github.com/gogf/gf/v2/frame/g"\n)\n\ntype Controller struct {\n    protobuf.UnimplementedGreeterServer\n}\n\nfunc Register(s *grpcx.GrpcServer) {\n    protobuf.RegisterGreeterServer(s.Server, &Controller{})\n}\n\n// SayHello implements helloworld.GreeterServer\nfunc (s *Controller) SayHello(ctx context.Context, in *protobuf.HelloRequest) (*protobuf.HelloReply, error) {\n    m := grpcx.Ctx.IncomingMap(ctx)\n    g.Log().Infof(ctx, `incoming data: %v`, m.Map())\n    return &protobuf.HelloReply{Message: "Hello " + in.GetName()}, nil\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"client.go"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/contrib/rpc/grpcx/v2"\n    "github.com/gogf/gf/example/rpc/grpcx/ctx/protobuf"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        conn   = grpcx.Client.MustNewGrpcClientConn("demo")\n        client = protobuf.NewGreeterClient(conn)\n        ctx    = grpcx.Ctx.NewOutgoing(gctx.New(), g.Map{\n            "UserId":   "1000",\n            "UserName": "john",\n        })\n    )\n    g.Log().Infof(ctx, `outgoing data: %v`, grpcx.Ctx.OutgoingMap(ctx).Map())\n    res, err := client.SayHello(ctx, &protobuf.HelloRequest{Name: "World"})\n    if err != nil {\n        g.Log().Error(ctx, err)\n        return\n    }\n    g.Log().Debug(ctx, "Response:", res.Message)\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u670d\u52a1\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'$ go run server.go\n2023-03-15 19:28:45.331 [DEBU] set default registry using file registry as no custom registry set\n2023-03-15 19:28:45.331 [DEBU] service register: &{Head: Deployment: Namespace: Name:demo Version: Endpoints:10.35.12.81:51707 Metadata:map[protocol:grpc]}\n2023-03-15 19:28:45.332 [INFO] pid[83753]: grpc server started listening on [:51707]\n2023-03-15 19:28:54.093 [INFO] {d049db1a39944c1711bd9f37d58a88f9} incoming data: map[:authority:service/default/default/demo/latest/ content-type:application/grpc traceparent:00-d049db1a39944c1711bd9f37d58a88f9-adbd2ba657ffea45-01 user-agent:grpc-go/1.49.0 userid:1000 username:john]\n2023-03-15 19:28:54.093 {d049db1a39944c1711bd9f37d58a88f9} /protobuf.Greeter/SayHello, 0.049ms, name:"World", message:"Hello World"\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u5ba2\u6237\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'$ go run client.go\n2023-03-15 19:28:54.087 [INFO] {d049db1a39944c1711bd9f37d58a88f9} outgoing data: map[userid:1000 username:john]\n2023-03-15 19:28:54.089 [DEBU] client conn updated with addresses [{"Addr":"10.35.12.81:51707","ServerName":"demo","Attributes":{},"BalancerAttributes":null,"Type":0,"Metadata":null}]\n2023-03-15 19:28:54.093 [DEBU] {d049db1a39944c1711bd9f37d58a88f9} Response: Hello World\n'})}),"\n",(0,c.jsxs)(n.h2,{id:"\u8d1f\u8f7d\u5747\u8861--balancer",children:["\u8d1f\u8f7d\u5747\u8861- ",(0,c.jsx)(n.code,{children:"Balancer"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u8d1f\u8f7d\u5747\u8861\u7531 ",(0,c.jsx)(n.code,{children:"grpcx.Balancer"})," \u6a21\u5757\u7ef4\u62a4\uff0c\u7528\u4e8e\u5b9e\u73b0\u5f53\u670d\u52a1\u7aef\u5b58\u5728\u591a\u4e2a\u8bbf\u95ee\u5730\u5740\u65f6\uff0c\u5ba2\u6237\u7aef\u6839\u636e\u4f55\u79cd\u7b56\u7565\u8fdb\u884c\u8bf7\u6c42\u3002\u5f53\u5ba2\u6237\u7aef\u672a\u8bbe\u7f6e\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u65f6\uff0c\u9ed8\u8ba4\u4f7f\u7528\u8f6e\u8bad\u7b56\u7565\u3002\u5173\u4e8e\u8d1f\u8f7d\u5747\u8861\u7684\u8be6\u7ec6\u4ecb\u7ecd\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,c.jsx)(n.a,{href:"/docs/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/%E6%9C%8D%E5%8A%A1%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1",children:"\u670d\u52a1\u8d1f\u8f7d\u5747\u8861"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u6211\u4eec\u8fd9\u91cc\u4f7f\u7528 ",(0,c.jsx)(n.strong,{children:"\u968f\u673a\u7b56\u7565"})," \u6765\u505a\u793a\u4f8b\uff0c\u968f\u673a\u7684\u7b56\u7565\u5c06\u4f1a\u4f7f\u5f97\u5404\u4e2a\u670d\u52a1\u7aef\u63a5\u6536\u5230\u7684\u8bf7\u6c42\u6570\u6bd4\u8f83\u968f\u673a\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"server.go"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/contrib/rpc/grpcx/v2"\n    "github.com/gogf/gf/example/rpc/grpcx/balancer/controller"\n)\n\nfunc main() {\n    s := grpcx.Server.New()\n    controller.Register(s)\n    s.Run()\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"client.go"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/contrib/rpc/grpcx/v2"\n    "github.com/gogf/gf/example/rpc/grpcx/balancer/protobuf"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx    context.Context\n        conn   = grpcx.Client.MustNewGrpcClientConn("demo", grpcx.Balancer.WithRandom())\n        client = protobuf.NewGreeterClient(conn)\n    )\n    for i := 0; i < 10; i++ {\n        ctx = gctx.New()\n        res, err := client.SayHello(ctx, &protobuf.HelloRequest{Name: "World"})\n        if err != nil {\n            g.Log().Error(ctx, err)\n            return\n        }\n        g.Log().Debug(ctx, "Response:", res.Message)\n    }\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u5176\u4e2d\u7684 ",(0,c.jsx)(n.code,{children:"grpcx.Balancer.WithRandom()"})," \u8868\u793a\u4f7f\u7528\u968f\u673a\u7684\u8bf7\u6c42\u7b56\u7565\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u542f\u52a8\u4e24\u4e2a ",(0,c.jsx)(n.code,{children:"server.go"})," \u670d\u52a1\u7aef\uff0c\u968f\u540e\u8fd0\u884c ",(0,c.jsx)(n.code,{children:"client.go"})," \u5ba2\u6237\u7aef\uff0c\u67e5\u770b\u670d\u52a1\u7aef\u7684\u8bf7\u6c42\u65e5\u5fd7\uff1a"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"server1"})," \u7ec8\u7aef\u8f93\u51fa\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'$ go run server.go\n2023-03-15 19:50:44.801 [DEBU] set default registry using file registry as no custom registry set\n2023-03-15 19:50:44.802 [DEBU] service register: &{Head: Deployment: Namespace: Name:demo Version: Endpoints:10.35.12.81:53962 Metadata:map[protocol:grpc]}\n2023-03-15 19:50:44.802 [INFO] pid[89290]: grpc server started listening on [:53962]\n2023-03-15 19:50:57.282 {7025612f6d954c17c5f335051bf10899} /protobuf.Greeter/SayHello, 0.003ms, name:"World", message:"Hello World"\n2023-03-15 19:50:57.283 {60567c2f6d954c17c7f335052ce05185} /protobuf.Greeter/SayHello, 0.002ms, name:"World", message:"Hello World"\n2023-03-15 19:50:57.285 {f8d09b2f6d954c17ccf33505dff1a4ea} /protobuf.Greeter/SayHello, 0.002ms, name:"World", message:"Hello World"\n2023-03-15 19:50:57.287 {f0fab02f6d954c17cdf33505438b2c80} /protobuf.Greeter/SayHello, 0.001ms, name:"World", message:"Hello World"\n'})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"server2"})," \u7ec8\u7aef\u8f93\u51fa\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'$ go run server.go\n2023-03-15 19:50:51.720 [DEBU] set default registry using file registry as no custom registry set\n2023-03-15 19:50:51.721 [DEBU] service register: &{Head: Deployment: Namespace: Name:demo Version: Endpoints:10.35.12.81:53973 Metadata:map[protocol:grpc]}\n2023-03-15 19:50:51.722 [INFO] pid[89351]: grpc server started listening on [:53973]\n2023-03-15 19:50:57.280 {b89a0d2f6d954c17c4f33505a046817c} /protobuf.Greeter/SayHello, 0.002ms, name:"World", message:"Hello World"\n2023-03-15 19:50:57.282 {28bf732f6d954c17c6f33505adedff5f} /protobuf.Greeter/SayHello, 0.002ms, name:"World", message:"Hello World"\n2023-03-15 19:50:57.283 {9876832f6d954c17c8f3350580ed535b} /protobuf.Greeter/SayHello, 0.002ms, name:"World", message:"Hello World"\n2023-03-15 19:50:57.284 {684e8b2f6d954c17c9f33505d56e4b05} /protobuf.Greeter/SayHello, 0.001ms, name:"World", message:"Hello World"\n2023-03-15 19:50:57.284 {c045912f6d954c17caf3350599006197} /protobuf.Greeter/SayHello, 0.001ms, name:"World", message:"Hello World"\n2023-03-15 19:50:57.284 {500a972f6d954c17cbf33505252b0e01} /protobuf.Greeter/SayHello, 0.001ms, name:"World", message:"Hello World"\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u5ba2\u6237\u7aef\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'$ go run client.go\n2023-03-15 19:50:57.278 [DEBU] client conn updated with addresses [{"Addr":"10.35.12.81:53962","ServerName":"demo","Attributes":{},"BalancerAttributes":null,"Type":0,"Metadata":null},{"Addr":"10.35.12.81:53973","ServerName":"demo","Attributes":{},"BalancerAttributes":null,"Type":0,"Metadata":null}]\n2023-03-15 19:50:57.281 [DEBU] {b89a0d2f6d954c17c4f33505a046817c} Response: Hello World\n2023-03-15 19:50:57.282 [DEBU] {7025612f6d954c17c5f335051bf10899} Response: Hello World\n2023-03-15 19:50:57.282 [DEBU] {28bf732f6d954c17c6f33505adedff5f} Response: Hello World\n2023-03-15 19:50:57.283 [DEBU] {60567c2f6d954c17c7f335052ce05185} Response: Hello World\n2023-03-15 19:50:57.283 [DEBU] {9876832f6d954c17c8f3350580ed535b} Response: Hello World\n2023-03-15 19:50:57.284 [DEBU] {684e8b2f6d954c17c9f33505d56e4b05} Response: Hello World\n2023-03-15 19:50:57.284 [DEBU] {c045912f6d954c17caf3350599006197} Response: Hello World\n2023-03-15 19:50:57.285 [DEBU] {500a972f6d954c17cbf33505252b0e01} Response: Hello World\n2023-03-15 19:50:57.286 [DEBU] {f8d09b2f6d954c17ccf33505dff1a4ea} Response: Hello World\n2023-03-15 19:50:57.287 [DEBU] {f0fab02f6d954c17cdf33505438b2c80} Response: Hello World\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u5ba2\u6237\u7aef\u53d1\u9001\u4e86 ",(0,c.jsx)(n.code,{children:"10"})," \u6b21\u8bf7\u6c42\uff0c\u4e24\u4e2a\u670d\u52a1\u7aef\u5206\u522b\u63a5\u6536\u5230\u4e86 ",(0,c.jsx)(n.code,{children:"4"})," \u6b21\u548c ",(0,c.jsx)(n.code,{children:"6"})," \u6b21\u8bf7\u6c42\uff0c\u8bf7\u6c42\u7684\u8d1f\u8f7d\u6bd4\u8f83\u968f\u673a\u3002"]}),"\n",(0,c.jsxs)(n.h2,{id:"\u6ce8\u518c\u53d1\u73b0--resolver",children:["\u6ce8\u518c\u53d1\u73b0- ",(0,c.jsx)(n.code,{children:"Resolver"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u6ce8\u518c\u53d1\u73b0\u7531 ",(0,c.jsx)(n.code,{children:"grpcx.Resolver"})," \u6a21\u5757\u7ef4\u62a4\uff0c\u8be5\u6a21\u5757\u7528\u4e8e ",(0,c.jsx)(n.code,{children:"GRPC"})," \u89e3\u6790\u670d\u52a1\u540d\u79f0\u3002 ",(0,c.jsx)(n.code,{children:"grpcx"})," \u7ec4\u4ef6\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f7f\u7528\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u5b9e\u73b0\u6ce8\u518c\u53d1\u73b0\uff0c\u4ec5\u7528\u4e8e\u6d4b\u8bd5\u4f7f\u7528\u3002\u5982\u679c\u662f\u751f\u4ea7\u73af\u5883\uff0c\u5219\u9700\u8981\u4f7f\u7528\u5176\u4ed6\u7684\u6ce8\u518c\u53d1\u73b0\u7ec4\u4ef6\u3002\u4e00\u4e2a\u7b80\u5355\u793a\u4f8b\uff1a"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"server.go"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/contrib/registry/etcd/v2"\n    "github.com/gogf/gf/contrib/rpc/grpcx/v2"\n    "github.com/gogf/gf/example/rpc/grpcx/resolver/controller"\n)\n\nfunc main() {\n    grpcx.Resolver.Register(etcd.New("127.0.0.1:2379"))\n\n    s := grpcx.Server.New()\n    controller.Register(s)\n    s.Run()\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u5176\u4e2d\u7684 ",(0,c.jsx)(n.code,{children:'grpcx.Resolver.Register(etcd.New("127.0.0.1:2379")) '})," \u7528\u4e8e\u8bbe\u7f6e\u670d\u52a1\u6ce8\u518c\u53d1\u73b0\u7684\u7ec4\u4ef6\u4e3a ",(0,c.jsx)(n.code,{children:"etcd"}),"\uff0c\u4ec5\u652f\u6301 ",(0,c.jsx)(n.code,{children:"GRPC"})," \u534f\u8bae\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"client.go"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/contrib/registry/etcd/v2"\n    "github.com/gogf/gf/contrib/rpc/grpcx/v2"\n    "github.com/gogf/gf/example/rpc/grpcx/resolver/protobuf"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    grpcx.Resolver.Register(etcd.New("127.0.0.1:2379"))\n\n    var (\n        ctx    = gctx.New()\n        conn   = grpcx.Client.MustNewGrpcClientConn("demo")\n        client = protobuf.NewGreeterClient(conn)\n    )\n    res, err := client.SayHello(ctx, &protobuf.HelloRequest{Name: "World"})\n    if err != nil {\n        g.Log().Error(ctx, err)\n        return\n    }\n    g.Log().Debug(ctx, "Response:", res.Message)\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u542f\u52a8 ",(0,c.jsx)(n.code,{children:"etcd"}),"\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'$ etcd\n{"level":"info","ts":"2023-03-15T20:02:50.966+0800","caller":"etcdmain/etcd.go:73","msg":"Running: ","args":["etcd"]}\n{"level":"info","ts":"2023-03-15T20:02:50.967+0800","caller":"etcdmain/etcd.go:100","msg":"failed to detect default host","error":"default host not supported on darwin_amd64"}\n{"level":"warn","ts":"2023-03-15T20:02:50.967+0800","caller":"etcdmain/etcd.go:105","msg":"\'data-dir\' was empty; using default","data-dir":"default.etcd"}\n{"level":"info","ts":"2023-03-15T20:02:50.967+0800","caller":"etcdmain/etcd.go:116","msg":"server has been already initialized","data-dir":"default.etcd","dir-type":"member"}\n{"level":"info","ts":"2023-03-15T20:02:50.967+0800","caller":"embed/etcd.go:124","msg":"configuring peer listeners","listen-peer-urls":["http://localhost:2380"]}\n{"level":"info","ts":"2023-03-15T20:02:50.968+0800","caller":"embed/etcd.go:132","msg":"configuring client listeners","listen-client-urls":["http://localhost:2379"]}\n...\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd0\u884c ",(0,c.jsx)(n.code,{children:"server.go"}),"\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'$ go run server.go\n2023-03-15 20:02:19.472 [DEBU] service register: &{Head: Deployment: Namespace: Name:demo Version: Endpoints:10.35.12.81:55066 Metadata:map[protocol:grpc]}\n2023-03-15 20:02:19.516 [DEBU] etcd put success with key "/service/default/default/demo/latest/10.35.12.81:55066", value "{"protocol":"grpc"}", lease "7587869265929863945"\n2023-03-15 20:02:19.516 [INFO] pid[92040]: grpc server started listening on [:55066]\n2023-03-15 20:02:29.310 {88c4c04e0e964c17dddec53b1adb54f7} /protobuf.Greeter/SayHello, 0.001ms, name:"World", message:"Hello World"\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd0\u884c ",(0,c.jsx)(n.code,{children:"client.go"}),"\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'$ go run client.go\n2023-03-15 20:02:29.297 [DEBU] Watch key "/service/default/default/demo/latest/"\n2023-03-15 20:02:29.307 [DEBU] client conn updated with addresses [{"Addr":"10.35.12.81:55066","ServerName":"demo","Attributes":{},"BalancerAttributes":null,"Type":0,"Metadata":null}]\n2023-03-15 20:02:29.308 [DEBU] client conn updated with addresses [{"Addr":"10.35.12.81:55066","ServerName":"demo","Attributes":{},"BalancerAttributes":null,"Type":0,"Metadata":null}]\n2023-03-15 20:02:29.310 [DEBU] {88c4c04e0e964c17dddec53b1adb54f7} Response: Hello World\n'})})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(i,{...e})}):i(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>s});var c=r(96540);const o={},t=c.createContext(o);function l(e){const n=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),c.createElement(t.Provider,{value:n},e.children)}}}]);