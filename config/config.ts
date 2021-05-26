import { defineConfig } from 'dumi';
import navs from './navs';
import menus from './menus';

const repo = 'note';

// more config: https://d.umijs.org/config
export default defineConfig({
  title: 'Note',
  favicon: '/images/logo.png',
  logo: `/${repo}/images/logo.png`,
  outputPath: 'docs-dist',
  mode: 'site',
  devServer: {
    port: 9000,
  },
  locales: [['zh-CN', '中文']],
  fastRefresh: {},
  ssr: {
    // 更多配置
    removeWindowInitialProps: true,
    mode: 'stream',
    staticMarkup: true,
  },
  exportStatic: {},
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  navs,
  menus,
});
