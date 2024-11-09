import { mount } from '@vue/test-utils';
import Grid from '../src/grid';

describe('grid 测试', () => {
  test('grid是否可以正常工作', async () => {
    const wrapper = mount(Grid);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
