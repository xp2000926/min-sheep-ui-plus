import { defineConfig } from 'vitepress';
import { blockPlugin, codePlugin, renderPlugin } from './vitepress/plugins/md';
import { tooltip } from './vitepress/plugins/tooltip';
// import { demoBlockPlugin } from 'vitepress-theme-demoblock';
import fs from 'fs';
const path = require('path');

let sidebar: Array<{
  text: string;
  items: Array<{ text: string; link: string }> | [];
}> = [
  { text: '快速开始', items: [] },
  { text: '通用', items: [] },
  { text: '导航', items: [] },
  { text: '反馈', items: [] },
  { text: '数据录入', items: [] },
  { text: '数据展示', items: [] },
  { text: '布局', items: [] },
  { text: '其他', items: [] }
];

// 动态生成 docs 的 sidebar 目录
let filename = path.resolve(__dirname, '../../src/');
fs.readdir(filename, async (err, files: any[]) => {
  if (err) {
    return console.error('读取目录时出错', err);
  }
  let newFiles = files.map(async (element: string) => {
    const file = await fs.promises.stat(path.resolve(filename, element));
    if (!file.isFile()) {
      return element;
    }
  });
  let res = await Promise.all(newFiles);

  Promise.all(
    res.filter(Boolean).map(async element => {
      return {
        file: fs
          .readdirSync(path.resolve(filename, element))
          .filter(it => 'index.json' === it)[0],
        path: path.resolve(filename, element)
      };
    })
  ).then(res1 => {
    res1
      .filter(it => it.file)
      .map(async it => {
        let res2 = await fs.readFileSync(
          path.resolve(it.path, it.file),
          'utf-8'
        );
        if (res2) {
          let { category, title: text, link } = JSON.parse(res2);
          sidebar = sidebar.map(item => {
            if (item.text == category) {
              item.items.push({ text, link });
              return item;
            } else {
              return item;
            }
          });
        }
      });
  });
});

export default defineConfig({
  title: 'min-sheep-ui',
  description: 'min-sheep-ui',
  themeConfig: {
    sidebar,
    outlineTitle: '内容'
  },
  markdown: {
    config: md => {
      // md.use(demoBlockPlugin);
      md.use(blockPlugin);
      md.use(codePlugin, {});
      md.use(renderPlugin, {});
      md.use(tooltip);
    }
  }
});
