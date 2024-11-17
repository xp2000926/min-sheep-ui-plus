import { defineComponent } from 'vue';
import { SplitProps, splitProps } from './split-type';


export default defineComponent({
  name: 'SSplit',
  props: splitProps,
  setup(props: SplitProps) {
    return () => <div class="s-split">split</div>
  }
});
