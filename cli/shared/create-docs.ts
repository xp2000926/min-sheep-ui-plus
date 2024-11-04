import { ensureDirSync, writeFileSync, readFileSync } from 'fs-extra';
import { resolve } from 'path';
import { WriteFileOptions } from 'fs';

export interface ComponentMeta {
  name: string;
  title: string;
  category: string;
}
export const createDocs = async (meta: ComponentMeta) => {
  const { name } = meta;
  const componentsDir = resolve('../docs/components/', name); //组件源文件
  // 文档件目录
  const configTs = resolve('../docs/.vitepress/config.ts'); // 文档目录
  const data = await readFileSync(configTs, 'utf8');
  console.log(data.const);
};
