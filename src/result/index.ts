import { App } from 'vue';
import Result from './src/result';
import '../index.scss';
import './style/result.scss';

// 具名导出
export { Result };

// 导出插件
export default {
  install(app: App) {
    app.component(Result.name, Result);
  }
};
