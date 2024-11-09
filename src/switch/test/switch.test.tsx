import { mount } from '@vue/test-utils';
import Switch from '../src/switch';

describe('switch 测试', () => {
  test('switch是否可以正常工作', async () => {
    const wrapper = mount(Switch);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
