import { App } from 'vue';
import Table from './src/table';

// 具名导出
export { Table };

// 导出插件
export default {
  install(app: App) {
    app.component(Table.name, Table);
  }
};
