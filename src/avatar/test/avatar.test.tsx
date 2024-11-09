import { mount } from '@vue/test-utils';
import Avatar from '../src/avatar';

describe('avatar 测试', () => {
  test('avatar是否可以正常工作', async () => {
    const wrapper = mount(Avatar);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
