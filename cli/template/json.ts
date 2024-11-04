import { ComponentMeta } from '../shared/create-component';
import { upperFirst } from './utils';

export const genJsonTemplate = (meta: ComponentMeta) => {
  return `{
    "title": "${upperFirst(meta.name)} ${meta.title}",
    "category": "${meta.category}",
    "link": "/components/${meta.name}/"
}`;
};
