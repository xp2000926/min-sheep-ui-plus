import { defineComponent } from 'vue';
import { ProgressProps, progressProps } from './progress-type';

export default defineComponent({
  name: 'SProgress',
  props: progressProps,
  setup(props: ProgressProps) {
    return () => <div class="s-progress">progress</div>
  }
});
