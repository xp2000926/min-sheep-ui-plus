import { ExtractPropTypes } from 'vue';
import { definePropType } from '../../utils';

export type DirectionType = 'horizontal' | 'vertical';
export type TypeType = 'default' | 'card' | 'opacity' | '';
export const calendarProps = {
  type: {
    type: definePropType<TypeType>(String),
    default: 'default'
  },
  // 自动切换的时间间隔，单位为毫秒
  interval: {
    type: Number,
    default: 3000
  },
  // 是否循环显示
  loop: {
    type: Boolean,
    default: true
  },
  // 初始状态激活的幻灯片的索引，从 0 开始
  initialIndex: {
    type: Number,
    default: 0
  },
  // 走马灯展示的方向
  direction: {
    type: definePropType<DirectionType>(String),
    default: 0
  }
} as const;
export type CalendarProps = ExtractPropTypes<typeof calendarProps>;
