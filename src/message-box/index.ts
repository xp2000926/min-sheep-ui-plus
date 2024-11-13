import { App } from 'vue';
import MessageBox from './src/message-box';
import '../index.scss';
import './style/message-box.scss';

// 具名导出
export { MessageBox };

// 导出插件
export default {
  install(app: App) {
    app.component(MessageBox.name!, MessageBox);
  }
};
