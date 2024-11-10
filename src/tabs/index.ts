import { App } from 'vue';
import Tabs from './src/tabs';
import '../index.scss';
import './style/tabs.scss';

// 具名导出
export { Tabs };

// 导出插件
export default {
  install(app: App) {
    app.component(Tabs.name, Tabs);
  }
};
