import { defineComponent } from 'vue';
import { SelectProps, selectProps } from './select-type';

export default defineComponent({
  name: 'SSelect',
  props: selectProps,
  setup(props: SelectProps) {
    return () => <div class="s-select">select</div>
  }
});
