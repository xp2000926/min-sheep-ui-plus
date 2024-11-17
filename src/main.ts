import { createApp } from 'vue';
// import './style.css';
import App from './App.vue';
// import './index.scss';

import Button from './button';
import Calendar from './calendar';

// 使用全量导出
createApp(App).use(Button).use(Calendar).mount('#app');
