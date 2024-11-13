import { App } from 'vue';
import Trigger from './src/trigger';
import '../index.scss';
import './style/trigger.scss';

// 具名导出
export { Trigger };

// 导出插件
export default {
  install(app: App) {
    app.component(Trigger.name!, Trigger);
  }
};
