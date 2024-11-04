import { defineConfig } from 'vitepress';
import { blockPlugin, codePlugin, renderPlugin } from './vitepress/plugins/md';
import { tooltip } from './vitepress/plugins/tooltip';

const sidebar = [
  {
    text: '快速开始',
    items: []
  },
  {
    text: '通用',
    items: [
      {
        text: 'buton 按钮',
        link: '/components/buton/'
      }
    ]
  },
  {
    text: '导航',
    items: []
  },
  { text: '反馈', items: [] },
  { text: '数据录入', items: [] },
  {
    text: '数据展示',
    items: [
      {
        text: 'Tree 树 ',
        link: '/components/tree/'
      },
      {
        text: 'Empty 空状态 ',
        link: '/components/empty/'
      }
    ]
  },
  { text: '布局', items: [] }
];

export default defineConfig({
  title: 'min-sheep-ui',
  description: 'min-sheep-ui',
  themeConfig: {
    sidebar,
    outlineTitle: '内容'
  },
  markdown: {
    config: md => {
      md.use(blockPlugin);
      md.use(codePlugin, {});
      md.use(renderPlugin, {});
      // md.use(tooltip);
    }
  }
});
