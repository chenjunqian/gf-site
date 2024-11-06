"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[90815],{527310:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>a,frontMatter:()=>i,metadata:()=>d,toc:()=>l});const d=JSON.parse('{"id":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027","title":"ORM\u9ad8\u7ea7\u7279\u6027","description":"\u8c03\u8bd5\u6a21\u5f0f","source":"@site/versioned_docs/version-1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027.md","sourceDirName":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM","slug":"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027","permalink":"/en/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027.md","tags":[],"version":"1.16.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":7,"frontMatter":{"title":"ORM\u9ad8\u7ea7\u7279\u6027","sidebar_position":7,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u6a21\u578b\u751f\u6210","permalink":"/en/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u6a21\u578b\u751f\u6210"},"next":{"title":"ORM\u63a5\u53e3\u5f00\u53d1","permalink":"/en/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u63a5\u53e3\u5f00\u53d1/"}}');var s=r(474848),c=r(28453);const i={title:"ORM\u9ad8\u7ea7\u7279\u6027",sidebar_position:7,hide_title:!0},t=void 0,o={},l=[{value:"\u8c03\u8bd5\u6a21\u5f0f",id:"\u8c03\u8bd5\u6a21\u5f0f",level:2},{value:"\u65e5\u5fd7\u8f93\u51fa",id:"\u65e5\u5fd7\u8f93\u51fa",level:2},{value:"\u7a7a\u8dd1\u7279\u6027",id:"\u7a7a\u8dd1\u7279\u6027",level:2},{value:"\u5b57\u6bb5\u6620\u5c04",id:"\u5b57\u6bb5\u6620\u5c04",level:2},{value:"\u7c7b\u578b\u8bc6\u522b",id:"\u7c7b\u578b\u8bc6\u522b",level:2},{value:"\u7c7b\u578b\u8f6c\u6362",id:"\u7c7b\u578b\u8f6c\u6362",level:2},{value:"\u5185\u5d4c\u7ed3\u6784\u652f\u6301",id:"\u5185\u5d4c\u7ed3\u6784\u652f\u6301",level:2},{value:"\u81ea\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362",id:"\u81ea\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u8c03\u8bd5\u6a21\u5f0f",children:"\u8c03\u8bd5\u6a21\u5f0f"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e3a\u4fbf\u4e8e\u5f00\u53d1\u9636\u6bb5\u8c03\u8bd5\uff0c ",(0,s.jsx)(n.code,{children:"gdb"})," \u652f\u6301\u8c03\u8bd5\u6a21\u5f0f\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"Debug"})," \u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u9879\u6216\u8005 ",(0,s.jsx)(n.code,{children:"SetDebug"})," \u914d\u7f6e\u65b9\u5f0f\u5f00\u542f\u8c03\u8bd5\u6a21\u5f0f\uff0c \u968f\u540e\u4efb\u4f55\u7684\u6570\u636e\u5e93 ",(0,s.jsx)(n.code,{children:"SQL"})," \u64cd\u4f5c\u8bed\u53e5\u90fd\u5c06\u4f1a\u7531\u5185\u7f6e\u7684\u65e5\u5fd7\u5bf9\u8c61\uff0c\u4ee5 ",(0,s.jsx)(n.code,{children:"DEBUG"})," \u7ea7\u522b\u8f93\u51fa\u5230\u7ec8\u7aef\u6216\u8005\u65e5\u5fd7\u6587\u4ef6\u4e2d\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u5f00\u542f\u4e86\u8c03\u8bd5\u6a21\u5f0f\u7684\u914d\u7f6e\u793a\u4f8b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'[database]\n    [database.default]\n        link   = "mysql:root:12345678@tcp(127.0.0.1:3306)/user"\n        debug  = true\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u8f93\u5165\u7684\u65e5\u5fd7\u5185\u5bb9\u8bf7\u8be6\u89c1\u4e0b\u9762\u7ae0\u8282\u4ecb\u7ecd\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u65e5\u5fd7\u8f93\u51fa",children:"\u65e5\u5fd7\u8f93\u51fa"}),"\n",(0,s.jsxs)(n.p,{children:["\u65e5\u5fd7\u8f93\u51fa\u5f80\u5f80\u662f\u6253\u5370\u4e00\u4e9b\u8c03\u8bd5\u6216\u8005 ",(0,s.jsx)(n.code,{children:"SQL"})," \u8bed\u53e5\uff0c\u65e5\u5fd7\u5bf9\u8c61\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"SetLogger"})," \u65b9\u6cd5\u6765\u8bbe\u7f6e\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u6765\u505a\u7b80\u5355\u914d\u7f6e\uff0c\u65e5\u5fd7\u7684\u914d\u7f6e\u8bf7\u67e5\u770b ",(0,s.jsx)(n.code,{children:"ORM"})," \u7684 ",(0,s.jsx)(n.a,{href:"/en/1.16.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E4%BD%BF%E7%94%A8%E9%85%8D%E7%BD%AE",children:"ORM\u4f7f\u7528\u914d\u7f6e"})," \u7ae0\u8282\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u5f00\u542f\u4e86\u65e5\u5fd7\u8f93\u51fa\u7684\u914d\u7f6e\u793a\u4f8b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'[database]\n    [database.logger]\n        Path   = "/var/log/gf-app/sql"\n        Level  = "all"\n        Stdout = true\n    [database.default]\n        link   = "mysql:root:12345678@tcp(127.0.0.1:3306)/user"\n        debug  = true\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ORM"})," \u7ec4\u4ef6\u8f93\u51fa\u7684\u65e5\u5fd7\u76f8\u5f53\u8be6\u5c3d\uff0c\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u793a\u4f8b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"2021-05-22 21:12:10.776 [DEBU] [  4 ms] [default] [1] BEGIN\n2021-05-22 21:12:10.776 [DEBU] [  0 ms] [default] [1] SAVEPOINT `transaction0`\n2021-05-22 21:12:10.789 [DEBU] [ 13 ms] [default] [1] SHOW FULL COLUMNS FROM `user`\n2021-05-22 21:12:10.790 [DEBU] [  1 ms] [default] [1] INSERT INTO `user`(`id`,`name`) VALUES(1,'john')\n2021-05-22 21:12:10.791 [DEBU] [  1 ms] [default] [1] ROLLBACK TO SAVEPOINT `transaction0`\n2021-05-22 21:12:10.791 [DEBU] [  0 ms] [default] [1] INSERT INTO `user`(`id`,`name`) VALUES(2,'smith')\n2021-05-22 21:12:10.792 [DEBU] [  1 ms] [default] [1] COMMIT\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\uff0c\u65e5\u5fd7\u5305\u542b\u4ee5\u4e0b\u51e0\u90e8\u5206\u4fe1\u606f\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u65e5\u671f\u53ca\u65f6\u95f4\uff0c\u7cbe\u786e\u5230\u6beb\u79d2\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u65e5\u5fd7\u7ea7\u522b\u3002\u56e0\u4e3a ",(0,s.jsx)(n.code,{children:"SQL"})," \u65e5\u5fd7\u4e3b\u8981\u7528\u4e8e\u529f\u80fd\u8c03\u8bd5/\u95ee\u9898\u6392\u67e5\uff0c\u751f\u4ea7\u73af\u5883\u5f80\u5f80\u9700\u8981\u5173\u95ed\u6389\uff0c\u56e0\u6b64\u65e5\u5fd7\u7ea7\u522b\u56fa\u5b9a\u4e3a ",(0,s.jsx)(n.code,{children:"DEBUG"})," \u7ea7\u522b\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5f53\u524d ",(0,s.jsx)(n.code,{children:"SQL"})," \u6267\u884c\u8017\u65f6\u3002\u4ece\u5ba2\u6237\u7aef\u53d1\u8d77\u8bf7\u6c42\u5230\u63a5\u6536\u5230\u6570\u636e\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2\u3002\u5f53\u6267\u884c\u65f6\u95f4\u4e0d\u8db3 ",(0,s.jsx)(n.code,{children:"1"})," \u6beb\u79d2\u65f6\uff0c\u5c55\u793a\u4e3a ",(0,s.jsx)(n.code,{children:"0"})," \u6beb\u79d2\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5f53\u524d ",(0,s.jsx)(n.code,{children:"SQL"})," \u6240\u5904\u7684\u6570\u636e\u5e93\u914d\u7f6e\u5206\u7ec4\uff0c\u9ed8\u8ba4\u4e3a ",(0,s.jsx)(n.code,{children:"default"}),"\u3002\u5173\u4e8e\u914d\u7f6e\u5206\u7ec4\u7684\u4ecb\u7ecd\u5177\u4f53\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,s.jsx)(n.a,{href:"/en/1.16.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E4%BD%BF%E7%94%A8%E9%85%8D%E7%BD%AE",children:"ORM\u4f7f\u7528\u914d\u7f6e"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5f53\u524d ",(0,s.jsx)(n.code,{children:"SQL"})," \u6240\u5c5e\u7684 ",(0,s.jsx)(n.strong,{children:"\u4e8b\u52a1ID"}),"\u3002\u5982\u679c\u5f53\u524d ",(0,s.jsx)(n.code,{children:"SQL"})," \u4e0d\u5c5e\u4e8e\u4e8b\u52a1\u64cd\u4f5c\u65f6\uff0c\u4e0d\u5b58\u5728\u8be5\u5b57\u6bb5\u3002\u5173\u4e8e\u4e8b\u52a1ID\u7684\u4ecb\u7ecd\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,s.jsx)(n.a,{href:"/en/1.16.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E4%BA%8B%E5%8A%A1%E5%A4%84%E7%90%86",children:"ORM\u4e8b\u52a1\u5904\u7406"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5177\u4f53\u6267\u884c\u7684 ",(0,s.jsx)(n.code,{children:"SQL"})," \u8bed\u53e5\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u7531\u4e8e\u5e95\u5c42\u4f7f\u7528\u7684\u662f ",(0,s.jsx)(n.code,{children:"SQL"})," \u9884\u5904\u7406\uff0c\u8fd9\u91cc\u7684 ",(0,s.jsx)(n.code,{children:"SQL"})," \u8bed\u53e5\u662f\u901a\u8fc7\u7ec4\u4ef6\u81ea\u52a8\u62fc\u63a5\u7684\u7ed3\u679c\uff0c\u4ec5\u4f9b\u53c2\u8003\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u7a7a\u8dd1\u7279\u6027",children:"\u7a7a\u8dd1\u7279\u6027"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ORM"})," \u7a7a\u8dd1\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"DryRun"})," \u914d\u7f6e\u9879\u6765\u542f\u7528\uff0c\u9ed8\u8ba4\u5173\u95ed\u3002\u5f53 ",(0,s.jsx)(n.code,{children:"ORM"})," \u7684\u7a7a\u8dd1\u7279\u6027\u5f00\u542f\u65f6\uff0c\u8bfb\u53d6\u64cd\u4f5c\u5c06\u4f1a\u63d0\u4ea4\uff0c\u800c\u5199\u5165\u3001\u66f4\u65b0\u3001\u5220\u9664\u64cd\u4f5c\u5c06\u4f1a\u88ab\u5ffd\u7565\u3002\u8be5\u7279\u6027\u5f80\u5f80\u7ed3\u5408\u8c03\u8bd5\u6a21\u5f0f\u548c\u65e5\u5fd7\u8f93\u51fa\u4e00\u8d77\u4f7f\u7528\uff0c\u7528\u4e8e\u6821\u9a8c\u5f53\u524d\u7684\u7a0b\u5e8f\uff08\u7279\u522b\u662f\u811a\u672c\uff09\u6267\u884c\u7684 ",(0,s.jsx)(n.code,{children:"SQL"})," \u662f\u5426\u7b26\u5408\u9884\u671f\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u5f00\u542f\u4e86\u7a7a\u8dd1\u7279\u6027\u7684\u914d\u7f6e\u793a\u4f8b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'[database]\n    [database.default]\n        link   = "mysql:root:12345678@tcp(127.0.0.1:3306)/user"\n        debug  = true\n        dryRun = true\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u7a7a\u8dd1\u7279\u6027\u4e5f\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u884c\u53c2\u6570\u6216\u8005\u73af\u5883\u53d8\u91cf\u5168\u5c40\u4fee\u6539\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u547d\u4ee4\u884c\u542f\u52a8\u53c2\u6570 - ",(0,s.jsx)(n.code,{children:"gf.gdb.dryrun=true"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u6307\u5b9a\u7684\u73af\u5883\u53d8\u91cf - ",(0,s.jsx)(n.code,{children:"GF_GDB_DRYRUN=true"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5982\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ ./app --gf.gdb.dryrun=true\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ ./app --gf.gdb.dryrun true\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5b57\u6bb5\u6620\u5c04",children:"\u5b57\u6bb5\u6620\u5c04"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u5bf9\u6570\u636e\u8fdb\u884c\u5199\u5165/\u66f4\u65b0\u65f6\uff0c\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"Fields/Fields/Data"})," \u65b9\u6cd5\u65f6\uff0c\u5982\u679c\u7ed9\u5b9a\u7684\u53c2\u6570\u4e3a ",(0,s.jsx)(n.code,{children:"map/struct"})," \u7c7b\u578b\uff0c\u7ed9\u5b9a\u53c2\u6570\u7684\u952e\u540d/\u5c5e\u6027\u540d\u79f0\u5c06\u4f1a\u81ea\u52a8\u6309\u7167\u5ffd\u7565\u5927\u5c0f\u5199\u53ca\u7279\u6b8a\u5b57\u7b26\u7684\u65b9\u5f0f\u4e0e\u6570\u636e\u8868\u7684\u5b57\u6bb5\u8fdb\u884c\u81ea\u52a8\u8bc6\u522b\u6620\u5c04\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"Map\u952e\u540d     \u5b57\u6bb5\u540d\u79f0     \u662f\u5426\u5339\u914d\nnickname   nickname      match\nNICKNAME   nickname      match\nNick-Name  nickname      match\nnick_name  nickname      match\nnick name  nickname      match\nNickName   nickname      match\nNick-name  nickname      match\nnick_name  nickname      match\nnick name  nickname      match\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u4f8b\u5b50\uff0c\u6211\u4eec\u5b9e\u73b0\u4e00\u4e2a\u67e5\u8be2\u7528\u6237\u57fa\u672c\u4fe1\u606f\u7684\u4e00\u4e2a\u63a5\u53e3\uff0c\u8fd9\u4e2a\u7528\u6237\u662f\u4e00\u4e2a\u533b\u751f\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["1\u3001\u6211\u4eec\u6709\u4e24\u5f20\u8868\uff0c\u4e00\u5f20 ",(0,s.jsx)(n.code,{children:"user"})," \u8868\uff0c\u5927\u6982\u6709 ",(0,s.jsx)(n.code,{children:"30"})," \u4e2a\u5b57\u6bb5\uff1b\u4e00\u5f20 ",(0,s.jsx)(n.code,{children:"doctor_user"})," \u8868\uff0c\u5927\u6982\u6709 ",(0,s.jsx)(n.code,{children:"80"})," \u591a\u4e2a\u5b57\u6bb5\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["2\u3001 ",(0,s.jsx)(n.code,{children:"user"})," \u662f\u7528\u6237\u57fa\u7840\u8868\uff0c\u5305\u542b\u7528\u6237\u7684\u6700\u57fa\u7840\u4fe1\u606f\uff1b ",(0,s.jsx)(n.code,{children:"doctor_user"})," \u662f\u57fa\u4e8e ",(0,s.jsx)(n.code,{children:"user"})," \u8868\u7684\u4e1a\u52a1\u6269\u5c55\u8868\uff0c\u7279\u5b9a\u7528\u6237\u89d2\u8272\u7684\u8868\uff0c\u4e0e ",(0,s.jsx)(n.code,{children:"user"})," \u8868\u662f\u4e00\u5bf9\u4e00\u5173\u7cfb\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["3\u3001\u6211\u4eec\u6709\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"GRPC"})," \u7684\u63a5\u53e3\uff0c\u63a5\u53e3\u5b9a\u4e49\u662f\u8fd9\u6837\u7684\uff08\u4e3a\u65b9\u4fbf\u6f14\u793a\uff0c\u8fd9\u91cc\u505a\u4e86\u4e00\u4e9b\u7b80\u5316\uff09\uff1a"]}),"\n",(0,s.jsxs)(n.p,{children:["1\uff09 ",(0,s.jsx)(n.code,{children:"GetDoctorInfoRes"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// \u67e5\u8be2\u63a5\u53e3\u8fd4\u56de\u6570\u636e\u7ed3\u6784\ntype GetDoctorInfoRes struct {\n    UserInfo             *UserInfo   `protobuf:"bytes,1,opt,name=UserInfo,proto3" json:"UserInfo,omitempty"`\n    DoctorInfo           *DoctorInfo `protobuf:"bytes,2,opt,name=DoctorInfo,proto3" json:"DoctorInfo,omitempty"`\n    XXX_NoUnkeyedLiteral struct{}    `json:"-"`\n    XXX_unrecognized     []byte      `json:"-"`\n    XXX_sizecache        int32       `json:"-"`\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["2\uff09 ",(0,s.jsx)(n.code,{children:"UserInfo"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// \u7528\u6237\u57fa\u7840\u4fe1\u606f\ntype UserInfo struct {\n    Id                   uint32   `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`\n    Avatar               string   `protobuf:"bytes,2,opt,name=avatar,proto3" json:"avatar,omitempty"`\n    Name                 string   `protobuf:"bytes,3,opt,name=name,proto3" json:"name,omitempty"`\n    Sex                  int32    `protobuf:"varint,4,opt,name=sex,proto3" json:"sex,omitempty"`\n    XXX_NoUnkeyedLiteral struct{} `json:"-"`\n    XXX_unrecognized     []byte   `json:"-"`\n    XXX_sizecache        int32    `json:"-"`\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["3\uff09 ",(0,s.jsx)(n.code,{children:"DoctorInfo"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// \u533b\u751f\u4fe1\u606f\ntype DoctorInfo struct {\n    Id                   uint32   `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`\n    Name                 string   `protobuf:"bytes,3,opt,name=name,proto3" json:"name,omitempty"`\n    Hospital             string   `protobuf:"bytes,4,opt,name=hospital,proto3" json:"hospital,omitempty"`\n    Section              string   `protobuf:"bytes,6,opt,name=section,proto3" json:"section,omitempty"`\n    Title                string   `protobuf:"bytes,8,opt,name=title,proto3" json:"title,omitempty"`\n    XXX_NoUnkeyedLiteral struct{} `json:"-"`\n    XXX_unrecognized     []byte   `json:"-"`\n    XXX_sizecache        int32    `json:"-"`\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"4\u3001\u67e5\u8be2\u63a5\u53e3\u5b9e\u73b0\u4ee3\u7801"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"// \u67e5\u8be2\u533b\u751f\u4fe1\u606f\nfunc (s *Service) GetDoctorInfo(ctx context.Context, req *pb.GetDoctorInfoReq) (res *pb.GetDoctorInfoRes, err error) {\n    // Protobuf\u8fd4\u56de\u6570\u636e\u7ed3\u6784\n    res = &pb.GetDoctorInfoRes{}\n    // \u67e5\u8be2\u533b\u751f\u4fe1\u606f\n    // SELECT `id`,`avatar`,`name`,`sex` FROM `user` WHERE `user_id`=xxx\n    err = dao.PrimaryDoctorUser.\n        Ctx(ctx).\n        Fields(res.DoctorInfo).\n        Where(dao.PrimaryDoctorUser.Columns.UserId, req.Id).\n        Scan(&res.DoctorInfo)\n    if err != nil {\n        return\n    }\n    // \u67e5\u8be2\u57fa\u7840\u7528\u6237\u4fe1\u606f\n    // SELECT `id`,`name`,`hospital`,`section`,`title` FROM `doctor_user` WHERE `id`=xxx\n    err = dao.PrimaryUser.\n        Ctx(ctx).\n        Fields(res.DoctorInfo).\n        Where(dao.PrimaryUser.Columns.Id, req.Id).\n        Scan(&res.UserInfo)\n    return res, err\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53\u6211\u4eec\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"GetDoctorInfo"})," \u6267\u884c\u67e5\u8be2\u65f6\uff0c\u5c06\u4f1a\u5411\u6570\u636e\u5e93\u53d1\u8d77\u4e24\u6761 ",(0,s.jsx)(n.code,{children:"SQL"})," \u67e5\u8be2\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"SELECT `id`,`avatar`,`name`,`sex` FROM `user` WHERE `user_id`=1\nSELECT `id`,`name`,`hospital`,`section`,`title` FROM `doctor_user` WHERE `id`=1\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"Fields"})," \u65b9\u6cd5\u65f6\uff0c\u53c2\u6570\u7c7b\u578b\u4e3a ",(0,s.jsx)(n.code,{children:"struct"})," \u6216\u8005 ",(0,s.jsx)(n.code,{children:"*struct"}),"\uff0c ",(0,s.jsx)(n.code,{children:"ORM"})," \u5c06\u4f1a\u81ea\u52a8\u5c06 ",(0,s.jsx)(n.code,{children:"struct"})," \u7684\u5c5e\u6027\u540d\u79f0\u4e0e\u6570\u636e\u8868\u7684\u5b57\u6bb5\u540d\u79f0\u505a\u81ea\u52a8\u6620\u5c04\u5339\u914d\uff0c\u5f53\u6620\u5c04\u5339\u914d\u6210\u529f\u65f6\u53ea\u4f1a\u67e5\u8be2\u7279\u5b9a\u5b57\u6bb5\u6570\u636e\uff0c\u800c\u4e0d\u5b58\u5728\u7684\u5c5e\u6027\u5b57\u6bb5\u5c06\u4f1a\u88ab\u81ea\u52a8\u8fc7\u6ee4\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"Scan"})," \u65b9\u6cd5\u65f6\uff08\u4e5f\u53ef\u4ee5\u7528 ",(0,s.jsx)(n.code,{children:"Struct"}),"/ ",(0,s.jsx)(n.code,{children:"Structs"}),"\uff09\uff0c\u53c2\u6570\u7c7b\u578b\u4e3a ",(0,s.jsx)(n.code,{children:"*struct"})," \u6216\u8005 ",(0,s.jsx)(n.code,{children:"**struct"}),"\uff0c\u67e5\u8be2\u7ed3\u679c\u5c06\u4f1a\u81ea\u52a8\u4e0e ",(0,s.jsx)(n.code,{children:"struct"})," \u7684\u5c5e\u6027\u505a\u81ea\u52a8\u6620\u5c04\u5339\u914d\uff0c\u5f53\u6620\u5c04\u5339\u914d\u6210\u529f\u65f6\u4f1a\u81ea\u52a8\u505a\u8f6c\u6362\u8d4b\u503c\uff0c\u5426\u5219\u4e0d\u4f1a\u5bf9\u53c2\u6570\u7684\u5c5e\u6027\u505a\u4efb\u4f55\u5904\u7406\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u7c7b\u578b\u8bc6\u522b",children:"\u7c7b\u578b\u8bc6\u522b"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"gdb"})," \u67e5\u8be2\u6570\u636e\u65f6\uff0c\u8fd4\u56de\u7684\u6570\u636e\u7c7b\u578b\u5c06\u4f1a\u88ab\u81ea\u52a8\u8bc6\u522b\u6620\u5c04\u5230 ",(0,s.jsx)(n.code,{children:"Go\u53d8\u91cf\u7c7b\u578b"}),"\u3002\u4f8b\u5982: \u5f53\u5b57\u6bb5\u7c7b\u578b\u4e3a ",(0,s.jsx)(n.code,{children:"int(xx)"})," \u65f6\uff0c\u67e5\u8be2\u5230\u7684\u5b57\u6bb5\u503c\u7c7b\u578b\u5c06\u4f1a\u88ab\u8bc6\u522b\u4f1a ",(0,s.jsx)(n.code,{children:"int"})," \u7c7b\u578b\uff1b\u5f53\u5b57\u6bb5\u7c7b\u578b\u4e3a ",(0,s.jsx)(n.code,{children:"varchar(xxx)"}),"/ ",(0,s.jsx)(n.code,{children:"char(xxx)"}),"/ ",(0,s.jsx)(n.code,{children:"text"})," \u7b49\u7c7b\u578b\u65f6\u5c06\u4f1a\u88ab\u81ea\u52a8\u8bc6\u522b\u4e3a ",(0,s.jsx)(n.code,{children:"string"})," \u7c7b\u578b\u3002\u4ee5\u4e0b\u4ee5 ",(0,s.jsx)(n.code,{children:"mysql"})," \u7c7b\u578b\u4e3a\u4f8b\uff0c\u4ecb\u7ecd\u6570\u636e\u5e93\u7c7b\u578b\u4e0eGo\u53d8\u91cf\u7c7b\u578b\u7684\u81ea\u52a8\u8bc6\u522b\u6620\u5c04\u5173\u7cfb:"]}),"\n",(0,s.jsxs)(n.p,{children:["\u7248\u672c\u53ef\u80fd\u968f\u65f6\u8fed\u4ee3\u66f4\u65b0\uff0c\u5177\u4f53\u53ef\u67e5\u770b\u6e90\u7801 ",(0,s.jsx)(n.a,{href:"https://github.com/gogf/gf/blob/master/database/gdb/gdb_core_structure.go",children:"https://github.com/gogf/gf/blob/master/database/gdb/gdb_core_structure.go"})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u6570\u636e\u5e93\u7c7b\u578b"}),(0,s.jsx)(n.th,{children:"Go\u53d8\u91cf\u7c7b\u578b"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"*char"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"*text"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"*binary"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"bytes"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"*blob"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"bytes"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"*int"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"int"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"*money"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"float64"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"bit"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"int"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"big_int"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"int64"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"float"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"float64"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"double"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"float64"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"decimal"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"float64"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"bool"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"bool"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"date"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"time.Time"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"datetime"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"time.Time"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"timestamp"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"time.Time"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"\u5176\u4ed6"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u4e00\u7279\u6027\u5bf9\u4e8e\u9700\u8981\u5c06\u67e5\u8be2\u7ed3\u679c\u8fdb\u884c\u7f16\u7801\uff0c\u5e76\u901a\u8fc7\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"JSON"})," \u65b9\u5f0f\u76f4\u63a5\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u6765\u8bf4\u5c06\u4f1a\u975e\u5e38\u53cb\u597d\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u7c7b\u578b\u8f6c\u6362",children:"\u7c7b\u578b\u8f6c\u6362"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"gdb"})," \u7684\u6570\u636e\u8bb0\u5f55\u7ed3\u679c\uff08 ",(0,s.jsx)(n.code,{children:"Value"}),"\uff09\u652f\u6301\u975e\u5e38\u7075\u6d3b\u7684\u7c7b\u578b\u8f6c\u6362\uff0c\u5e76\u5185\u7f6e\u652f\u6301\u5e38\u7528\u7684\u6570\u5341\u79cd\u6570\u636e\u7c7b\u578b\u7684\u8f6c\u6362\u3002 ",(0,s.jsx)(n.code,{children:"Result"}),"/ ",(0,s.jsx)(n.code,{children:"Record"})," \u7684\u7c7b\u578b\u8f6c\u6362\u8bf7\u67e5\u770b\u540e\u7eed ",(0,s.jsx)(n.a,{href:"https://itician.org/database/gdb/senior",children:"ORM\u9ad8\u7ea7\u7279\u6027"})," \u7ae0\u8282\u3002"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Value"})," \u7c7b\u578b\u662f ",(0,s.jsx)(n.code,{children:"*gvar.Var"})," \u7c7b\u578b\u7684\u522b\u540d\uff0c\u56e0\u6b64\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"gvar.Var"})," \u6570\u636e\u7c7b\u578b\u7684\u6240\u6709\u8f6c\u6362\u65b9\u6cd5\uff0c\u5177\u4f53\u8bf7\u67e5\u770b ",(0,s.jsx)(n.a,{href:"https://itician.org/container/gvar/index",children:"\u901a\u7528\u52a8\u6001\u53d8\u91cf"})," \u7ae0\u8282"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.p,{children:"\u9996\u5148\uff0c\u6570\u636e\u8868\u5b9a\u4e49\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"# \u5546\u54c1\u8868\nCREATE TABLE `goods` (\n  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,\n  `title` varchar(300) NOT NULL COMMENT '\u5546\u54c1\u540d\u79f0',\n  `price` decimal(10,2) NOT NULL COMMENT '\u5546\u54c1\u4ef7\u683c',\n  ...\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5176\u6b21\uff0c\u6570\u636e\u8868\u4e2d\u7684\u6570\u636e\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"id   title     price\n1    IPhoneX   5999.99\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6700\u540e\uff0c\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'if r, err := db.Table("goods").FindOne(1); err == nil {\n    fmt.Printf("goods    id: %d\\n",   r["id"].Int())\n    fmt.Printf("goods title: %s\\n",   r["title"].String())\n    fmt.Printf("goods proce: %.2f\\n", r["price"].Float32())\n} else {\n    g.Log().Error(err)\n}\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"goods    id: 1\ngoods title: IPhoneX\ngoods proce: 5999.99\n\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5185\u5d4c\u7ed3\u6784\u652f\u6301",children:"\u5185\u5d4c\u7ed3\u6784\u652f\u6301"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"gdb"})," \u6a21\u5757\u9488\u5bf9\u4e8e ",(0,s.jsx)(n.code,{children:"struct"})," \u5185\u5d4c\u7ed3\u6784\u63d0\u4f9b\u4e86\u826f\u597d\u7684\u652f\u6301\uff0c\u5305\u62ec\u53c2\u6570\u4f20\u9012\u3001\u7ed3\u679c\u5904\u7406\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'type Base struct {\n    Uid        int         `orm:"uid"`\n    CreateAt   *gtime.Time `orm:"create_at"`\n    UpdateAt   *gtime.Time `orm:"update_at"`\n    DeleteAt   *gtime.Time `orm:"delete_at"`\n}\ntype User struct {\n    Base\n    Passport   string `orm:"passport"`\n    Password   string `orm:"password"`\n    Nickname   string `orm:"nickname"`\n}\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5e76\u4e14\uff0c\u65e0\u8bba\u591a\u5c11\u5c42\u7ea7\u7684 ",(0,s.jsx)(n.code,{children:"struct"})," \u5d4c\u5957\uff0c ",(0,s.jsx)(n.code,{children:"gdb"})," \u7684\u53c2\u6570\u4f20\u9012\u548c\u7ed3\u679c\u5904\u7406\u90fd\u652f\u6301\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u81ea\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362",children:"\u81ea\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362"}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53\u6211\u4eec\u9700\u8981\u5c06\u67e5\u8be2\u7684\u7ed3\u679c\u8f6c\u6362\u5230\u81ea\u5b9a\u4e49\u7684\u7c7b\u578b\u4e2d\uff0c\u65e0\u8bba\u662f\u4f5c\u4e3a\u76f4\u63a5\u8f6c\u6362\u7684\u7c7b\u578b\u8fd8\u662f\u4f5c\u4e3a ",(0,s.jsx)(n.code,{children:"struct"})," \u7684\u5c5e\u6027\uff0c\u90fd\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0\u7279\u5b9a\u7684\u63a5\u53e3\u6765\u5b9e\u73b0\u3002\u8be6\u7ec6\u4ecb\u7ecd\u8bf7\u53c2\u8003 ",(0,s.jsx)(n.a,{href:"/en/1.16.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2/%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2-UnmarshalValue",children:"\u7c7b\u578b\u8f6c\u6362-UnmarshalValue"})," \u7ae0\u8282\u3002"]})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>t});var d=r(296540);const s={},c=d.createContext(s);function i(e){const n=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(c.Provider,{value:n},e.children)}}}]);