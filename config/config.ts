import { defineConfig } from 'dumi';

const repo = 'note';

export default defineConfig({
  title: repo,
  favicon: '/images/logo.png',
  logo: `/${repo}/images/logo.png`,
  outputPath: 'docs-dist',
  mode: 'site',
  devServer: {
    port: 9000,
  },
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  fastRefresh: {},
  ssr: {
    // 更多配置
    removeWindowInitialProps: true,
    mode: 'stream',
    staticMarkup: true,
  },
  exportStatic: {},
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/GuoKeMPF/note.git',
    },
  ],
  // more config: https://d.umijs.org/config
});
