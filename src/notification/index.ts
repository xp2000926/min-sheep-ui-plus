import { App } from 'vue';
import Notification from './src/notification';
import '../index.scss';
import './style/notification.scss';

// 具名导出
export { Notification };

// 导出插件
export default {
  install(app: App) {
    app.component(Notification.name!, Notification);
  }
};
