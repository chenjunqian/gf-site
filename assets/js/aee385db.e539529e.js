"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[16866],{251673:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u7ed3\u6784\u4f53\u6821\u9a8c/\u7ed3\u6784\u4f53\u6821\u9a8c-CheckStruct","title":"\u7ed3\u6784\u4f53\u6821\u9a8c-CheckStruct","description":"CheckStruct \u7684\u4f7f\u7528\u65b9\u5f0f\u540c CheckMap\uff0c\u9664\u4e86\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a struct\u7c7b\u578b \u7684\u7ed3\u6784\u4f53\u5bf9\u8c61\uff08\u4e5f\u53ef\u4ee5\u662f\u5bf9\u8c61\u6307\u9488\uff09\u3002","source":"@site/versioned_docs/version-1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u7ed3\u6784\u4f53\u6821\u9a8c/\u7ed3\u6784\u4f53\u6821\u9a8c-CheckStruct.md","sourceDirName":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u7ed3\u6784\u4f53\u6821\u9a8c","slug":"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u7ed3\u6784\u4f53\u6821\u9a8c/\u7ed3\u6784\u4f53\u6821\u9a8c-CheckStruct","permalink":"/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u7ed3\u6784\u4f53\u6821\u9a8c/\u7ed3\u6784\u4f53\u6821\u9a8c-CheckStruct","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u7ed3\u6784\u4f53\u6821\u9a8c/\u7ed3\u6784\u4f53\u6821\u9a8c-CheckStruct.md","tags":[],"version":"1.16.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"\u7ed3\u6784\u4f53\u6821\u9a8c-CheckStruct","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u6570\u636e\u6821\u9a8c-\u81ea\u5b9a\u4e49\u9519\u8bef","permalink":"/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u81ea\u5b9a\u4e49\u9519\u8bef"},"next":{"title":"\u7ed3\u6784\u4f53\u6821\u9a8c-CheckStructWithData","permalink":"/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u7ed3\u6784\u4f53\u6821\u9a8c/\u7ed3\u6784\u4f53\u6821\u9a8c-CheckStructWithData"}}');var c=s(474848),t=s(28453);const d={title:"\u7ed3\u6784\u4f53\u6821\u9a8c-CheckStruct",sidebar_position:0,hide_title:!0},i=void 0,a={},l=[{value:"\u4f7f\u7528 <code>map</code> \u6307\u5b9a\u89c4\u5219\u53ca\u63d0\u793a\u4fe1\u606f",id:"\u4f7f\u7528-map-\u6307\u5b9a\u89c4\u5219\u53ca\u63d0\u793a\u4fe1\u606f",level:2},{value:"\u4f7f\u7528 <code>gvalid tag</code> \u7ed1\u5b9a\u89c4\u5219\u53ca\u9519\u8bef\u4fe1\u606f",id:"\u4f7f\u7528-gvalid-tag-\u7ed1\u5b9a\u89c4\u5219\u53ca\u9519\u8bef\u4fe1\u606f",level:2},{value:"\u7ed3\u6784\u4f53 <code>embedded</code> \u5d4c\u5957\u6821\u9a8c",id:"\u7ed3\u6784\u4f53-embedded-\u5d4c\u5957\u6821\u9a8c",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"CheckStruct"})," \u7684\u4f7f\u7528\u65b9\u5f0f\u540c ",(0,c.jsx)(n.code,{children:"CheckMap"}),"\uff0c\u9664\u4e86\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a ",(0,c.jsx)(n.code,{children:"struct\u7c7b\u578b"})," \u7684\u7ed3\u6784\u4f53\u5bf9\u8c61\uff08\u4e5f\u53ef\u4ee5\u662f\u5bf9\u8c61\u6307\u9488\uff09\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6ce8\u610f\u54df\uff0c\u5927\u5bb6\u5e38\u95ee\u5230\u5f97\u4e00\u4e2a\u95ee\u9898\u3002 ",(0,c.jsx)(n.code,{children:"struct"})," \u7684\u5c5e\u6027\u4f1a\u6709 ",(0,c.jsx)(n.code,{children:"\u9ed8\u8ba4\u503c"}),"\uff0c\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u4f1a\u5f15\u8d77 ",(0,c.jsx)(n.code,{children:"required"})," \u89c4\u5219\u7684\u5931\u6548\uff0c\u56e0\u6b64\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u914d\u5408\u591a\u79cd\u89c4\u5219\uff08\u4f8b\u5982 ",(0,c.jsx)(n.code,{children:"min"})," \u89c4\u5219\uff09\u4e00\u8d77\u6821\u9a8c\u4f1a\u662f\u4e00\u4e2a\u6bd4\u8f83\u4e25\u8c28\u7684\u505a\u6cd5\u3002\u6b64\u5916\uff0c\u4e5f\u53ef\u4ee5\u5c06\u5c5e\u6027\u6539\u4e3a\u6307\u9488\u7c7b\u578b\uff0c\u4f8b\u5982 ",(0,c.jsx)(n.code,{children:"*int"}),"\u3001 ",(0,c.jsx)(n.code,{children:"*float64"})," \u7b49\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u63a5\u53e3\u6587\u6863\uff1a ",(0,c.jsx)(n.a,{href:"https://godoc.org/github.com/gogf/gf/util/gvalid",children:"https://godoc.org/github.com/gogf/gf/util/gvalid"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:"func CheckStruct(ctx context.Context, object interface{}, rules interface{}, msgs ...CustomMsg) Error\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6821\u9a8c\u65b9\u6cd5\u4e5f\u53ef\u4ee5\u4f7f\u7528\u6821\u9a8c\u5bf9\u8c61\u7684\u94fe\u5f0f\u64cd\u4f5c\u65b9\u6cd5\u6765\u66ff\u4ee3\uff0c\u5305\u65b9\u6cd5 ",(0,c.jsx)(n.code,{children:"CheckStruct"})," \u7b49\u540c\u4e8e\u4ee5\u4e0b\u94fe\u5f0f\u64cd\u4f5c\u65b9\u5f0f\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:"g.Validator().Ctx(ctx).Rules(rules).Messages(customErrorMessages).CheckStruct(object)\n"})}),"\n",(0,c.jsxs)(n.h2,{id:"\u4f7f\u7528-map-\u6307\u5b9a\u89c4\u5219\u53ca\u63d0\u793a\u4fe1\u606f",children:["\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"map"})," \u6307\u5b9a\u89c4\u5219\u53ca\u63d0\u793a\u4fe1\u606f"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "github.com/gogf/gf/frame/g"\n    "github.com/gogf/gf/util/gvalid"\n)\n\nfunc main() {\n    type User struct {\n        Age  int\n        Name string\n    }\n    rules := map[string]string{\n        "Name": "required|length:6,16",\n        "Age":  "between:18,30",\n    }\n    messages := map[string]interface{}{\n        "Name": map[string]string{\n            "required": "\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a",\n            "length":   "\u540d\u79f0\u957f\u5ea6\u4e3a:min\u5230:max\u4e2a\u5b57\u7b26",\n        },\n        "Age": "\u5e74\u9f84\u4e3a18\u523030\u5468\u5c81",\n    }\n    user := User{Name: "john"}\n    err := gvalid.CheckStruct(context.TODO(), user, rules, messages)\n    // \u4e5f\u53ef\u4ee5\u4f7f\u7528\u94fe\u5f0f\u64cd\u4f5c\n    // err := g.Validator().Rules(rules).Messages(messages).CheckStruct(user)\n    if err != nil {\n        g.Dump(err.Maps())\n    }\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u4ee5\u4e0a\u793a\u4f8b\u4e2d\uff0c ",(0,c.jsx)(n.code,{children:"Age"})," \u5c5e\u6027\u7531\u4e8e\u9ed8\u8ba4\u503c ",(0,c.jsx)(n.code,{children:"0"})," \u7684\u5b58\u5728\uff0c\u56e0\u6b64\u4f1a\u5f15\u8d77 ",(0,c.jsx)(n.code,{children:"required"})," \u89c4\u5219\u7684\u5931\u6548\uff0c\u56e0\u6b64\u8fd9\u91cc\u6ca1\u6709\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"required"})," \u89c4\u5219\u800c\u662f\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"between"})," \u89c4\u5219\u6765\u8fdb\u884c\u6821\u9a8c\u3002\u793a\u4f8b\u4ee3\u7801\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:'{\n    "Age": {\n        "between": "\u5e74\u9f84\u4e3a18\u523030\u5468\u5c81"\n    },\n    "Name": {\n        "length": "\u540d\u79f0\u957f\u5ea6\u4e3a6\u523016\u4e2a\u5b57\u7b26"\n    }\n}\n'})}),"\n",(0,c.jsxs)(n.h2,{id:"\u4f7f\u7528-gvalid-tag-\u7ed1\u5b9a\u89c4\u5219\u53ca\u9519\u8bef\u4fe1\u606f",children:["\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"gvalid tag"})," \u7ed1\u5b9a\u89c4\u5219\u53ca\u9519\u8bef\u4fe1\u606f"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"gvalid tag"})," \u8bbe\u7f6e\u7684\u89c4\u5219\uff0c\u5176\u6821\u9a8c\u7ed3\u679c\u662f\u987a\u5e8f\u6027\u7684\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "github.com/gogf/gf/frame/g"\n    "github.com/gogf/gf/util/gvalid"\n)\n\ntype User struct {\n    Uid   int    `v:"uid      @integer|min:1#|\u8bf7\u8f93\u5165\u7528\u6237ID"`\n    Name  string `v:"name     @required|length:6,30#\u8bf7\u8f93\u5165\u7528\u6237\u540d\u79f0|\u7528\u6237\u540d\u79f0\u957f\u5ea6\u975e\u6cd5"`\n    Pass1 string `v:"password1@required|password3"`\n    Pass2 string `v:"password2@required|password3|same:Pass2#|\u5bc6\u7801\u683c\u5f0f\u4e0d\u5408\u6cd5|\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165"`\n}\n\nfunc main() {\n    user := &User{\n        Name:  "john",\n        Pass1: "Abc123!@#",\n        Pass2: "123",\n    }\n\n    // \u4f7f\u7528\u7ed3\u6784\u4f53\u5b9a\u4e49\u7684\u6821\u9a8c\u89c4\u5219\u548c\u9519\u8bef\u63d0\u793a\u8fdb\u884c\u6821\u9a8c\n    if e := gvalid.CheckStruct(context.TODO(), user, nil); e != nil {\n        g.Dump(e.Items())\n    }\n\n    // \u81ea\u5b9a\u4e49\u6821\u9a8c\u89c4\u5219\u548c\u9519\u8bef\u63d0\u793a\uff0c\u5bf9\u5b9a\u4e49\u7684\u7279\u5b9a\u6821\u9a8c\u89c4\u5219\u548c\u9519\u8bef\u63d0\u793a\u8fdb\u884c\u8986\u76d6\n    rules := map[string]string{\n        "uid": "min:6",\n    }\n    messages := map[string]interface{}{\n        "password2": map[string]string{\n            "password3": "\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a",\n        },\n    }\n    err := gvalid.CheckStruct(context.TODO(), user, rules, messages)\n    // \u4e5f\u53ef\u4ee5\u4f7f\u7528\u94fe\u5f0f\u64cd\u4f5c\n    // err := g.Validator().Rules(rules).Messages(messages).CheckStruct(user)\n    if err != nil {\n        g.Dump(err.Items())\n    }\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u6211\u4eec\u53ef\u4ee5\u5bf9\u5728 ",(0,c.jsx)(n.code,{children:"struct"})," \u5b9a\u4e49\u65f6\u4f7f\u7528\u4e86 ",(0,c.jsx)(n.code,{children:"gvalid"})," \u7684\u6807\u7b7e\u5c5e\u6027( ",(0,c.jsx)(n.code,{children:"gvalid tag"}),")\u6765\u7ed1\u5b9a\u6821\u9a8c\u7684\u89c4\u5219\u53ca\u9519\u8bef\u63d0\u793a\u4fe1\u606f\uff0c\u89c4\u5219\u5982\u4e0b\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-html",children:"[\u5c5e\u6027\u522b\u540d@]\u6821\u9a8c\u89c4\u5219[#\u9519\u8bef\u63d0\u793a]\n\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c ",(0,c.jsx)(n.code,{children:"CheckStruct"})," \u548c ",(0,c.jsx)(n.code,{children:"CheckMap"})," \u7684 ",(0,c.jsx)(n.code,{children:"gvalid tag"})," \u89c4\u5219\u662f\u4e00\u6837\u7684\uff0c\u4e0d\u8fc7\u5728\u5b57\u6bb5\u7684\u542b\u4e49\u4e0a\u6709\u4e00\u70b9\u70b9\u5c0f\u533a\u522b\uff1a"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"\u5c5e\u6027\u522b\u540d"})," \u548c ",(0,c.jsx)(n.code,{children:"\u9519\u8bef\u63d0\u793a"})," \u4e3a ",(0,c.jsx)(n.strong,{children:"\u975e\u5fc5\u9700\u5b57\u6bb5"}),"\uff0c ",(0,c.jsx)(n.code,{children:"\u6821\u9a8c\u89c4\u5219"})," \u662f ",(0,c.jsx)(n.strong,{children:"\u5fc5\u9700\u5b57\u6bb5\u3002"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"\u5c5e\u6027\u522b\u540d"})," \u975e\u5fc5\u9700\u5b57\u6bb5\uff0c\u6307\u5b9a\u5728\u6821\u9a8c\u4e2d\u4f7f\u7528\u7684\u5bf9\u5e94 ",(0,c.jsx)(n.code,{children:"struct"})," \u5c5e\u6027\u7684\u522b\u540d\uff0c\u540c\u65f6\u6821\u9a8c\u6210\u529f\u540e\u7684 ",(0,c.jsx)(n.code,{children:"map"})," \u4e2d\u7684\u4e5f\u5c06\u4f7f\u7528\u8be5\u522b\u540d\u8fd4\u56de\uff0c\u4f8b\u5982\u5728\u5904\u7406\u8bf7\u6c42\u8868\u5355\u65f6\u6bd4\u8f83\u6709\u7528\uff0c\u56e0\u4e3a\u8868\u5355\u7684\u5b57\u6bb5\u540d\u79f0\u5f80\u5f80\u548c ",(0,c.jsx)(n.code,{children:"struct"})," \u7684\u5c5e\u6027\u540d\u79f0\u4e0d\u4e00\u81f4\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"\u9519\u8bef\u63d0\u793a"})," \u975e\u5fc5\u9700\u5b57\u6bb5\uff0c\u8868\u793a\u81ea\u5b9a\u4e49\u7684\u9519\u8bef\u63d0\u793a\u4fe1\u606f\uff0c\u5f53\u89c4\u5219\u6821\u9a8c\u65f6\u5bf9\u9ed8\u8ba4\u7684\u9519\u8bef\u63d0\u793a\u4fe1\u606f\u8fdb\u884c\u8986\u76d6\uff1b"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u6b64\u793a\u4f8b\u4ee3\u7801\u4e2d\uff0c ",(0,c.jsx)(n.code,{children:"same:password1"})," \u89c4\u5219\u540c\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"same:Pass2"})," \u89c4\u5219\u662f\u4e00\u6837\u7684\u6548\u679c\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5728\u6570\u636e\u6821\u9a8c\u4e2d\uff0c\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528\u539f\u6709\u7684 ",(0,c.jsx)(n.code,{children:"struct"})," \u5c5e\u6027\u540d\u79f0\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u522b\u540d\u3002\u4f46\u662f\uff0c\u8fd4\u56de\u7684\u7ed3\u679c\u4e2d\u53ea\u4f1a\u4f7f\u7528\u522b\u540d\u8fd4\u56de\uff0c\u8fd9\u4e5f\u662f\u522b\u540d\u6700\u5927\u7684\u7528\u9014\u3002\u6b64\u5916\uff0c\u5728\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"CheckStruct"})," \u65b9\u6cd5\u5bf9 ",(0,c.jsx)(n.code,{children:"struct"})," \u5bf9\u8c61\u8fdb\u884c\u6821\u9a8c\u65f6\uff0c\u4e5f\u53ef\u4ee5\u4f20\u9012\u6821\u9a8c\u6216\u8005\u548c\u9519\u8bef\u63d0\u793a\u53c2\u6570\uff0c\u8fd9\u4e2a\u65f6\u5019\u4f1a\u8986\u76d6 ",(0,c.jsx)(n.code,{children:"struct"})," \u5728\u5b9a\u4e49\u65f6\u7ed1\u5b9a\u7684\u5bf9\u5e94\u53c2\u6570\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u4ee5\u4e0a\u793a\u4f8b\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:'[\n    {\n        "uid": {\n            "min": "\u8bf7\u8f93\u5165\u7528\u6237ID"\n        }\n    },\n    {\n        "name": {\n            "length": "\u7528\u6237\u540d\u79f0\u957f\u5ea6\u975e\u6cd5"\n        }\n    },\n    {\n        "password2": {\n            "password3": "\u5bc6\u7801\u683c\u5f0f\u4e0d\u5408\u6cd5"\n        }\n    }\n] [\n    {\n        "name": {\n            "length": "\u7528\u6237\u540d\u79f0\u957f\u5ea6\u975e\u6cd5"\n        }\n    },\n    {\n        "password2": {\n            "password3": "\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a"\n        }\n    }\n]\n'})}),"\n",(0,c.jsxs)(n.h2,{id:"\u7ed3\u6784\u4f53-embedded-\u5d4c\u5957\u6821\u9a8c",children:["\u7ed3\u6784\u4f53 ",(0,c.jsx)(n.code,{children:"embedded"})," \u5d4c\u5957\u6821\u9a8c"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"CheckStruct"})," \u652f\u6301\u5d4c\u5957\u7684\uff08 ",(0,c.jsx)(n.code,{children:"embedded"}),"\uff09\u7ed3\u6784\u4f53\u6821\u9a8c\uff0c\u5373\u5982\u679c\u5c5e\u6027\u4e5f\u662f\u7ed3\u6784\u4f53\uff0c\u5e76\u4e14\u7ed3\u6784\u4f53\u7684\u5c5e\u6027\u5e26\u6709 ",(0,c.jsx)(n.code,{children:"gvalid"})," \u6807\u7b7e\uff0c\u65e0\u8bba\u591a\u6df1\u7684\u5d4c\u5957\u5c42\u7ea7\uff0c\u8fd9\u4e9b\u5c5e\u6027\u90fd\u5c06\u88ab\u6839\u636e\u8bbe\u5b9a\u7684\u89c4\u5219\u8fdb\u884c\u6821\u9a8c\u3002\u56e0\u4e3a\u6821\u9a8c\u7ec4\u4ef6\u5c06\u5d4c\u5957\u7ed3\u6784\u4f53\u5c5e\u6027\u770b\u505a\u662f\u7ed3\u6784\u4f53\u7684\u4e00\u90e8\u5206\uff0c\u6821\u9a8c\u65f6\u4f1a\u5c06\u5176\u8fdb\u884c\u6253\u6563\uff0c\u800c\u4e0d\u662f\u770b\u505a\u4e00\u4e2a\u72ec\u7acb\u7684\u5c5e\u6027\u8fdb\u884c\u6821\u9a8c\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "github.com/gogf/gf/frame/g"\n    "github.com/gogf/gf/util/gvalid"\n)\n\nfunc main() {\n    type Pass struct {\n        Pass1 string `valid:"password1@required|same:password2#\u8bf7\u8f93\u5165\u60a8\u7684\u5bc6\u7801|\u60a8\u4e24\u6b21\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u4e00\u81f4"`\n        Pass2 string `valid:"password2@required|same:password1#\u8bf7\u518d\u6b21\u8f93\u5165\u60a8\u7684\u5bc6\u7801|\u60a8\u4e24\u6b21\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u4e00\u81f4"`\n    }\n    type User struct {\n        Pass\n        Id   int\n        Name string `valid:"name@required#\u8bf7\u8f93\u5165\u60a8\u7684\u59d3\u540d"`\n    }\n    user := &User{\n        Name: "john",\n        Pass: Pass{\n            Pass1: "1",\n            Pass2: "2",\n        },\n    }\n    err := gvalid.CheckStruct(context.TODO(), user, nil)\n    // \u4e5f\u53ef\u4ee5\u4f7f\u7528\u94fe\u5f0f\u64cd\u4f5c\n    // err := g.Validator().CheckStruct(user)\n    g.Dump(err.Maps())\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:'{\n    "password1": {\n        "same": "\u60a8\u4e24\u6b21\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u4e00\u81f4"\n    },\n    "password2": {\n        "same": "\u60a8\u4e24\u6b21\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u4e00\u81f4"\n    }\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u6ce8\u610f\u4e8b\u9879\uff1a"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"\u975e\u5d4c\u5957\u7684\u7ed3\u6784\u4f53\u5c5e\u6027\u4f1a\u88ab\u6821\u9a8c\u7ec4\u4ef6\u5f53\u505a\u72ec\u7acb\u7684\u5c5e\u6027\u8fdb\u884c\u6821\u9a8c\uff0c\u5e76\u4e14\u7531\u4e8e\u6821\u9a8c\u7684\u5c5e\u6027\u503c\u662f\u7ed3\u6784\u4f53\u5bf9\u8c61\uff0c\u56e0\u6b64\u5f80\u5f80\u9700\u8981\u81ea\u5b9a\u4e49\u6821\u9a8c\u89c4\u5219\u6765\u5b9e\u73b0\u6821\u9a8c\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u5982\u679c\u5d4c\u5957\u7684\u7ed3\u6784\u4f53\u5e26\u6709\u6807\u7b7e\u522b\u540d\uff0c\u90a3\u4e48\u8be5\u5d4c\u5957\u7ed3\u6784\u4f53\u4e5f\u5c06\u88ab\u770b\u505a\u975e\u5d4c\u5957\u7684\u7ed3\u6784\u4f53\u5c5e\u6027\u6267\u884c\u6821\u9a8c\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u4f8b\u5982\u4ee5\u4e0b\u7ed3\u6784\u4f53\u5c5e\u6027\u90fd\u5c06\u88ab\u770b\u505a\u72ec\u7acb\u7684\u7ed3\u6784\u4f53\u5c5e\u6027\u6267\u884c\u6821\u9a8c\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'type MyStruct struct {\n    Base `p:"base"`\n}\n\ntype MyStruct struct {\n    BaseStruct Base `p:"base"`\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>i});var r=s(296540);const c={},t=r.createContext(c);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);