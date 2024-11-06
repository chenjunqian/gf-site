"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[70800],{540298:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"\u6a21\u5757\u5217\u8868/\u6570\u636e\u7ed3\u6784/glist -\u94fe\u8868","title":"glist (\u94fe\u8868)","description":"\u5e26\u5e76\u53d1\u5b89\u5168\u5f00\u5173\u7684\u53cc\u5411\u5217\u8868\u3002","source":"@site/versioned_docs/version-1.16.x/\u6a21\u5757\u5217\u8868/\u6570\u636e\u7ed3\u6784/glist -\u94fe\u8868.md","sourceDirName":"\u6a21\u5757\u5217\u8868/\u6570\u636e\u7ed3\u6784","slug":"/\u6a21\u5757\u5217\u8868/\u6570\u636e\u7ed3\u6784/glist -\u94fe\u8868","permalink":"/en/1.16.x/\u6a21\u5757\u5217\u8868/\u6570\u636e\u7ed3\u6784/glist -\u94fe\u8868","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u6a21\u5757\u5217\u8868/\u6570\u636e\u7ed3\u6784/glist -\u94fe\u8868.md","tags":[],"version":"1.16.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":3,"frontMatter":{"title":"glist (\u94fe\u8868)","sidebar_position":3,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"gset (\u96c6\u5408)","permalink":"/en/1.16.x/\u6a21\u5757\u5217\u8868/\u6570\u636e\u7ed3\u6784/gset -\u96c6\u5408"},"next":{"title":"gvar (\u901a\u7528\u53d8\u91cf)","permalink":"/en/1.16.x/\u6a21\u5757\u5217\u8868/\u6570\u636e\u7ed3\u6784/gvar -\u901a\u7528\u53d8\u91cf"}}');var s=t(474848),l=t(28453);const r={title:"glist (\u94fe\u8868)",sidebar_position:3,hide_title:!0},o=void 0,c={},a=[{value:"\u57fa\u7840\u4f7f\u7528",id:"\u57fa\u7840\u4f7f\u7528",level:3},{value:"\u94fe\u8868\u904d\u5386",id:"\u94fe\u8868\u904d\u5386",level:3},{value:"<code>Pop*</code> \u5143\u7d20\u9879\u51fa\u6808",id:"pop-\u5143\u7d20\u9879\u51fa\u6808",level:3},{value:"<code>Join</code> \u5143\u7d20\u9879\u4e32\u8fde",id:"join-\u5143\u7d20\u9879\u4e32\u8fde",level:3},{value:"<code>JSON</code> \u5e8f\u5217\u5316/\u53cd\u5e8f\u5217",id:"json-\u5e8f\u5217\u5316\u53cd\u5e8f\u5217",level:3},{value:"\u6027\u80fd\u6d4b\u8bd5",id:"\u6027\u80fd\u6d4b\u8bd5",level:3}];function g(n){const e={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"\u5e26\u5e76\u53d1\u5b89\u5168\u5f00\u5173\u7684\u53cc\u5411\u5217\u8868\u3002"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u4f7f\u7528\u573a\u666f"}),"\uff1a"]}),"\n",(0,s.jsx)(e.p,{children:"\u53cc\u5411\u94fe\u8868\u3002"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'import "github.com/gogf/gf/container/glist"\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://godoc.org/github.com/gogf/gf/container/glist",children:"https://godoc.org/github.com/gogf/gf/container/glist"})}),"\n",(0,s.jsx)(e.h3,{id:"\u57fa\u7840\u4f7f\u7528",children:"\u57fa\u7840\u4f7f\u7528"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/container/glist"\n)\n\nfunc main() {\n    // Not concurrent-safe in default.\n    l := glist.New()\n    // Push\n    l.PushBack(1)\n    l.PushBack(2)\n    e := l.PushFront(0)\n    // Insert\n    l.InsertBefore(e, -1)\n    l.InsertAfter(e, "a")\n    fmt.Println(l)\n    // Pop\n    fmt.Println(l.PopFront())\n    fmt.Println(l.PopBack())\n    fmt.Println(l)\n}\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'[-1,0,"a",1,2]\n-1\n2\n[0,"a",1]\n\n'})}),"\n",(0,s.jsx)(e.h3,{id:"\u94fe\u8868\u904d\u5386",children:"\u94fe\u8868\u904d\u5386"}),"\n",(0,s.jsxs)(e.p,{children:["\u8be5\u793a\u4f8b\u4e2d\u6211\u4eec\u5c06\u901a\u8fc7\u8bfb\u9501\u548c\u5199\u9501\u904d\u5386\u4e00\u4e2a\u5e76\u53d1\u5b89\u5168\u7684\u94fe\u8868\uff0c\u5206\u522b\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"RLockFunc"})," \u548c ",(0,s.jsx)(e.code,{children:"LockFunc"})," \u5b9e\u73b0\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "container/list"\n    "fmt"\n    "github.com/gogf/gf/container/garray"\n    "github.com/gogf/gf/container/glist"\n)\n\nfunc main() {\n    // concurrent-safe list.\n    l := glist.NewFrom(garray.NewArrayRange(1, 10, 1).Slice(), true)\n    // iterate reading from head.\n    l.RLockFunc(func(list *list.List) {\n        length := list.Len()\n        if length > 0 {\n            for i, e := 0, list.Front(); i < length; i, e = i+1, e.Next() {\n                fmt.Print(e.Value)\n            }\n        }\n    })\n    fmt.Println()\n    // iterate reading from tail.\n    l.RLockFunc(func(list *list.List) {\n        length := list.Len()\n        if length > 0 {\n            for i, e := 0, list.Back(); i < length; i, e = i+1, e.Prev() {\n                fmt.Print(e.Value)\n            }\n        }\n    })\n\n    fmt.Println()\n\n    // iterate reading from head using IteratorAsc.\n    l.IteratorAsc(func(e *glist.Element) bool {\n        fmt.Print(e.Value)\n        return true\n    })\n    fmt.Println()\n    // iterate reading from tail using IteratorDesc.\n    l.IteratorDesc(func(e *glist.Element) bool {\n        fmt.Print(e.Value)\n        return true\n    })\n\n    fmt.Println()\n\n    // iterate writing from head.\n    l.LockFunc(func(list *list.List) {\n        length := list.Len()\n        if length > 0 {\n            for i, e := 0, list.Front(); i < length; i, e = i+1, e.Next() {\n                if e.Value == 6 {\n                    e.Value = "M"\n                    break\n                }\n            }\n        }\n    })\n    fmt.Println(l)\n}\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'12345678910\n10987654321\n12345678910\n10987654321\n[1,2,3,4,5,"M",7,8,9,10]\n\n'})}),"\n",(0,s.jsxs)(e.h3,{id:"pop-\u5143\u7d20\u9879\u51fa\u6808",children:[(0,s.jsx)(e.code,{children:"Pop*"})," \u5143\u7d20\u9879\u51fa\u6808"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/container/glist"\n    "github.com/gogf/gf/frame/g"\n)\n\nfunc main() {\n    l := glist.NewFrom(g.Slice{1, 2, 3, 4, 5, 6, 7, 8, 9})\n\n    fmt.Println(l.PopBack())\n    fmt.Println(l.PopBacks(2))\n    fmt.Println(l.PopFront())\n    fmt.Println(l.PopFronts(2))\n\n    // Output:\n    // 9\n    // [8 7]\n    // 1\n    // [2 3]\n}\n\n'})}),"\n",(0,s.jsxs)(e.h3,{id:"join-\u5143\u7d20\u9879\u4e32\u8fde",children:[(0,s.jsx)(e.code,{children:"Join"})," \u5143\u7d20\u9879\u4e32\u8fde"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/container/glist"\n    "github.com/gogf/gf/frame/g"\n)\n\nfunc main() {\n    var l glist.List\n    l.PushBacks(g.Slice{"a", "b", "c", "d"})\n\n    fmt.Println(l.Join(","))\n\n    // Output:\n    // a,b,c,d\n}\n\n'})}),"\n",(0,s.jsxs)(e.h3,{id:"json-\u5e8f\u5217\u5316\u53cd\u5e8f\u5217",children:[(0,s.jsx)(e.code,{children:"JSON"})," \u5e8f\u5217\u5316/\u53cd\u5e8f\u5217"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"glist"})," \u5bb9\u5668\u5b9e\u73b0\u4e86\u6807\u51c6\u5e93 ",(0,s.jsx)(e.code,{children:"json"})," \u6570\u636e\u683c\u5f0f\u7684\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316\u63a5\u53e3\u3002 1. ",(0,s.jsx)(e.code,{children:"Marshal"})," \u201c`go package main"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'import (\n    "encoding/json"\n    "fmt"\n    "github.com/gogf/gf/container/glist"\n    "github.com/gogf/gf/frame/g"\n)\n\nfunc main() {\n    type Student struct {\n        Id     int\n        Name   string\n        Scores *glist.List\n    }\n    s := Student{\n        Id:     1,\n        Name:   "john",\n        Scores: glist.NewFrom(g.Slice{100, 99, 98}),\n    }\n    b, _ := json.Marshal(s)\n    fmt.Println(string(b))\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'{ "Id": 1, "Name": "john", "Scores": [100, 99, 98] }\n'})}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"Unmarshal"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\n\nimport (\n    "encoding/json"\n    "fmt"\n    "github.com/gogf/gf/container/glist"\n)\n\n\nfunc main() {\n    b := []byte(`{"Id":1,"Name":"john","Scores":[100,99,98]}`)\n    type Student struct {\n        Id     int\n        Name   string\n        Scores *glist.List\n    }\n    s := Student{}\n    json.Unmarshal(b, &s)\n    fmt.Println(s)\n}\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"{1 john [100,99,98]}\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u6027\u80fd\u6d4b\u8bd5",children:"\u6027\u80fd\u6d4b\u8bd5"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://github.com/gogf/gf/blob/master/container/glist/glist_z_bench_test.go",children:"https://github.com/gogf/gf/blob/master/container/glist/glist_z_bench_test.go"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"goos: linux\ngoarch: amd64\npkg: github.com/gogf/gf/container/glist\nBenchmark_PushBack-4             5000000               268 ns/op              56 B/op          2 allocs/op\nBenchmark_PushFront-4           10000000               435 ns/op              56 B/op          2 allocs/op\nBenchmark_Len-4                 30000000              44.5 ns/op               0 B/op          0 allocs/op\nBenchmark_PopFront-4            20000000              71.1 ns/op               0 B/op          0 allocs/op\nBenchmark_PopBack-4             30000000              70.1 ns/op               0 B/op          0 allocs/op\nPASS\n\n"})})]})}function d(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(g,{...n})}):g(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>o});var i=t(296540);const s={},l=i.createContext(s);function r(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);