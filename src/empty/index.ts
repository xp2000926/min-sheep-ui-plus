import { App } from 'vue';
import Empty from './src/empty';
import '../index.scss';
import './style/empty.scss';

// 具名导出
export { Empty };

// 导出插件
export default {
  install(app: App) {
    app.component(Empty.name!, Empty);
  }
};
