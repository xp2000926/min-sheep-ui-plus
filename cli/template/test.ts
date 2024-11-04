import { upperFirst } from './utils';

export const genTestTemplate = name => {
  return `import { mount } from '@vue/test-utils';
import ${upperFirst(name)} from '../src/${name}';

describe('${name} 测试', () => {
  test('${name}是否可以正常工作', async () => {
    const wrapper = mount(${upperFirst(name)});
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
`;
  //   return `import { render } from '@testing-library/vue';
  // import ${upperFirst(name)} from '../src/${name}';

  // describe('${name} 测试', () => {
  //   test('${name}是否可以正常工作', async () => {
  //     const { getByRole } = render(${upperFirst(name)});
  //     getByRole('${name}');
  //   });
  // });
  // `;
};
