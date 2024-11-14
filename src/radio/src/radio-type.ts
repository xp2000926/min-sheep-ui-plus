import { ExtractPropTypes } from 'vue';

export const radioProps = {
  modelValue: {
    type: [String, Number],
    required: true
  },
  label: {
    type: [String, Number],
    required: true
  }
} as const;
export type RadioProps = ExtractPropTypes<typeof radioProps>;
