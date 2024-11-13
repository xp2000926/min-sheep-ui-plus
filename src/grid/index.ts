import { App } from 'vue';
import Grid from './src/grid';
import '../index.scss';
import './style/grid.scss';

// 具名导出
export { Grid };

// 导出插件
export default {
  install(app: App) {
    app.component(Grid.name!, Grid);
  }
};
