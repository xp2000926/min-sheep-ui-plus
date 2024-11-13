import { App } from 'vue';
import Progress from './src/progress';
import '../index.scss';
import './style/progress.scss';

// 具名导出
export { Progress };

// 导出插件
export default {
  install(app: App) {
    app.component(Progress.name!, Progress);
  }
};
