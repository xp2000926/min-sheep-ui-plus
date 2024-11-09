import { App } from 'vue';
import Divider from './src/divider';
import '../index.scss';
import './style/divider .scss';

// 具名导出
export { Divider };

// 导出插件
export default {
  install(app: App) {
    app.component(Divider.name, Divider);
  }
};
