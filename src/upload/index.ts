import { App } from 'vue';
import Upload from './src/upload';
import '../index.scss';
import './style/upload.scss';

// 具名导出
export { Upload };

// 导出插件
export default {
  install(app: App) {
    app.component(Upload.name, Upload);
  }
};
