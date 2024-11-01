import { render } from '@testing-library/vue'; //导入 渲染函数
import Button from '../src/button';
import '@testing-library/jest-dom';

test('button是否可以正常工作', () => {
  // 渲染组件
  const { getByRole } = render(Button);
  getByRole('button');
});
// 插槽
test('默认插槽是不是空', () => {
  const { getByRole } = render(Button);
  const button = getByRole('button');
  expect(button.innerText == '').toBe(true);
});
test('默认插槽是否可以正常工作', () => {
  const { getByText } = render(Button, {
    slots: {
      default() {
        return 'confirm';
      }
    }
  });
  getByText('confirm');
});
test('type的 primary 是否正常工作', () => {
  const { getByRole } = render(Button, {
    props: {
      type: 'primary'
    }
  });
  const button = getByRole('button');
  expect(button.classList.contains('s-button--primary')).toBe(true);
});
test('type的 success 是否正常工作', () => {
  const { getByRole } = render(Button, {
    props: {
      type: 'success'
    }
  });
  const button = getByRole('button');
  expect(button.classList.contains('s-button--success')).toBe(true);
});
test('type的 info 是否正常工作', () => {
  const { getByRole } = render(Button, {
    props: {
      type: 'info'
    }
  });
  const button = getByRole('button');
  expect(button.classList.contains('s-button--info')).toBe(true);
});
test('type的 warning 是否正常工作', () => {
  const { getByRole } = render(Button, {
    props: {
      type: 'warning'
    }
  });
  const button = getByRole('button');
  expect(button.classList.contains('s-button--warning')).toBe(true);
});
test('type的 danger 是否正常工作', () => {
  const { getByRole } = render(Button, {
    props: {
      type: 'danger'
    }
  });
  const button = getByRole('button');
  expect(button.classList.contains('s-button--danger')).toBe(true);
});
test('size的 small 是否正常工作', () => {
  const { getByRole } = render(Button, {
    props: {
      size: 'small'
    }
  });
  const button = getByRole('button');
  expect(button.classList.contains('s-button--small')).toBe(true);
});
test('size的 large 是否正常工作', () => {
  const { getByRole } = render(Button, {
    props: {
      size: 'large'
    }
  });
  const button = getByRole('button');
  expect(button.classList.contains('s-button--large')).toBe(true);
});
test('block 是否正常工作', () => {
  const { getByRole } = render(Button, {
    props: {
      block: true
    }
  });
  const button = getByRole('button');
  expect(button.classList.contains('is-block')).toBe(true);
});
test('plain 是否正常工作', () => {
  const { getByRole } = render(Button, {
    props: {
      plain: true
    }
  });
  const button = getByRole('button');
  expect(button.classList.contains('is-plain')).toBe(true);
});
test('round 是否正常工作', () => {
  const { getByRole } = render(Button, {
    props: {
      round: true
    }
  });
  const button = getByRole('button');
  expect(button.classList.contains('is-round')).toBe(true);
});
test('circle 是否正常工作', () => {
  const { getByRole } = render(Button, {
    props: {
      circle: true
    }
  });
  const button = getByRole('button');
  expect(button.classList.contains('is-circle')).toBe(true);
});
test('dashed 是否正常工作', () => {
  const { getByRole } = render(Button, {
    props: {
      dashed: true
    }
  });
  const button = getByRole('button');
  expect(button.classList.contains('is-dashed')).toBe(true);
});
test('当disabled为true时按钮被禁用', () => {
  const { getByRole } = render(Button, {
    props: {
      disabled: true
    }
  });
  const button = getByRole('button');
  expect(button).toBeDisabled();
});
test('当disabled为false时按钮被启用', () => {
  const { getByRole } = render(Button, {
    props: {
      disabled: false
    }
  });
  const button = getByRole('button');
  expect(button).toBeEnabled();
});
