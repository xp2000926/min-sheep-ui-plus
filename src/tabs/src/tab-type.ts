import { ExtractPropTypes } from 'vue';
import { definePropType } from '../../utils';

export type TabPositionType = 'top' | 'right' | 'bottom' | 'left';

export const tabProps = {
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  tabPosition: {
    type: definePropType<TabPositionType>(String),
    default: 'top'
  }
} as const;
export type TabProps = ExtractPropTypes<typeof tabProps>;
