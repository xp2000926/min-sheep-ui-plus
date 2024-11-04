import { ExtractPropTypes, PropType } from 'vue';
import { definePropType } from '../../utils';
export type Layout = 'horizontal' | 'vertical';

export const emptyProps = {
  image: {
    type: String,
    default: ''
  }, //自定义图片
  imageSize: {
    type: Number,
    default: 160
  }, //图片尺寸
  description: {
    type: String,
    default: '没有数据'
  },
  layout: {
    type: String as PropType<Layout>,
    default: ''
  }
} as const;
export type EmptyProps = ExtractPropTypes<typeof emptyProps>;
