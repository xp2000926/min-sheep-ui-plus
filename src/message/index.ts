import { App } from 'vue';
import Message from './src/message';
import '../index.scss';
import './style/message.scss';

// 具名导出
export { Message };

// 导出插件
export default {
  install(app: App) {
    app.component(Message.name!, Message);
  }
};
