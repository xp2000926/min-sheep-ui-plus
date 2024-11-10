import { ExtractPropTypes } from 'vue';
import { definePropType } from '../../utils';
export type ButtonType =
  | ''
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'default';
export const badgeProps = {
  value: {
    type: [Number, String],
    default: 0
  },
  type: {
    type: definePropType<string | ButtonType>(String),
    default: ''
  },
  max: {
    type: Number,
    default: ''
  },
  isDot: {
    type: Boolean,
    default: false
  }
} as const;
export type BadgeProps = ExtractPropTypes<typeof badgeProps>;
