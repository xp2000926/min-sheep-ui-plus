import { App } from 'vue';
import Alert from './src/alert';
import '../index.scss';
import './style/alert.scss';

// 具名导出
export { Alert };

// 导出插件
export default {
  install(app: App) {
    app.component(Alert.name, Alert);
  }
};
