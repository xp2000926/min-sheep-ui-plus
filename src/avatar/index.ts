import { App } from 'vue';
import Avatar from './src/avatar';
import '../index.scss';
import './style/avatar.scss';

// 具名导出
export { Avatar };

// 导出插件
export default {
  install(app: App) {
    app.component(Avatar.name, Avatar);
  }
};
