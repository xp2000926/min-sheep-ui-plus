import { createApp } from 'vue';
// import './style.css';
import App from './App.vue';
// import './index.scss';

import Button from './button';

// 使用全量导出
createApp(App).use(Button).mount('#app');
