import { mount } from '@vue/test-utils';
import Split from '../src/split';

describe('split 测试', () => {
  test('split是否可以正常工作', async () => {
    const wrapper = mount(Split);
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
