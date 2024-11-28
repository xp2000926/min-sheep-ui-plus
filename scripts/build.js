// 引入vite导出的build方法，用他来创建
const path = require('path');
const fs = require('fs');
const { defineConfig, build } = require('vite');
const vue = require('@vitejs/plugin-vue');
const vueJsx = require('@vitejs/plugin-vue-jsx');
const { default: dts } = require('vite-plugin-dts');
const fsExtra = require('fs-extra');

// 基础配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [
    vue(),
    vueJsx(),
    dts({
      insertTypesEntry: true,
      copyDtsFiles: true, // 确保复制声明文件
      skipDiagnostics: false, // 不跳过类型检查
      tsConfigFilePath: '../tsconfig.json' // 指定 tsconfig 路径
    })
  ]
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
    moveDtsFiles();
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
    // .filter(
    //   item => item
    //    ![
    //      'avatar',
    //      'calendar',
    //      'card',
    //      'carousel',
    //      'divider',
    //      'watermark',
    //      'tooltip',
    //      'result',
    //      'flex'
    //    ].includes(item)
    // )
    .forEach(async name => {
      await buildSingle(name);
    });
};
buildLib();

const moveDtsFiles = () => {
  const baseSrcDir = path.resolve(__dirname, '../build/src');
  if (fs.existsSync(baseSrcDir)) {
    const componentDirs = fs
      .readdirSync(baseSrcDir)
      .filter(dir => fs.lstatSync(path.join(baseSrcDir, dir)).isDirectory());
    componentDirs.forEach(componentDir => {
      const srcDtsDir = path.join(baseSrcDir, componentDir, 'src');
      if (fs.existsSync(srcDtsDir)) {
        const dtsFiles = fs
          .readdirSync(srcDtsDir)
          .filter(file => file.endsWith('.d.ts'));
        dtsFiles.forEach(dtsFile => {
          const srcFilePath = path.join(srcDtsDir, dtsFile);
          const targetDir = path.resolve(__dirname, `../build/${componentDir}`);
          if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir);
          }
          const targetFilePath = path.join(targetDir, dtsFile);
          // 检查目标文件是否已存在
          if (fs.existsSync(targetFilePath)) {
            // 提取文件名（不含后缀）和后缀
            const [fileNameWithoutExt, fileExt] = dtsFile.split('.');
            let newFileName = fileNameWithoutExt;
            let index = 1;
            // 循环检查，直到找到一个不存在的文件名
            while (
              fs.existsSync(
                path.join(targetDir, `${newFileName}_${index}.${fileExt}`)
              )
            ) {
              index++;
            }
            newFileName = `${newFileName}_${index}.${fileExt}`;
            // 使用新的文件名进行移动
            fsExtra.moveSync(srcFilePath, path.join(targetDir, newFileName), {
              overwrite: false
            });
          } else {
            // 如果目标文件不存在，直接正常移动
            fsExtra.moveSync(srcFilePath, targetFilePath, { overwrite: false });
          }
        });
      }
    });
  }
};
