import { mount } from '@vue/test-utils';
import Tree from '../src/tree';

describe('tree 测试', () => {
  test('tree是否可以正常工作', async () => {
    const wrapper = mount(Tree);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
