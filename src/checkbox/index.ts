import { App } from 'vue';
import Checkbox from './src/checkbox';
import '../index.scss';
import './style/checkbox.scss';

// 具名导出
export { Checkbox };

// 导出插件
export default {
  install(app: App) {
    app.component(Checkbox.name!, Checkbox);
  }
};
