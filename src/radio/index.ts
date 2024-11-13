import { App } from 'vue';
import Radio from './src/radio';
import '../index.scss';
import './style/radio.scss';

// 具名导出
export { Radio };

// 导出插件
export default {
  install(app: App) {
    app.component(Radio.name!, Radio);
  }
};
