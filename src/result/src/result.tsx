import { defineComponent } from 'vue';
import { ResultProps, resultProps } from './result-type';
import '../../index.scss';
import '../style/result.scss';

export default defineComponent({
  name: 'SResult',
  props: resultProps,
  setup(props: ResultProps) {
    return () => <div class="s-result">result</div>
  }
});
