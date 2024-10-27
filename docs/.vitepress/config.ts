
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
  { text: '数据展示', items: [] },
  { text: '布局', items: [] }
];

export default {
  title: 'min-sheep-ui',
  description: 'min-sheep-ui',
  themeConfig: {
    sidebar
  },
  markdown: {
    markdown: {
      config: md => {
        // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
        md.use();
      }
    }
  }
};
