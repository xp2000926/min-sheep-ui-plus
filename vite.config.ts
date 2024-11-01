/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx({})],
  test: {
    // jest like test apis
    globals: true,
    // 模拟dom环境
    environment: 'happy-dom',
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/]
    },
    coverage: {
      include: ['src/**/*.{js,ts}'], // 包含源码目录下的所有文件
      exclude: ['src/views', 'src/main.ts', 'src/**/index.ts'] // 不包含测试文件和依赖
    }
  }
});
