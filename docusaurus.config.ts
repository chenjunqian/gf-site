const LATEST_VERSION_LABEL = 'Latest';

import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

// https://docusaurus.io/docs/3.2.1/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter
// https://docusaurus.io/docs/3.2.1/api/docusaurus-config
const config: Config = {
  title: 'GoFrame官网 - 类似PHP-Laravel,Java-SpringBoot的Go企业级开发框架',
  tagline:
    'GoFrame is a modular, powerful, high-performance and enterprise-class application development framework of Golang.',
  favicon: '/img/favicon.ico',
  url: 'https://goframe.org/',
  baseUrl: '/gf-site/',
  trailingSlash: false,
  organizationName: 'gogf',
  projectName: 'gf',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  // 多语言配置
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
    },
  },
  presets: [
    [
      'classic',
      {
        // Will be passed to @docusaurus/plugin-content-docs (false to disable)
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          lastVersion: 'current',
          // https://docusaurus.io/docs/versioning
          versions: {
            current: {
              label: LATEST_VERSION_LABEL,
            },
          },
          // 编辑当前页面的配置
          editUrl: 'https://github.com/gogf/gf-site/blob/main/',
          // 显示更新时间和作者
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        // Will be passed to @docusaurus/plugin-content-blog (false to disable)
        blog: {},
        // Will be passed to @docusaurus/plugin-content-pages (false to disable)
        pages: {},
        // Will be passed to @docusaurus/theme-classic.
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    // 搜索
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        // Options here
        // language of your documentation, see next section
        language: 'zh',
      },
    ],

    // 快速开始
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'quick',
        path: 'quick',
        routeBasePath: 'quick',
        sidebarPath: require.resolve('./sidebars.ts'),
        // 编辑当前页面的配置
        editUrl: 'https://github.com/gogf/gf-site/blob/main/',
        // 显示更新时间和作者
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
      },
    ],
    // 版本发布
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'release',
        path: 'release',
        routeBasePath: 'release',
        sidebarPath: require.resolve('./sidebars.ts'),
        // 编辑当前页面的配置
        editUrl: 'https://github.com/gogf/gf-site/blob/main/',
        // 显示更新时间和作者
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
      },
    ],
    // 技术交流
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'communication',
        path: 'communication',
        routeBasePath: 'communication',
        sidebarPath: require.resolve('./sidebars.ts'),
        // 编辑当前页面的配置
        editUrl: 'https://github.com/gogf/gf-site/blob/main/',
        // 显示更新时间和作者
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
      },
    ],
    // 支持我们
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'supportus',
        path: 'supportus',
        routeBasePath: 'supportus',
        sidebarPath: require.resolve('./sidebars.ts'),
        // 编辑当前页面的配置
        editUrl: 'https://github.com/gogf/gf-site/blob/main/',
        // 显示更新时间和作者
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'GoFrame Logo',
        src: '/img/logo2.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          docsPluginId: 'quick',
          position: 'left',
          label: '快速开始',
        },
        {
          position: 'left',
          label: '开发手册',
          items: [
            {
              label: '框架设计',
              to: '/docs/design',
            },
            {
              label: '开发工具',
              to: '/docs/cli',
            },
            {
              label: '组件手册',
              to: '/docs/core',
            },
            {
              label: '微服务开发',
              to: '/docs/micro',
            },
            {
              label: 'WEB服务开发',
              to: '/docs/web',
            },
            {
              label: '服务可观测性',
              to: '/docs/obs',
            },
          ],
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          docsPluginId: 'release',
          position: 'left',
          label: '发布记录',
        },

        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          docsPluginId: 'communication',
          position: 'left',
          label: '技术交流',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          docsPluginId: 'supportus',
          position: 'left',
          label: '支持我们',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/gogf/gf/issues',
          position: 'right',
          label: '问题反馈',
        },
        {
          href: 'https://github.com/gogf/gf',
          position: 'right',
          className: 'header-github-link',
        },
      ],
    },
    // toc目录层级显示设置
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    footer: {
      copyright: `Copyright ©${new Date().getFullYear()} GoFrame OpenSource Team`,
    },
    // 代码块配置
    prism: {
      theme: prismThemes.okaidia,
      darkTheme: prismThemes.dracula,
      defaultLanguage: 'go',
      additionalLanguages: ['bash', 'javascript'], // 添加语言
      // 默认支持的语言 https://github.com/FormidableLabs/prism-react-renderer/blob/master/packages/generate-prism-languages/index.ts#L9-L23
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
