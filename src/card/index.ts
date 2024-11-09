import { App } from 'vue';
import Card from './src/card';
import '../index.scss';
import './style/card.scss';

// 具名导出
export { Card };

// 导出插件
export default {
  install(app: App) {
    app.component(Card.name, Card);
  }
};
