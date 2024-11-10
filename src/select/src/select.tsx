import { defineComponent } from 'vue';
import { SelectProps, selectProps } from './select-type';
import '../../index.scss';
import '../style/select.scss';

export default defineComponent({
  name: 'SSelect',
  props: selectProps,
  setup(props: SelectProps) {
    return () => <div class="s-select">select</div>
  }
});
