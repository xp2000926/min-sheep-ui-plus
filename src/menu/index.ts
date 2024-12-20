import { App } from 'vue';
import Menu from './src/menu';
import '../index.scss';
import './style/menu.scss';

// 具名导出
export { Menu };

// 导出插件
export default {
  install(app: App) {
    app.component(Menu.name!, Menu);
  }
};
