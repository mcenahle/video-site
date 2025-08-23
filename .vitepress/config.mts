import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "video.mcenahle.org.cn",
  description: "",
  srcDir: 'pages',
  outDir: 'dist',
  ignoreDeadLinks: true,
  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      level: [1, 3], // 显示 h1 到 h3 级别的标题
    },
    externalLinkIcon: true,
    // lastUpdated: true,
    head: [
      ['link', { rel: 'icon', href: '/assets/favicon.ico' }]
    ],
    editLink: {
      pattern: 'https://github.com/mcenahle/video-site/edit/main/pages/:path',
      text: '在 GitHub 上编辑此页'
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    darkModeSwitchLabel: "外观",
    darkModeSwitchTitle: "切换到深色模式",
    lightModeSwitchTitle: "切换到浅色模式",
    sidebarMenuLabel: "目录",
    returnToTopLabel: "返回顶部",
    lastUpdatedText: "最后更新",
    outlineTitle: "页面导航",

    nav: [
      { text: '主页', link: '/' },
      { text: '视频展示', link: '/proj' },
      { text: '本站公告', link: '/announcements' },
      { text: '著作权声明', link: '/copyright' },
      {
        text: '外站链接',
        items: [
          { text: '主页', link: 'https://www.mcenahle.org.cn' },
          { text: 'api 服务', link: 'https://api.mcenahle.org.cn' },
          { text: '电子邮件', link: 'https://mail.mcenahle.org.cn' },
          { text: '文档网站', link: 'https://www.shm.ac.cn' },
          { text: '状态监控', link: 'https://status.mcenahle.org.cn' }
        ]
      }
    ],

    sidebar: {
      '/proj/': [
        {
          text: '正在计划的视频',
          // collapsed: false,
          items: [
            { text: '2025年终影片', link: '/proj/2025-end-movie' }
          ]
        },
       {
          text: '视频展示（剪辑软件：达芬奇）',
          // collapsed: false,
          items: [
            { text: '初夏的记忆与天堂', link: '/proj/earlysummer-paradise' }
          ]
        },
        {
          text: '视频展示（剪辑软件：PR）',
          // collapsed: false,
          items: [
            { text: '去月球三部曲 - 完结', link: '/proj/end-to-the-moon-series' },
            { text: '2025.6.23 上海游记影片', link: '/proj/2025.6.23-movie' },
            { text: '杨逸 - 鹳羽', link: '/proj/guanyu-yangyi' },
            { text: '挑战通过科目一', link: '/proj/pass-the-subject-1' },
            { text: '2024年终影片', link: '/proj/2024-end-movie' }
          ]
        }
      ],

      '/copyright/': [
        {
          text: '著作权声明',
          items: [
            { text: '查看声明内容', link: '/copyright/' }
          ]
        }
      ],

    '/announcements/': [
        {
          text: '本站公告',
          items: [
            { text: '本站公告列表', link: '/announcements/' },     
            { text: '网站迁移公告', link: '/announcements/wangzhan-qianyi' },
            { text: '剪辑的新视频即将采用新素材的公告', link: '/announcements/new-video-materials' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mcenahle' }
    ],

    footer: {
      message: '备案信息：<a href="https://beian.miit.gov.cn/" target="_blank">沪ICP备2025116360号-1</a> | <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31015102000182" target="_blank">沪公网安备31015102000182号</a>',
      copyright: '© 2025 video.mcenahle.org.cn。源代码遵循 GPL-3.0 许可。部分内容保留版权。'
    }
  }
})
