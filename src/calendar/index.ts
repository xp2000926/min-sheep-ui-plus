import { App } from 'vue';
import Calendar from './src/calendar';
import '../index.scss';
import './style/calendar.scss';

// 具名导出
export { Calendar };

// 导出插件
export default {
  install(app: App) {
    app.component(Calendar.name!, Calendar);
  }
};
