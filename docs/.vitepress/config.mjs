import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/web-one/',
  title: "Web One",
  head: [['link', { rel: 'icon', href: 'https://chatgis.space/images/favicon.png' }]],
  description: "One notebook of Python",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'ES学习笔记', link: '/es/0101' }
    ],

    sidebar: [
      {
        text: 'ES学习笔记',
        items: [
          { text: '类', link: '/es/0101' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ChatGIS/python-one' }
    ]
  }
})
