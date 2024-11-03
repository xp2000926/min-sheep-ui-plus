// 引入vite导出的build方法，用他来创建
const path = require('path');
const fs = require('fs');
const { defineConfig, build } = require('vite');
const vue = require('@vitejs/plugin-vue');
const vueJsx = require('@vitejs/plugin-vue-jsx');
const fsExtra = require('fs-extra');

// 基础配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()]
});
// 入口文件
const entryFile = path.resolve(__dirname, './entry.ts');
// 组件目录
const componentsDir = path.resolve(__dirname, '../src');
// 输出目录
const outputDir = path.resolve(__dirname, '../build');

// rollup 配置
const rollupOptions = {
  // 外置
  external: ['vue', 'vue-router'],
  output: {
    exports: 'named',
    globals: {
      vue: 'Vue'
    }
  }
};
// 生成 package.json
// {
//     "name": "min-sheep-ui",
//     "version":"1.0.0",
//     "main":"min-sheep-ui.umd.js",
//     "module":"min-sheep-ui.esm.js"
// }
const createPackageJson = name => {
  // 预设
  const fileStr = `{
  "name":"${name ? name : 'min-sheep-ui'}",
  "version":"0.1.1",
  "main": "${name ? 'index.umd.js' : 'min-sheep-ui.umd.js'}",
  "module": "${name ? 'index.esm.js' : 'min-sheep-ui.esm.js'}",
  "author": "xp2000926",
  "github": "",
  "description": "羊村第一个组件库min-Sheep-UI，以后村里羊圈能不能建好就看它了！",
  "repository": {
    "type": "git",
    "url": "https://github.com/xp2000926/min-sheep-ui.git"
  },
  "keywords": ["vue3", "组件库", "tsx", "UI"],
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/xp2000926/min-sheep-ui/issues"
  }
}`;
  if (name) {
    // 单个组件，输出对应的package.json
    fsExtra.outputFile(
      path.resolve(outputDir, `${name}/package.json`),
      fileStr,
      'utf-8'
    );
  } else {
    // 全量
    fsExtra.outputFile(
      path.resolve(outputDir, 'package.json'),
      fileStr,
      'utf-8'
    );
  }
};

//全量构建
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: entryFile,
          name: 'min-sheep-ui',
          fileName: 'min-sheep-ui',
          formats: ['es', 'umd', 'cjs']
          // formats: ['esm', 'umd']
        },
        outDir: outputDir
      }
    })
  );
  // 全量打包
  createPackageJson();
};
// 单组件按需构建
const buildSingle = async name => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(componentsDir, name),
          name: 'index',
          fileName: 'index',
          // formats: ['esm', 'umd']
          formats: ['es', 'umd', 'cjs']
        },
        outDir: path.resolve(outputDir, name)
      }
    })
  );
  createPackageJson(name);
};
// 执行创建
const buildLib = async () => {
  await buildAll();
  // 按需打包
  fs.readdirSync(componentsDir)
    .filter(name => {
      // 过滤组件目录：只要目录不要文件，且目录中包含index.ts
      const componentDir = path.resolve(componentsDir, name);
      const isDir = fs.lstatSync(componentDir).isDirectory();
      return isDir && fs.readdirSync(componentDir).includes('index.ts');
    })
    .forEach(async name => {
      await buildSingle(name);
    });
};
buildLib();
