import { defineComponent } from 'vue';
import { ResultProps, resultProps } from './result-type';

export default defineComponent({
  name: 'SResult',
  props: resultProps,
  setup(props: ResultProps) {
    return () => <div class="s-result">result</div>
  }
});
