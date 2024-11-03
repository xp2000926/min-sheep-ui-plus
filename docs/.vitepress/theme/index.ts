import Theme from 'vitepress/theme'; //默认样式
import MinSheepUI from '../../../scripts/entry';
import Demo from '../vitepress/components/Demo.vue';
import 'prismjs/themes/prism.css';
export default {
  ...Theme,
  // 扩展应用程序实例
  enhanceApp({ app }) {
    app.component('Demo', Demo);
    app.use(MinSheepUI);
  }
};
