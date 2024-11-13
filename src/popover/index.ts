import { App } from 'vue';
import Popover from './src/popover';
import '../index.scss';
import './style/popover.scss';

// 具名导出
export { Popover };

// 导出插件
export default {
  install(app: App) {
    app.component(Popover.name!, Popover);
  }
};
