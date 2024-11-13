import { App } from 'vue';
import Tooltip from './src/tooltip';
import '../index.scss';
import './style/tooltip.scss';

// 具名导出
export { Tooltip };

// 导出插件
export default {
  install(app: App) {
    app.component(Tooltip.name!, Tooltip);
  }
};
