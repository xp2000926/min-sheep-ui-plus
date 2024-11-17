import { ExtractPropTypes } from 'vue';
import { definePropType } from '../../utils';

export type triggerType = 'hover' | 'click' | 'focus';

export const triggerProps = {
  trigger: {
    type: definePropType<triggerType>(String),
    default: 'hover'
  }
} as const;
export type TriggerProps = ExtractPropTypes<typeof triggerProps>;
