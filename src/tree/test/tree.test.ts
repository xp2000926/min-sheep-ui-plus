import { render } from '@testing-library/vue';
import Tree from '../src/tree';
import { mount } from '@vue/test-utils';

describe('tree 测试', () => {
  test('tree是否可以正常工作', async () => {
    const wrapper = mount(Tree);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
