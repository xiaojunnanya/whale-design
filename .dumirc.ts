import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'whaled',
    logo:'http://www.xiaojunnan.cn/img/logo.webp',
    footer: `Copyright © 2024 - ${new Date().getFullYear()} <a href="http://www.xiaojunnan.cn/" target="_blank">鲸落</a>`,
    showLineNum: true,
    socialLinks: {
      github: 'https://github.com/xiaojunnanya/whale-design',
    },
  },
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'EN' },
  ],
});
