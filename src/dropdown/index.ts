import { App } from 'vue';
import Dropdown from './src/dropdown';
import '../index.scss';
import './style/dropdown.scss';

// 具名导出
export { Dropdown };

// 导出插件
export default {
  install(app: App) {
    app.component(Dropdown.name!, Dropdown);
  }
};
