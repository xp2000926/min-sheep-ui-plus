import { App } from 'vue';
import Button from './src/button';
import '../index.scss';
import './style/button.scss';

// 具名导出
export { Button };
// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Button.name!, Button);
  }
};
