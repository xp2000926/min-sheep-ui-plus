import { App } from 'vue';
import Breadcrumb from './src/breadcrumb';
import '../index.scss';
import './style/breadcrumb.scss';

// 具名导出
export { Breadcrumb };

// 导出插件
export default {
  install(app: App) {
    app.component(Breadcrumb.name!, Breadcrumb);
  }
};
