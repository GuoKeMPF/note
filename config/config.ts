import { defineConfig } from 'dumi';

const repo = 'dumi';

export default defineConfig({
  title: repo,
  favicon: '/images/logo.png',
  logo: '/images/logo.png',
  outputPath: 'docs-dist',

  mode: 'site',
  devServer: {
    port: 9000,
  },
  ssr: {},
  exportStatic: {},
  hash: true,
  dynamicImport: {},
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/umijs/dumi-template',
    },
  ],
  // more config: https://d.umijs.org/config
});
