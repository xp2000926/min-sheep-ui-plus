import { ComponentMeta } from '../shared/create-component';
import { upperFirst } from './utils';

export const genMdTemplate = (meta: ComponentMeta) => {
  return `# ${upperFirst(meta.name)} ${meta.title}
`;
};
