import { mount } from '@vue/test-utils';
import Badge from '../src/badge';

describe('badge 测试', () => {
  test('badge是否可以正常工作', async () => {
    const wrapper = mount(Badge);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
