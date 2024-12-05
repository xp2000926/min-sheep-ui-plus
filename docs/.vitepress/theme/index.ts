import Theme from 'vitepress/theme'; //默认样式
import MinSheepUI from '../../../scripts/entry';
// 主题样式
// import 'vitepress-theme-demoblock/theme/styles/index.css';
// import Demo from '../vitepress/components/Demo.vue';
// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/components/Demo.vue';
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue';

import './scss/index.scss'
import 'prismjs/themes/prism.css';

export default {
  ...Theme,
  // 扩展应用程序实例
  enhanceApp({ app }) {
    app.use(MinSheepUI);
    // 注册DemoBlock所需组件
    app.component('Demo', Demo);
    app.component('DemoBlock', DemoBlock);
  }
};
