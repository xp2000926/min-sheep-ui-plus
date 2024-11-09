import { App } from 'vue';
import Split from './src/split';
import '../index.scss';
import './style/split.scss';

// 具名导出
export { Split };

// 导出插件
export default {
  install(app: App) {
    app.component(Split.name, Split);
  }
};
