"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[32311],{674564:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-ScanAndCount","title":"ORM\u67e5\u8be2-ScanAndCount","description":"\u57fa\u672c\u4ecb\u7ecd","source":"@site/versioned_docs/version-2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-ScanAndCount.md","sourceDirName":"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2","slug":"/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-ScanAndCount","permalink":"/en/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-ScanAndCount","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-ScanAndCount.md","tags":[],"version":"2.6.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":4,"frontMatter":{"title":"ORM\u67e5\u8be2-ScanAndCount","sidebar_position":4,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u67e5\u8be2-Scan","permalink":"/en/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-Scan"},"next":{"title":"ORM\u67e5\u8be2-LeftJoin/RightJoin/InnerJoin","permalink":"/en/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-LeftJoinRightJoinInnerJoin"}}');var r=t(474848),o=t(28453);const s={title:"ORM\u67e5\u8be2-ScanAndCount",sidebar_position:4,hide_title:!0},d=void 0,c={},l=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function a(n){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,r.jsxs)(e.p,{children:["\u5728\u5206\u9875\u67e5\u8be2\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u5f80\u5f80\u9700\u8981\u5148\u8c03\u7528 ",(0,r.jsx)(e.code,{children:"Scan"})," \u65b9\u6cd5\u7ed3\u5408 ",(0,r.jsx)(e.code,{children:"Limit/Page"})," \u94fe\u5f0f\u64cd\u4f5c\u65b9\u6cd5\u67e5\u8be2\u5217\u8868\uff0c\u968f\u540e\u518d\u53bb\u6389 ",(0,r.jsx)(e.code,{children:"Limit/Page"})," \u94fe\u5f0f\u64cd\u4f5c\u65b9\u6cd5\u67e5\u8be2\u603b\u6570\u91cf\u3002\u8fd9\u4e00\u8fc7\u7a0b\u8f83\u4e3a\u7e41\u7410\uff0c\u56e0\u6b64\u4ece ",(0,r.jsx)(e.code,{children:"v2.5.0"})," \u7248\u672c\u5f00\u59cb\uff0c\u6846\u67b6\u63d0\u4f9b\u4e86 ",(0,r.jsx)(e.code,{children:"ScanAndCount"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u7b80\u5316\u5206\u9875\u67e5\u8be2\u7684\u573a\u666f\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,r.jsx)(e.p,{children:"\u793a\u4f8b\u4ee3\u7801\u6765\u6e90\u4e8e\u4e1a\u52a1\u9879\u76ee\u6848\u4f8b\uff0c\u4ec5\u4f9b\u53c2\u8003\u7406\u89e3\uff0c\u65e0\u6cd5\u72ec\u7acb\u8fd0\u884c\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528\u4f20\u7edf\u7684\u5206\u9875\u67e5\u8be2\u903b\u8f91\u4ee3\u7801\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"// GetList \u83b7\u53d6\u5b9e\u4f8b\u7684\u7528\u6237\u5217\u8868.\nfunc (s sUserInfo) GetList(ctx context.Context, in model.UserInfoGetListInput) (items []entity.UserInfo, total int, err error) {\n    items = make([]entity.UserInfo, 0)\n    orm := dao.UserInfo.Ctx(ctx).OmitEmpty().Where(do.UserInfo{\n        ResourceId: in.ResourceId,\n        Status:     in.Statuses,\n    })\n    err = orm.Order(in.OrderBy, in.OrderDirection).Limit(in.Offset, in.Limit).Scan(&items)\n    if err != nil {\n        return\n    }\n    total, err = orm.Count()\n    return\n}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"ScanAndCount"})," \u65b9\u6cd5\u5b9e\u73b0\u5206\u9875\u67e5\u8be2\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"// GetList \u83b7\u53d6\u5b9e\u4f8b\u7684\u7528\u6237\u5217\u8868.\nfunc (s sUserInfo) GetList(ctx context.Context, in model.UserInfoGetListInput) (items []entity.UserInfo, total int, err error) {\n    items = make([]entity.UserInfo, 0)\n    err = dao.UserInfo.Ctx(ctx).OmitEmpty().\n        Where(do.UserInfo{\n            ResourceId: in.ResourceId,\n            Status:     in.Statuses,\n        }).\n        Order(in.OrderBy, in.OrderDirection).\n        Limit(in.Offset, in.Limit).\n        ScanAndCount(&items, &total, true)\n    return\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u4ec5\u7528\u4e8e\u9700\u8981\u540c\u65f6\u67e5\u8be2\u6570\u636e\u548c\u603b\u6570\u91cf\u7684\u573a\u666f\uff0c\u4e00\u822c\u4e3a\u5206\u9875\u573a\u666f\u3002"}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"ScanAndCount"})," \u7684\u7b2c ",(0,r.jsx)(e.code,{children:"3"})," \u4e2a\u53c2\u6570 ",(0,r.jsx)(e.code,{children:"useFieldForCount"})," \u8868\u793a\u662f\u5426\u5728\u6267\u884c ",(0,r.jsx)(e.code,{children:"Count"})," \u64cd\u4f5c\u7684\u65f6\u5019\u5c06 ",(0,r.jsx)(e.code,{children:"Fields"})," \u4f5c\u4e3a ",(0,r.jsx)(e.code,{children:"Count"})," \u53c2\u6570\uff0c\u4e00\u822c\u4e3a ",(0,r.jsx)(e.code,{children:"true"})," \u5373\u53ef\u3002\u4f20\u9012 ",(0,r.jsx)(e.code,{children:"false"})," \u8868\u793a\u6267\u884c ",(0,r.jsx)(e.code,{children:"COUNT(1)"})," \u67e5\u8be2\u603b\u6570\u91cf\u3002"]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>d});var i=t(296540);const r={},o=i.createContext(r);function s(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);