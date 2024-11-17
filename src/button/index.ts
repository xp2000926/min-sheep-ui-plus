import { App } from 'vue';
import Button from './src/button';
import ButtonGroup from './src/button-group';

import '../index.scss';
import './style/button.scss';
import './style/button-group.css';

// 具名导出
export { Button, ButtonGroup };

// 导出插件
export default {
  install(app: App) {
    app.component(Button.name!, Button);
    app.component(ButtonGroup.name!, ButtonGroup);
  }
};
