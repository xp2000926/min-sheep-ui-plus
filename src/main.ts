import { createApp } from 'vue';
// import './style.css';
import App from './App.vue';
// import './index.scss';

// import Button from './button';

// 使用全量导出
import minSheepUI from '../build/min-sheep-ui.mjs';
import '../build';
createApp(App).use(minSheepUI).mount('#app');
