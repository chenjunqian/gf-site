"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[34338],{752107:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var d=s(474848),r=s(28453);const i={title:"ORM\u4f7f\u7528\u914d\u7f6e",sidebar_position:0},t=void 0,l={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4f7f\u7528\u914d\u7f6e",title:"ORM\u4f7f\u7528\u914d\u7f6e",description:"\u914d\u7f6e\u6587\u4ef6",source:"@site/versioned_docs/version-2.2.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/11-\u6570\u636e\u5e93ORM/0-ORM\u4f7f\u7528\u914d\u7f6e.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/11-\u6570\u636e\u5e93ORM",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4f7f\u7528\u914d\u7f6e",permalink:"/gf-site/docs/2.2.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4f7f\u7528\u914d\u7f6e",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.2.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/11-\u6570\u636e\u5e93ORM/0-ORM\u4f7f\u7528\u914d\u7f6e.md",tags:[],version:"2.2.x",sidebarPosition:0,frontMatter:{title:"ORM\u4f7f\u7528\u914d\u7f6e",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u5e93ORM",permalink:"/gf-site/docs/2.2.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/"},next:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c(\u91cd\u70b9)",permalink:"/gf-site/docs/2.2.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/"}},c={},o=[{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u7b80\u5355\u914d\u7f6e",id:"\u7b80\u5355\u914d\u7f6e",level:3},{value:"\u5b8c\u6574\u914d\u7f6e",id:"\u5b8c\u6574\u914d\u7f6e",level:3},{value:"\u96c6\u7fa4\u6a21\u5f0f",id:"\u96c6\u7fa4\u6a21\u5f0f",level:3},{value:"\u65e5\u5fd7\u914d\u7f6e",id:"\u65e5\u5fd7\u914d\u7f6e",level:3},{value:"\u539f\u751f\u914d\u7f6e(\u9ad8\u9636\uff0c\u53ef\u9009)",id:"\u539f\u751f\u914d\u7f6e\u9ad8\u9636\u53ef\u9009",level:2},{value:"\u6570\u636e\u7ed3\u6784",id:"\u6570\u636e\u7ed3\u6784",level:3},{value:"\u914d\u7f6e\u65b9\u6cd5",id:"\u914d\u7f6e\u65b9\u6cd5",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"\u914d\u7f6e\u6587\u4ef6",children:"\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,d.jsxs)(n.p,{children:["\u6211\u4eec\u63a8\u8350\u4f7f\u7528\u914d\u7f6e\u7ec4\u4ef6\u6765\u7ba1\u7406\u6570\u636e\u5e93\u914d\u7f6e\uff0c\u5e76\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"g"})," \u5bf9\u8c61\u7ba1\u7406\u6a21\u5757\u4e2d\u7684 ",(0,d.jsx)(n.code,{children:'g.DB("\u6570\u636e\u5e93\u5206\u7ec4\u540d\u79f0")'})," \u65b9\u6cd5\u83b7\u53d6\u6570\u636e\u5e93\u64cd\u4f5c\u5bf9\u8c61\uff0c\u6570\u636e\u5e93\u5bf9\u8c61\u5c06\u4f1a\u81ea\u52a8\u8bfb\u53d6\u914d\u7f6e\u7ec4\u4ef6\u4e2d\u7684\u76f8\u5e94\u914d\u7f6e\u9879\uff0c\u5e76\u81ea\u52a8\u521d\u59cb\u5316\u8be5\u6570\u636e\u5e93\u64cd\u4f5c\u7684\u5355\u4f8b\u5bf9\u8c61\u3002\u6570\u636e\u5e93\u914d\u7f6e\u7ba1\u7406\u529f\u80fd\u4f7f\u7528\u7684\u662f\u914d\u7f6e\u7ba1\u7406\u7ec4\u4ef6\u5b9e\u73b0\uff08\u914d\u7f6e\u7ec4\u4ef6\u91c7\u7528\u63a5\u53e3\u5316\u8bbe\u8ba1\u9ed8\u8ba4\u4f7f\u7528\u6587\u4ef6\u7cfb\u7edf\u5b9e\u73b0\uff09\uff0c\u540c\u6837\u652f\u6301\u591a\u79cd\u6570\u636e\u683c\u5f0f\u5982\uff1a ",(0,d.jsx)(n.code,{children:"toml/yaml/json/xml/ini/properties"}),"\u3002\u9ed8\u8ba4\u5e76\u4e14\u63a8\u8350\u7684\u914d\u7f6e\u6587\u4ef6\u6570\u636e\u683c\u5f0f\u4e3a ",(0,d.jsx)(n.code,{children:"yaml"}),"\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u7b80\u5355\u914d\u7f6e",children:"\u7b80\u5355\u914d\u7f6e"}),"\n",(0,d.jsxs)(n.p,{children:["\u4ece ",(0,d.jsx)(n.code,{children:"v2.2.0"})," \u7248\u672c\u5f00\u59cb\uff0c\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"link"})," \u8fdb\u884c\u6570\u636e\u5e93\u914d\u7f6e\u65f6\uff0c\u6570\u636e\u5e93\u7ec4\u4ef6\u7edf\u4e00\u4e86\u4e0d\u540c\u6570\u636e\u5e93\u7c7b\u578b\u7684\u914d\u7f6e\u683c\u5f0f\uff0c\u4ee5\u7b80\u5316\u914d\u7f6e\u7ba1\u7406\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u7b80\u5316\u914d\u7f6e\u901a\u8fc7\u914d\u7f6e\u9879 ",(0,d.jsx)(n.code,{children:"link"})," \u6307\u5b9a\uff0c\u683c\u5f0f\u5982\u4e0b\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"type:username:password@protocol(address)[/dbname][?param1=value1&...&paramN=valueN]\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5373\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"\u7c7b\u578b:\u8d26\u53f7:\u5bc6\u7801@\u534f\u8bae(\u5730\u5740)/\u6570\u636e\u5e93\u540d\u79f0?\u7279\u6027\u914d\u7f6e\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5176\u4e2d\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u6570\u636e\u5e93\u540d\u79f0"})," \u53ca ",(0,d.jsx)(n.strong,{children:"\u7279\u6027\u914d\u7f6e"})," \u4e3a\u975e\u5fc5\u987b\u53c2\u6570\uff0c\u5176\u4ed6\u53c2\u6570\u4e3a\u5fc5\u987b\u53c2\u6570\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u534f\u8bae"})," \u53ef\u9009\u914d\u7f6e\u4e3a\uff1a ",(0,d.jsx)(n.code,{children:"tcp/udp/file"}),"\uff0c\u5e38\u89c1\u914d\u7f6e\u4e3a ",(0,d.jsx)(n.code,{children:"tcp"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u7279\u6027\u914d\u7f6e"})," \u6839\u636e\u4e0d\u540c\u7684\u6570\u636e\u5e93\u7c7b\u578b\uff0c\u7531\u5176\u5e95\u5c42\u5b9e\u73b0\u7684\u7b2c\u4e09\u65b9\u9a71\u52a8\u5b9a\u4e49\uff0c\u5177\u4f53\u9700\u8981\u53c2\u8003\u7b2c\u4e09\u65b9\u9a71\u52a8\u5b98\u7f51\u3002\u4f8b\u5982\uff0c\u9488\u5bf9 ",(0,d.jsx)(n.code,{children:"mysql"})," \u9a71\u52a8\u800c\u8a00\uff0c\u4f7f\u7528\u7684\u7b2c\u4e09\u65b9\u9a71\u52a8\u4e3a\uff1a ",(0,d.jsx)(n.a,{href:"https://github.com/go-sql-driver/mysql",children:"https://github.com/go-sql-driver/mysql"}),"\xa0\u652f\u6301\u7684\u7279\u6027\u914d\u7f6e\u5982 ",(0,d.jsx)(n.code,{children:"multiStatements"})," \u548c ",(0,d.jsx)(n.code,{children:"loc"})," \u7b49\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'database:\n  default:\n    link:  "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n  user:\n    link:  "sqlite::@file(/var/data/db.sqlite3)"\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u4e0d\u540c\u6570\u636e\u7c7b\u578b\u5bf9\u5e94\u7684 ",(0,d.jsx)(n.code,{children:"link"})," \u793a\u4f8b\u5982\u4e0b:"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(n.th,{children:"link\u793a\u4f8b"}),(0,d.jsx)(n.th,{children:"\u66f4\u591a\u53c2\u6570"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"mysql"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"mysql:root:12345678@tcp(127.0.0.1:3306)/test?loc=Local&parseTime=true"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"https://github.com/go-sql-driver/mysql",children:"mysql"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"mariadb"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"mariadb:root:12345678@tcp(127.0.0.1:3306)/test?loc=Local&parseTime=true"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"https://github.com/go-sql-driver/mysql",children:"mysql"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"tidb"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"tidb:root:12345678@tcp(127.0.0.1:3306)/test?loc=Local&parseTime=true"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"https://github.com/go-sql-driver/mysql",children:"mysql"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"pgsql"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"pgsql:root:12345678@tcp(127.0.0.1:5432)/test"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"https://github.com/lib/pq",children:"pq"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"mssql"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"mssql:root:12345678@tcp(127.0.0.1:1433)/test?encrypt=disable"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"https://github.com/denisenkom/go-mssqldb",children:"go-mssqldb"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"sqlite"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"sqlite::@file(/var/data/db.sqlite3)"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"https://github.com/mattn/go-sqlite3",children:"go-sqlite3"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"oracle"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"oracle:root:12345678@tcp(127.0.0.1:5432)/test"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"https://github.com/mattn/go-oci8",children:"go-oci8"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"clickhouse"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"clickhouse:root:12345678@tcp(127.0.0.1:9000)/test"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"https://github.com/ClickHouse/clickhouse-go",children:"clickhouse-go"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"dm"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"dm:root:12345678@tcp(127.0.0.1:5236)/test"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"https://gitee.com/chunanyong/dm",children:"dm"})})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["\u6846\u67b6\u652f\u6301\u7684\u6570\u636e\u5e93\u7c7b\u578b\u8bf7\u53c2\u8003\uff1a ",(0,d.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/drivers",children:"https://github.com/gogf/gf/tree/master/contrib/drivers"})]}),"\n",(0,d.jsx)(n.h3,{id:"\u5b8c\u6574\u914d\u7f6e",children:"\u5b8c\u6574\u914d\u7f6e"}),"\n",(0,d.jsxs)(n.p,{children:["\u5b8c\u6574\u7684 ",(0,d.jsx)(n.code,{children:"config.yaml"})," \u6570\u636e\u5e93\u914d\u7f6e\u9879\u7684\u6570\u636e\u683c\u5f0f\u5f62\u5982\u4e0b\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'database:\n  \u5206\u7ec4\u540d\u79f0:\n    host:                  "\u5730\u5740"\n    port:                  "\u7aef\u53e3"\n    user:                  "\u8d26\u53f7"\n    pass:                  "\u5bc6\u7801"\n    name:                  "\u6570\u636e\u5e93\u540d\u79f0"\n    type:                  "\u6570\u636e\u5e93\u7c7b\u578b(\u5982\uff1amariadb/tidb/mysql/pgsql/mssql/sqlite/oracle/clickhouse/dm)"\n    link:                  "(\u53ef\u9009)\u81ea\u5b9a\u4e49\u6570\u636e\u5e93\u94fe\u63a5\u4fe1\u606f\uff0c\u5f53\u8be5\u5b57\u6bb5\u88ab\u8bbe\u7f6e\u503c\u65f6\uff0c\u4ee5\u4e0a\u94fe\u63a5\u5b57\u6bb5(Host,Port,User,Pass,Name)\u5c06\u5931\u6548\uff0c\u4f46\u662ftype\u5fc5\u987b\u6709\u503c"\n    extra:                 "(\u53ef\u9009)\u4e0d\u540c\u6570\u636e\u5e93\u7684\u989d\u5916\u7279\u6027\u914d\u7f6e\uff0c\u7531\u5e95\u5c42\u6570\u636e\u5e93driver\u5b9a\u4e49"\n    role:                  "(\u53ef\u9009)\u6570\u636e\u5e93\u4e3b\u4ece\u89d2\u8272(master/slave)\uff0c\u4e0d\u4f7f\u7528\u5e94\u7528\u5c42\u7684\u4e3b\u4ece\u673a\u5236\u8bf7\u5747\u8bbe\u7f6e\u4e3amaster"\n    debug:                 "(\u53ef\u9009)\u5f00\u542f\u8c03\u8bd5\u6a21\u5f0f"\n    prefix:                "(\u53ef\u9009)\u8868\u540d\u524d\u7f00"\n    dryRun:                "(\u53ef\u9009)ORM\u7a7a\u8dd1(\u53ea\u8bfb\u4e0d\u5199)"\n    charset:               "(\u53ef\u9009)\u6570\u636e\u5e93\u7f16\u7801(\u5982: utf8/gbk/gb2312)\uff0c\u4e00\u822c\u8bbe\u7f6e\u4e3autf8"\n    weight:                "(\u53ef\u9009)\u8d1f\u8f7d\u5747\u8861\u6743\u91cd\uff0c\u7528\u4e8e\u8d1f\u8f7d\u5747\u8861\u63a7\u5236\uff0c\u4e0d\u4f7f\u7528\u5e94\u7528\u5c42\u7684\u8d1f\u8f7d\u5747\u8861\u673a\u5236\u8bf7\u7f6e\u7a7a"\n    timezone:              "(\u53ef\u9009)\u65f6\u533a\u914d\u7f6e\uff0c\u4f8b\u5982:local"\n    maxIdle:               "(\u53ef\u9009)\u8fde\u63a5\u6c60\u6700\u5927\u95f2\u7f6e\u7684\u8fde\u63a5\u6570"\n    maxOpen:               "(\u53ef\u9009)\u8fde\u63a5\u6c60\u6700\u5927\u6253\u5f00\u7684\u8fde\u63a5\u6570"\n    maxLifetime:           "(\u53ef\u9009)\u8fde\u63a5\u5bf9\u8c61\u53ef\u91cd\u590d\u4f7f\u7528\u7684\u65f6\u95f4\u957f\u5ea6"\n    createdAt:             "(\u53ef\u9009)\u81ea\u52a8\u521b\u5efa\u65f6\u95f4\u5b57\u6bb5\u540d\u79f0"\n    updatedAt:             "(\u53ef\u9009)\u81ea\u52a8\u66f4\u65b0\u65f6\u95f4\u5b57\u6bb5\u540d\u79f0"\n    deletedAt:             "(\u53ef\u9009)\u8f6f\u5220\u9664\u65f6\u95f4\u5b57\u6bb5\u540d\u79f0"\n    timeMaintainDisabled:  "(\u53ef\u9009)\u662f\u5426\u5b8c\u5168\u5173\u95ed\u65f6\u95f4\u66f4\u65b0\u7279\u6027\uff0ctrue\u65f6CreatedAt/UpdatedAt/DeletedAt\u90fd\u5c06\u5931\u6548"\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u5b8c\u6574\u7684\u6570\u636e\u5e93\u914d\u7f6e\u9879\u793a\u4f8b( ",(0,d.jsx)(n.code,{children:"YAML"}),")\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'database:\n  default:\n    host:          "127.0.0.1"\n    port:          "3306"\n    user:          "root"\n    pass:          "12345678"\n    name:          "test"\n    type:          "mysql"\n    extra:         "local=Local&parseTime=true"\n    role:          "master"\n    debug:         "true"\n    dryrun:        0\n    weight:        "100"\n    prefix:        "gf_"\n    charset:       "utf8"\n    timezone:      "local"\n    maxIdle:       "10"\n    maxOpen:       "100"\n    maxLifetime:   "30s"\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u4f7f\u7528\u8be5\u914d\u7f6e\u65b9\u5f0f\u65f6\uff0c\u4e3a\u4fdd\u8bc1\u6570\u636e\u5e93\u5b89\u5168\uff0c\u9ed8\u8ba4\u5e95\u5c42\u4e0d\u652f\u6301\u591a\u884c ",(0,d.jsx)(n.code,{children:"SQL"})," \u8bed\u53e5\u6267\u884c\u3002\u4e3a\u4e86\u5f97\u5230\u66f4\u591a\u914d\u7f6e\u9879\u63a7\u5236\uff0c\u8bf7\u53c2\u8003\u63a8\u8350\u7684\u7b80\u5316\u914d\u7f6e\uff0c\u540c\u65f6\u5efa\u8bae\u60a8\u52a1\u5fc5\u4e86\u89e3\u6e05\u695a\u7b80\u5316\u914d\u7f6e\u9879\u4e2d\u6bcf\u4e2a\u8fde\u63a5\u53c2\u6570\u7684\u529f\u80fd\u4f5c\u7528\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u96c6\u7fa4\u6a21\u5f0f",children:"\u96c6\u7fa4\u6a21\u5f0f"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"gdb"})," \u7684\u914d\u7f6e\u652f\u6301\u96c6\u7fa4\u6a21\u5f0f\uff0c\u6570\u636e\u5e93\u914d\u7f6e\u4e2d\u6bcf\u4e00\u9879\u5206\u7ec4\u914d\u7f6e\u5747\u53ef\u4ee5\u662f\u591a\u4e2a\u8282\u70b9\uff0c\u652f\u6301\u8d1f\u8f7d\u5747\u8861\u6743\u91cd\u7b56\u7565\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'database:\n  default:\n  - link: "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n    role: "master"\n  - link: "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n    role: "slave"\n\n  user:\n  - link: "mysql:root:12345678@tcp(127.0.0.1:3306)/user"\n    role: "master"\n  - link: "mysql:root:12345678@tcp(127.0.0.1:3306)/user"\n    role: "slave"\n  - link: "mysql:root:12345678@tcp(127.0.0.1:3306)/user"\n    role: "slave"\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u4ee5\u4e0a\u6570\u636e\u5e93\u914d\u7f6e\u793a\u4f8b\u4e2d\u5305\u542b\u4e24\u4e2a\u6570\u636e\u5e93\u5206\u7ec4 ",(0,d.jsx)(n.code,{children:"default"})," \u548c ",(0,d.jsx)(n.code,{children:"user"}),"\uff0c\u5176\u4e2d ",(0,d.jsx)(n.code,{children:"default"})," \u5206\u7ec4\u5305\u542b\u4e00\u4e3b\u4e00\u4ece\uff0c ",(0,d.jsx)(n.code,{children:"user"})," \u5206\u7ec4\u5305\u542b\u4e00\u4e3b\u4e24\u4ece\u3002\u5728\u4ee3\u7801\u4e2d\u53ef\u4ee5\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"g.DB()"})," \u548c ",(0,d.jsx)(n.code,{children:'g.DB("user")'})," \u83b7\u53d6\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u8fde\u63a5\u5bf9\u8c61\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u65e5\u5fd7\u914d\u7f6e",children:"\u65e5\u5fd7\u914d\u7f6e"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"gdb"})," \u652f\u6301\u65e5\u5fd7\u8f93\u51fa\uff0c\u5185\u90e8\u4f7f\u7528\u7684\u662f ",(0,d.jsx)(n.code,{children:"glog.Logger"})," \u5bf9\u8c61\u5b9e\u73b0\u65e5\u5fd7\u7ba1\u7406\uff0c\u5e76\u4e14\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u5bf9\u65e5\u5fd7\u5bf9\u8c61\u8fdb\u884c\u914d\u7f6e\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b ",(0,d.jsx)(n.code,{children:"gdb"})," \u5173\u95ed\u4e86 ",(0,d.jsx)(n.code,{children:"DEBUG"})," \u65e5\u5fd7\u8f93\u51fa\uff0c\u5982\u679c\u9700\u8981\u6253\u5f00 ",(0,d.jsx)(n.code,{children:"DEBUG"})," \u4fe1\u606f\u9700\u8981\u5c06\u6570\u636e\u5e93\u7684 ",(0,d.jsx)(n.code,{children:"debug"})," \u53c2\u6570\u8bbe\u7f6e\u4e3a ",(0,d.jsx)(n.code,{children:"true"}),"\u3002\u4ee5\u4e0b\u662f\u4e3a\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'database:\n  logger:\n    path:    "/var/log/gf-app/sql"\n    level:   "all"\n    stdout:  true\n  default:\n    link:    "mysql:root:12345678@tcp(127.0.0.1:3306)/user_center"\n    debug:   true\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,d.jsx)(n.code,{children:"database.logger"})," \u5373\u4e3a ",(0,d.jsx)(n.code,{children:"gdb"})," \u7684\u65e5\u5fd7\u914d\u7f6e\uff0c\u5f53\u8be5\u914d\u7f6e\u4e0d\u5b58\u5728\u65f6\uff0c\u5c06\u4f1a\u4f7f\u7528\u65e5\u5fd7\u7ec4\u4ef6\u7684\u9ed8\u8ba4\u914d\u7f6e\uff0c\u5177\u4f53\u8bf7\u53c2\u8003 ",(0,d.jsx)(n.a,{href:"output/goframe-v2.2-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E6%97%A5%E5%BF%97%E7%BB%84%E4%BB%B6/%E6%97%A5%E5%BF%97%E7%BB%84%E4%BB%B6-%E9%85%8D%E7%BD%AE%E7%AE%A1%E7%90%86",children:"\u65e5\u5fd7\u7ec4\u4ef6-\u914d\u7f6e\u7ba1\u7406"})," \u7ae0\u8282\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u9700\u8981\u6ce8\u610f\u54e6\uff1a\u7531\u4e8e ",(0,d.jsx)(n.code,{children:"ORM"})," \u5e95\u5c42\u90fd\u662f\u91c7\u7528\u5b89\u5168\u7684\u9884\u5904\u7406\u6267\u884c\u65b9\u5f0f\uff0c\u63d0\u4ea4\u5230\u5e95\u5c42\u7684 ",(0,d.jsx)(n.code,{children:"SQL"})," \u4e0e\u53c2\u6570\u5176\u5b9e\u662f\u5206\u5f00\u7684\uff0c\u56e0\u6b64\u65e5\u5fd7\u4e2d\u8bb0\u5f55\u7684\u5b8c\u6574 ",(0,d.jsx)(n.code,{children:"SQL"})," \u4ec5\u4f5c\u53c2\u8003\u65b9\u4fbf\u4eba\u5de5\u9605\u8bfb\uff0c\u5e76\u4e0d\u662f\u771f\u6b63\u63d0\u4ea4\u5230\u5e95\u5c42\u7684 ",(0,d.jsx)(n.code,{children:"SQL"})," \u8bed\u53e5\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u539f\u751f\u914d\u7f6e\u9ad8\u9636\u53ef\u9009",children:"\u539f\u751f\u914d\u7f6e(\u9ad8\u9636\uff0c\u53ef\u9009)"}),"\n",(0,d.jsx)(n.p,{children:"\u4ee5\u4e0b\u4e3a\u6570\u636e\u5e93\u5e95\u5c42\u7ba1\u7406\u914d\u7f6e\u4ecb\u7ecd\uff0c\u5982\u679c\u60a8\u5bf9\u6570\u636e\u5e93\u7684\u5e95\u5c42\u914d\u7f6e\u7ba1\u7406\u6bd4\u8f83\u611f\u5174\u8da3\uff0c\u53ef\u7ee7\u7eed\u9605\u8bfb\u540e\u7eed\u7ae0\u8282\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u6570\u636e\u7ed3\u6784",children:"\u6570\u636e\u7ed3\u6784"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"gdb"})," \u6570\u636e\u5e93\u7ba1\u7406\u6a21\u5757\u7684\u5185\u90e8\u914d\u7f6e\u7ba1\u7406\u6570\u636e\u7ed3\u6784\u5982\u4e0b\uff1a"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"ConfigNode"})," \u7528\u4e8e\u5b58\u50a8\u4e00\u4e2a\u6570\u636e\u5e93\u8282\u70b9\u4fe1\u606f\uff1b ",(0,d.jsx)(n.code,{children:"ConfigGroup"})," \u7528\u4e8e\u7ba1\u7406\u591a\u4e2a\u6570\u636e\u5e93\u8282\u70b9\u7ec4\u6210\u7684\u914d\u7f6e\u5206\u7ec4(\u4e00\u822c\u4e00\u4e2a\u5206\u7ec4\u5bf9\u5e94\u4e00\u4e2a\u4e1a\u52a1\u6570\u636e\u5e93\u96c6\u7fa4)\uff1b ",(0,d.jsx)(n.code,{children:"Config"})," \u7528\u4e8e\u7ba1\u7406\u591a\u4e2a ",(0,d.jsx)(n.code,{children:"ConfigGroup"})," \u914d\u7f6e\u5206\u7ec4\u3002"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u914d\u7f6e\u7ba1\u7406\u7279\u70b9\uff1a"})}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"\u652f\u6301\u591a\u8282\u70b9\u6570\u636e\u5e93\u96c6\u7fa4\u7ba1\u7406\uff1b"}),"\n",(0,d.jsx)(n.li,{children:"\u6bcf\u4e2a\u8282\u70b9\u53ef\u4ee5\u5355\u72ec\u914d\u7f6e\u8fde\u63a5\u5c5e\u6027\uff1b"}),"\n",(0,d.jsx)(n.li,{children:"\u91c7\u7528\u5355\u4f8b\u6a21\u5f0f\u7ba1\u7406\u6570\u636e\u5e93\u5b9e\u4f8b\u5316\u5bf9\u8c61\uff1b"}),"\n",(0,d.jsx)(n.li,{children:"\u652f\u6301\u5bf9\u6570\u636e\u5e93\u96c6\u7fa4\u5206\u7ec4\u7ba1\u7406\uff0c\u6309\u7167\u5206\u7ec4\u540d\u79f0\u83b7\u53d6\u5b9e\u4f8b\u5316\u7684\u6570\u636e\u5e93\u64cd\u4f5c\u5bf9\u8c61\uff1b"}),"\n",(0,d.jsxs)(n.li,{children:["\u652f\u6301\u591a\u79cd\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7ba1\u7406\uff0c\u53ef\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"ConfigNode.Type"})," \u5c5e\u6027\u8fdb\u884c\u914d\u7f6e\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u652f\u6301 ",(0,d.jsx)(n.code,{children:"Master-Slave"})," \u8bfb\u5199\u5206\u79bb\uff0c\u53ef\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"ConfigNode.Role"})," \u5c5e\u6027\u8fdb\u884c\u914d\u7f6e\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u652f\u6301\u5ba2\u6237\u7aef\u7684\u8d1f\u8f7d\u5747\u8861\u7ba1\u7406\uff0c\u53ef\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"ConfigNode.Weight"})," \u5c5e\u6027\u8fdb\u884c\u914d\u7f6e\uff0c\u503c\u8d8a\u5927\uff0c\u4f18\u5148\u7ea7\u8d8a\u9ad8\uff1b"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"type Config      map[string]ConfigGroup // \u6570\u636e\u5e93\u914d\u7f6e\u5bf9\u8c61\ntype ConfigGroup []ConfigNode           // \u6570\u636e\u5e93\u5206\u7ec4\u914d\u7f6e\n// \u6570\u636e\u5e93\u914d\u7f6e\u9879(\u4e00\u4e2a\u5206\u7ec4\u914d\u7f6e\u5bf9\u5e94\u591a\u4e2a\u914d\u7f6e\u9879)\ntype ConfigNode  struct {\n    Host             string        // \u5730\u5740\n    Port             string        // \u7aef\u53e3\n    User             string        // \u8d26\u53f7\n    Pass             string        // \u5bc6\u7801\n    Name             string        // \u6570\u636e\u5e93\u540d\u79f0\n    Type             string        // \u6570\u636e\u5e93\u7c7b\u578b\uff1amysql, sqlite, mssql, pgsql, oracle\n\tLink             string        // (\u53ef\u9009)\u81ea\u5b9a\u4e49\u94fe\u63a5\u4fe1\u606f\uff0c\u5f53\u8be5\u5b57\u6bb5\u88ab\u8bbe\u7f6e\u503c\u65f6\uff0c\u4ee5\u4e0a\u94fe\u63a5\u5b57\u6bb5(Host,Port,User,Pass,Name)\u5c06\u5931\u6548(\u8be5\u5b57\u6bb5\u662f\u4e00\u4e2a\u6269\u5c55\u529f\u80fd)\n    Extra            string        // (\u53ef\u9009)\u4e0d\u540c\u6570\u636e\u5e93\u7684\u989d\u5916\u7279\u6027\u914d\u7f6e\uff0c\u7531\u5e95\u5c42\u6570\u636e\u5e93driver\u5b9a\u4e49\n    Role             string        // (\u53ef\u9009\uff0c\u9ed8\u8ba4\u4e3amaster)\u6570\u636e\u5e93\u7684\u89d2\u8272\uff0c\u7528\u4e8e\u4e3b\u4ece\u64cd\u4f5c\u5206\u79bb\uff0c\u81f3\u5c11\u9700\u8981\u6709\u4e00\u4e2amaster\uff0c\u53c2\u6570\u503c\uff1amaster, slave\n    Debug            bool          // (\u53ef\u9009)\u5f00\u542f\u8c03\u8bd5\u6a21\u5f0f\n    Charset          string        // (\u53ef\u9009\uff0c\u9ed8\u8ba4\u4e3a utf8)\u7f16\u7801\uff0c\u9ed8\u8ba4\u4e3a utf8\n    Prefix           string        // (\u53ef\u9009)\u8868\u540d\u524d\u7f00\n    Weight           int           // (\u53ef\u9009)\u7528\u4e8e\u8d1f\u8f7d\u5747\u8861\u7684\u6743\u91cd\u8ba1\u7b97\uff0c\u5f53\u96c6\u7fa4\u4e2d\u53ea\u6709\u4e00\u4e2a\u8282\u70b9\u65f6\uff0c\u6743\u91cd\u6ca1\u6709\u4efb\u4f55\u610f\u4e49\n    MaxIdleConnCount int           // (\u53ef\u9009)\u8fde\u63a5\u6c60\u6700\u5927\u95f2\u7f6e\u7684\u8fde\u63a5\u6570\n    MaxOpenConnCount int           // (\u53ef\u9009)\u8fde\u63a5\u6c60\u6700\u5927\u6253\u5f00\u7684\u8fde\u63a5\u6570\n    MaxConnLifetime  time.Duration // (\u53ef\u9009\uff0c\u5355\u4f4d\u79d2)\u8fde\u63a5\u5bf9\u8c61\u53ef\u91cd\u590d\u4f7f\u7528\u7684\u65f6\u95f4\u957f\u5ea6\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u7279\u522b\u8bf4\u660e\uff0c ",(0,d.jsx)(n.code,{children:"gdb"})," \u7684\u914d\u7f6e\u7ba1\u7406\u6700\u5927\u7684 ",(0,d.jsx)(n.strong,{children:"\u7279\u70b9"})," \u662f\uff0c\uff08\u540c\u4e00\u8fdb\u7a0b\u4e2d\uff09\u6240\u6709\u7684\u6570\u636e\u5e93\u96c6\u7fa4\u4fe1\u606f\u90fd\u4f7f\u7528\u540c\u4e00\u4e2a\u914d\u7f6e\u7ba1\u7406\u6a21\u5757\u8fdb\u884c\u7edf\u4e00\u7ef4\u62a4\uff0c ",(0,d.jsx)(n.strong,{children:"\u4e0d\u540c\u4e1a\u52a1\u7684\u6570\u636e\u5e93\u96c6\u7fa4\u914d\u7f6e\u4f7f\u7528\u4e0d\u540c\u7684\u5206\u7ec4\u540d\u79f0"})," \u8fdb\u884c\u914d\u7f6e\u548c\u83b7\u53d6\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u914d\u7f6e\u65b9\u6cd5",children:"\u914d\u7f6e\u65b9\u6cd5"}),"\n",(0,d.jsxs)(n.p,{children:["\u8fd9\u662f\u539f\u751f\u8c03\u7528 ",(0,d.jsx)(n.code,{children:"gdb"})," \u6a21\u5757\u6765\u914d\u7f6e\u7ba1\u7406\u6570\u636e\u5e93\u3002\u5982\u679c\u5f00\u53d1\u8005\u60f3\u8981\u81ea\u884c\u63a7\u5236\u6570\u636e\u5e93\u914d\u7f6e\u7ba1\u7406\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u65b9\u6cd5\u3002\u82e5\u65e0\u9700\u8981\u53ef\u5ffd\u7565\u8be5\u7ae0\u8282\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u63a5\u53e3\u6587\u6863\uff1a ",(0,d.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"// \u6dfb\u52a0\u4e00\u4e2a\u6570\u636e\u5e93\u8282\u70b9\u5230\u6307\u5b9a\u7684\u5206\u7ec4\u4e2d\nfunc AddConfigNode(group string, node ConfigNode)\n// \u6dfb\u52a0\u4e00\u4e2a\u914d\u7f6e\u5206\u7ec4\u5230\u6570\u636e\u5e93\u914d\u7f6e\u7ba1\u7406\u4e2d(\u540c\u540d\u8986\u76d6)\nfunc AddConfigGroup(group string, nodes ConfigGroup)\n\n// \u6dfb\u52a0\u4e00\u4e2a\u6570\u636e\u5e93\u8282\u70b9\u5230\u9ed8\u8ba4\u7684\u5206\u7ec4\u4e2d(\u9ed8\u8ba4\u4e3adefault\uff0c\u53ef\u4fee\u6539)\nfunc AddDefaultConfigNode(node ConfigNode)\n// \u6dfb\u52a0\u4e00\u4e2a\u914d\u7f6e\u5206\u7ec4\u5230\u6570\u636e\u5e93\u914d\u7f6e\u7ba1\u7406\u4e2d(\u9ed8\u8ba4\u5206\u7ec4\u4e3adefault\uff0c\u53ef\u4fee\u6539)\nfunc AddDefaultConfigGroup(nodes ConfigGroup)\n\n// \u8bbe\u7f6e\u9ed8\u8ba4\u7684\u5206\u7ec4\u540d\u79f0\uff0c\u83b7\u53d6\u9ed8\u8ba4\u6570\u636e\u5e93\u5bf9\u8c61\u65f6\u5c06\u4f1a\u81ea\u52a8\u8bfb\u53d6\u8be5\u5206\u7ec4\u914d\u7f6e\nfunc SetDefaultGroup(groupName string)\n\n// \u8bbe\u7f6e\u6570\u636e\u5e93\u914d\u7f6e\u4e3a\u5b9a\u4e49\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u4f1a\u5c06\u539f\u6709\u914d\u7f6e\u8986\u76d6\nfunc SetConfig(c Config)\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u9ed8\u8ba4\u5206\u7ec4\u8868\u793a\uff0c\u5982\u679c\u83b7\u53d6\u6570\u636e\u5e93\u5bf9\u8c61\u65f6\u4e0d\u6307\u5b9a\u914d\u7f6e\u5206\u7ec4\u540d\u79f0\uff0c\u90a3\u4e48 ",(0,d.jsx)(n.code,{children:"gdb"})," \u9ed8\u8ba4\u8bfb\u53d6\u7684\u914d\u7f6e\u5206\u7ec4\u3002\u4f8b\u5982\uff1a ",(0,d.jsx)(n.code,{children:"gdb.NewByGroup()"})," \u53ef\u83b7\u53d6\u4e00\u4e2a\u9ed8\u8ba4\u5206\u7ec4\u7684\u6570\u636e\u5e93\u5bf9\u8c61\u3002\u7b80\u5355\u7684\u505a\u6cd5\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"gdb"})," \u5305\u7684 ",(0,d.jsx)(n.code,{children:"SetConfig"})," \u914d\u7f6e\u7ba1\u7406\u65b9\u6cd5\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u6570\u636e\u5e93\u5168\u5c40\u914d\u7f6e\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'gdb.SetConfig(gdb.Config {\n    "default" : gdb.ConfigGroup {\n        gdb.ConfigNode {\n            Host     : "192.168.1.100",\n            Port     : "3306",\n            User     : "root",\n            Pass     : "123456",\n            Name     : "test",\n            Type     : "mysql",\n            Role     : "master",\n            Weight   : 100,\n        },\n        gdb.ConfigNode {\n            Host     : "192.168.1.101",\n            Port     : "3306",\n            User     : "root",\n            Pass     : "123456",\n            Name     : "test",\n            Type     : "mysql",\n            Role     : "slave",\n            Weight   : 100,\n        },\n    },\n    "user-center" : gdb.ConfigGroup {\n        gdb.ConfigNode {\n            Host     : "192.168.1.110",\n            Port     : "3306",\n            User     : "root",\n            Pass     : "123456",\n            Name     : "test",\n            Type     : "mysql",\n            Role     : "master",\n            Weight   : 100,\n        },\n    },\n})\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u968f\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:'gdb.NewByGroup("\u6570\u636e\u5e93\u5206\u7ec4\u540d\u79f0")'})," \u6765\u83b7\u53d6\u4e00\u4e2a\u6570\u636e\u5e93\u64cd\u4f5c\u5bf9\u8c61\u3002\u8be5\u5bf9\u8c61\u7528\u4e8e\u540e\u7eed\u7684\u6570\u636e\u5e93\u4e00\u7cfb\u5217\u65b9\u6cd5/\u94fe\u5f0f\u64cd\u4f5c\u3002"]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var d=s(296540);const r={},i=d.createContext(r);function t(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);