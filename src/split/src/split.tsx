import { defineComponent } from 'vue';
import { SplitProps, splitProps } from './split-type';
import '../../index.scss';
import '../style/split.scss';

export default defineComponent({
  name: 'SSplit',
  props: splitProps,
  setup(props: SplitProps) {
    return () => <div class="s-split">split</div>
  }
});
