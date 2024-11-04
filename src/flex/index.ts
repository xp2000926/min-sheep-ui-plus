import { App } from 'vue';
import Flex from './src/flex';

// 具名导出
export { Flex };

// 导出插件
export default {
  install(app: App) {
    app.component(Flex.name, Flex);
  }
};
