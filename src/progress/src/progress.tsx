import { defineComponent } from 'vue';
import { ProgressProps, progressProps } from './progress-type';
import '../../index.scss';
import '../style/progress.scss';

export default defineComponent({
  name: 'SProgress',
  props: progressProps,
  setup(props: ProgressProps) {
    return () => <div class="s-progress">progress</div>
  }
});
