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
      level: [1, 3],    // 显示 h1 到 h3 级别的标题
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '视频展示', link: '/proj' },
      { text: '著作权声明', link: '/copyright' }
    ],

    sidebar: [
      {
        text: '视频展示（剪辑软件：PR）',
        collapsed: true,
        items: [
          { text: '去月球三部曲 - 完结', link: '/proj/end-to-the-moon-series' },
          { text: '2025.6.23 上海游记影片', link: '/proj/2025.6.23-movie' },
          { text: '杨逸 - 鹳羽', link: '/proj/guanyu-yangyi' },
          { text: '挑战通过科目一', link: '/proj/pass-the-subject-1' },
          { text: '2024年终影片', link: '/proj/2024-end-movie' }
        ]
      },
      {
        text: '视频展示（剪辑软件：DaVinci Resolve）',
        collapsed: true,
        items: [
          { text: '初夏的记忆与天堂', link: '/proj/earlysummer-paradise' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mcenahle' }
    ]
  }
})
